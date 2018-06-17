import avatars from '../img/avatars.gif'
import themes from '../theme/themes.json'
import { getDom, getDoms, updateDom, drag } from './tool.js'
export default {
  props: {
    pData: {
      type: Object
    },
    pNode: {
      type: Object
    },
    index: {
      type: Number
    }
  },
  data () {
    return {
      user: {},
      template: {},
      scale: 1,
      zIndex: 1
    }
  },
  created () {
    this.init()
  },
  mounted () {
    this.domStyle()
    this.windowEvents()
  },
  methods: {
    init () {
      let { user = {} } = this.pData
      this.user = Object.assign({}, user)
      this.user.avatars = !!this.user && !!this.user.avatars && this.user.avatars.length > 0 ? this.user.avatars : avatars
      let theme = 'blue'
      if (this.pNode && !!this.pNode.theme && Object.keys(themes).includes(theme)) theme = this.pNode.theme
      this.template = themes[theme]
    },
    windowEvents () {
      let { className = '.iresumex' } = this.pNode
      const baseDom = getDom(`${className} .iresume`)
      this.initPos(baseDom)
      drag(baseDom)
      this.grabToggle(baseDom)
      let speed = 0.1
      this.scaleToggle(baseDom, speed)
    },
    initZIndex (dom) {
      this.zIndex = this.index + 1
      dom.style.zIndex = this.zIndex
      this.$emit('syncZIndex', this.zIndex)
    },
    grabToggle (dom) {
      dom.addEventListener('mousedown', () => {
        this.initZIndex(dom)
        dom.style.cursor = 'grabbing'
        dom.style.cursor = '-webkit-grabbing'
      })
      dom.addEventListener('mouseup', () => {
        dom.style.cursor = 'grab'
        dom.style.cursor = '-webkit-grab'
      })
    },
    ctrlScroll (dom, bool, speed) {
      if (bool) this.scale *= (1 + speed)
      else this.scale *= (1 - speed)
      this.initZIndex(dom)
      dom.style.transform = `scale(${this.scale})`
      dom.style.webkitTransform = `scale(${this.scale})`
    },
    scaleToggle (dom, speed) {
      const defaultFunc = e => {
        e = e || window.event
        if ((e.wheelDelta || e.detail) && e.ctrlKey) {
          e.returnValue = false
        }
      }
      document.addEventListener('DOMMouseScroll', defaultFunc, false)
      window.onmousewheel = document.onmousewheel = defaultFunc
      const scrollFunc = e => {
        e = e || window.event
        if (e.wheelDelta && e.ctrlKey) {
          e.returnValue = false
          this.ctrlScroll(dom, e.wheelDelta > 0, speed)
        } else if (e.detail && e.ctrlKey) {
          e.returnValue = false
          this.ctrlScroll(dom, e.detail > 0, speed)
        }
      }
      dom.addEventListener('DOMMouseScroll', scrollFunc, false)
      dom.onmousewheel = scrollFunc
    },
    initPos (dom) {
      dom.style.top = dom.scrollTop
      dom.style.left = dom.scrollLeft
    },
    getMidIcon (icon) {
      return `icon-mid icon-${icon}`
    },
    getSmallIcon (icon) {
      return `icon-small icon-${icon}`
    },
    domStyle () {
      let { className = '.iresumex', leftBackground = '', leftColor = '', rightBackground = '', rightColor = '' } = this.pNode
      const { left, right } = this.template
      let leftBg = left.bgColor, rightBg = right.bgColor
      if (leftBackground !== '') leftBg = `url(${leftBackground}) repeat`
      if (leftColor === '') leftColor = left.fontColor
      if (rightBackground !== '') rightBg = `url(${rightBackground}) repeat`
      if (rightColor === '') rightColor = right.fontColor
      const height = `${getDom('.iresume-avatars .iresume-img').offsetWidth}px`
      const domArr = [
        { dom: '.iresume .iresume-left', style: [
          { color: leftColor },
          { background: leftBg }
        ] },
        { dom: '.iresume .iresume-left .iresume-box-title', style: [
          { color: left.box.titleColor }
        ] },
        { dom: '.iresume .iresume-left .iresume-avatars', style: [
          { height }
        ] },
        { dom: '.iresume .iresume-left .iresume-avatars .iresume-img', style: [
          { backgroundImage: `url(${this.user.avatars})` },
          { backgroundSize: '100% 100%' }
        ] },
        { dom: '.iresume .iresume-right', style: [
          { color: rightColor },
          { background: rightBg }
        ] },
        { dom: '.iresume .iresume-right .iresume-infomation', style: [
          { color: right.box.infoColor }
        ] },
        { dom: '.iresume .iresume-right .iresume-box-title', style: [
          { color: right.box.titleColor }
        ] },
        { dom: '.iresume .iresume-right .icon-star2', style: [
          { color: right.box.titleColor }
        ] },
        { dom: '.iresume .iresume-right .iresume-hr', style: [
          { background: right.box.hrColor }
        ] },
        { dom: '.iresume .iresume-right .iresume-project', style: [
          { color: right.box.project.titleColor }
        ] },
        { dom: '.iresume .iresume-right .iresume-project-url', style: [
          { color: right.box.project.urlColor }
        ] },
        { dom: '.iresume .iresume-right .iresume-enterprise-time', style: [
          { color: right.box.project.titleColor }
        ] },
        { dom: '.iresume .iresume-right .iresume-mini-title', style: [
          { color: right.box.mini.titleColor }
        ] }
      ]
      updateDom(domArr, className)
    },
    hrefTo (url) {
      window.open(url)
    }
  }
}