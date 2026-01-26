/**
 * Skript pro nahrání PHP souboru na FTP server
 */

const ftp = require('basic-ftp')
const fs = require('fs')
const path = require('path')
require('dotenv').config({ path: '.env.local' })

async function deployPHP() {
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
    
    const remoteDir = process.env.FTP_REMOTE_DIR || 'web'
    const phpFile = path.join(process.cwd(), 'out', 'api', 'send-email.php')

    if (!fs.existsSync(phpFile)) {
      console.error('❌ PHP soubor neexistuje!', phpFile)
      process.exit(1)
    }

    // Přejdi do správné složky
    await client.ensureDir(remoteDir)
    await client.cd(remoteDir)
    await client.ensureDir('api')
    
    console.log(`📁 Nahrávání PHP souboru do ${remoteDir}/api/...`)
    
    // Nahraj PHP soubor (jsme ve složce web, takže relativní cesta)
    await client.uploadFrom(phpFile, 'api/send-email.php')
    
    console.log('✅ PHP soubor byl úspěšně nahrán!')

  } catch (err) {
    console.error('❌ Chyba při nahrávání:', err.message)
    process.exit(1)
  } finally {
    client.close()
  }
}

deployPHP()

