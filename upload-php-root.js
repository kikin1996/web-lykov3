/**
 * Skript pro nahrání PHP souboru do root složky na FTP serveru
 */

const ftp = require('basic-ftp')
const fs = require('fs')
const path = require('path')
require('dotenv').config({ path: '.env.local' })

async function uploadPHP() {
  const client = new ftp.Client()
  client.ftp.verbose = true

  try {
    console.log('🔌 Připojování k FTP serveru...')
    
    await client.access({
      host: process.env.FTP_HOST || 'ftp.domypecerady.cz',
      port: parseInt(process.env.FTP_PORT || '21'),
      user: process.env.FTP_USER || 'kopka@domypecerady.cz',
      password: process.env.FTP_PASSWORD,
      secure: false,
      secureOptions: {
        rejectUnauthorized: false
      }
    })

    console.log('✅ Připojeno k FTP serveru')
    
    const phpFile = path.join(process.cwd(), 'out', 'api', 'send-email.php')

    if (!fs.existsSync(phpFile)) {
      console.error('❌ PHP soubor neexistuje!', phpFile)
      process.exit(1)
    }

    // Přejdi do root složky
    await client.cd('/')
    
    // Vytvoř složku api pokud neexistuje
    await client.ensureDir('api')
    
    console.log(`📁 Nahrávání PHP souboru do root/api/...`)
    console.log(`   Z: ${phpFile}`)
    console.log(`   Do: /api/send-email.php`)
    
    // Nahraj PHP soubor s plnou cestou
    await client.uploadFrom(phpFile, '/api/send-email.php')
    
    console.log('✅ PHP soubor byl úspěšně nahrán!')
    console.log(`🌐 URL: https://www.domypecerady.cz/api/send-email.php`)

  } catch (err) {
    console.error('❌ Chyba při nahrávání:', err.message)
    console.error(err)
    process.exit(1)
  } finally {
    client.close()
  }
}

uploadPHP()

