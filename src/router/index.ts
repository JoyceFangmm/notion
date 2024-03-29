import { createRouter, createWebHistory } from 'vue-router'

import util from '@/utils/util'

import routes from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_ROUTE_PREFIX),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { left: 0, top: 0 }
    }
  },
})

router.beforeEach((to, from, next) => {
  console.log(`router_before-->${String(from.name)}-->${String(to.name)}`)
  document.title = (to.meta.title || '模版') as string

  const query = { ...to.query }
  let replaceFlag = false
  if (!to.query['VNK']) {
    if (
      to.path === from.path &&
      isObjEqual({ ...to.query, ['VNK']: null }, { ...from.query, ['VNK']: null }) &&
      from.query['VNK']
    ) {
      query['VNK'] = from.query['VNK']
    } else {
      query['VNK'] = util.genKey()
    }
    replaceFlag = true
  }

  // 如果参数不存在VNK，需要加入，否则可能导致拉取缓存代码
  if (replaceFlag) {
    next({ name: to.name, params: to.params, query, replace: !from.query['VNK'] })
  } else {
    next()
  }
})

router.afterEach((to, from, failure) => {
  console.log(`router_after-->${String(from.name)}-->${String(to.name)}`)
})

function isObjEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true
  } else {
    const keys1 = Object.getOwnPropertyNames(obj1)
    const keys2 = Object.getOwnPropertyNames(obj2)
    if (keys1.length !== keys2.length) {
      return false
    }
    for (const key of keys1) {
      if (obj1[key] !== obj2[key]) {
        return false
      }
    }
    return true
  }
}

export default router
