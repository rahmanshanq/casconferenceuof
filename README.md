# Central Asian Studies Conference 2026

**Voices through Art & Culture: Identity Formation in Central Asia, from Music to Architecture**

The official website for the inaugural Central Asian Studies Conference at the University of Chicago, April 17–18, 2026. Organized by the Central Asian Studies Society.

**Live site:** [casconferenceuofc.com](https://casconferenceuofc.com)

## Tech Stack

- [SvelteKit 5](https://svelte.dev/) — framework with component-based architecture
- [Tailwind CSS 3](https://tailwindcss.com/) — utility-first styling
- [Cloudflare Pages](https://pages.cloudflare.com/) — hosting & deployment

## Project Structure

```
svelte/
├── src/
│   ├── app.css                    # Global styles & Tailwind imports
│   ├── app.html                   # HTML shell with Google Fonts
│   ├── routes/
│   │   ├── +layout.svelte         # Root layout with artwork background
│   │   └── +page.svelte           # Main page composing all sections
│   └── lib/components/
│       ├── Nav.svelte             # Fixed navigation with mobile menu
│       ├── Hero.svelte            # Hero with countdown timer
│       ├── About.svelte           # Conference description
│       ├── Speakers.svelte        # Keynote speaker cards
│       ├── Schedule.svelte        # Two-day program with tab switching
│       ├── Registration.svelte    # Embedded Google Form
│       ├── HydeParkGuide.svelte   # Campus guide link
│       ├── Festival.svelte        # Music festival details
│       ├── Committee.svelte       # Organizing committee
│       ├── Sponsors.svelte        # Sponsor logos
│       └── Footer.svelte          # Attribution & credits
├── static/img/                    # Images, logos, speaker photos
├── tailwind.config.js             # Custom theme colors & fonts
├── svelte.config.js               # SvelteKit + Cloudflare adapter
└── wrangler.toml                  # Cloudflare deployment config
```

## Development

```bash
pnpm install
pnpm run dev
```

## Build & Deploy

```bash
pnpm run build
npx wrangler pages deploy build
```

## Design

- **Fonts:** Playfair Display (headings), Newsreader (body)
- **Colors:** Dark olive green, terracotta, UChicago maroon, cream
- **Background:** Karina Gimalova's "Harmony" painting as a fixed full-page backdrop
