webpackJsonp([1],{"4ln8":function(e,t){e.exports={blue:{left:{bgColor:"#fff",fontColor:"#333",box:{titleColor:"#00a1d6"}},right:{bgColor:"#fff",fontColor:"#000",box:{infoColor:"#00a1d6",titleColor:"#00a1d6",hrColor:"#5ba4e5",project:{titleColor:"#00a1d6",urlColor:"#9966cc"},mini:{titleColor:"#5ba4e5"}}}},orange:{left:{bgColor:"#fff",fontColor:"#333",box:{titleColor:"#f17c67"}},right:{bgColor:"#fff",fontColor:"#000",box:{infoColor:"#f01b2d",titleColor:"#ff534d",hrColor:"#f01b2d",project:{titleColor:"#ff534d",urlColor:"#00a1d6"},mini:{titleColor:"#ff534d"}}}},purple:{left:{bgColor:"#fff",fontColor:"#333",box:{titleColor:"#9966cc"}},right:{bgColor:"#fff",fontColor:"#000",box:{infoColor:"#8f1d78",titleColor:"#7f1874",hrColor:"#9966cc",project:{titleColor:"#7f1874",urlColor:"#f17c67"},mini:{titleColor:"#8f1d78"}}}},pink:{left:{bgColor:"#fff",fontColor:"#333",box:{titleColor:"#fcadc3"}},right:{bgColor:"#fff",fontColor:"#000",box:{infoColor:"#fbb0c5",titleColor:"#faabc1",hrColor:"#fcadc3",project:{titleColor:"#faabc1",urlColor:"#00a1d6"},mini:{titleColor:"#fbb0c5"}}}},yellow:{left:{bgColor:"#fff",fontColor:"#333",box:{titleColor:"#ba874c"}},right:{bgColor:"#fff",fontColor:"#000",box:{infoColor:"#ba874c",titleColor:"#ba874c",hrColor:"#de8100",project:{titleColor:"#e9ae6a",urlColor:"#00a1d6"},mini:{titleColor:"#e9ae6a"}}}}}},Gahg:function(e,t){},GeuX:function(e,t,i){e.exports=i.p+"static/img/avatars.cc4ca2e.gif"},LrbV:function(e,t,i){e.exports=i.p+"static/img/bg.0f47381.jpg"},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("MVMM"),o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var s=i("Z0/y")({name:"App"},o,!1,function(e){i("SkfQ")},null,null).exports,n=i("zO6J"),r=i("kfHR"),l=i.n(r),m=i("ZLEe"),u=i.n(m),c=i("aA9S"),d=i.n(c),v=i("GeuX"),p=i.n(v),f=i("4ln8"),h=i.n(f),x=i("Q+Ik"),b=i.n(x),C=function(e,t){e.forEach(function(e){var i,a=(i=(t+" "+e.dom).trim(),document.querySelectorAll(i));l()(a).forEach(function(t){e.style.forEach(function(e){b()(e).forEach(function(e){t.style[e[0]]=e[1]})})})})},g=function(e){return{x:e.clientX,y:e.clientY}},_=function(e){var t=!1,i={},a={};e.addEventListener("mousedown",function(e){t=!0,i=g(e)}),document.addEventListener("mouseup",function(e){t=!1}),document.addEventListener("mousemove",function(o){if(t){var s=(a=g(o)).x-i.x,n=a.y-i.y,r=function(e){var t=e.style,i=t.left,a=void 0===i?0:i,o=t.top,s=void 0===o?0:o;return{x:parseInt(a),y:parseInt(s)}}(e),l=r.x+s,m=r.y+n;e.style.left=l+"px",e.style.top=m+"px",i=a}})},y={props:{pData:{type:Object},pNode:{type:Object},index:{type:Number}},data:function(){return{user:{},template:{},scale:1,zIndex:1}},created:function(){this.init()},mounted:function(){this.domStyle(),this.windowEvents()},methods:{init:function(){var e=this.pData.user,t=void 0===e?{}:e;this.user=d()({},t),this.user.avatars=this.user&&this.user.avatars&&this.user.avatars.length>0?this.user.avatars:p.a;var i="blue";this.pNode&&this.pNode.theme&&u()(h.a).includes(i)&&(i=this.pNode.theme),this.template=h.a[i]},windowEvents:function(){var e,t=this.pNode.className,i=(e=(void 0===t?".iresumex":t)+" .iresume",document.querySelector(e));this.initPos(i),_(i),this.grabToggle(i);this.scaleToggle(i,.1)},initZIndex:function(e){this.zIndex=this.index+1,e.style.zIndex=this.zIndex,this.$emit("syncZIndex",this.zIndex)},grabToggle:function(e){var t=this;e.addEventListener("mousedown",function(){t.initZIndex(e),e.style.cursor="grabbing",e.style.cursor="-webkit-grabbing"}),e.addEventListener("mouseup",function(){e.style.cursor="grab",e.style.cursor="-webkit-grab"})},ctrlScroll:function(e,t,i){this.scale*=t?1+i:1-i,this.initZIndex(e),e.style.transform="scale("+this.scale+")",e.style.webkitTransform="scale("+this.scale+")"},scaleToggle:function(e,t){var i=this,a=function(e){((e=e||window.event).wheelDelta||e.detail)&&e.ctrlKey&&(e.returnValue=!1)};document.addEventListener("DOMMouseScroll",a,!1),window.onmousewheel=document.onmousewheel=a;var o=function(a){(a=a||window.event).wheelDelta&&a.ctrlKey?(a.returnValue=!1,i.ctrlScroll(e,a.wheelDelta>0,t)):a.detail&&a.ctrlKey&&(a.returnValue=!1,i.ctrlScroll(e,a.detail>0,t))};e.addEventListener("DOMMouseScroll",o,!1),e.onmousewheel=o},initPos:function(e){e.style.top=e.scrollTop,e.style.left=e.scrollLeft},getMidIcon:function(e){return"icon-mid icon-"+e},getSmallIcon:function(e){return"icon-small icon-"+e},domStyle:function(){var e=this.pNode,t=e.className,i=void 0===t?".iresumex":t,a=e.leftBackground,o=void 0===a?"":a,s=e.leftColor,n=void 0===s?"":s,r=e.rightBackground,l=void 0===r?"":r,m=e.rightColor,u=void 0===m?"":m,c=this.template,d=c.left,v=c.right,p=d.bgColor,f=v.bgColor;""!==o&&(p="url("+o+") repeat"),""===n&&(n=d.fontColor),""!==l&&(f="url("+l+") repeat"),""===u&&(u=v.fontColor);var h=[{dom:".iresume .iresume-left",style:[{color:n},{background:p}]},{dom:".iresume .iresume-left .iresume-box-title",style:[{color:d.box.titleColor}]},{dom:".iresume .iresume-right",style:[{color:u},{background:f}]},{dom:".iresume .iresume-right .iresume-infomation",style:[{color:v.box.infoColor}]},{dom:".iresume .iresume-right .iresume-box-title",style:[{color:v.box.titleColor},{borderBottom:"1px solid "+v.box.hrColor}]},{dom:".iresume .iresume-right .icon-star2",style:[{color:v.box.titleColor}]},{dom:".iresume .iresume-right .iresume-project",style:[{color:v.box.project.titleColor}]},{dom:".iresume .iresume-right .iresume-project-url",style:[{color:v.box.project.urlColor}]},{dom:".iresume .iresume-right .iresume-enterprise-time",style:[{color:v.box.project.titleColor}]},{dom:".iresume .iresume-right .iresume-mini-title",style:[{color:v.box.mini.titleColor}]}];C(h,i)},hrefTo:function(e){window.open(e)}}},N={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"iresumex"},[i("div",{class:"iresume col"+e.pNode.cols},[1!==e.pNode.cols?i("div",{staticClass:"iresume-left"},[!1!==e.pNode.avatars?i("div",{staticClass:"iresume-avatars"},[i("img",{staticClass:"iresume-img",attrs:{src:e.user.avatars,alt:"avatars"}})]):e._e(),e._v(" "),i("div",{staticClass:"iresume-username"},[e._v("\n        "+e._s(e.user.name)+"的简历\n      ")]),e._v(" "),e._l(e.user.leftModules,function(t,a){return i("div",{key:a,staticClass:"iresume-box"},[i("div",{staticClass:"iresume-box-title"},[i("i",{staticClass:"icon-star icon-mid"}),e._v(" "),i("span",{staticClass:"iresume-box-txt"},[e._v(e._s(t.moduleName))])]),e._v(" "),0===t.moduleType?i("div",{staticClass:"iresume-box-content"},[i("ul",e._l(t.data,function(t,a){return i("li",{key:a,staticClass:"concat-box"},[t.icon?i("i",{class:e.getSmallIcon(t.icon)}):e._e(),e._v(" "),i("span",{staticClass:"concat-txt"},[e._v(e._s(t.name)+"："+e._s(t.value))]),e._v(" "),t.url?i("i",{staticClass:"icon-small icon-link",attrs:{title:t.url},on:{click:function(i){e.hrefTo(t.url)}}}):e._e()])}))]):1===t.moduleType?i("div",{staticClass:"iresume-box-content"},[i("ul",e._l(t.data,function(t,a){return i("li",{key:a},[e._v("\n              "+e._s(t)+"\n            ")])}))]):2===t.moduleType?i("div",{staticClass:"iresume-box-content"},[i("ul",e._l(t.data,function(t,a){return i("li",{key:a},[i("div",{staticClass:"iresume-box-article"},[e._v(e._s(t))])])}))]):e._e()])})],2):e._e(),e._v(" "),i("div",{staticClass:"iresume-right"},[1===e.pNode.cols&&!1!==e.pNode.avatars?i("div",{staticClass:"iresume-user-box"},[i("div",{staticClass:"iresume-avatars"},[i("img",{staticClass:"iresume-img",attrs:{src:e.user.avatars,alt:"avatars"}})]),e._v(" "),i("div",{staticClass:"iresume-username"},[e._v("\n          "+e._s(e.user.name)+"的简历\n        ")])]):e._e(),e._v(" "),e._l(e.user.rightModules,function(t,a){return i("div",{key:a,staticClass:"iresume-box"},[i("div",{staticClass:"iresume-box-title"},[i("i",{staticClass:"icon-star icon-mid"}),e._v(" "),i("span",{staticClass:"iresume-box-txt"},[e._v(e._s(t.moduleName))])]),e._v(" "),0===t.moduleType?i("div",{staticClass:"iresume-box-content"},[i("ul",e._l(t.data,function(t,a){return i("li",{key:a,staticClass:"info-box"},[t.icon?i("i",{class:e.getSmallIcon(t.icon)}):e._e(),e._v(" "),i("span",{staticClass:"concat-txt"},[e._v(e._s(t.name)+"："),i("span",{staticClass:"iresume-infomation"},[e._v(e._s(t.value))])]),e._v(" "),t.url?i("i",{staticClass:"icon-small icon-link",attrs:{title:t.url},on:{click:function(i){e.hrefTo(t.url)}}}):e._e()])}))]):1===t.moduleType?i("div",{staticClass:"iresume-box-content"},[i("ul",e._l(t.data,function(a,o){return i("li",{key:o},[i("div",{staticClass:"iresume-box-head"},[i("span",{staticClass:"iresume-project"},[i("span",{staticClass:"iresume-project-title"},[t.icon?i("i",{class:e.getSmallIcon(t.icon)}):e._e(),e._v("\n                    "+e._s(a.name)+"\n                  ")]),e._v(" "),a.url?i("i",{staticClass:"icon-link icon-small",attrs:{title:a.url},on:{click:function(t){e.hrefTo(a.url)}}}):e._e()]),e._v(" "),i("span",{staticClass:"iresume-enterprise-time"},[e._v(e._s(a.startTime)+" ~ "+e._s(a.endTime))])]),e._v(" "),e._l(a.miniModule,function(t,a){return i("div",{key:a,staticClass:"iresume-box-box"},[i("div",{staticClass:"iresume-mini-title iresume-mini"},[e._v(e._s(t.miniName))]),e._v(" "),i("div",{staticClass:"iresume-enterprise-content iresume-mini"},[i("ol",e._l(t.data,function(t,a){return i("li",{key:a},[e._v("\n                      "+e._s(t)+"\n                    ")])}))])])})],2)}))]):2===t.moduleType?i("div",{staticClass:"iresume-box-content"},[i("ul",e._l(t.data,function(a,o){return i("li",{key:o,class:o!==t.data.length-1?"box-bottom":""},[i("div",{staticClass:"iresume-box-head"},[i("span",{staticClass:"iresume-project"},[i("span",{staticClass:"iresume-project-title"},[t.icon?i("i",{class:e.getSmallIcon(t.icon)}):e._e(),e._v("\n                    "+e._s(a.name)+"\n                  ")]),e._v(" "),a.url?i("i",{staticClass:"icon-link icon-small",attrs:{title:a.url},on:{click:function(t){e.hrefTo(a.url)}}}):e._e()]),e._v(" "),i("span",{staticClass:"iresume-enterprise-time"},[e._v(e._s(a.startTime)+" ~ "+e._s(a.endTime))])]),e._v(" "),e._l(a.miniModule,function(t,a){return i("div",{key:a,staticClass:"iresume-box-box"},[i("div",{staticClass:"iresume-mini-title iresume-mini"},[e._v(e._s(t.miniName))]),e._v(" "),i("div",{staticClass:"iresume-box-article iresume-mini"},e._l(t.data,function(t,a){return i("div",{key:a},[e._v(e._s(t))])}))])})],2)}))]):3===t.moduleType?i("div",{staticClass:"iresume-box-content"},[i("ol",e._l(t.data,function(t,a){return i("li",{key:a},[e._v("\n              "+e._s(t)+"\n            ")])}))]):4===t.moduleType?i("div",{staticClass:"iresume-box-content"},e._l(t.data,function(t,a){return i("div",{key:a,staticClass:"iresume-box-article"},[e._v("\n            "+e._s(t)+"\n          ")])})):e._e()])})],2)])])},staticRenderFns:[]};var T=i("Z0/y")(y,N,!1,function(e){i("xQEy")},"data-v-84f65236",null).exports,w=i("ibDO"),k=i.n(w),I=i("LrbV"),j=i.n(I),M=i("RTib"),D=i.n(M),E=i("UyWY"),S=i.n(E),Z={data:function(){return{resumeData:{},resumeData2:{},resumeNode1:{},resumeNode2:{},zIndex:1,user:{theme:"vue-iresume",repo:"https://github.com/itagn/vue-iresume",name:"itagn",github:"https://github.com/itagn"},time:""}},components:{Iresume:T},created:function(){this.resumeData=k.a.default,this.resumeData2=k.a.custom,this.resumeNode1={className:".resume1",theme:"blue",cols:2,avatars:!0},this.resumeNode2={className:".resume2",theme:"purple",cols:1,avatars:!0},this.resumeNode3={className:".resume3",theme:"pink",leftColor:"#334455",leftBackground:j.a,cols:3,avatars:!0},this.resumeNode4={className:".resume4",theme:"orange",cols:1,avatars:!1},this.resumeNode5={className:".resume5",theme:"pink",leftBackground:D.a,rightBackground:S.a,leftColor:"#334455",rightColor:"#334455",cols:3,avatars:!0},this.resumeNode6={className:".resume6",theme:"yellow",cols:2,avatars:!1};var e=new Date;this.time=e.getFullYear()+"年"+(e.getMonth()+1)+"月"+e.getDate()+"日"},methods:{saveZIndex:function(e){this.zIndex=e},print:function(){document.querySelector(".info").style.display="none";var e=document.querySelectorAll(".icon-link");l()(e).forEach(function(e){e.style.display="none"}),window.print()},runToTop:function(){var e=document.documentElement.scrollTop||document.body.scrollTop,t=(document.documentElement.scrollHeight||document.body.scrollHeight)/25,i=setInterval(function(){((e-=t)<=0||0===t)&&(e=0,clearInterval(i)),document.body.scrollTop=document.documentElement.scrollTop=e},20)}}},z={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"box"},[i("iresume",{staticClass:"resume1",attrs:{pData:e.resumeData,pNode:e.resumeNode1,index:e.zIndex},on:{syncZIndex:e.saveZIndex}}),e._v(" "),i("iresume",{staticClass:"resume2",attrs:{pData:e.resumeData2,pNode:e.resumeNode2,index:e.zIndex},on:{syncZIndex:e.saveZIndex}}),e._v(" "),i("iresume",{staticClass:"resume3",attrs:{pData:e.resumeData2,pNode:e.resumeNode3,index:e.zIndex},on:{syncZIndex:e.saveZIndex}}),e._v(" "),i("iresume",{staticClass:"resume4",attrs:{pData:e.resumeData2,pNode:e.resumeNode4,index:e.zIndex},on:{syncZIndex:e.saveZIndex}}),e._v(" "),i("iresume",{staticClass:"resume5",attrs:{pData:e.resumeData2,pNode:e.resumeNode5,index:e.zIndex},on:{syncZIndex:e.saveZIndex}}),e._v(" "),i("iresume",{staticClass:"resume6",attrs:{pData:e.resumeData2,pNode:e.resumeNode6,index:e.zIndex},on:{syncZIndex:e.saveZIndex}}),e._v(" "),i("div",{staticClass:"top",on:{click:e.runToTop}},[e._v("Top")]),e._v(" "),i("div",{staticClass:"info"},[e._v("\n    Created by\n    "),i("a",{attrs:{href:e.user.repo,target:"_blank"}},[e._v(e._s(e.user.theme))]),e._v(".\n    Made with "),i("i",{staticClass:"heart"},[e._v("♥")]),e._v(" by \n    "),i("a",{attrs:{href:e.user.github,target:"_blank"}},[e._v(e._s(e.user.name))]),e._v(". 最后更新于"+e._s(e.time)+"\n    "),i("a",{on:{click:e.print}},[e._v("打印")])])],1)},staticRenderFns:[]};var L=i("Z0/y")(Z,z,!1,function(e){i("Gahg")},null,null).exports;a.a.use(n.a);var V=new n.a({mode:"history",routes:[{path:"*",name:"demo",component:L}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:V,components:{App:s},template:"<App/>"})},RTib:function(e,t,i){e.exports=i.p+"static/img/bg1.d06b71e.jpg"},SkfQ:function(e,t){},UyWY:function(e,t,i){e.exports=i.p+"static/img/bg2.d2c6594.jpg"},ibDO:function(e,t){e.exports={default:{user:{name:"itagn",avatars:"",leftModules:[{moduleName:"联系方式",moduleType:0,data:[{name:"电话",value:"155xxxx9925",icon:"phone"},{name:"邮箱",value:"itagn@foxmail.com",icon:"email"},{name:"Github",value:"itagn",url:"https://github.com/itagn",icon:"github"},{name:"npm社区",value:"itagn",url:"https://www.npmjs.com/~itagn",icon:"npm"},{name:"知乎",value:"东东么么哒",url:"https://www.zhihu.com/people/cai-dong-17/activities",icon:"zhihu"},{name:"微博",value:"一只彩笔东",url:"https://weibo.com/3782707172/profile",icon:"sina"},{name:"贴吧",value:"东东么么哒",url:"http://tieba.baidu.com/home/main?id=3ec3e4b89ce4b89ce4b988e4b988e593924536",icon:"tieba"}]},{moduleName:"应聘岗位",moduleType:1,data:["前端开发工程师"]},{moduleName:"技能树",moduleType:2,data:["ES5 + ES6","Vue2 + Vue-router + Vuex","Koa2","Webpack"]},{moduleName:"个人评价",moduleType:2,data:["前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发","前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发"]}],rightModules:[{moduleName:"基础信息",moduleType:0,data:[{name:"姓名",value:"itagn",icon:"user"},{name:"出生年月",value:"1994.12",icon:"time"},{name:"性别",value:"男",icon:"sex"},{name:"地址",value:"四川成都",icon:"address"}]},{moduleName:"教育背景",moduleType:0,data:[{name:"毕业院校",value:"电子科技大学",icon:"school"},{name:"起始年月",value:"2013.9 - 2017.7",icon:"time"},{name:"学历",value:"本科",icon:"education"},{name:"专业",value:"计算机科学与技术",icon:"major"}]},{moduleName:"工作经验",moduleType:1,icon:"company",data:[{name:"xx有限公司",url:"https://github.com/itagn/vue-iresume",startTime:"2017/7",endTime:"至今",miniModule:[{miniName:"工作内容",data:["使用vue2进行前端页面的构建","使用koa2进行后端接口开发","与后端，测试，UI，产品经理联调修改bug","旧项目的维护与新项目开发"]}]}]},{moduleName:"团队项目",moduleType:2,icon:"project",data:[{name:"xx系统",startTime:"2017/12",endTime:"2018/2",miniModule:[{miniName:"项目介绍",data:["前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发"]},{miniName:"项目职责",data:["前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发"]}]},{name:"xx系统",startTime:"2018/2",endTime:"2018/4",miniModule:[{miniName:"项目介绍",data:["前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发"]},{miniName:"项目职责",data:["前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发"]}]},{name:"xx系统",url:"https://github.com/itagn/vue-iresume",startTime:"2018/4",endTime:"2018/6",miniModule:[{miniName:"项目介绍",data:["前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发"]},{miniName:"项目职责",data:["前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发"]}]}]},{moduleName:"个人项目",moduleType:2,icon:"github",data:[{name:"基于DES加密的即时通信聊天系统",url:"https://github.com/itagn/InstantMessageSystem",startTime:"2017/1",endTime:"2017/5",miniModule:[{miniName:"项目介绍",data:["前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发"]},{miniName:"项目职责",data:["前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发"]}]},{name:"东东么么哒 - 个人论坛",url:"https://github.com/itagn/dongdongmemeda",startTime:"2017/9",endTime:"2017/11",miniModule:[{miniName:"项目介绍",data:["前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发"]},{miniName:"项目职责",data:["前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发"]}]}]}]}},custom:{user:{name:"自定义",avatars:"",leftModules:[{moduleName:"自定义模块",moduleType:0,data:[{name:"自定义",value:"自定义",url:"https://www.npmjs.com/package/vue-iresume"},{name:"自定义",value:"自定义"},{name:"自定义",value:"自定义",url:"https://www.npmjs.com/package/vue-iresume"},{name:"自定义",value:"自定义"}]},{moduleName:"自定义模块",moduleType:1,data:["前端开发工程师"]},{moduleName:"自定义模块",moduleType:2,data:["自定义","自定义","自定义"]},{moduleName:"自定义模块",moduleType:2,data:["前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发","前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发"]}],rightModules:[{moduleName:"自定义模块",moduleType:0,data:[{name:"自定义",value:"自定义"},{name:"自定义",value:"自定义"},{name:"自定义",value:"自定义"},{name:"自定义",value:"自定义"},{name:"自定义",value:"自定义"}]},{moduleName:"自定义模块",moduleType:1,icon:"project",data:[{name:"自定义",url:"https://www.npmjs.com/package/vue-iresume",startTime:"2018/x",endTime:"2018/x",miniModule:[{miniName:"自定义",data:["自定义","自定义","自定义","自定义"]}]}]},{moduleName:"自定义模块",icon:"project",moduleType:2,data:[{name:"自定义",url:"https://www.npmjs.com/package/vue-iresume",startTime:"2018/x",endTime:"2018/x",miniModule:[{miniName:"自定义",data:["前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发"]},{miniName:"自定义",data:["前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发"]}]},{name:"自定义",url:"https://www.npmjs.com/package/vue-iresume",startTime:"2018/x",endTime:"2018/x",miniModule:[{miniName:"自定义",data:["前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发"]},{miniName:"自定义",data:["前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发"]}]}]},{moduleName:"自定义模块",icon:"project",moduleType:2,data:[{name:"自定义",url:"https://www.npmjs.com/package/vue-iresume",startTime:"2018/x",endTime:"2018/x",miniModule:[{miniName:"自定义",data:["前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发"]},{miniName:"自定义",data:["前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发"]}]},{name:"自定义",url:"https://www.npmjs.com/package/vue-iresume",startTime:"2018/x",endTime:"2018/x",miniModule:[{miniName:"自定义",data:["前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发"]},{miniName:"自定义",data:["前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发"]}]}]},{moduleName:"自定义模块",moduleType:3,data:["自定义","自定义","自定义"]},{moduleName:"自定义模块",moduleType:4,data:["前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发","前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发前端开发"]}]}}}},xQEy:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.cdacb1f133e17fc7f0ae.js.map