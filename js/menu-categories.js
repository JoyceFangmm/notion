(() => {
  const INDEX_LABEL = '全部分类'
  const MAX_ITEMS = 8

  const normalizePath = href => {
    try {
      const url = new URL(href, window.location.origin)
      return `${url.pathname.replace(/\/+$/, '')}/`
    } catch {
      return ''
    }
  }

  const isCategoriesLink = href => normalizePath(href).endsWith('/categories/')

  const collectCategoryItems = () => {
    const sources = document.querySelectorAll('#aside-cat-list > .card-category-list-item > .card-category-list-link')
    const seen = new Set()
    const items = []

    sources.forEach(link => {
      const href = link.getAttribute('href')
      const name = link.querySelector('.card-category-list-name')?.textContent.trim() || link.textContent.trim()
      if (!href || !name || seen.has(href)) return
      seen.add(href)
      items.push({ href, name })
    })

    return items.slice(0, MAX_ITEMS)
  }

  const createChildItem = ({ href, name, isIndex = false }) => {
    const li = document.createElement('li')
    const anchor = document.createElement('a')
    const icon = document.createElement('i')
    const text = document.createElement('span')

    anchor.className = `site-page child menu-category-link${isIndex ? ' is-index' : ''}`
    anchor.href = href
    icon.className = isIndex ? 'fas fa-layer-group fa-fw' : 'fas fa-folder fa-fw'
    text.textContent = name
    anchor.append(icon)
    anchor.append(text)

    li.append(anchor)
    return li
  }

  const enhanceMenu = root => {
    const categoryItems = collectCategoryItems()
    if (!categoryItems.length) return

    const categoryLink = [...root.querySelectorAll('.menus_item > .site-page')].find(link => isCategoriesLink(link.href))
    if (!categoryLink || categoryLink.dataset.categoryMenuEnhanced === 'true') return

    const menuItem = categoryLink.closest('.menus_item')
    if (!menuItem) return

    const trigger = document.createElement('span')
    const label = categoryLink.textContent.trim() || '分类'
    const childList = document.createElement('ul')
    const isSidebarMenu = root.id === 'sidebar-menus'

    trigger.className = 'site-page group menu-categories-trigger'
    if (isSidebarMenu) {
      trigger.classList.add('hide')
    }

    trigger.innerHTML = `<span> ${label}</span><i class="fas fa-chevron-down"></i>`

    childList.className = 'menus_item_child menu-categories-dropdown'
    childList.append(createChildItem({ href: categoryLink.href, name: INDEX_LABEL, isIndex: true }))
    categoryItems.forEach(item => childList.append(createChildItem(item)))

    categoryLink.dataset.categoryMenuEnhanced = 'true'
    menuItem.replaceChildren(trigger, childList)
  }

  const bindHeaderCategoryToggle = () => {
    const headerMenus = document.getElementById('menus')
    if (!headerMenus || headerMenus.dataset.categoryMenuBound === 'true') return

    headerMenus.addEventListener('click', event => {
      const trigger = event.target.closest('.menu-categories-trigger')
      if (!trigger || !headerMenus.contains(trigger)) return

      const menuItem = trigger.closest('.menus_item')
      if (!menuItem) return

      headerMenus.querySelectorAll('.menus_item.menu-categories-open').forEach(openItem => {
        if (openItem !== menuItem) {
          openItem.classList.remove('menu-categories-open')
        }
      })

      menuItem.classList.toggle('menu-categories-open')
    })

    document.addEventListener('click', event => {
      if (headerMenus.contains(event.target)) return
      headerMenus.querySelectorAll('.menus_item.menu-categories-open').forEach(openItem => {
        openItem.classList.remove('menu-categories-open')
      })
    })

    headerMenus.dataset.categoryMenuBound = 'true'
  }

  const initCategoryMenu = () => {
    const headerMenus = document.getElementById('menus')
    const sidebarMenus = document.getElementById('sidebar-menus')

    if (headerMenus) enhanceMenu(headerMenus)
    if (sidebarMenus) enhanceMenu(sidebarMenus)
    bindHeaderCategoryToggle()
  }

  document.addEventListener('DOMContentLoaded', initCategoryMenu)
  document.addEventListener('pjax:complete', initCategoryMenu)
})()
