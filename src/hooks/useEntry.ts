/** 为了统一入口代码，方便后期查询 */
export default function useEntry(callback: () => void) {
  setTimeout(() => {
    callback && callback()
  }, 1)

  return {}
}
