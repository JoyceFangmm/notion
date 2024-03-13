/* eslint-disable @typescript-eslint/no-var-requires */

const ghpages = require('gh-pages')
const path = require('path')
const fs = require('fs')

const lastPath = path.resolve(__dirname, '..')

const pathDocs = path.resolve(process.cwd(), 'docs')
const pathIndex = path.join(pathDocs, 'index.html')
const path404 = path.join(pathDocs, '404.html')

fs.copyFile(pathIndex, path404, (err) => {
  if (err) {
    console.error('Error copying 404.html:', err)
  } else {
    console.log('404.html copied successfully.')
    upload()
  }
})

function upload() {
  ghpages.publish(
    path.join(lastPath, 'docs'),
    {
      branch: 'master',
      dest: 'docs',
      message: 'Deploy to master branch',
    },
    (err) => {
      if (err) {
        console.log('Error upload github pages')
        console.error(err)
      } else {
        console.log('Deployment successful')
      }
    }
  )
}
