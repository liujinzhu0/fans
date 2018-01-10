<template>
	<div>

		<panel v-for="(item,key) in 10"
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

	import { Panel } from "vux";

	export default {
		name: "Attention",
		data() {
			return {
				type: '5',
				list: [ {
					src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
					title: 'boys',
					desc: '每天二货一点'
					
				}]
			}
		},
		components: {
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

</style>