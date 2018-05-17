import avatars from './avatars.gif'
export default {
  props: {
    pData: {
      type: Object
    }
  },
  data () {
    return {
      user: {},
      toTrans: false
    }
  },
  created () {
    let { user } = this.pData
    this.user = Object.assign({}, user)
    this.user.avatars = this.user && this.user.avatars && this.user.avatars.length > 0 ? this.user.avatars : avatars
  },
  mounted () {
    this.sameHeight()
    //  函数节流
    window.onresize = () => {
      this.throttle(this.sameHeight, window)
    }
  },
  methods: {
    throttle(method, context){
      clearTimeout(method.tId)
      method.tId = setTimeout(() => {
          method.call(context)
      }, 500)
    },
    getMax (...reset) {
      let arr = reset.map(val => parseInt(val))
      return Math.max.apply(null, arr)
    },
    getDom (name) {
      return document.querySelectorAll(name)
    },
    sameHeight () {
      const leftDom = this.getDom('.iresume .iresume-left')[0],
      rightDom = this.getDom('.iresume .iresume-right')[0]
      let leftHeight = leftDom.offsetHeight, rightHeight = rightDom.offsetHeight
      let maxHeight = this.getMax(leftHeight, rightHeight)
      if (parseInt(leftHeight) !== parseInt(rightHeight) && maxHeight === parseInt(leftHeight)) rightDom.style.height = `${maxHeight}px`
      if (parseInt(leftHeight) !== parseInt(rightHeight) && maxHeight === parseInt(rightHeight)) leftDom.style.height = `${maxHeight}px`
    },
    hrefTo (url) {
      window.open(url)
    }
  }
}