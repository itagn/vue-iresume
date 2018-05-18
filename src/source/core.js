import avatars from './avatars.gif'
import themes from './themes.json'
import { getDom, getDoms, updateDom, throttle, scaleToggle, grabToggle } from '../util/tool.js'
export default {
  props: {
    pData: {
      type: Object
    },
    pNode: {
      type: Object
    }
  },
  data () {
    return {
      user: {},
      template: {},
      scale: 1
    }
  },
  created () {
    this.init()
  },
  mounted () {
    this.domStyle()
    this.sameHeight()
    this.windowEvents()
  },
  methods: {
    init () {
      let { user = {} } = this.pData
      this.user = Object.assign({}, user)
      this.user.avatars = !!this.user && !!this.user.avatars && this.user.avatars.length > 0 ? this.user.avatars : avatars
      let theme = 'blue'  // default theme
      if (this.pNode && !!this.pNode.theme && Object.keys(themes).includes(theme)) theme = this.pNode.theme
      this.template = themes[theme]
    },
    windowEvents () {
      let { className = '' } = this.pNode
      const baseDom = getDom(`${className} .iresume`)
      grabToggle(baseDom)
      let { scale } = this
      let speed = 0.1  //  scale speed
      this.scale = scaleToggle(baseDom, scale, speed)
      window.onresize = () => {
        throttle(this.sameHeight, window)
      }
    },
    domStyle () {
      let { className = '' } = this.pNode
      const { left, right } = this.template
      const domArr = [
        { dom: '.iresume .iresume-left', style: [
          { color: left.fontColor },
          { backgroundColor: left.bgColor }
        ] },
        { dom: '.iresume .iresume-left .iresume-box-title', style: [
          { color: left.box.titleColor }
        ] },
        { dom: '.iresume .iresume-right', style: [
          { color: right.fontColor },
          { backgroundColor: right.bgColor }
        ] },
        { dom: '.iresume .iresume-right .iresume-infomation', style: [
          { color: right.box.infoColor }
        ] },
        { dom: '.iresume .iresume-right .iresume-box-title', style: [
          { color: right.box.titleColor }
        ] },
        { dom: '.iresume .iresume-right .iresume-hr', style: [
          { backgroundColor: right.box.hrColor }
        ] },
        { dom: '.iresume .iresume-right .iresume-project', style: [
          { color: right.box.project.titleColor }
        ] },
        { dom: '.iresume .iresume-right .iresume-project-url', style: [
          { color: right.box.project.urlColor }
        ] },
        { dom: '.iresume .iresume-right .iresume-enterprise-time', style: [
          { color: right.box.project.timeColor }
        ] },
        { dom: '.iresume .iresume-right .iresume-mini-title', style: [
          { color: right.box.mini.titleColor }
        ] }
      ]
      updateDom(domArr, className)
    },
    sameHeight () {
      let { className = '' } = this.pNode
      const leftDom = getDom(`${className} .iresume .iresume-left`),
        rightDom = getDom(`${className} .iresume .iresume-right`),
        baseDom = getDom(`${className}`)
      let pageHeight = document.body.scrollHeight || document.documentElement.scrollHeight ,
        pageWidth = document.body.scrollWidth || document.documentElement.scrollWidth,
        screenHeight =  document.documentElement.clientHeight || document.body.clientHeight,
        screenWidth =  document.documentElement.clientWidth || document.body.clientWidth,
        currentHeight = pageHeight - baseDom.offsetTop
      let mainHeight = `${currentHeight}px`
      if (screenWidth > 700 && currentHeight <= screenHeight) mainHeight = `${screenHeight * 0.98}px`
      baseDom.style.height = `${currentHeight}px`
      rightDom.style.height = leftDom.style.height = mainHeight
    },
    hrefTo (url) {
      window.open(url)
    }
  }
}