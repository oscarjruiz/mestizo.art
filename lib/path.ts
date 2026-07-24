const BASE_PATH = "/mestizo.art"

export function prefix(path: string): string {
  if (path.startsWith("http") || path.startsWith("#")) return path
  if (path.startsWith(BASE_PATH)) return path
  return `${BASE_PATH}${path.startsWith("/") ? "" : "/"}${path}`
}
