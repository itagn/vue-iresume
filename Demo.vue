<template>
  <div>
    <iresume :pData="resumeData"></iresume>
  </div>
</template>
<script>
import Iresume from './src/vue-iresume'
export default {
  data() {
    return {
      resumeData: {}
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
          { name: '邮箱', value: 'itagn@foxmail.com' },
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
            name: '中移物联网有限公司',
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
            name: '基于DES加密的即时聊天通信聊天系统',
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
          }
        ]
      }
    }
  }
}
</script>
<style></style>
