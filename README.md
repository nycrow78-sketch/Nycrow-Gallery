# Poppy & Pearl Jewellery Store Template

## Description

Poppy & Pearl is a cheerful, responsive storefront template for an independent handmade jewellery brand. Its colorful, playful design pairs product photography and lively typography with the essentials of a small online shop: browsable collections, product details, customer reviews, a shopping cart, and a newsletter signup. The template uses plain HTML, CSS, and JavaScript and can be previewed without a build step.

## Template creator and distributor

This free HTML template was created and distributed by [TemplatesJungle.com](https://TemplatesJungle.com).

## Technical description

The storefront is implemented with semantic HTML, a standalone CSS stylesheet, and plain browser-side JavaScript. It has no framework, package manager, compilation step, or server-side requirements; open `index.html` directly in a modern browser to run it.

The page uses separate home, shop, product-detail, and cart sections as client-side views. The JavaScript toggles the active view and builds product cards, product details, reviews, related items, and cart contents from the `PRODUCTS` and `REVIEW_POOL` data arrays. Category filtering, price sorting, quantity controls, cart totals, shipping thresholds, toast messages, and newsletter feedback are handled in the browser. Cart and filter state are held in JavaScript memory and reset when the page reloads.

The CSS defines the color palette with custom properties and includes responsive layouts for tablet and mobile breakpoints, plus a reduced-motion preference for the animated hero artwork. Product photography is loaded from local files in `images/`. The Baloo 2 and Quicksand typefaces are loaded from Google Fonts, so those fonts require an internet connection; fallback font families are specified.

This is a front-end demonstration, not a connected commerce system: it has no product API, persistent cart, newsletter service, payment processing, or order submission. Connect those features to suitable services before using the template for live sales.

## Storefront sections

- **Home:** brand introduction, featured products, categories, customer reviews, social gallery, and newsletter signup.
- **Shop:** product collection with category filters for earrings, necklaces, and rings, plus price sorting.
- **Product details:** product information, quantity controls, reviews, and related items.
- **Cart:** quantity updates, item removal, shipping calculation, and a demo checkout action.
- **Footer:** store summary, shopping links, help links, and social links.

## Files and setup

- `index.html` contains the page markup and links the storefront assets.
- `css/styles.css` contains the responsive layout, color palette, and visual styles.
- `js/store.js` contains demo product data and storefront interactions.
- `images/` holds the storefront imagery. The product data expects `p1.jpg` through `p15.jpg` and `empty-cart.jpg` in this folder; replace these paths or add matching images when preparing the store.

Open `index.html` in a browser to preview the template. Google Fonts are loaded remotely, so the custom typefaces require an internet connection.

## Customization

- Update the `PRODUCTS` array in `js/store.js` to change product names, descriptions, prices, materials, categories, and image paths.
- Adjust the color variables in the `:root` block in `css/styles.css` to change the storefront palette.
- Replace the sample brand copy, reviews, social links, and newsletter behavior with your store's own content and services.

The cart and checkout are front-end demonstrations only; connect them to an ecommerce platform or payment service before accepting orders.