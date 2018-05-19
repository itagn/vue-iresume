# vue-iresume

<p>
  <a href="https://www.npmjs.com/package/vue-iresume.svg"><img src="https://img.shields.io/npm/dm/vue-iresume.svg" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/vue-iresume.svg"><img src="https://img.shields.io/npm/v/vue-iresume.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/vue-iresume.svg"><img src="https://img.shields.io/npm/l/vue-iresume.svg" alt="License"></a>
</p>

## 介绍
:rocket: 用vue组件制作的可爱简历模板的  

简历提供了功能如下：

    1. 快速制作不同风格的在线简历
    2. 简历支持鼠标滚轮方法、缩小
    3. 简历支持拖拽功能和层级关系
    4. 一个页面支持多个简历
    5. 可以个性化设计简历
    6. 不需要的模块不带入模块数据既可
    7. 可以git clone或者通过npm安装后修改源码的themes.json配置你想要的主题风格

目前只封装了部分主题，你可以git clone到本地，然后修改theme文件夹的themes.json，制作私人主题  
也可以使用组件提供的主题，主题名：blue、pink、orange、purple
## DEMO
[DEMO](https://itagn.github.io/vue-iresume/dist)  

## 安装
```text
//  by npm
$ npm install vue-iresume --save
//  by cnpm
$ cnpm install vue-iresume --save
//  by yarn
$ yarn add vue-iresume --save
```

## 使用  
example文件夹可以指导你的使用  
在example文件夹已经添加example/Demo.vue   可以把简历的详细内容提取成json文件，如example/resume/resume.json  
简历的背景可以换成图片，如背景图example/img/bg1.jpg
```javascript
<template>
    <iresume :pData="resumeData" class="resume" :pNode="resumeNode" :index="zIndex" @syncZIndex="saveZIndex"></iresume>
</template>
<script>
import { Iresume } from 'vue-iresume'
export default {
    components: {
        Iresume
    },
    data() {
        return {
            resumeData: {
                zIndex: 1,
                user: {
                    name: "itagn",
                    avatars: "头像地址",
                    contacts: [
                        { name: "电话", "value": "xxxxxxxxxx" }
                    ],
                    applications: ["xx工程师"],
                    introductions: ["自我评价"],
                    infomations: [{ name: "姓名", "value": "itagn" }],
                    enterprises: [
                        {
                            name: "xxxx有限公司",
                            startTime: "2018/x",
                            endTime: "2018/x",
                            jobs: ["码代码"]
                        }
                    ],
                    projects: [
                        {
                            name: "团队项目xx系统",
                            startTime: "2018/x",
                            endTime: "2018/x",
                            introduction: "团队项目介绍",
                            working: "工作量",
                            url: "项目相关链接"
                        }
                    ],
                    personalProjects: [
                        {
                            name: "个人项目xx系统",
                            startTime: "2018/x",
                            endTime: "2018/x",
                            introduction: "私人项目介绍",
                            working: "工作量",
                            url: "项目相关链接"
                        }
                    ],
                    skills: [
                        {
                        name: "javascript",
                        introduction: "详细介绍"
                        }
                    ]
                }
            },
            resumeNode: {
                className: '.resume',
                theme: 'blue'
            }
        }
    },
    methods: {
        saveZIndex (data) {
            this.zIndex = data
        }
    }
}
</script>
<style></style>
```

## 接口

- `pData`   


        type: Object
        Default: {
            user: {
                name: "itagn",  //  谁的简历
                avatars: "头像地址",  //  头像url，默认是一个可爱的二次元萌妹动图
                contacts: [
                    { name: "电话", "value": "xxxxxxxxxx" }  //  联系方式模块
                ],
                applications: ["xx工程师"],  //  应聘岗位模块
                introductions: ["自我评价"],  //  自我评价模块，可以省略
                infomations: [{ name: "姓名", "value": "itagn" }],  //  个人信息模块
                enterprises: [  //  工作经验模块，可以省略
                    {
                        name: "xxxx有限公司",   //  公司名
                        startTime: "2018/x",  //  入职时间
                        endTime: "2018/x",  //  离职时间
                        jobs: ["码代码"]  //  工作内容
                    }
                ],
                projects: [  //  团队项目模块，可以省略
                    {
                        name: "团队项目xx系统",  //  项目名
                        startTime: "2018/x",  //  项目起始时间
                        endTime: "2018/x",  //  项目结束时间
                        introduction: "团队项目介绍",  //  项目简介
                        working: "工作量",  //  项目中的工作量
                        url: "项目相关链接"  //  项目相关链接，可以省略
                    }
                ],
                personalProjects: [  //  个人项目模块，可以省略
                    {
                        name: "个人项目xx系统",  //  项目名
                        startTime: "2018/x",  //  项目起始时间
                        endTime: "2018/x",  //  项目结束时间
                        introduction: "私人项目介绍",  //  项目简介
                        working: "工作量",  //  项目中的工作量
                        url: "项目相关链接"  //  项目相关链接，可以省略
                    }
                ],
                skills: [  //  技能模块，可以省略
                    {
                        name: "javascript",  //  技术
                        introduction: "详细介绍"  //  详细介绍，可以省略
                    }
                ]
            }
        }


- `pNode` 


        type: Object
        Default: {
            className: '',  //  如果你在组件上添加了id或者class属性，对应填写className，一个页面展示多个简历需要添加标识
            theme: 'blue',  //  简历主题风格，默认为blue，其他值pink，orange，purple
            leftBackground: '',  //  简历左边背景，可以为图片地址或者颜色，默认使用主题风格
            leftColor: '',  //  简历左边字体颜色，默认使用主题风格
            rightBackground: '',  //  简历右边背景，可以为图片地址或者颜色，默认使用主题风格
            rightColor: ''  //  简历右边字体颜色，默认使用主题风格
        }

- `index` 


        type: Number
        describe：
            同步父组件的index数据，确认同一个页面多个简历能有正确的层级关系
            若一个页面只有一个简历时，则可以忽略该接口


## 事件
- `syncZIndex`


        当同一个页面多个简历时，需要确认层级关系，则子组件需要同步父组件的zIndex
        若一个页面只有一个简历时，则可以忽略该方法


## 贡献

1. Fork 它吧!
1. 创建你的个性分支: git checkout -b my-new-feature
1. 提交你的更改: git commit -am 'Add some feature'
1. Push到你的分支: git push origin my-new-feature
1. 提交一个pull request :D

## License
MIT © [itagn][1]  
作者: 微博 [@itagn][2] - Github [@itagn][3] 

[1]: https://www.npmjs.com/~itagn
[2]: https://weibo.com/p/1005053782707172
[3]: https://github.com/itagn
