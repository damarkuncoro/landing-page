# Changelog

## [0.1.3] - 2026-03-03

### Added
- Added `typography` property to theme configuration with support for h1, h2, h3, body, and small font sizes.
- Added `fontWeights` property to theme configuration with support for normal, medium, and bold font weights (accepting both string and number types).
- Added `sizes` property to theme configuration with support for subtitleMaxWidth and containerMaxWidth.
- Updated theme schema to include all new properties.
- Improved type definitions to accept both string and number values for font weights.
- Updated examples to use consistent numeric values for font weights.

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
