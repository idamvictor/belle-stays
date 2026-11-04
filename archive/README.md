# Archive

Retired site assets, kept so they can be restored. This folder is outside `public/`, so nothing here is served on the live site.

File names follow `<date retired>_<what it was>_from-<original path>.<ext>`.

| File | Original path | How it was used | Retired |
| --- | --- | --- | --- |
| `images/hero/2026-11-04_hero-building-cutout-tower-trees_from-public-images-hero-building.png` | `public/images/hero/building.png` | Hero foreground: a tall glass tower among trees (1920×1581, transparent sky), drawn in front of the "BELLE STAYS" wordmark in `src/components/sections/hero.tsx` | 2026-11-04, replaced by `public/images/hero/building-render.png` |
| `images/hero/2026-11-04_hero-building-cutout-garden-render_from-public-images-hero-building-render.png` | `public/images/hero/building-render.png` | Hero foreground: a four-storey building on a garden island (1107×903, transparent background), drawn in front of the wordmark. Original: `assets/hero/building-render-source.png` | 2026-11-04, replaced by the full-bleed photo `public/images/hero/home-houses.jpg` |
| `images/hero/2026-11-04_hero-sky-background_from-public-images-hero-sky.jpg` | `public/images/hero/sky.jpg` | Hero background: the sky behind the wordmark and the building cut-outs (1920×1834) | 2026-11-04, no longer needed once the hero became a full-bleed photo |
| `images/hero/2026-11-04_hero-background-houses-low-res_from-public-images-hero-home-houses.jpg` | `public/images/hero/home-houses.jpg` | Full-bleed hero background: two modern houses, upscaled from a 612×408 original (`assets/hero/home-houses-source.png`) | 2026-11-04, replaced by the enhanced 1536×1024 version `public/images/hero/home-houses-hd.jpg` |
| `images/hero/2026-11-04_hero-video-card-cover-tower-sunset_from-public-images-hero-video-cover.jpg` | `public/images/hero/video-cover.jpg` | Photo on the hero's right-hand card (`src/components/sections/hero-video.tsx`) and the social-share image (`openGraph.images` in `src/app/layout.tsx`) | 2026-11-04, replaced by `public/images/hero/building-exterior.jpg` |
| `images/hero/2026-11-04_hero-video-card-cover-building-exterior_from-public-images-hero-building-exterior.jpg` | `public/images/hero/building-exterior.jpg` | Photo on the hero's right-hand card (`src/components/sections/hero-video.tsx`) and the social-share image. Original: `assets/hero/building-exterior-source.png` | 2026-11-04, replaced by the timber lodge and patio photo `public/images/hero/lodge-patio.jpg` (original: `assets/hero/lodge-patio-source.png`) |

## Restoring

1. Copy the file back to its original path.
2. Point `src/components/sections/hero.tsx` at it, with the right `width` and `height`. The earlier hero layout is in git history: run `git log -- src/components/sections/hero.tsx`.

The original of the current hero building is kept at `assets/hero/building-render-source.png`. The site copy has its empty margins trimmed and stray near-transparent edge pixels cleared.
