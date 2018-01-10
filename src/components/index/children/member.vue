<template>
	<div class="member">
		<dl class="memberHeader">
			<dt><img src="../../../../static/image/2.jpg"/></dt>
			<dd>
				<ul>
					<li>boys</li>
					<li>暂无简介</li>
				</ul>
				<div>
					>
				</div>

			</dd>
		</dl>

		<ul class="attention">
			<li>
				<p>0</p>
				<p>动态</p>
			</li>
			<li>
				<p>	1</p>
				<p>	关注</p>
			</li>
			<li>
				<p>	0</p>
				<p>粉丝</p>
			</li>
		</ul>
		<group>
		    <cell-box is-link link="/set">设置</cell-box>
		    <cell-box is-link link="/my">我发表的</cell-box>
		    <cell-box is-link link="/attiention">我关注的</cell-box>
		</group>
	</div>

</template>

<script>
	import { Group,CellBox } from "vux"

	export default {
		name: "Member",
		data() {

			return {
				msg: "Member"
			}

		},
		components: {
			Group,
			CellBox
		},
		mounted(){
			this.$http.get("../../../static/json/user.json").then((response)=>{
				console.log(response)
				
			}).catch((error)=>{
				
				console.log(error)
				
			})
			
			
			console.log("aaa")
		}

	}
</script>

<style lang="less" scoped="scoped">
	.memberHeader {
		width: 100%;
		height: 70px;
		padding: 10px 14px;
		display: -webkit-box;
		margin-top: 24px;
		background: #333333;
		dt {
			width: 50px;
			height: 50px;
			img {
				display: block;
				width: 100%;
				height: 100%;
				border-radius: 100%;
			}
		}
		dd {
			-webkit-box-flex: 1;
			display: -webkit-box;
			ul {
				-webkit-box-flex: 1;
				li {
					height: 25px;
					width: 100%;
					line-height: 25px;
					text-indent: 12px;
					color: white;
				}
			}
			div {
				width: 50px;
				height: 50px;
				line-height: 50px;
				text-align: center;
				color: white;
			}
		}
	}
	
	.attention {
		height: 70px;
		width: 100%;
		display: -webkit-box;
		margin-top: 24px;
		background: #333333;
		padding: 10px 0;
		li {
			-webkit-box-flex: 1;
			p {
				height: 25px;
				line-height: 25px;
				text-align: center;
				color: white;
				font-size: 12px;
			}
			p:nth-of-type(1) {
				color: goldenrod;
				font-size: 18px;
			}
		}
	}
</style>