/**
 * Skript: Zkopíruje fotky z dum-10 do dum-9 a horizontálně je převrátí (flip).
 * Spuštění: node scripts/flip-and-copy-dum10-to-dum9.js
 */

const path = require('path')
const fs = require('fs')
const sharp = require('sharp')

const SOURCE_DIR = path.join(__dirname, '..', 'public', 'images', 'gallery', 'dum-10')
const TARGET_DIR = path.join(__dirname, '..', 'public', 'images', 'gallery', 'dum-9')

async function main() {
  if (!fs.existsSync(TARGET_DIR)) {
    fs.mkdirSync(TARGET_DIR, { recursive: true })
  }

  const files = fs.readdirSync(SOURCE_DIR).filter((f) => f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.png'))
  console.log(`Načteno ${files.length} souborů ze složky dum-10`)

  for (const file of files) {
    const srcPath = path.join(SOURCE_DIR, file)
    const base = path.basename(file, path.extname(file))
    const ext = path.extname(file)
    const newName = base.replace(/_dum10$/, '_dum9') + ext
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
