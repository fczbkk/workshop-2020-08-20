import { doSomething } from './utilities.js'

console.log('page 1')
doSomething()

function callDynamicImport () {
  import('./dynamic-utilities.js')
    .then(({ dynamicChunk }) => {
      dynamicChunk()
    })
}
