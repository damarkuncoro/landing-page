# Changelog

## [0.1.2] - 2026-03-02

### Fixed
- Changed URL validation format from `uri` to `uri-reference` in all schemas.
- This allows using relative paths (`/about`) and fragments (`#features`) in section configurations.
- Fixed `ButtonBase` to prevent custom attributes from leaking into the DOM.

## [0.1.1] - 2026-03-02

### Fixed
- Fixed critical stack overflow bug in `toJSON()` method of `defineLandingPage`.
- Corrected exported validation function names.

## [0.1.0] - 2026-03-02

- Rilis awal library config-driven landing page
- Skema JSON lengkap untuk section: hero, features, testimonials, pricing, cta, footer, stats, faq, header
- Validator konfigurasi berbasis Ajv dan helper untuk validasi per-section
- Renderer React dengan komponen dasar dan skin
- Build output CJS + ESM + deklarasi tipe
- Penambahan `.npmignore` dan metadata paket untuk publikasi npm
