/**
 * Skript pro nahrání webu na FTP server
 * Použití: node deploy-ftp.js
 * 
 * Před použitím:
 * 1. Vytvořte soubor .env.local s FTP přihlašovacími údaji
 * 2. Doplňte FTP_PASSWORD do .env.local
 */

const ftp = require('basic-ftp')
const fs = require('fs')
const path = require('path')
require('dotenv').config({ path: '.env.local' })

async function deployToFTP() {
  const client = new ftp.Client()
  client.ftp.verbose = true

  try {
    console.log('🔌 Připojování k FTP serveru...')
    
    await client.access({
      host: process.env.FTP_HOST || 'ftp.domypecerady.cz',
      port: parseInt(process.env.FTP_PORT || '21'),
      user: process.env.FTP_USER || 'kopka@domypecerady.cz',
      password: process.env.FTP_PASSWORD,
      secure: false, // FTP (ne SFTP)
      secureOptions: {
        rejectUnauthorized: false
      }
    })

    console.log('✅ Připojeno k FTP serveru')
    
    const remoteDir = process.env.FTP_REMOTE_DIR || 'web'
    const localDir = path.join(process.cwd(), 'out')

    // Zkontroluj, zda existuje out složka
    if (!fs.existsSync(localDir)) {
      console.error('❌ Složka "out" neexistuje! Nejdřív spusťte: npm run build')
      process.exit(1)
    }

    console.log(`📁 Nahrávání souborů z ${localDir} do ${remoteDir}...`)

    // Vytvoř vzdálenou složku a přejdi do ní.
    // POZOR: ensureDir už na konci skončí uvnitř té složky,
    // proto zde NEPROVÁDÍME další cd(remoteDir), aby nevzniklo /web/web.
    await client.ensureDir(remoteDir)
    console.log(`✅ Vzdálená složka ${remoteDir} připravena`)

    // Smaž starý obsah složky (full replace)
    console.log('🧹 Mazání staré verze webu ve vzdálené složce...')
    await client.clearWorkingDir()
    console.log('✅ Starý obsah byl odstraněn')

    // Nahraj všechny soubory z "out"
    await client.uploadFromDir(localDir, '.')
    
    console.log('✅ Všechny soubory byly úspěšně nahrány!')
    console.log(`🌐 Web je dostupný na: https://domypecerady.cz/${remoteDir === 'web' ? '' : remoteDir + '/'}`)

  } catch (err) {
    console.error('❌ Chyba při nahrávání:', err.message)
    process.exit(1)
  } finally {
    client.close()
  }
}

// Spusť deploy
deployToFTP()

