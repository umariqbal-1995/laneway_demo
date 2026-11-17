# Laneway — redesign concept

A local, responsive redesign of https://laneway.edu.au/ with original website photography and a rebuilt visual system.

## Open
Double-click `index.html`, or run `python3 -m http.server 5173` in this directory and visit http://localhost:5173.

No installation or build step required. Files: index.html, styles.css, app.js, assets/, plus the two campus pages and their shared campus.css and campus.js files.

## Features
- Responsive mobile navigation
- 22 original qualifications with category filters, live search and accessible course dialogs
- Campus photography, learning approach, international student guidance and FAQ accordions
- Dedicated Sydney and Melbourne campus pages with location details, transport guidance and visit actions
- Gentle image zoom, entrance transitions and scroll reveals; reduced-motion support
- Keyboard focus states, skip link and semantic HTML

Course details, applications, campus details, policies, contact and student login intentionally link to Laneway's existing official services. This is a redesigned front-end experience, not a copy of its WordPress backend or admissions system. No information is collected locally. Google Fonts requires internet access; system font fallbacks are supplied.

Content and images sourced from Laneway's public website on 17 November 2026. Brand and asset rights remain with their respective owners. Verify course availability and current details with Laneway before production use.

Course tile backgrounds: category-specific photographs downloaded from Unsplash, with CSS blur and dark overlays.

Hero carousel: four images, 6.5-second automatic playback, crossfade transitions, manual controls and pause/play. Automatic playback starts disabled for reduced-motion users. Additional collaboration and learning photographs are illustrative Unsplash images, not claimed to depict Laneway students.
