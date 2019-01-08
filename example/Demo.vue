<template>
  <div class="box">
    <iresume :pData="resumeData" class="resume1" :pNode="resumeNode1" @syncZIndex="saveZIndex" :index="zIndex"></iresume>
    <iresume :pData="resumeData2" class="resume2" :pNode="resumeNode2" @syncZIndex="saveZIndex" :index="zIndex"></iresume>
    <iresume :pData="resumeData2" class="resume3" :pNode="resumeNode3" @syncZIndex="saveZIndex" :index="zIndex"></iresume>
    <iresume :pData="resumeData2" class="resume4" :pNode="resumeNode4" @syncZIndex="saveZIndex" :index="zIndex"></iresume>
    <iresume :pData="resumeData2" class="resume5" :pNode="resumeNode5" @syncZIndex="saveZIndex" :index="zIndex"></iresume>
    <iresume :pData="resumeData2" class="resume6" :pNode="resumeNode6" @syncZIndex="saveZIndex" :index="zIndex"></iresume>
    <div class="top" @click="runToTop">Top</div>
    <div class="info">
      Created by
      <a :href="user.repo" target="_blank">{{ user.theme }}</a>.
      Made with <i class="heart">&hearts;</i> by 
      <a :href="user.github" target="_blank">{{ user.name }}</a>. 最后更新于{{ time }}
      <a @click="print">打印</a>
    </div>
  </div>
</template>
<script>
import Iresume from '../src/vue-iresume'
import resume from './resume/resume.json' 
import bgImg from './img/bg.jpg'
import bgImg1 from './img/bg1.jpg'
import bgImg2 from './img/bg2.jpg'
export default {
  data() {
    return {
      resumeData: {},
      resumeData2: {},
      resumeNode1: {},
      resumeNode2: {},
      zIndex: 1,
      user:{
        theme: 'vue-iresume',
        repo: 'https://github.com/itagn/vue-iresume',
        name: 'itagn',
        github: 'https://github.com/itagn'
      },
      time: ''
    }
  },
  components: {
    Iresume
  },
  created () {
    this.resumeData = resume.default
    this.resumeData2 = resume.custom
    this.resumeNode1 = {
      className: '.resume1',
      theme: 'blue',
      cols: 2,
      avatars: true
    }
    this.resumeNode2 = {
      className: '.resume2',
      theme: 'purple',
      cols: 1,
      avatars: true
    }
    this.resumeNode3 = {
      className: '.resume3',
      theme: 'pink',
      leftColor: '#334455',
      leftBackground: bgImg,
      cols: 3,
      avatars: true
    }
    this.resumeNode4 = {
      className: '.resume4',
      theme: 'orange',
      cols: 1,
      avatars: false
    }
    this.resumeNode5 = {
      className: '.resume5',
      theme: 'pink',
      leftBackground: bgImg1,
      rightBackground: bgImg2,
      leftColor: '#334455',
      rightColor: '#334455',
      cols: 3,
      avatars: true
    }
    this.resumeNode6 = {
      className: '.resume6',
      theme: 'yellow',
      cols: 2,
      avatars: false
    }
    const d = new Date()
    this.time = `${d.getFullYear()}年${d.getMonth()+1}月${d.getDate()}日`
  },
  methods: {
    saveZIndex (data) {
      //  同步多个组件的z-index
      this.zIndex = data
    },
    print () {
      const info = document.querySelector('.info')
      info.style.display = 'none'
      const urls = document.querySelectorAll('.icon-link')
      Array.from(urls).forEach(v => {
        v.style.display = 'none'
      })
      window.print()
    },
    runToTop () {
      //  回到顶部
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
      const interval = 20
      const speed = scrollHeight / 25
      let timer = setInterval(() => {
        scrollTop -= speed
        if (scrollTop <= 0 || speed === 0) {
          scrollTop = 0
          clearInterval(timer)
        }
        document.body.scrollTop = document.documentElement.scrollTop = scrollTop
      }, interval)
    }
  }
}
</script>
<style>
.box {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 1100px;
  font-family: PingFang TC,Avenir Next,Helvetica,Arial,Hiragino Sans GB,Microsoft YaHei,sans-serif;
}
.top {
  position: fixed;
  left: 40px;
  bottom: 10px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  border-radius: 10%;
  background: #334455;
  color: #fff;
  user-select: none;
  font-family:  PingFang TC,Avenir Next,Helvetica,Arial,Hiragino Sans GB,Microsoft YaHei,sans-serif;
  z-index: 9999;
}
.info {
  text-align: center;
  margin: 10px 0 20px;
  font-size: 14px;
  color: #555;
}
a {
  color: #d43f57;
  text-decoration: none;
  cursor: pointer;
}
.heart {
  color: #d43f57;
  font-size: 1.4rem;
  vertical-align: middle;
}
</style>
