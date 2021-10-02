import { readdirSync, statSync } from 'fs'
import { resolve, join, normalize } from 'path'

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
