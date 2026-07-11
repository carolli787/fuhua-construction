# Wei Construction — Website Starter

## File Overview

```
/construction-site
  index.html    ← Page structure & all sections
  style.css     ← All styling & colors
  script.js     ← Language toggle + quote form stub
  /images       ← Put your photos here
  README.md     ← This file
```

---

## How to Customize

### 1. Change Your Name / Info
- Open `index.html` and find any text that says "David Wei", "david@weiconstruction.com", or "MD-XXXXXXX"
- Replace with your real name, email, and license number
- Do the same in `script.js` inside the `translations` object (both `en` and `zh` sections)

### 2. Add Your Photos
- Add your photos to the `/images` folder
- In `index.html`, find the `<div class="img-placeholder-box">` tags
- Replace each one with an `<img>` tag, e.g.:
  ```html
  <img src="images/kitchen-before.jpg" alt="Kitchen before renovation" />
  ```

### 3. Edit Services & Testimonials
- Open `script.js`
- Find the `translations.en` and `translations.zh` objects
- Edit the `service_X_title`, `service_X_desc`, and `t1_quote` etc. keys with your real content

### 4. Change Colors
- Open `style.css`
- At the top, find the `:root { }` block
- `--amber` is the main accent color (currently orange/gold)
- `--coal` is the dark background
- Change these hex values to match your preferred palette

---

## Adding Your Backend (Quote Form)

When you're ready to wire up the quote form:

1. Build an API endpoint (e.g. `POST /api/quote`) in your backend (Node.js, Python, etc.)
2. Open `script.js`
3. Find the `handleQuoteSubmit` function
4. Uncomment the `fetch()` block and point it at your API URL

---

## Deploying to Netlify (Free)

1. Go to https://netlify.com and create a free account
2. Click "Add new site" → "Deploy manually"
3. Drag your entire project folder into the upload box
4. Done — you'll get a live URL like `https://random-name.netlify.app`
5. To use a custom domain, go to Site Settings → Domain Management

---

## Deploying to GitHub Pages (Also Free)

1. Create a GitHub account at https://github.com
2. Create a new repository named `your-username.github.io`
3. Upload all your files to that repo
4. Go to Settings → Pages → set source to "main" branch
5. Your site will be live at `https://your-username.github.io`
