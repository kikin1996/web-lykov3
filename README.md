# Luční Háj - Real Estate Frontend Application

Moderní webová aplikace pro realitní projekt "Luční Háj" - rezidenční bytový komplex se 4 patry a 4 byty na každém patře.

## Technologie

- **Next.js 14** - React framework s App Router
- **React 18** - UI framework
- **Tailwind CSS** - Styling
- **React Helmet Async** - SEO meta tagy

## Instalace

```bash
npm install
```

## Spuštění vývojového serveru

```bash
npm run dev
```

Aplikace poběží na `http://localhost:3001`

## Build pro produkci

```bash
npm run build
```

Statické soubory budou v `out/` složce (pokud je povolen `output: 'export'` v `next.config.js`).

## Stagewise (VS Code + CLI)

- V editoru VS Code nainstalujte rozšíření `stagewise.stagewise-vscode-extension` (viz doporučení v `.vscode/extensions.json`).
- Spusťte vývojový server: `npm run dev`.
- V druhém terminálu v kořeni projektu spusťte Stagewise nástroj: `npm run stagewise` (alias pro `npx stagewise@latest`).
- Následujte průvodce v CLI, který propojí vaši relaci s prohlížečem a AI agentem (funguje i s Cursor/GitHub Copilot).
- Po načtení stránky se zobrazí lišta Stagewise – klikněte na prvek, zadejte požadavek a nechte agenta změny propsat do kódu.

## Struktura projektu

```
app/                    # Next.js App Router stránky
├── layout.jsx          # Root layout
├── page.jsx           # Domovská stránka (/)
├── galerie/           # Galerie stránka
├── kontakt/           # Kontakt stránka
├── aktuality/         # Aktuality stránka
├── standardy/         # Standardy stránka
└── vyber-domu/        # Výběr domu stránka

src/
├── components/        # React komponenty
│   ├── apartment/    # Komponenty pro detaily bytů
│   ├── floor/        # Komponenty pro patra
│   ├── gallery/      # Komponenty galerie
│   ├── home/         # Komponenty domovské stránky
│   ├── layout/       # Layout komponenty (Header, Footer)
│   └── shared/       # Sdílené komponenty (Button, Modal, Input, atd.)
├── context/          # React Context pro globální state
├── data/             # Mock data
└── services/         # API služby (mock)
```

## Stránky

- `/` - Domovská stránka
- `/galerie` - Fotogalerie
- `/kontakt` - Kontakt
- `/aktuality` - Aktuality a průběh výstavby
- `/standardy` - Standardy bydlení
- `/vyber-domu` - Výběr domu a bytů

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
- ✅ SEO optimalizace (SSR/SSG)
- ✅ Automatická optimalizace obrázků

## Environment Variables

Pro Google Maps API klíč vytvořte `.env.local` soubor:

```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
```

## Poznámky

- Aplikace používá mock data pro simulaci API
- Obrázky jsou v `public/images/` složce
- Formuláře simulují odesílání (data se logují do konzole)
- Next.js používá App Router (Next.js 13+)
