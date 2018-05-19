<template>
  <div>
    <iresume :pData="resumeData" class="resume1" :pNode="resumeNode1" @syncZIndex="saveZIndex" :index="zIndex"></iresume>
    <iresume :pData="resumeData" class="resume2" :pNode="resumeNode2" @syncZIndex="saveZIndex" :index="zIndex"></iresume>
    <iresume :pData="resumeData" class="resume3" :pNode="resumeNode3" @syncZIndex="saveZIndex" :index="zIndex"></iresume>
    <iresume :pData="resumeData" class="resume4" :pNode="resumeNode4" @syncZIndex="saveZIndex" :index="zIndex"></iresume>
    <iresume :pData="resumeData" class="resume5" :pNode="resumeNode5" @syncZIndex="saveZIndex" :index="zIndex"></iresume>
    <iresume :pData="resumeData" class="resume6" :pNode="resumeNode6" @syncZIndex="saveZIndex" :index="zIndex"></iresume>
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
    this.resumeNode1 = {
      className: '.resume1',
      theme: 'blue'
    }
    this.resumeNode2 = {
      className: '.resume2',
      theme: 'pink',
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
    //  同步多个组件的z-index
    saveZIndex (data) {
      this.zIndex = data
    }
  }
}
</script>
<style>
</style>
