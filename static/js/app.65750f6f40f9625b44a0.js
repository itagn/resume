webpackJsonp([1],{"4ln8":function(e,t){e.exports={blue:{left:{bgColor:"#00a1d6",fontColor:"#fff",box:{titleColor:"#fff"}},right:{bgColor:"#fff",fontColor:"#000",box:{infoColor:"#00a1d6",titleColor:"#00a1d6",hrColor:"#5ba4e5",project:{titleColor:"#00a1d6",urlColor:"#9966cc"},mini:{titleColor:"#5ba4e5"}}}},orange:{left:{bgColor:"#f17c67",fontColor:"#fff",box:{titleColor:"#fff"}},right:{bgColor:"#fff",fontColor:"#000",box:{infoColor:"#f01b2d",titleColor:"#ff534d",hrColor:"#f01b2d",project:{titleColor:"#ff534d",urlColor:"#00a1d6"},mini:{titleColor:"#ff534d"}}}},purple:{left:{bgColor:"#9966cc",fontColor:"#fff",box:{titleColor:"#fff"}},right:{bgColor:"#fff",fontColor:"#000",box:{infoColor:"#8f1d78",titleColor:"#7f1874",hrColor:"#9966cc",project:{titleColor:"#7f1874",urlColor:"#f17c67"},mini:{titleColor:"#8f1d78"}}}},pink:{left:{bgColor:"#fcadc3",fontColor:"#fff",box:{titleColor:"#fff"}},right:{bgColor:"#fff",fontColor:"#000",box:{infoColor:"#fbb0c5",titleColor:"#faabc1",hrColor:"#fcadc3",project:{titleColor:"#faabc1",urlColor:"#00a1d6"},mini:{titleColor:"#fbb0c5"}}}},yellow:{left:{bgColor:"#ba874c",fontColor:"#fff",box:{titleColor:"#fff"}},right:{bgColor:"#fff",fontColor:"#000",box:{infoColor:"#ba874c",titleColor:"#ba874c",hrColor:"#de8100",project:{titleColor:"#e9ae6a",urlColor:"#00a1d6"},mini:{titleColor:"#e9ae6a"}}}}}},GeuX:function(e,t,i){e.exports=i.p+"static/img/avatars.cc4ca2e.gif"},KaSR:function(e,t){},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i("MVMM"),n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var s=i("Z0/y")({name:"App"},n,!1,function(e){i("SkfQ")},null,null).exports,a=i("zO6J"),r=i("ZLEe"),l=i.n(r),u=i("aA9S"),c=i.n(u),m=i("GeuX"),d=i.n(m),f=i("4ln8"),v=i.n(f),p=i("Q+Ik"),h=i.n(p),C=i("kfHR"),b=i.n(C),_=function(e,t){e.forEach(function(e){var i,o=(i=(t+" "+e.dom).trim(),document.querySelectorAll(i));b()(o).forEach(function(t){e.style.forEach(function(e){h()(e).forEach(function(e){t.style[e[0]]=e[1]})})})})},g=function(e){return{x:e.clientX,y:e.clientY}},x=function(e){var t=!1,i={},o={};e.addEventListener("mousedown",function(e){t=!0,i=g(e)}),document.addEventListener("mouseup",function(e){t=!1}),document.addEventListener("mousemove",function(n){if(t){var s=(o=g(n)).x-i.x,a=o.y-i.y,r=function(e){var t=e.style,i=t.left,o=void 0===i?0:i,n=t.top,s=void 0===n?0:n;return{x:parseInt(o),y:parseInt(s)}}(e),l=r.x+s,u=r.y+a;e.style.left=l+"px",e.style.top=u+"px",i=o}})},y={props:{pData:{type:Object},pNode:{type:Object},index:{type:Number}},data:function(){return{user:{},template:{},scale:1,zIndex:1}},created:function(){this.init()},mounted:function(){this.domStyle(),this.windowEvents()},methods:{init:function(){var e=this.pData.user,t=void 0===e?{}:e;this.user=c()({},t),this.user.avatars=this.user&&this.user.avatars&&this.user.avatars.length>0?this.user.avatars:d.a;var i="blue";this.pNode&&this.pNode.theme&&l()(v.a).includes(i)&&(i=this.pNode.theme),this.template=v.a[i]},windowEvents:function(){var e,t=this.pNode.className,i=(e=(void 0===t?".iresumex":t)+" .iresume",document.querySelector(e));this.initPos(i),x(i),this.grabToggle(i);this.scaleToggle(i,.1)},initZIndex:function(e){this.zIndex=this.index+1,e.style.zIndex=this.zIndex,this.$emit("syncZIndex",this.zIndex)},grabToggle:function(e){var t=this;e.addEventListener("mousedown",function(){t.initZIndex(e),e.style.cursor="grabbing",e.style.cursor="-webkit-grabbing"}),e.addEventListener("mouseup",function(){e.style.cursor="grab",e.style.cursor="-webkit-grab"})},ctrlScroll:function(e,t,i){this.scale*=t?1+i:1-i,this.initZIndex(e),e.style.transform="scale("+this.scale+")",e.style.webkitTransform="scale("+this.scale+")"},scaleToggle:function(e,t){var i=this,o=function(e){((e=e||window.event).wheelDelta||e.detail)&&e.ctrlKey&&(e.returnValue=!1)};document.addEventListener("DOMMouseScroll",o,!1),window.onmousewheel=document.onmousewheel=o;var n=function(o){(o=o||window.event).wheelDelta&&o.ctrlKey?(o.returnValue=!1,i.ctrlScroll(e,o.wheelDelta>0,t)):o.detail&&o.ctrlKey&&(o.returnValue=!1,i.ctrlScroll(e,o.detail>0,t))};e.addEventListener("DOMMouseScroll",n,!1),e.onmousewheel=n},initPos:function(e){e.style.top=e.scrollTop,e.style.left=e.scrollLeft},getMidIcon:function(e){return"icon-mid icon-"+e},getSmallIcon:function(e){return"icon-small icon-"+e},domStyle:function(){var e=this.pNode,t=e.className,i=void 0===t?".iresumex":t,o=e.leftBackground,n=void 0===o?"":o,s=e.leftColor,a=void 0===s?"":s,r=e.rightBackground,l=void 0===r?"":r,u=e.rightColor,c=void 0===u?"":u,m=this.template,d=m.left,f=m.right,v=d.bgColor,p=f.bgColor;""!==n&&(v="url("+n+") repeat"),""===a&&(a=d.fontColor),""!==l&&(p="url("+l+") repeat"),""===c&&(c=f.fontColor);var h=[{dom:".iresume .iresume-left",style:[{color:a},{background:v}]},{dom:".iresume .iresume-left .iresume-box-title",style:[{color:d.box.titleColor}]},{dom:".iresume .iresume-left .iresume-avatars .iresume-img",style:[{backgroundImage:"url("+this.user.avatars+")"},{backgroundSize:"100% 100%"}]},{dom:".iresume .iresume-right",style:[{color:c},{background:p}]},{dom:".iresume .iresume-right .iresume-infomation",style:[{color:f.box.infoColor}]},{dom:".iresume .iresume-right .iresume-box-title",style:[{color:f.box.titleColor}]},{dom:".iresume .iresume-right .icon-star2",style:[{color:f.box.titleColor}]},{dom:".iresume .iresume-right .iresume-hr",style:[{background:f.box.hrColor}]},{dom:".iresume .iresume-right .iresume-project",style:[{color:f.box.project.titleColor}]},{dom:".iresume .iresume-right .iresume-project-url",style:[{color:f.box.project.urlColor}]},{dom:".iresume .iresume-right .iresume-enterprise-time",style:[{color:f.box.project.titleColor}]},{dom:".iresume .iresume-right .iresume-mini-title",style:[{color:f.box.mini.titleColor}]}];_(h,i)},hrefTo:function(e){window.open(e)}}},T={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"iresumex"},[i("div",{staticClass:"iresume"},[i("div",{staticClass:"iresume-left"},[e._m(0),e._v(" "),i("div",{staticClass:"iresume-username"},[e._v("\n        "+e._s(e.user.name)+"的简历\n      ")]),e._v(" "),e._l(e.user.leftModules,function(t,o){return i("div",{key:o,staticClass:"iresume-box"},[i("div",{staticClass:"iresume-box-title"},[i("i",{staticClass:"icon-star icon-mid"}),e._v(" "),i("span",{staticClass:"iresume-box-txt"},[e._v(e._s(t.moduleName))])]),e._v(" "),0===t.moduleType?i("div",{staticClass:"iresume-box-content"},[i("ul",e._l(t.data,function(t,o){return i("li",{key:o,staticClass:"concat-box"},[t.icon?i("i",{class:e.getSmallIcon(t.icon)}):e._e(),e._v(" "),i("span",{staticClass:"concat-txt"},[e._v(e._s(t.name)+"："+e._s(t.value))]),e._v(" "),t.url?i("span",{staticClass:"concat-link",on:{click:function(i){e.hrefTo(t.url)}}},[i("i",{staticClass:"icon-small icon-link iresume-pointer icon-pos"})]):e._e()])}))]):1===t.moduleType?i("div",{staticClass:"iresume-box-content"},[i("ul",e._l(t.data,function(t,o){return i("li",{key:o},[e._v("\n              "+e._s(t)+"\n            ")])}))]):2===t.moduleType?i("div",{staticClass:"iresume-box-content"},[i("ul",e._l(t.data,function(t,o){return i("li",{key:o},[i("div",{staticClass:"iresume-box-article"},[e._v(e._s(t))])])}))]):e._e()])})],2),e._v(" "),i("div",{staticClass:"iresume-right"},e._l(e.user.rightModules,function(t,o){return i("div",{key:o,staticClass:"iresume-box"},[i("div",{staticClass:"iresume-box-title"},[i("i",{staticClass:"icon-star icon-mid"}),e._v(" "),i("span",{staticClass:"iresume-box-txt"},[e._v(e._s(t.moduleName))])]),e._v(" "),i("div",{staticClass:"iresume-hr"}),e._v(" "),0===t.moduleType?i("div",{staticClass:"iresume-box-content"},[i("ul",e._l(t.data,function(t,o){return i("li",{key:o,staticClass:"info-box"},[t.icon?i("i",{class:e.getSmallIcon(t.icon)}):e._e(),e._v(" "),i("span",{staticClass:"concat-txt"},[e._v(e._s(t.name)+"："),i("span",{staticClass:"iresume-infomation"},[e._v(e._s(t.value))])])])}))]):1===t.moduleType?i("div",{staticClass:"iresume-box-content"},[i("ul",e._l(t.data,function(o,n){return i("li",{key:n},[i("div",{staticClass:"iresume-box-head"},[i("span",{staticClass:"iresume-project"},[i("span",{staticClass:"iresume-project-title"},[t.icon?i("i",{class:e.getSmallIcon(t.icon)}):e._e(),e._v("\n                    "+e._s(o.name)+"\n                  ")]),e._v(" "),o.url?i("span",{staticClass:"iresume-project-url iresume-pointer"},[i("i",{staticClass:"icon-link icon-small icon-pos",on:{click:function(t){e.hrefTo(o.url)}}})]):e._e()]),e._v(" "),i("span",{staticClass:"iresume-enterprise-time"},[e._v(e._s(o.startTime)+" ~ "+e._s(o.endTime))])]),e._v(" "),e._l(o.miniModule,function(t,o){return i("div",{key:o,staticClass:"iresume-box-box"},[i("div",{staticClass:"iresume-mini-title iresume-mini"},[e._v(e._s(t.miniName))]),e._v(" "),i("div",{staticClass:"iresume-enterprise-content iresume-mini"},[i("ol",e._l(t.data,function(t,o){return i("li",{key:o},[e._v("\n                      "+e._s(t)+"\n                    ")])}))])])})],2)}))]):2===t.moduleType?i("div",{staticClass:"iresume-box-content"},[i("ul",e._l(t.data,function(o,n){return i("li",{key:n,class:n!==t.data.length-1?"box-bottom":""},[i("div",{staticClass:"iresume-box-head"},[i("span",{staticClass:"iresume-project"},[i("span",{staticClass:"iresume-project-title"},[t.icon?i("i",{class:e.getSmallIcon(t.icon)}):e._e(),e._v("\n                    "+e._s(o.name)+"\n                  ")]),e._v(" "),o.url?i("span",{staticClass:"iresume-project-url iresume-pointer"},[i("i",{staticClass:"icon-link icon-small icon-pos",on:{click:function(t){e.hrefTo(o.url)}}})]):e._e()]),e._v(" "),i("span",{staticClass:"iresume-enterprise-time"},[e._v(e._s(o.startTime)+" ~ "+e._s(o.endTime))])]),e._v(" "),e._l(o.miniModule,function(t,o){return i("div",{key:o,staticClass:"iresume-box-box"},[i("div",{staticClass:"iresume-mini-title iresume-mini"},[e._v(e._s(t.miniName))]),e._v(" "),i("div",{staticClass:"iresume-box-article iresume-mini"},e._l(t.data,function(t,o){return i("div",{key:o},[e._v(e._s(t))])}))])})],2)}))]):3===t.moduleType?i("div",{staticClass:"iresume-box-content"},[i("ol",e._l(t.data,function(t,o){return i("li",{key:o},[e._v("\n              "+e._s(t)+"\n            ")])}))]):4===t.moduleType?i("div",{staticClass:"iresume-box-content"},e._l(t.data,function(t,o){return i("div",{key:o,staticClass:"iresume-box-article iresume-mini"},[e._v("\n            "+e._s(t)+"\n          ")])})):e._e()])}))])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"iresume-avatars"},[t("div",{staticClass:"iresume-img"})])}]};var N=i("Z0/y")(y,T,!1,function(e){i("KaSR")},"data-v-56b99d74",null).exports,w=i("qQZv"),k=i.n(w),S={data:function(){return{resumeData:{},resumeData2:{},resumeNode1:{},resumeNode2:{},zIndex:1,user:{theme:"vue-iresume",repo:"https://github.com/itagn/vue-iresume",name:"itagn",github:"https://github.com/itagn"},download:{fileName:"static/蔡东_前端开发_简历.pdf",downloadName:"resume.pdf",time:"2018年7月7日"}}},components:{Iresume:N},created:function(){this.resumeData=k.a.default,this.resumeNode1={className:".resume1",theme:"blue"}},methods:{saveZIndex:function(e){this.zIndex=e},runToTop:function(){var e=document.documentElement.scrollTop||document.body.scrollTop,t=(document.documentElement.scrollHeight||document.body.scrollHeight)/25,i=setInterval(function(){((e-=t)<=0||0===t)&&(e=0,clearInterval(i)),document.body.scrollTop=document.documentElement.scrollTop=e},20)}}},I={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"box"},[i("iresume",{staticClass:"resume1",attrs:{pData:e.resumeData,pNode:e.resumeNode1,index:e.zIndex},on:{syncZIndex:e.saveZIndex}}),e._v(" "),i("div",{staticClass:"info"},[e._v("\n    Created by\n    "),i("a",{attrs:{href:e.user.repo}},[e._v(e._s(e.user.theme))]),e._v(".\n    Made with OwO by \n    "),i("a",{attrs:{href:e.user.github}},[e._v(e._s(e.user.name))]),e._v(".\n    "),i("a",{attrs:{href:e.download.fileName,download:e.download.downloadName}},[e._v("PDF 下载")]),e._v(". 最后更新于"+e._s(e.download.time)+"\n  ")])],1)},staticRenderFns:[]};var M=i("Z0/y")(S,I,!1,function(e){i("xtLP")},null,null).exports;o.a.use(a.a);var E=new a.a({mode:"history",routes:[{path:"*",name:"demo",component:M}]});o.a.config.productionTip=!1,new o.a({el:"#app",router:E,components:{App:s},template:"<App/>"})},SkfQ:function(e,t){},qQZv:function(e,t){e.exports={default:{user:{name:"蔡东",avatars:"https://s.gravatar.com/avatar/99d63f663ffc8ae252af7ecbcd58ec33?size=496&default=retro",leftModules:[{moduleName:"联系方式",moduleType:0,data:[{name:"电话",value:"15520489925",icon:"phone"},{name:"邮箱",value:"itagn@foxmail.com",icon:"email"},{name:"Github",value:"itagn",url:"https://github.com/itagn",icon:"github"},{name:"npm社区",value:"itagn",url:"https://www.npmjs.com/~itagn",icon:"npm"},{name:"技术博客",value:"itagn",url:"http://itagn.xyz",icon:"company"}]},{moduleName:"应聘岗位",moduleType:1,data:["前端开发工程师"]},{moduleName:"技能树",moduleType:2,data:["熟悉 ES5 + ES6","熟悉 HTML / CSS","熟悉 Vue2 + Vue-router + Vuex","了解 Koa2","了解 Webpack","了解 Scss / Less"]},{moduleName:"个人评价",moduleType:2,data:["热爱前端开发，有阅读前端相关书籍的习惯，不定期会根据看到的书籍、文章、自己遇到的问题写技术博客","希望为开源社区做贡献，有个人想法的时候会在npm社区，发布并持续维护一些看起来不是很实用的前端组件和Node.js应用",""]}],rightModules:[{moduleName:"基础信息",moduleType:0,data:[{name:"姓名",value:"蔡东",icon:"user"},{name:"出生年月",value:"1994.12",icon:"time"},{name:"性别",value:"男",icon:"sex"},{name:"地址",value:"四川成都",icon:"address"},{name:"工作年限",value:"1年",icon:"time"}]},{moduleName:"教育背景",moduleType:0,data:[{name:"毕业院校",value:"电子科技大学（985）",icon:"school"},{name:"起止年月",value:"2013.9 - 2017.7",icon:"time"},{name:"学历",value:"本科",icon:"education"},{name:"专业",value:"计算机科学与技术",icon:"major"}]},{moduleName:"工作经验",moduleType:1,icon:"company",data:[{name:"中移物联网有限公司",url:"http://iot.10086.cn/introduction/index/name/introduction",startTime:"2017/7",endTime:"至今",miniModule:[{miniName:"工作内容",data:["使用Vue2相关技术栈进行前端页面的构建","使用Koa2进行后端接口开发","与后端，测试，UI，产品经理联调修改bug","旧项目的维护、参与到新项目的开发"]}]}]},{moduleName:"团队项目",moduleType:2,icon:"project",data:[{name:"钱江摩托智能后台管理系统",startTime:"2017/12",endTime:"2018/2",miniModule:[{miniName:"项目介绍",data:["钱江摩托项目的后台管理系统，为管理员提供用户数据、摩托信息、报警等功能。"]},{miniName:"技术栈",data:["Koa2 + Nunjucks + MongoDB + Fis3"]},{miniName:"项目职责",data:["1.登陆首页以及相关接口。","2.修改个人信息、密码基础模块页面以及相关接口。","3.账户管理页面以及相关接口。"]}]},{name:"全链路监控",startTime:"2018/2",endTime:"2018/4",miniModule:[{miniName:"项目介绍",data:["根据用户的操作在网络通信的每个环节注入信息，获取相关数据计算网络各个部分的耗时、前后依赖等，从不同纬度去分析数据以便于发现项目瓶颈。对黑盒数据进行可视化展示，展示出用户操作的Trace路线、Span详情、操作拓扑图以及相关信息等。"]},{miniName:"技术栈",data:["Vue2全家桶 + Element-ui + Echarts / Ant-design-pro + Antd + Antv"]},{miniName:"项目职责",data:["1.可视化组件、公共组件以及Antd不提供的组件的封装。","2.Trace和依赖链注册中心页面，注册之后可以查询或者运用到链路监控中。","3.Trace查询和依赖链查询页面，根据生成的用户操作来显示Trace信息和用户操作拓扑图。"]}]},{name:"OneNet和物-SAAS",url:"https://open.iot.10086.cn/hewu#/",startTime:"2018/4",endTime:"至今",miniModule:[{miniName:"项目介绍",data:["基于部门核心平台OneNet开发，项目为其中的SAAS网站。为开发者提供产品开发应用流程，真实设备与虚拟设备的调试，于2018年6月下旬上线，目前项目仍在迭代中。"]},{miniName:"技术栈",data:["Vue2全家桶 + Element-ui"]},{miniName:"项目职责",data:["1.应用开发流程的批量生产环节，开发者开发产品的审核流程。","2.用户数据反馈中心，根据问题类型等查询用户反馈，以及相关设备信息。","3.开发文档模块，上线版本为静态文档，目前正在重构为动态文档中。"]}]}]},{moduleName:"个人项目",moduleType:2,icon:"github",data:[{name:"东东么么哒 - 个人论坛",url:"https://github.com/itagn/dongdongmemeda",startTime:"2017/9",endTime:"2017/11",miniModule:[{miniName:"项目介绍",data:["个人网站（未上线），初衷为了做成自己的技术博客，在借鉴知乎和贴吧的设计，以及添加了登陆注册、管理员权限功能之后被重新定义为个人网站。技术栈采用的Vue2+Koa2+MongoDB+Redis搭建的前后端分离项目。"]}]},{name:"vue-iresume",url:"https://github.com/itagn/vue-iresume",startTime:"2018/5",endTime:"至今",miniModule:[{miniName:"项目介绍",data:["开源的一个vue组件，在线简历通过该组件编译而成。经过多个版本的迭代样式逐渐美化，也丰富了很多功能，如任意拖拽、ctrl+鼠标滚动放大缩小、多个简历保持不同层级关系等。目前只有中文文档，之后版本会补充和完善英文文档。"]}]},{name:"基于DES加密的即时通信聊天系统",url:"https://github.com/itagn/InstantMessageSystem",startTime:"2017/1",endTime:"2017/5",miniModule:[{miniName:"项目介绍",data:["本科毕业设计，运行在windows系统上的应用，客户端和服务器都采用Java编写，基于TCP的socket实现点对点的实时通信聊天系统，提供在线离线实时消息、好友管理、简单的传输文件。技术栈采用的Java+MySQL。"]}]}]}]}}}},xtLP:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.65750f6f40f9625b44a0.js.map