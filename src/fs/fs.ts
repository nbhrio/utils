import { copyFileSync, existsSync, mkdirSync, readdirSync, statSync } from 'fs'
import { join, normalize, relative, resolve } from 'path'

export function walkSync(path: string): string[] {
  let files: string[] = []
  const filesInPath = readdirSync(path)
  filesInPath.forEach((file) => {
    const filePath = normalize(resolve(join(path, file)))
    const stats = statSync(filePath)
    if (stats.isDirectory()) {
      files = files.concat(walkSync(filePath))
    } else if (stats.isFile()) {
      files.push(filePath)
    }
  })
  return files
}

export function cpFolderSync(src: string, dest: string) {
  // make sure the directory exists before stuff gets put into into
  if (!existsSync(dest)) {
    mkdirSync(dest)
  }
  const files = readdirSync(src)
  for (const file of files) {
    const relativePath = relative(src, file)
    copyFileSync(file, join(dest, relativePath))
  }
}