let getDom = id => document.querySelector(id)

let getDoms = id => document.querySelectorAll(id)

let updateDom = (arr, prefix) => {
  arr.forEach(val => {
    let doms = getDoms(`${prefix} ${val.dom}`.trim())
    Array.from(doms).forEach(dom => {
      val.style.forEach(style => {
        Object.entries(style).forEach(css => {
          dom.style[css[0]] = css[1]
        })
      })
    })
  })
}

let throttle = (method, context) => {
  clearTimeout(method.tId)
  method.tId = setTimeout(() => {
      method.call(context)
  }, 500)
}

export {
  getDom,
  getDoms,
  updateDom,
  throttle
}