# Allied Spare Solutions — Website

A fast, responsive website for **Allied Spare Solutions**, an industrial supply and sourcing company for OEM and quality equivalent spare parts.

Built with **React 19 + Vite + TypeScript + Tailwind CSS 4**, React Router and Lucide icons. Ready to deploy on **Vercel**.

---

## 1. Run it on your computer

You need **Node.js 20 or newer** (download from https://nodejs.org — choose the LTS version).

1. Unzip the project and open the folder in **Visual Studio Code** (File → Open Folder).
2. Open a terminal in VS Code (Terminal → New Terminal) and run:

   ```bash
   npm install
   npm run dev
   ```

3. Open the address shown in the terminal (usually http://localhost:5173).

Other commands:

| Command           | What it does                                    |
| ----------------- | ----------------------------------------------- |
| `npm run build`   | Type-checks and builds the production site into `dist/` |
| `npm run preview` | Serves the production build locally to test it  |

---

## 2. Deploy to Vercel

**Option A — via GitHub (recommended, auto-updates on every change)**

1. Create a free account at https://github.com and a new repository (e.g. `allied-spare-solutions`).
2. Upload the project files to it (drag and drop on GitHub works — do **not** upload `node_modules` or `dist`).
3. Sign in at https://vercel.com with your GitHub account → **Add New… → Project** → import the repository.
4. Vercel detects Vite automatically. Leave the defaults:
   - Build command: `npm run build`
   - Output directory: `dist`
5. Click **Deploy**. Your site will be live at `https://<project-name>.vercel.app` in about a minute.

**Option B — Vercel CLI**

```bash
npm i -g vercel
vercel        # first deploy (answers: link to new project, defaults are fine)
vercel --prod # publish to production
```

`vercel.json` already makes page links like `/products` and `/about` work when opened directly or refreshed.

### After you have your final domain

Replace `https://alliedsparesolutions.vercel.app` with your real address in:

- `src/config/site.ts` → `url`
- `index.html` (canonical, Open Graph and JSON-LD lines)
- `public/sitemap.xml` and `public/robots.txt`

Then submit `https://your-domain/sitemap.xml` in Google Search Console.

---

## 3. The quote form (RFQ)

The form works in two modes:

**Without any setup (default)** — when a visitor submits, their email app opens with a new message to `alliedsparesolutions@gmail.com`, already filled in with all the form details. The page clearly tells them to press *Send*, and offers WhatsApp and "copy text" alternatives. The site never pretends a request was sent. Browsers cannot attach files to emails automatically, so visitors are reminded to attach their file themselves.

**With a form service (recommended once live)** — requests are delivered straight to your inbox:

1. Create a free account at https://formspree.io and create a new form. Set the notification email to `alliedsparesolutions@gmail.com`.
2. Copy the form endpoint, e.g. `https://formspree.io/f/abcdwxyz`.
3. In Vercel: **Project → Settings → Environment Variables** → add
   `VITE_FORMSPREE_ENDPOINT` = `https://formspree.io/f/abcdwxyz` → then **redeploy**.
   (For local testing, copy `.env.example` to `.env` and paste it there.)

The form then sends directly, shows a real success or error message, and includes the attachment. Note: Formspree's free plan does not accept file uploads — attachments need a paid plan; otherwise ask buyers to email files. The endpoint is not a secret, but never put private API keys in this project — anything starting with `VITE_` is visible in the browser.

Other services that accept a simple POST (Getform, Basin, FormSubmit) also work — adjust `sendToFormService` in `src/lib/rfq.ts` if their response format differs.

---

## 4. What to edit

| To change…                               | Edit this file                                                  |
| ---------------------------------------- | --------------------------------------------------------------- |
| Email, phone, WhatsApp, contact person, domain | `src/config/site.ts`                                       |
| Menu items                               | `src/config/site.ts` → `navigation`                             |
| **Logo** in header/footer                | `src/components/Logo.tsx` (instructions at the top of the file) |
| Browser tab icon                         | `public/favicon.svg`, `public/apple-touch-icon.png`             |
| Social-share preview image               | `public/og-image.jpg` (1200 × 630)                              |
| **Products** (add / remove / edit)       | `src/data/products.ts`                                          |
| Product categories, category photos      | `src/data/categories.ts`                                        |
| **Images** (swap any photo)              | put the file in `src/assets/images/`, then update `src/data/images.ts` |
| Brands list                              | `src/data/brands.ts`                                            |
| Industries                               | `src/data/industries.ts`                                        |
| "Why choose us", ordering steps, export docs | `src/data/company.ts`                                       |
| **Colours and fonts**                    | `src/index.css` → the `@theme { … }` block at the top           |
| Page text                                | `src/pages/*.tsx` (Home, Products, Brands, Industries, About, RequestQuote) |
| Default page title / description for search engines | `index.html` and the `<Seo …>` line at the top of each page |

### Adding a real product photo

Product cards show a clean designed tile until you add a photo. To add one:

```ts
// top of src/data/products.ts
import skfBearing from '../assets/images/skf-spherical-bearing.webp'

// inside the right category list, use the object form:
{ name: 'Spherical roller bearings', description: 'For mill and crusher drives.', image: skfBearing, brand: 'SKF' },
```

Only add `brand` when you have confirmed it. Use photos you own or have permission to use (your own photos, supplier-approved images, or licensed stock). Landscape, ~1200 px wide, WebP or JPG under 250 KB is ideal.

---

## 5. Project structure

```
├─ index.html              # meta tags, Open Graph, structured data
├─ vercel.json             # SPA routing + asset caching for Vercel
├─ public/                 # favicon, og-image, robots.txt, sitemap.xml
└─ src/
   ├─ config/site.ts       # company details & navigation
   ├─ data/                # products, categories, brands, industries, images
   ├─ assets/images/       # photos (extracted from the company catalogue)
   ├─ components/          # Header, Footer, Logo, cards, shared UI, SEO
   ├─ lib/rfq.ts           # quote-form logic (email fallback / form service)
   ├─ pages/               # one file per page
   ├─ App.tsx              # routes
   └─ index.css            # theme colours, fonts, global styles
```

Pages: `/`, `/products` (filter with `?category=` and `?q=`), `/brands`, `/industries`, `/about`, `/request-quote` (`/contact` redirects there).

---

## 6. Content notes

- All products, categories, brands, industries, ordering steps and "why clients work with us" points come from the Allied Spare Solutions catalogue PDF. Products are presented as part groups **supplied on request**, with no invented prices, stock levels, part numbers or specifications.
- Brands are shown as **text only** (no logos), with a clear notice that they are trademarks of their owners and that no authorised distributorship or endorsement is implied.
- No founding year, certifications, client names, testimonials or statistics have been added. If you have verifiable ones, they can be added later.
- The photos were extracted from the catalogue PDF and are fairly low resolution. Replacing them with higher-resolution photos you own (especially the hero image `hero-logistics.webp`) will noticeably sharpen the site.
- Fonts (Archivo, IBM Plex Sans, IBM Plex Mono) are open-source and bundled locally — no external font requests.
