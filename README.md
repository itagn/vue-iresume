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
    6. 所有模块实现自定义内容，通过左右两边不同模块的moduleType来区分模块的样式
    7. 可以git clone或者通过npm安装后修改源码的themes.json配置你想要的主题风格
    8. 所有模块并非都需要加载，按照你的需求来填写对应模块的数据

目前只封装了部分主题，你可以git clone到本地，然后修改theme文件夹的themes.json，制作私人主题  
也可以使用组件提供的主题，主题名：blue、pink、orange、purple、yellow
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
            zIndex: 1,
            resumeData: {
                user: {
                    name: "itagn",
                    avatars: "头像地址",
                    leftModules: [
                        {
                            moduleName: "联系方式",
                            moduleType: 0,
                            data: [
                                { name: "电话", "value": "xxxxxxxxxx" }
                            ]
                        },
                        {
                            moduleName: "应聘岗位",
                            moduleType: 1,
                            data: [
                                "xx工程师"
                            ]
                        },
                        {
                            moduleName: "个人评价",
                            moduleType: 2,
                            data: [
                                "自我评价"
                            ]
                        }
                    ],
                    rightModules: [
                        {
                            moduleName: "基础信息",
                            moduleType: 0,
                            data: [
                                { name: "姓名", value: "itagn" }
                            ]
                        },
                        {
                            moduleName: "工作经验",
                            moduleType: 1,
                            data: [
                                {
                                    name: "xxxx有限公司",
                                    startTime: "2018/x",
                                    endTime: "2018/x",
                                    miniModule: [
                                        {
                                            miniName: "工作内容",
                                            data: [
                                                "码代码"
                                            ]
                                        }
                                ]
                                }
                            ]
                        },
                        {
                            moduleName: "团队项目",
                            moduleType: 2,
                            data: [
                                {
                                    name: "团队项目xx系统",
                                    url: "项目相关链接",
                                    startTime: "2018/x",
                                    endTime: "2018/x",
                                    miniModule: [
                                        {
                                            miniName: "项目介绍",
                                            data: "团队项目介绍"
                                        },
                                        {
                                            miniName: "项目职责",
                                            data: "工作量"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            moduleName: "个人项目",
                            moduleType: 2,
                            data: [
                                {
                                    name: "个人项目xx系统",
                                    url: "项目相关链接",
                                    startTime: "2018/x",
                                    endTime: "2018/x",
                                    miniModule: [
                                        {
                                            miniName: "项目介绍",
                                            data: "团队项目介绍"
                                        },
                                        {
                                            miniName: "项目职责",
                                            data: "工作量"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            moduleName: "技能树",
                            moduleType: 3,
                            data: [
                                "javascript"
                            ]
                        },
                        {
                            moduleName: "自我评价",
                            moduleType: 4,
                            data: [
                                "自我评价文章段落"
                            ]
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
                leftModules: [  //  左边的模块，根据moduleType来区分不同的模块样式
                    {
                        moduleName: "联系方式",
                        moduleType: 0,
                        data: [
                            { name: "电话", "value": "xxxxxxxxxx" }
                        ]
                    },
                    {
                        moduleName: "应聘岗位",
                        moduleType: 1,
                        data: [
                            "xx工程师"
                        ]
                    },
                    {
                        moduleName: "个人评价",
                        moduleType: 2,
                        data: [
                            "自我评价"
                        ]
                    }
                ],
                rightModules: [  //  右边的模块，根据moduleType来区分不同的模块样式
                    {
                        moduleName: "基础信息",
                        moduleType: 0,
                        data: [
                            { name: "姓名", value: "itagn" }
                        ]
                    },
                    {
                        moduleName: "工作经验",
                        moduleType: 1,
                        data: [
                            {
                                name: "xxxx有限公司",
                                startTime: "2018/x",
                                endTime: "2018/x",
                                miniModule: [
                                    {
                                        miniName: "工作内容",
                                        data: [
                                            "码代码"
                                        ]
                                    }
                            ]
                            }
                        ]
                    },
                    {
                        moduleName: "团队项目",
                        moduleType: 2,
                        data: [
                            {
                                name: "团队项目xx系统",
                                url: "项目相关链接",  //  可以省略
                                startTime: "2018/x",
                                endTime: "2018/x",
                                miniModule: [
                                    {
                                        miniName: "项目介绍",
                                        data: "团队项目介绍"
                                    },
                                    {
                                        miniName: "项目职责",
                                        data: "工作量"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        moduleName: "个人项目",
                        moduleType: 2,
                        data: [
                            {
                                name: "个人项目xx系统",
                                url: "项目相关链接",  //  可以省略
                                startTime: "2018/x",
                                endTime: "2018/x",
                                miniModule: [
                                    {
                                        miniName: "项目介绍",
                                        data: "团队项目介绍"
                                    },
                                    {
                                        miniName: "项目职责",
                                        data: "工作量"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        moduleName: "技能树",
                        moduleType: 3,
                        data: [
                            "javascript"
                        ]
                    },
                    {
                        moduleName: "自我评价",
                        moduleType: 4,
                        data: [
                            "自我评价文章段落"
                        ]
                    }
                ]
            }
        }


- `pNode` 


        type: Object
        Default: {
            className: '',  //  如果你在组件上添加了id或者class属性，对应填写className，一个页面展示多个简历需要添加标识
            theme: 'blue',  //  简历主题风格，默认为blue，其他值pink，orange，purple，yellow
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
