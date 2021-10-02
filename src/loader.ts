import { pathToFileURL } from 'url'
import { resolve } from 'path'

export async function load<T>(file: string): Promise<T> {
  const path = resolve(file)
  const fileURL = pathToFileURL(path)
  let parsed: any = {}
  if (path.endsWith('.ts')) {
    throw new Error('typescript currently not supported')
  } else {
    // hack to prevent `import` get transformed
    const _import = new Function('modulePath', 'return import(modulePath)')
    parsed = await _import(fileURL)
    if (parsed.default !== null || parsed.default !== undefined) {
      parsed = parsed.default
    }
    return parsed
  }
}
