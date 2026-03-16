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

  const serverHost = process.env.FTP_HOST || '193.163.77.240'

  try {
    console.log('🔌 Připojování k FTP serveru...')

    await client.access({
      host: serverHost,
      port: parseInt(process.env.FTP_PORT || '21'),
      user: process.env.FTP_USER || 'kopka@domypecerady.cz',
      password: process.env.FTP_PASSWORD,
      secure: true,
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

    await client.ensureDir(remoteDir)
    console.log(`✅ Vzdálená složka ${remoteDir} připravena`)

    // Nahraj všechny soubory (přepíše existující)
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

