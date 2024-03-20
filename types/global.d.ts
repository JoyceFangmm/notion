declare interface ViteEnv {
  VITE_PORT: number
  VITE_API_BASE_URL: string
  VITE_ROUTE_PREFIX: string
  VITE_PUBLIC_PATH: string
}

declare module '*.md' {
  const content: string
  export default content
}
