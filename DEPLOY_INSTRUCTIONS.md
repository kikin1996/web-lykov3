# Instrukce pro nahrání webu na FTP server

## 1. Uložení přihlašovacích údajů a API klíčů

Vytvořte soubor `.env.local` v kořenovém adresáři projektu s následujícím obsahem:

```
# FTP přístupové údaje
FTP_HOST=ftp.domypecerady.cz
FTP_PORT=21
FTP_USER=kopka@domypecerady.cz
FTP_PASSWORD=VAŠE_FTP_HESLO_ZDE
FTP_REMOTE_DIR=web_7

# Google Maps API klíč (pro zobrazení mapy)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=VAŠE_GOOGLE_MAPS_API_KEY_ZDE

# Resend.com API klíč (pro odesílání emailů z kontaktního formuláře)
RESEND_API_KEY=VAŠE_RESEND_API_KEY_ZDE

# Volitelné: Testovací email pro Resend (pokud ještě nemáte ověřenou doménu)
RESEND_TEST_EMAIL=kristian.karas22@gmail.com
```

**Důležité:** 
- Soubor `.env.local` je již v `.gitignore`, takže nebude commitován do gitu
- Doplňte všechny hodnoty svými skutečnými údaji:
  - `FTP_PASSWORD` - heslo k FTP serveru
  - `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` - API klíč z Google Cloud Console
  - `RESEND_API_KEY` - API klíč z Resend.com účtu
- `NEXT_PUBLIC_` prefix je důležitý pro Next.js - umožňuje přístup k proměnné na klientovi (v prohlížeči)

## 2. Instalace závislostí

```bash
npm install
```

## 3. Vytvoření buildu

```bash
npm run build
```

Tento příkaz vytvoří statické soubory ve složce `out/`.

## 4. Nahrání na FTP server

```bash
npm run deploy
```

Nebo přímo:

```bash
node deploy-ftp.js
```

## FTP přístupové údaje

- **Host:** ftp.domypecerady.cz (IP: 193.163.77.240)
- **Port:** 21 (FTP) nebo 22 (SFTP)
- **Uživatel:** kopka@domypecerady.cz nebo kopka.domypecerady.cz
- **FTPS TLS:** Explicitní
- **Vzdálená složka:** web_7

## Alternativní způsob - ruční nahrání

Pokud preferujete ruční nahrání pomocí FTP klienta (např. FileZilla):

1. Spusťte `npm run build`
2. Připojte se k FTP serveru s výše uvedenými údaji
3. Nahrajte obsah složky `out/` do složky `web_7` na serveru

## Poznámky

- Web bude dostupný na: `https://domypecerady.cz/web_7/`
- Při každé změně je potřeba znovu spustit `npm run build` a `npm run deploy`

