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

let initZIndex = (dom) => {
  const resumes = getDoms('.iresume')
  resumes.forEach(val => {
    val.style.zIndex = 1
  })
  dom.style.zIndex = 10
}

let grabToggle = dom => {
  let grabbing = () => {
    dom.style.cursor = 'grabbing'
    dom.style.cursor = '-webkit-grabbing'
    initZIndex(dom)
  }
  let grab = () => {
    dom.style.cursor = 'grab'
    dom.style.cursor = '-webkit-grab'
  }
  dom.onmousedown = grabbing
  dom.onmouseup = grab
}

let ctrlScroll = (dom, bool, scale, speed) => {
  if (bool) scale *= 1 + speed
  else scale *= 1 - speed
  initZIndex(dom)
  dom.style.transform = `scale(${scale})`
  dom.style.webkitTransform = `scale(${scale})`
  return scale
}

let scaleToggle = (dom, scale, speed) => {
  let scrollFunc = e => {
    e = e || window.event
    if (e.wheelDelta && event.ctrlKey) {
      event.returnValue = false
      scale = ctrlScroll(dom, e.wheelDelta > 0, scale, speed)
    } else if (e.detail && event.ctrlKey) {
      event.returnValue = false
      scale = ctrlScroll(dom, e.detail > 0, scale, speed)
    }
  }
  if (dom.addEventListener) dom.addEventListener('DOMMouseScroll', scrollFunc, false)
  dom.onmousewheel = dom.onmousewheel = scrollFunc
  return scale
}

export {
  getDom,
  getDoms,
  updateDom,
  throttle,
  scaleToggle,
  grabToggle
}