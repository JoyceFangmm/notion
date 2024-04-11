import type { RouteRecordRaw } from 'vue-router'

// eslint-disable-next-line import/no-unresolved
import pageList from '~pages'

console.log('pageList-->', pageList)

const routes: RouteRecordRaw[] = [
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '@/views/404.vue'),
    meta: { title: '404' },
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    meta: { title: 'home', keepAlive: true },
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import(/* webpackChunkName: "detail" */ '@/views/Detail.vue'),
    meta: { title: 'detail', keepAlive: true },
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import(/* webpackChunkName: "blog" */ '@/views/Blog/Blog.vue'),
    meta: { title: 'blog', keepAlive: true },
  },
]

// 注意：以下仅测试环境有效！！
const demoRoutes: RouteRecordRaw[] = [
  {
    path: '/example',
    name: 'example',
    component: () => import(/* webpackChunkName: "example" */ '@/views/Example/Example.vue'),
    meta: { title: 'example', keepAlive: true },
  },
]

let routesAll = routes
if (process.env.NODE_ENV == 'development' || process.env.VITE_BUILD_MODE == 'qa') {
  routesAll = routes.concat(demoRoutes)
}

routesAll = routesAll.concat(pageList)

console.log(routesAll)

export default routesAll
