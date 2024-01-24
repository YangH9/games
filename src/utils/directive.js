import lazy from './modules/lazy'
import calcHeight from './modules/calcHeight'
// import copy from './modules/copy'
// import waterMarker from './modules/waterMarker'
// import draggable from './modules/draggable'
// import debounce from './modules/debounce'
// import throttle from './modules/throttle'
// import longpress from './modules/longpress'

const directivesList = {
  lazy,
  calcHeight
  // ,  copy,
  // waterMarker,
  // draggable,
  // debounce,
  // throttle,
  // longpress
}

export default {
  install(app) {
    Object.keys(directivesList).forEach(key => {
      app.directive(key, directivesList[key])
    })
  }
}
