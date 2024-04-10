/* eslint-disable import/no-unresolved */
import AllData from '../../blog/collection/indexHtml.html?raw'
import AllData2 from '../../blog/collection/indexMd.html?raw'

class BlogData {
  htmlDirectory: string
  mdDirectory: string
  allData: object
  init() {
    const title = this.tempDom(AllData2).querySelector('title').textContent
    this.htmlDirectory = title
    this.mdDirectory = this.tempDom(AllData2).querySelector('title').textContent

    console.log(this.htmlDirectory, ' ', this.mdDirectory)

    const categories = this.getCategories()

    this.allData = categories

    console.log('总数据', categories)
  }

  getCategories() {
    const outUlDom = this.tempDom(AllData2).querySelector('ul')
    const outLiDomList = outUlDom.children

    const categoryList = []
    // 获取database
    Array.from(outLiDomList).forEach((element) => {
      const ulDom = element.querySelector('ul')
      if (ulDom) {
        const liDom = ulDom.querySelector('li')
        if (liDom) {
          const aDom = ulDom.querySelector('a')
          const category = this.findCategory(aDom.textContent)
          categoryList.push(category)

          // 获取具体文章
          const pages = []
          Array.from(ulDom.children).forEach((el) => {
            const innerUlDom = el.querySelector('ul')
            if (innerUlDom) {
              const innerADom = innerUlDom.querySelector('a')
              const page = this.findCategory(innerADom.textContent)
              page['path'] = '../../../blog/markdown/' + this.mdDirectory + '/' + innerADom.getAttribute('href')
              pages.push(page)
            }
          })

          category['pages'] = pages
        }
      }
    })

    return categoryList
  }

  tempDom(data) {
    const tmpDom = document.createElement('div')
    tmpDom.innerHTML = data
    return tmpDom
  }

  findCategory(text: string) {
    const arr = text.split(' ')
    const id = arr.pop()
    const obj = {
      title: arr.join(' '),
      id: id.split('.')[0],
    }
    return obj
  }
}

export default new BlogData()
