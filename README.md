# Ecohau Riverside - Real Estate Frontend Application

Moderní webová aplikace pro realitní projekt "Ecohau Riverside" - rezidenční bytový komplex se 4 patry a 4 byty na každém patře.

## Technologie

- **React 18** - UI framework
- **React Router v6** - Routing
- **Tailwind CSS** - Styling
- **Vite** - Build tool

## Instalace

```bash
npm install
```

## Spuštění vývojového serveru

```bash
npm run dev
```

Aplikace poběží na `http://localhost:5173`

## Build pro produkci

```bash
npm run build
```

## Struktura projektu

```
src/
├── components/          # React komponenty
│   ├── apartment/      # Komponenty pro detaily bytů
│   ├── floor/          # Komponenty pro patra
│   ├── gallery/        # Komponenty galerie
│   ├── home/           # Komponenty domovské stránky
│   ├── layout/         # Layout komponenty (Header, Footer, Breadcrumbs)
│   └── shared/         # Sdílené komponenty (Button, Modal, Input, atd.)
├── context/            # React Context pro globální state
├── data/               # Mock data
├── pages/              # Stránky aplikace
├── services/           # API služby (mock)
└── App.jsx             # Hlavní komponenta
```

## Stránky

- `/` - Domovská stránka
- `/patro/:floorId` - Detail patra
- `/byt/:floorId/:apartmentId` - Detail bytu
- `/galerie` - Fotogalerie
- `/o-projektu` - O projektu
- `/o-nas` - O nás
- `/kontakt` - Kontakt

## Design System

Aplikace používá design systém definovaný v `design.json` s následujícími barvami:
- Primary Teal: #00D9B5
- Dark Navy: #1E2738
- Neutral grays a whites

## Funkce

- ✅ Interaktivní výběr pater a bytů
- ✅ Detailní zobrazení bytů s půdorysy
- ✅ Fotogalerie s lightboxem
- ✅ Kontaktní formuláře
- ✅ Responzivní design
- ✅ Český jazyk

## Poznámky

- Aplikace používá mock data pro simulaci API
- Obrázky jsou placeholder - nahraďte skutečnými obrázky v `public/images/`
- Formuláře simulují odesílání (data se logují do konzole)

