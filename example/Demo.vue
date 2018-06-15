<template>
  <div>
    <iresume :pData="resumeData" class="resume1" :pNode="resumeNode1" @syncZIndex="saveZIndex" :index="zIndex"></iresume>
    <iresume :pData="resumeData2" class="resume2" :pNode="resumeNode2" @syncZIndex="saveZIndex" :index="zIndex"></iresume>
    <iresume :pData="resumeData2" class="resume3" :pNode="resumeNode3" @syncZIndex="saveZIndex" :index="zIndex"></iresume>
    <iresume :pData="resumeData2" class="resume4" :pNode="resumeNode4" @syncZIndex="saveZIndex" :index="zIndex"></iresume>
    <iresume :pData="resumeData2" class="resume5" :pNode="resumeNode5" @syncZIndex="saveZIndex" :index="zIndex"></iresume>
    <iresume :pData="resumeData2" class="resume6" :pNode="resumeNode6" @syncZIndex="saveZIndex" :index="zIndex"></iresume>
    <div class="top" @click="runToTop">Top</div>
  </div>
</template>
<script>
import { Iresume } from 'vue-iresume'
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
      zIndex: 1
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
      theme: 'blue'
    }
    this.resumeNode2 = {
      className: '.resume2',
      theme: 'pink',
      leftColor: '#334455',
      leftBackground: bgImg
    }
    this.resumeNode3 = {
      className: '.resume3',
      theme: 'pink',
      leftBackground: bgImg1,
      rightBackground: bgImg2,
      leftColor: '#334455',
      rightColor: '#334455'
    }
    this.resumeNode4 = {
      className: '.resume4',
      theme: 'purple'
    }
    this.resumeNode5 = {
      className: '.resume5',
      theme: 'orange'
    }
    this.resumeNode6 = {
      className: '.resume6',
      theme: 'yellow'
    }
  },
  methods: {
    saveZIndex (data) {
      //  同步多个组件的z-index
      this.zIndex = data
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
  font-family:  PingFang TC,Avenir Next,Helvetica,Arial,Hiragino Sans GB,Microsoft YaHei,sans-serif;
  z-index: 9999;
}
</style>
