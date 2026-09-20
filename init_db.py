#!/usr/bin/env python
import sqlite3
import json
import os

DB_PATH = 'elevatestore.db'
SCHEMA = 'schema.sql'

PRODUCTS = [
    { 'id': 'm-snk-01', 'name': 'Apex Runner', 'gender': 'Male', 'type': 'Sneakers', 'brand': 'StrideX', 'collection': 'Urban Run', 'price': 12000, 'sizes': [7,8,9,10,11,12], 'colors':['Black','White','Blue'], 'img':'images/m-snk-01.jpg' },
    { 'id': 'f-snk-01', 'name': 'Apex Glide', 'gender': 'Female', 'type': 'Sneakers', 'brand': 'StrideX', 'collection': 'Urban Run', 'price': 11500, 'sizes':[4,5,6,7,8,9], 'colors':['Pink','White','Black'], 'img':'images/f-snk-01.jpg' },
    { 'id': 'u-sand-01', 'name': 'Lagoon Sandal', 'gender': 'Unisex', 'type': 'Sandals', 'brand': 'Coastline', 'collection': 'Summer', 'price': 4500, 'sizes':[5,6,7,8,9,10,11], 'colors':['Tan','Black','Navy'], 'img':'images/u-sand-01.jpg' },
    { 'id': 'c-sport-01', 'name': 'Tiny Stride', 'gender': 'Children', 'type': 'Sports', 'brand': 'KiddoKicks', 'collection': 'Play', 'price': 3500, 'sizes':[1,2,3,4,5], 'colors':['Red','Blue','Green'], 'img':'images/c-sport-01.jpg' },
    { 'id': 'm-boot-01', 'name': 'Trail Master', 'gender': 'Male', 'type': 'Boots', 'brand': 'Highland', 'collection': 'Outdoors', 'price': 18000, 'sizes':[8,9,10,11,12,13], 'colors':['Brown','Black'], 'img':'images/m-boot-01.jpg' },
    { 'id': 'f-formal-01', 'name': 'Elegance Heel', 'gender': 'Female', 'type': 'Formal', 'brand': 'Silhouette', 'collection': 'Office', 'price': 14000, 'sizes':[4,5,6,7,8,9], 'colors':['Black','Beige'], 'img':'images/f-formal-01.jpg' }
]

def run_script(conn, path):
    with open(path, 'r', encoding='utf-8') as f:
        sql = f.read()
    conn.executescript(sql)

def seed(conn):
    cur = conn.cursor()
    # insert brands and collections deduplicated
    brands = {}
    collections = {}
    for p in PRODUCTS:
        b = p['brand']
        c = p['collection']
        if b not in brands:
            cur.execute('INSERT INTO brands(name, slug) VALUES(?,?)', (b, b.lower().replace(' ','-')))
            brands[b] = cur.lastrowid
        if c not in collections:
            cur.execute('INSERT INTO collections(name, slug) VALUES(?,?)', (c, c.lower().replace(' ','-')))
            collections[c] = cur.lastrowid

    # insert products and variants and images
    for p in PRODUCTS:
        brand_id = brands[p['brand']]
        collection_id = collections[p['collection']]
        sku = p['id']
        cur.execute('INSERT INTO products(sku,name,slug,description,brand_id,collection_id,type,gender,price) VALUES(?,?,?,?,?,?,?,?,?)', (
            sku, p['name'], sku.replace('_','-'), p.get('description',''), brand_id, collection_id, p['type'], p['gender'], p['price']
        ))
        product_id = cur.lastrowid
        # add variants (size-color combos)
        for size in p['sizes']:
            for color in p['colors']:
                variant_sku = f"{sku}-{size}-{color}"
                cur.execute('INSERT INTO product_variants(product_id,sku,size,color,price,inventory) VALUES(?,?,?,?,?,?)', (
                    product_id, variant_sku, str(size), color, p['price'], 10
                ))
        # images
        if p.get('img') and os.path.exists(p['img']):
            cur.execute('INSERT INTO product_images(product_id,url,alt_text,is_primary) VALUES(?,?,?,1)', (product_id, p['img'], p['name']))
        else:
            cur.execute('INSERT INTO product_images(product_id,url,alt_text,is_primary) VALUES(?,?,?,1)', (product_id, p.get('img',''), p['name']))

    # create a sample user
    cur.execute('INSERT INTO users(email,name,phone,is_guest) VALUES(?,?,?,0)', ('demo@elevate.local','Demo User','08000000000'))
    conn.commit()
    print('Seeded database with sample data')

def main():
    if os.path.exists(DB_PATH):
        print(f'Removing existing {DB_PATH}')
        os.remove(DB_PATH)
    conn = sqlite3.connect(DB_PATH)
    run_script(conn, SCHEMA)
    seed(conn)
    conn.close()
    print('Created', DB_PATH)

if __name__ == '__main__':
    main()
