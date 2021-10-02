interface LogOptions {
  type: string
}
export function createLog(text: string, options?: LogOptions): void {
  console.log(text)
}
