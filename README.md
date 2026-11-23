# TECHNOVA STORE – Electronics & Mobile Showroom Demo

**Smart Technology. Better Living.**

A premium, responsive single-page website for a **fictional** electronics and mobile retailer based in Sangli, Maharashtra. It is a product catalogue and lead-generation demo, not an online checkout.

Built with plain **HTML5, CSS3 and vanilla JavaScript**, Font Awesome (CDN), Google Fonts (Manrope + Inter) and Unsplash photography. No frameworks, no build step and no backend. Open `index.html` in a browser to run it.

> ⚠️ **Demo content notice**
> All brand details, product listings, specifications, prices, colours, testimonials and contact information are **demonstration placeholders**. TECHNOVA STORE is a fictional company. Products and specifications are not manufacturer listings, and prices are not current market prices. Testimonials are sample text, not genuine customer reviews. Brand names in the "Brands" strip are examples only and do not imply dealership, partnership or stock. Photos are from Unsplash.

## Structure

```
technova-store/
├── index.html        # All sections and markup
├── css/style.css     # Design tokens (CSS variables), layout, responsive rules
├── js/script.js      # Product data + all interactions
└── assets/images/    # Favicon (add client photos/logo here)
```

## Features

- Rotating announcement bar, sticky header, active navigation state, hamburger drawer on mobile/tablet
- Header search that searches the catalogue
- Shop-by-category cards that filter the catalogue
- Product catalogue (17 sample products) with search, category chips, price range, sorting and Clear Filters, plus a helpful empty state
- Product details modal (image, description, sample specs, sample colours, Enquire Now, WhatsApp); closes with ✕, backdrop or Esc, and traps focus
- WhatsApp enquiry links prefilled with the product name, category and price
- "Enquire Now" prefills the enquiry form with category, product and budget
- Latest technology editorial grid, budget banner shortcuts, accessories collection
- Testimonial carousel (arrows, dots, autoplay, swipe, pauses on hover/focus)
- FAQ accordion, scroll-reveal animations, back-to-top button
- Enquiry form validation: required fields, Indian mobile format (10 digits starting 6–9, optional +91/0), email format, success message
- SEO: title, meta description, Open Graph, semantic sections and heading order, alt text, `ElectronicsStore` JSON-LD clearly marked as demo

Forms are frontend-only. **Nothing is sent or stored.**

## Replace before a real client launch

| What | Where |
|---|---|
| WhatsApp number | `js/script.js` → `WHATSAPP_NUMBER` (empty in the demo, so WhatsApp lets the visitor pick a chat) |
| Products, prices, specs, colours, images | `js/script.js` → `PRODUCTS` array |
| Phone, email, address, business hours | `index.html` → Showroom, Contact and footer placeholders |
| Google Map | `index.html` → `.map iframe` `src` |
| Social profile URLs | `index.html` → footer `.socials` (remove `js-placeholder` class) |
| Testimonials | `index.html` → `#testimonials` (use real, consented reviews only) |
| Brands strip | `index.html` → `.brands` (only show brands you are permitted to display) |
| Structured data | `index.html` `<head>` JSON-LD (add verified phone, street address, URL) |
| Canonical / Open Graph URL and image | `index.html` `<head>` |
| Form handling | `js/script.js` → enquiry form submit handler (connect to a form service or CRM) |

Colours and fonts are CSS variables at the top of `css/style.css`.

© 2026 TECHNOVA STORE (fictional). Demo project.
