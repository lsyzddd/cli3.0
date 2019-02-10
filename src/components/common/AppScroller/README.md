better-scroll 是一款重点解决移动端（已支持 PC）各种滚动场景需求的插件。它的核心是借鉴的 iscroll 的实现，它的 API 设计基本兼容 iscroll，在 iscroll 的基础上又扩展了一些 feature 以及做了一些性能优化。

better-scroll 是基于原生 JS 实现的，不依赖任何框架。它编译后的代码大小是 63kb，压缩后是 35kb，gzip 后仅有 9kb，是一款非常轻量的 JS lib。

better-scroll 托管在 Npm 上，执行如下命令安装：

npm install better-scroll --save

接下来就可以在代码中引入了，webpack 等构建工具都支持从 node_modules 里引入代码：

import BScroll from 'better-scroll'

如果是 ES5 的语法，如下：

var BScroll = require('better-scroll')

better-scroll 也支持直接用 script 加载的方式，加载后会在 window 上挂载一个 BScroll 的对象。

你可以直接用：https://unpkg.com/better-scroll@1.0.1/dist/bscroll.min.js 这个地址。也可以把 dist 目录下的文件拷贝出去发布到自己的 cdn 服务器。

docs   https://ustbhuangyi.github.io/better-scroll/#/


本人修改的组件使用方式如下：

```
<template>
	<app-scroller
	  ref="scroller"
	  :bounce="true"
	  :scrollbar="true"
	  :pullDownRefresh="true"
	  :pullUpLoad="true"
	  @on-pulling-down="pullingDown"
	  @on-pulling-up="pullingUp">
	  	<div slot></div>
	</app-scroller>
</template>

<script>
/*此处引入该组件 import ... from ...*/
export default {
	methods: {
		pullingDown: function() {
			/* 
				axios请求
				根据返回结果设置scroller是否完成下拉刷新
				如果完成下拉刷新,调用
				this.$refs.scroller && this.$refs.scroller.forceUpdate();
			*/

		},
		pullingUp: function() {
			/*
				axios请求
				根据返回结果设置scroller是否完成上拉加载
				如果完成上拉加载
					1: 完成上拉加载，且不再允许上拉加载:
					this.$refs.scroller && this.$refs.scroller.forceUpdate();
					this.$refs.scroller && this.$refs.scroller.disablePullUp();

					2: 完成上拉加载，且允许上拉加载:
					this.$refs.scroller && this.$refs.scroller.forceUpdate();
					this.$refs.scroller && this.$refs.scroller.enablePullUp();
			 */
		}
	},
	components: {
		/*组件名称 ...*/
	}
}	
</script>
```
