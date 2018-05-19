import avatars from './avatars.gif'
import themes from './themes.json'
import { getDom, getDoms, updateDom, scaleToggle, grabToggle } from '../util/tool.js'
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
      scale: 1,
      deviceMemory: 0
    }
  },
  created () {
    this.init()
    this.checkNavigator()
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
    checkNavigator () {
      let { deviceMemory = -1 } = window.navigator
      this.deviceMemory = deviceMemory
    },
    windowEvents () {
      let { className = '.iresumex' } = this.pNode
      const baseDom = getDom(`${className} .iresume`)
      grabToggle(baseDom)
      let { scale = 1 } = this
      let speed = 0.1
      this.scale = scaleToggle(baseDom, scale, speed)
    },
    domStyle () {
      let { className = '.iresumex', leftBackground = '', leftColor = '', rightBackground = '', rightColor = '' } = this.pNode
      const { left, right } = this.template
      let leftBg = left.bgColor, rightBg = right.bgColor
      if (leftBackground !== '') leftBg = `url(${leftBackground}) repeat`
      if (leftColor === '') leftColor = left.fontColor
      if (rightBackground !== '') rightBg = `url(${rightBackground}) repeat`
      if (rightColor === '') rightColor = right.fontColor
      const domArr = [
        { dom: '.iresume .iresume-left', style: [
          { color: leftColor },
          { background: leftBg }
        ] },
        { dom: '.iresume .iresume-left .iresume-box-title', style: [
          { color: left.box.titleColor }
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
          { color: right.box.project.timeColor }
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