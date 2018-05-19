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

let getMousePos = e => {
  let { clientX, clientY } = e
  return {
    x: clientX,
    y: clientY
  }
}

let getDomPos = dom => {
  let { left = 0, top = 0 } = dom.style
  return {
    x: parseInt(left),
    y: parseInt(top)
  }
}

let drag = dom => {
  let isDrage = false
  let startPos = {}, endPos = {}
  dom.addEventListener('mousedown', e => {
    isDrage = true
    startPos = getMousePos(e)
  })
  document.addEventListener('mouseup', e => {
    isDrage = false
  })
  document.addEventListener('mousemove', e => {
    if (!isDrage) return
    endPos = getMousePos(e)
    let offsetPos = {
      x: endPos.x - startPos.x,
      y: endPos.y - startPos.y
    }
    let domPos = getDomPos(dom)
    let newPos = {
      left: domPos.x + offsetPos.x,
      top: domPos.y + offsetPos.y
    }
    dom.style.left = `${newPos.left}px`
    dom.style.top = `${newPos.top}px`
    startPos = endPos
  })
}

export {
  getDom,
  getDoms,
  updateDom,
  drag
}