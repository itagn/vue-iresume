<template>
  <div>
    <iresume :pData="resumeData" class="resume1" :pNode="resumeNode1"></iresume>
    <iresume :pData="resumeData" class="resume2" :pNode="resumeNode2"></iresume>
    <iresume :pData="resumeData" class="resume3" :pNode="resumeNode3"></iresume>
    <iresume :pData="resumeData" class="resume4" :pNode="resumeNode4"></iresume>
    <iresume :pData="resumeData" class="resume5" :pNode="resumeNode5"></iresume>
  </div>
</template>
<script>
import Iresume from './src/vue-iresume'
import bgImg from './img/bg.jpg'
import bgImg1 from './img/bg1.jpg'
import bgImg2 from './img/bg2.jpg'
export default {
  data() {
    return {
      resumeData: {},
      resumeNode1: {},
      resumeNode2: {}
    }
  },
  components: {
    Iresume
  },
  created () {
    this.resumeData = {
      user: {
        name: 'itagn',
        avatars: '',
        contacts: [
          { name: '电话', value: '155xxxx2048' },
          { name: '邮箱', value: '139xxxx847@qq.com' },
          { name: 'QQ', value: '139xxxx847' },
          { name: '微博', value: '一只彩笔东' }
        ],
        applications: ['前端开发工程师'],
        introductions: [
          '前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发',
          '前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发'
        ],
        infomations: [
          { name: '姓名', value: 'itagn' },
          { name: '学历', value: '本科' },
          { name: '毕业院校', value: '电子科技大学' },
          { name: '毕业年月', value: '2017/7' },
          { name: '专业', value: '计算机科学与技术' }
        ],
        enterprises: [
          {
            name: 'xxxx有限公司',
            startTime: '2017/7',
            endTime: '至今',
            jobs: [
              'coding',
              'coding',
              'coding',
              'coding'
            ]
          }
        ],
        projects: [
          {
            name: '项目管理系统',
            startTime: '2017/8',
            endTime: '2017/9',
            introduction: '前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发',
            working: '前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发'
          }
        ],
        personalProjects: [
          {
            name: '基于DES加密的即时通信聊天系统',
            startTime: '2017/1',
            endTime: '2017/5',
            introduction: '前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发',
            working: '前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发',
            url: 'https://github.com/itagn/InstantMessageSystem'
          }
        ],
        skills: [
          {
            name: 'javascript',
            introduction: ''
          },
          {
            name: 'nodejs',
            introduction: ''
          },{
            name: 'vuejs',
            introduction: ''
          }
        ]
      }
    }
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
  }
}
</script>
<style>
</style>
