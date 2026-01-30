/**
 * Skript: Zkopíruje fotky z domy-2-4-6-8 do domy-1-3-5-7 a horizontálně je převrátí (flip).
 * Spuštění: node scripts/flip-and-copy-to-domy-1357.js
 */

const path = require('path')
const fs = require('fs')
const sharp = require('sharp')

const SOURCE_DIR = path.join(__dirname, '..', 'public', 'images', 'gallery', 'domy-2-4-6-8')
const TARGET_DIR = path.join(__dirname, '..', 'public', 'images', 'gallery', 'domy-1-3-5-7')

async function main() {
  if (!fs.existsSync(TARGET_DIR)) {
    fs.mkdirSync(TARGET_DIR, { recursive: true })
  }

  const files = fs.readdirSync(SOURCE_DIR).filter((f) => f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.png'))
  console.log(`Načteno ${files.length} souborů ze složky domy-2-4-6-8`)

  for (const file of files) {
    const srcPath = path.join(SOURCE_DIR, file)
    const base = path.basename(file, path.extname(file))
    const ext = path.extname(file)
    const newName = base.replace(/_domy2468$/, '_domy1357') + ext
    const destPath = path.join(TARGET_DIR, newName)

    try {
      await sharp(srcPath)
        .flop() // horizontální převrácení (mirror)
        .toFile(destPath)
      console.log(`  OK: ${file} -> ${newName}`)
    } catch (err) {
      console.error(`  CHYBA: ${file}`, err.message)
    }
  }

  console.log('Hotovo.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
