import type { LocationQueryRaw } from 'vue-router'

import { app } from '@/hooks'
import util from '@/utils/util'

export default function useUrl() {
  const router = app.getProperties().$router

  /**
   * 通过路由名称打开
   * name+params不建议使用，https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22
   * 推荐使用name+query
   * @param name 路由名称
   * @param type 1 可传query push；2 可传query replace;
   */
  function jumpName(name: string, type: number, params?: any) {
    if (!name) return

    // 随机数，拉取最新代码
    const VNK = util.genKey()
    let query = { VNK } as any
    if (params) {
      query = Object.assign(query, params)
    }
    query.VNK = VNK //防止被params内VNK参数覆盖

    if (type == 2) {
      router.replace({
        name: name,
        query: query,
      })
    } else {
      router.push({
        name: name,
        query: query,
      })
    }
  }

  /**
   * router.push
   * @param name 路由名称
   * @param query 查询参数
   */
  function jumpPush(name: string, query?: LocationQueryRaw) {
    jumpName(name, 1, query)
  }
  /**
   * router.replace
   * @param name 路由名称
   * @param query 查询参数
   */
  function jumpReplace(name: string, query?: LocationQueryRaw) {
    jumpName(name, 2, query)
  }

  return {
    jumpPush,
    jumpReplace,
  }
}
