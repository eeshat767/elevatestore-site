<<<<<<< HEAD
# elevatestore-site
An ecommerce shoe store
# elevatestore — Makurdi

Simple storefront for selling shoes (Men, Women, Children, Unisex) tailored for Makurdi.

How to run
- Open `index.html` in your browser by double-clicking it, or start a simple server from the project folder:

```powershell
# from PowerShell
cd "C:\Users\AISHA\OneDrive\Documents\elevatestore site"
python -m http.server 3000
# then open http://localhost:3000/
```

Notes
- This is a lightweight demo; product data and cart logic are in `scripts.js`.
- Cart persists to `localStorage` as `elevate_cart`.

Product images
- The demo uses royalty-free photos from Unsplash as placeholders. To use your own product photos, place files in the `images/` folder and update the product `img` fields in `scripts.js` to the relative path (e.g., `images/m-snk-01.jpg`).

Pages
- `index.html`, `products.html`, `product.html` (single page for all products via `?id=`), `cart.html`, `checkout.html`, `categories.html`, `collections.html`, and others.

Database
- A SQLite schema is included in `schema.sql`. To create and seed a local SQLite file run:

```powershell
cd "C:\Users\AISHA\OneDrive\Documents\elevatestore site"
python init_db.py
# This creates `elevatestore.db` in the project root and seeds sample products and a demo user
```

Next steps you might want me to do
- Convert to a React project (Vite) with a proper build and image pipeline.
- Add an admin UI to manage products.
- Integrate payments and delivery options.
# This creates `elevatestore.db` in the project root and seeds sample products and a demo user
