/**
 * Build + FTP deploy pro statický hosting
 * Dočasně skryje API routes (nepodporované v static export),
 * sestaví statický web do /out, nahraje na FTP a obnoví API routes.
 *
 * Použití: node deploy-static.js
 */

const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

const API_DIR = path.join(__dirname, 'app', 'api')
const API_BACKUP = path.join(__dirname, 'app', '_api_backup')

function run(cmd) {
  console.log(`\n> ${cmd}`)
  execSync(cmd, { stdio: 'inherit', env: { ...process.env, STATIC_EXPORT: 'true' } })
}

function hideApi() {
  if (fs.existsSync(API_DIR)) {
    fs.renameSync(API_DIR, API_BACKUP)
    console.log('📦 API routes dočasně skryty')
  }
}

function restoreApi() {
  if (fs.existsSync(API_BACKUP)) {
    fs.renameSync(API_BACKUP, API_DIR)
    console.log('🔄 API routes obnoveny')
  }
}

async function main() {
  hideApi()

  try {
    run('npm run build')
    console.log('\n✅ Build hotový')
  } catch (err) {
    restoreApi()
    console.error('❌ Build selhal:', err.message)
    process.exit(1)
  }

  restoreApi()

  try {
    run('node deploy-ftp.js')
  } catch (err) {
    console.error('❌ Deploy selhal:', err.message)
    process.exit(1)
  }
}

main()
