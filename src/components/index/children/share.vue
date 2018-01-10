<template>
	<div class="share">
		
		<group title="发表你此时此刻的感想" class="share-title">
			<x-input placeholder="输入标题"></x-input>
			<x-textarea placeholder="心情" :rows="5" :cols="10"></x-textarea>
		</group>
		<ul class="img-list">
			<li style="background-image: url(../../../../static/image/1.jpg);
				background-position: center;
				background-size:cover;
				background-repeat: no-repeat;
				">
				<div class="remove">
					删除
				</div>
			</li>
			<li style="background-image: url(../../../../static/image/2.jpg);
				background-position: center;
				background-size:cover;
				background-repeat: no-repeat;
				">
				<div class="remove">
					删除
				</div>
				
			</li>
		
		<li class="uploadfile">
			<img src="../../../../static/image/timg.jpg"/>
			<input type="file"  v-on:change="upfile()"  ref="file" />
		</li>
			
		</ul>



	</div>
</template>

<script>
	import { XTextarea, XInput, Group } from "vux";

	export default {
		name: "share",
		data() {
			return {
				msg: 1,
				files:null
			}
		},
		components: {
			XTextarea,
			XInput,
			Group
		},
		mounted() {
			let path = this.$route.path
		},
		methods:{
			upfile:function(){
				var files=this.$refs.file.files[0];
				
				
				
				
				
				
			}
		}

	}
</script>

<style lang="less" scoped="scoped">
	.share-title>.weui-cells__title {
		color: #666666;
	}
	.img-list{
		width:100%;
		display: -webkit-box;
		li{
			width:33.3%;
			padding-bottom:33.3%;
			height:0;
			border:1px dashed #E2E2E4;
			position: relative;
			img{
				display: block;
				width: 100%;
			}
		}
	}
	.remove{
		position:absolute;
		bottom:0;
		text-align: center;
		width:100%;
		line-height:24px;
		background: linear-gradient(top ,#000 ,#999);
		color:white;
		font-size:12px;
	}
	.uploadfile{
		position: relative;
		input{
			position: absolute;
			display: block;
			width:100%;
			height:100%;
			background:red;
			top:0;
			left:0;
			opacity: 0;
		}
	}
	
	
</style>