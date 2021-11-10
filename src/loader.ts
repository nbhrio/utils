import { resolve } from "path";

export async function load<T> (file: string): Promise<T> {
  const configPath = resolve(file)
  let config = await import(configPath)
  if (config.default !== undefined) {
    config = config.default
  }
  return config
}
