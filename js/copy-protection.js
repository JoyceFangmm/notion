(() => {
  const protectedSelectors = ['#article-container', '#post-info', '.post-copyright']
  const editableSelector = 'input, textarea, [contenteditable="true"], [contenteditable=""]'

  const isEditable = target => Boolean(target?.closest?.(editableSelector))
  const isProtectedElement = element => protectedSelectors.some(selector => element?.closest?.(selector))
  const isProtectedArea = target => isProtectedElement(target)

  const isProtectedSelection = () => {
    const selection = window.getSelection()
    if (!selection || selection.isCollapsed) return false

    const nodes = [selection.anchorNode, selection.focusNode]
    return nodes.some(node => {
      const element = node?.nodeType === Node.ELEMENT_NODE ? node : node?.parentElement
      return isProtectedElement(element)
    })
  }

  const preventIfProtected = event => {
    if (isEditable(event.target) || (!isProtectedArea(event.target) && !isProtectedSelection())) return
    event.preventDefault()
  }

  const preventKeyboardCopy = event => {
    if (isEditable(event.target) || (!isProtectedArea(event.target) && !isProtectedSelection())) return

    const key = event.key.toLowerCase()
    if ((event.metaKey || event.ctrlKey) && ['a', 'c', 'x'].includes(key)) {
      event.preventDefault()
    }
  }

  const protectImages = root => {
    root.querySelectorAll('#article-container img').forEach(img => {
      img.draggable = false
      img.addEventListener('dragstart', event => event.preventDefault())
    })
  }

  const initCopyProtection = () => {
    protectImages(document)
  }

  document.addEventListener('copy', preventIfProtected)
  document.addEventListener('cut', preventIfProtected)
  document.addEventListener('contextmenu', preventIfProtected)
  document.addEventListener('selectstart', preventIfProtected)
  document.addEventListener('keydown', preventKeyboardCopy)
  document.addEventListener('DOMContentLoaded', initCopyProtection)
  document.addEventListener('pjax:complete', initCopyProtection)
})()
