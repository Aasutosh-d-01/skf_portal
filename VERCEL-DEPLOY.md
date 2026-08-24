# Shah Kripa Fragrances — Vercel deployment

This package is the database-free Vercel edition of the SKF website. It preserves the catalogue, product pages, HD imagery, campaign videos, animations, local bag, wishlist, comparison tools, fragrance quiz, custom trio builder and Instagram ordering.

## Deploy

1. Extract this ZIP.
2. Upload the extracted folder to a GitHub repository using GitHub Desktop or Git.
3. In Vercel, choose **Add New → Project** and import that repository.
4. Keep **Framework Preset: Next.js** and **Root Directory: `./`**.
5. Do not add a database URL and do not override the build command.
6. Click **Deploy**.

Vercel will run `npm install` followed by `npm run build`. No database migration is used.

## Connect the domain

After deployment, open **Project → Settings → Domains**, add `www.skfragrances.in`, and create the DNS records Vercel displays. Add `skfragrances.in` as well if you want the bare domain to redirect to `www.skfragrances.in`.

## Updating products

Product names, prices, Amazon links and availability are stored in `lib/catalog.ts`. Edit that file, commit and push; Vercel will redeploy automatically.

Individual Instagram orders are prepared entirely in the customer’s browser and do not store customer data on the website.
