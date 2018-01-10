<template>
	<div>
<x-header title="我发表的"></x-header>
		

		<panel v-for="(item,key) in 10" header="苗强发表"
			 :list="list" 
			 :type="type" 
			 @on-img-error="onImgError"
			 @on-click-item="aa"
			 :key="key"
			 >
		
		</panel>

	</div>

	</div>

</template>

<script>
	/*关注*/

	import { XHeader,Panel } from "vux";

	export default {
		name: "Attention",
		data() {
			return {
				type: '5',
				list: [ {
					src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
					title: '强哥的梦想，我们的梦',
					desc: '实现强哥的梦想，也是实现我们的梦想',
					meta: {
						source: '来源信息',
						date: '时间',
						other: '其他信息'
					}
				}]
			}
		},
		components: {
			XHeader,
			Panel
		},
		methods:{
			aa:function(){
				console.log("aaaa")
			},
			onImgError:function(){
				console.log("bb")
			}
		},
		mounted(){
			
		}

	}
</script>

<style>

