/** 替换（新增）url参数 */
function replaceParamVal(oUrl: string, paramName: string, replaceWith: string) {
  if (!oUrl) return oUrl
  const reg = new RegExp('(&|\\?)(' + paramName + '=[^&#]*)', 'i')
  const r = oUrl.match(reg)
  let nUrl = ''
  if (r) {
    nUrl = oUrl.replace(r[0], r[1] + paramName + '=' + encodeURIComponent(replaceWith))
  } else {
    const index = oUrl.indexOf('?')
    if (index >= 0) {
      nUrl = oUrl.replace(
        '?',
        '?' + paramName + '=' + encodeURIComponent(replaceWith) + (index != oUrl.length - 1 ? '&' : '')
      )
    } else {
      nUrl = oUrl + '?' + paramName + '=' + encodeURIComponent(replaceWith)
    }
  }
  return nUrl
}

/** 参考vue-navigation的 VNK */
function genKey() {
  const t = 'xxxxxxxx'
  return t.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

/** 重置VNK 解决IOS移动端使用 window.location.reload() 无法重新加载网页的问题 */
function reload() {
  window.location.replace(replaceParamVal(window.location.href, 'VNK', genKey()))
}

export default {
  replaceParamVal,
  genKey,
  reload,
}
