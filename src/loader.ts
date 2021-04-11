import { pathToFileURL } from 'url'
import { resolve } from 'path'

export async function config (file: string): Promise<any> {
  const path = resolve(file)
  const fileURL = pathToFileURL(path)
  let parsed = {}
  if (path.endsWith('.ts')) {
    console.warn('Typescript currently not supported')
  } else {
  // hack to prevent `import` get transformed
  // eslint-disable-next-line no-new-func
    const _import = new Function('modulePath', 'return import(modulePath)')
    parsed = await _import(fileURL)

    return parsed
  }
}
