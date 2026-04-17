# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Start Expo development server
npm run android    # Run on Android device/emulator
npm run ios        # Run on iOS device/emulator
npm run web        # Run web version
npm test           # Run Jest tests in watch mode
npm run lint       # Run ESLint via expo lint
```

## Tech Stack

- **Expo ~51** (managed workflow) with **React Native 0.74** and **TypeScript 5.3** (strict mode)
- **Expo Router 3.5** — file-based routing, pages live under `src/app/`
- **NativeWind 4** — Tailwind CSS utility classes for React Native; global CSS entry at `src/styles/global.css`
- Static data only — no API calls, no state management library; all content served from `assets/data/*.json`

## Architecture

### Routing

Expo Router drives navigation via the `src/app/` directory:

```txt
src/app/
├── _layout.tsx              # Root Stack: 2 screens (index, content)
├── index.tsx                # Landing/presentation screen
└── content/
    ├── _layout.tsx          # Tabs layout (5 tabs)
    ├── (attested-sites)/    # Tab 1 — trusted sites list + dynamic [name].tsx detail page
    ├── help/                # Tab 2 — step-by-step guides
    ├── importance/          # Tab 3 — voting importance content
    ├── source/              # Tab 4 — data sources info
    └── (credits)/           # Tab 5 — credits + references stack
```

Dynamic route `content/(attested-sites)/help/[name].tsx` uses `useLocalSearchParams()` to resolve the site name.

### Components

Reusable components under `src/components/` (button, site-search-card, steps-to-search-card). All props are typed with interfaces. Import via `@components/*` alias.

### Data

Static JSON files under `assets/data/`:

- `sites.json` — 8 Brazilian political sites (name, institution, url, average-access)
- `steps-search.json` — per-site steps and tips (name must match site name)
- `importancia-voto.json` — 3 voting importance sections
- `references.json` — external credit links

### Styling

- NativeWind Tailwind classes for most styling
- Custom React Native StyleSheet shadows exported from `src/styles/boxShadow.ts`
- Primary color: `#173058`, secondary: `#767676`

## Path Aliases (tsconfig.json)

```txt
@components/*  →  src/components/*
@styles/*      →  src/styles/*
@assets/*      →  assets/*
@/*            →  src/*
```

## Commits

Commits seguem o **Conventional Commits** combinado com o **padrão de commits do iuri.codes** (emojis em formato GitHub `:emoji:`).

**Formato:** single line, imperative mood, in English, no co-authored trailer.

```txt
:emoji: type(scope?): short descriptive message
```

**Tipos e emojis:**

| Emoji | Code                      | Type       | When to use                      |
| ----- | ------------------------- | ---------- | -------------------------------- |
| 🎉    | `:tada:`                  | —          | Initial commit                   |
| ✨    | `:sparkles:`              | `feat`     | New feature                      |
| 🐛    | `:bug:`                   | `fix`      | Bug fix                          |
| 🚑    | `:ambulance:`             | `fix`      | Critical hotfix                  |
| 📝    | `:memo:` / `:books:`      | `docs`     | Documentation                    |
| 💄    | `:lipstick:`              | `style`    | UI / visual styling changes      |
| ♻️    | `:recycle:`               | `refactor` | Refactor without behavior change |
| ⚡    | `:zap:`                   | `perf`     | Performance improvement          |
| ✅    | `:white_check_mark:`      | `test`     | Adding or fixing tests           |
| 📦    | `:package:`               | `build`    | Build system changes             |
| 👷    | `:construction_worker:`   | `ci`       | CI/CD configuration              |
| 🔧    | `:wrench:`                | `chore`    | Maintenance (deps, config)       |
| ⬆️    | `:arrow_up:`              | `chore`    | Upgrade dependencies             |
| ⬇️    | `:arrow_down:`            | `chore`    | Downgrade dependencies           |
| 🔥    | `:fire:`                  | `chore`    | Remove code or files             |
| ⏪    | `:rewind:`                | `revert`   | Revert a commit                  |
| 🚧    | `:construction:`          | `wip`      | Work in progress                 |
| 💥    | `:boom:`                  | `feat`     | Breaking change                  |
| 🔒    | `:lock:`                  | `fix`      | Security fix                     |
| 🏗️    | `:building_construction:` | `refactor` | Architectural changes            |

**Examples:**

```txt
:sparkles: feat: add trusted sites search screen
:bug: fix: correct status bar color on landing screen
:wrench: chore: update dependencies
:books: docs: update README screenshots
:recycle: refactor: extract SiteSearchCard component
```

> `scope` is optional and narrows the affected area, e.g. `feat(navigation):`, `fix(card):`.

## Configuration Notes

- **Metro** is wrapped with `withNativeWind` pointing at `src/styles/global.css`
- **Babel** uses `jsxImportSource: "nativewind"` for NativeWind JSX transform
- **EAS** project ID: `3ddd1de2-c59f-48b0-9716-61d59ea24efe`; APK builds configured in `eas.json`
