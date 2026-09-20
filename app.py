from flask import Flask, request, jsonify, send_from_directory, abort
import sqlite3
import os
from werkzeug.utils import secure_filename

BASE_DIR = os.path.dirname(__file__)
DB_PATH = os.path.join(BASE_DIR, 'elevatestore.db')
IMAGES_DIR = os.path.join(BASE_DIR, 'images')
ALLOWED_EXT = {'png','jpg','jpeg','gif','svg'}

app = Flask(__name__, static_folder=BASE_DIR, static_url_path='')

def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.',1)[1].lower() in ALLOWED_EXT

@app.route('/api/products', methods=['GET'])
def api_products():
    conn = get_db()
    cur = conn.cursor()
    cur.execute('SELECT p.id,p.sku,p.name,p.description,p.type,p.gender,p.price,b.name as brand,c.name as collection FROM products p LEFT JOIN brands b ON b.id=p.brand_id LEFT JOIN collections c ON c.id=p.collection_id')
    rows = [dict(r) for r in cur.fetchall()]
    conn.close()
    return jsonify(rows)

@app.route('/api/product/<int:pid>', methods=['GET'])
def api_product(pid):
    conn = get_db()
    cur = conn.cursor()
    cur.execute('SELECT * FROM products WHERE id=?', (pid,))
    prod = cur.fetchone()
    if not prod:
        conn.close(); abort(404)
    prod = dict(prod)
    # variants
    cur.execute('SELECT * FROM product_variants WHERE product_id=?', (pid,))
    prod['variants'] = [dict(r) for r in cur.fetchall()]
    cur.execute('SELECT * FROM product_images WHERE product_id=? ORDER BY position', (pid,))
    prod['images'] = [dict(r) for r in cur.fetchall()]
    conn.close()
    return jsonify(prod)

@app.route('/api/product', methods=['POST'])
def api_product_create():
    data = request.form
    name = data.get('name')
    sku = data.get('sku') or data.get('id')
    brand = data.get('brand')
    collection = data.get('collection')
    ptype = data.get('type')
    gender = data.get('gender')
    price = float(data.get('price') or 0)
    description = data.get('description') or ''
    sizes = [s.strip() for s in (data.get('sizes') or '').split(',') if s.strip()]
    colors = [c.strip() for c in (data.get('colors') or '').split(',') if c.strip()]

    conn = get_db(); cur = conn.cursor()
    # ensure brand
    brand_id = None
    if brand:
        cur.execute('SELECT id FROM brands WHERE name=?', (brand,))
        row = cur.fetchone()
        if row: brand_id = row['id']
        else:
            cur.execute('INSERT INTO brands(name,slug) VALUES(?,?)', (brand, brand.lower().replace(' ','-')))
            brand_id = cur.lastrowid
    # ensure collection
    collection_id = None
    if collection:
        cur.execute('SELECT id FROM collections WHERE name=?', (collection,))
        row = cur.fetchone()
        if row: collection_id = row['id']
        else:
            cur.execute('INSERT INTO collections(name,slug) VALUES(?,?)', (collection, collection.lower().replace(' ','-')))
            collection_id = cur.lastrowid

    cur.execute('INSERT INTO products(sku,name,slug,description,brand_id,collection_id,type,gender,price) VALUES(?,?,?,?,?,?,?,?,?)', (
        sku, name, (sku or name).lower().replace(' ','-'), description, brand_id, collection_id, ptype, gender, price
    ))
    pid = cur.lastrowid
    # variants
    for size in sizes:
        for color in colors or ['Default']:
            variant_sku = f"{sku}-{size}-{color}"
            cur.execute('INSERT INTO product_variants(product_id,sku,size,color,price,inventory) VALUES(?,?,?,?,?,?)', (pid, variant_sku, size, color, price, 0))

    # handle file upload
    if 'image' in request.files:
        f = request.files['image']
        if f and allowed_file(f.filename):
            fn = secure_filename(f.filename)
            dest = os.path.join(IMAGES_DIR, fn)
            f.save(dest)
            cur.execute('INSERT INTO product_images(product_id,url,alt_text,is_primary) VALUES(?,?,?,1)', (pid, os.path.join('images',fn), name))

    conn.commit(); conn.close()
    return jsonify({'ok':True,'id':pid}), 201

@app.route('/api/product/<int:pid>', methods=['PUT'])
def api_product_update(pid):
    data = request.form
    conn = get_db(); cur = conn.cursor()
    cur.execute('SELECT * FROM products WHERE id=?', (pid,))
    if not cur.fetchone(): conn.close(); abort(404)
    fields = []
    params = []
    for key in ('name','description','type','gender'):
        if key in data:
            fields.append(f"{key}=?"); params.append(data.get(key))
    if 'price' in data:
        fields.append('price=?'); params.append(float(data.get('price') or 0))
    if 'brand' in data:
        b = data.get('brand')
        cur.execute('SELECT id FROM brands WHERE name=?',(b,)); r=cur.fetchone()
        if r: bid=r['id']
        else: cur.execute('INSERT INTO brands(name,slug) VALUES(?,?)',(b,b.lower().replace(' ','-'))); bid=cur.lastrowid
        fields.append('brand_id=?'); params.append(bid)
    if 'collection' in data:
        c = data.get('collection')
        cur.execute('SELECT id FROM collections WHERE name=?',(c,)); r=cur.fetchone()
        if r: cid=r['id']
        else: cur.execute('INSERT INTO collections(name,slug) VALUES(?,?)',(c,c.lower().replace(' ','-'))); cid=cur.lastrowid
        fields.append('collection_id=?'); params.append(cid)

    if fields:
        params.append(pid)
        cur.execute(f"UPDATE products SET {','.join(fields)} WHERE id=?", params)

    # image update
    if 'image' in request.files:
        f = request.files['image']
        if f and allowed_file(f.filename):
            fn = secure_filename(f.filename)
            dest = os.path.join(IMAGES_DIR, fn)
            f.save(dest)
            cur.execute('INSERT INTO product_images(product_id,url,alt_text,is_primary) VALUES(?,?,?,1)', (pid, os.path.join('images',fn), data.get('name') or ''))

    conn.commit(); conn.close()
    return jsonify({'ok':True})

@app.route('/images/<path:fn>')
def images(fn):
    return send_from_directory(IMAGES_DIR, fn)

if __name__ == '__main__':
    app.run(port=5000, debug=True)
