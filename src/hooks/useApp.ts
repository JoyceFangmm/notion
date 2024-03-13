import type { App } from 'vue'

let cacheApp: any
export function setApp(app: App) {
  cacheApp = app
}

export function getApp(): App {
  return cacheApp
}

export function getProperties() {
  return cacheApp.config.globalProperties
}
