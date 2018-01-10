<template>
	<div class="info">
		<x-header title="详情页"></x-header>
		<div class="info-content">
			<dl class="details-header">
				<dt>
					<img src="../../../../static/image/1.jpg"/>
				</dt>
				<dd>
					<div class="details-tips">
						<h2>boys</h2>
						<p>每天二货一点</p>
					</div>
					<div class="details-attiention">
						<span>关注</span>
					</div>
				</dd>
			</dl>
			
			
			<h2 class="details-title">
				暗示健康带回家了开始讲课的
			</h2>
			
			<p class="details-text">
				回家看灯红酒绿扣水电费规划局离开法国后就开始对方开好几
				个客户说的房价会加快公司东方红就开始对方过后尽快给客户
				说的房间里开个会受到好尽快答复黄金矿工数据库很舒服进口国
			</p>
			
			
			<ul class="details-imgs">
				<li>
					<img src="../../../../static/image/1.jpg" width="100%" alt="" />
				</li>
				<li>
					<img src="../../../../static/image/1.jpg" width="100%" alt="" />
				</li>
				<li>
					<img src="../../../../static/image/1.jpg" width="100%" alt="" />
				</li>
				
			</ul>
			
			
			<dl class="like">
				<dt>
					10赞
					<img src="../../../../static/image/1.jpg"/>
					<img src="../../../../static/image/1.jpg"/>
					<img src="../../../../static/image/1.jpg"/>
					<img src="../../../../static/image/1.jpg"/>
					<img src="../../../../static/image/1.jpg"/>
					<img src="../../../../static/image/1.jpg"/>
				</dt>
				<dd>
					更多
				</dd>
			</dl>
			
			<div class="comment">
				评论:
			</div>
			<ul>
				<li>
					
				</li>
			</ul>
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
		</div>
		<ul class="info-footer">
			<li>点赞</li>
			<li>评论</li>
		</ul>
	</div>
	
	
	
	
	
	
</template>

<script>
	
	import {XHeader} from "vux"
	
	
	export default{
		name:"Info",
		components:{
			XHeader
		}
		
		
		
	}
	
	
	
	
</script>

<style lang="less">
	.details-header{
		height:60px;
		border-bottom:1px solid #333333;
		display:-webkit-box;
		dt{
			width:60px;
			height:60px;
			img{
				display:block;
				width:100%;
				height:100%;
				padding: 6px;
				border-radius:100%;
			}
		}
		dd{
			-webkit-box-flex:1;
			display: -webkit-box;
			.details-tips{
				-webkit-box-flex:1;
				padding-left:12px;
				h2{
					font-size:16px;
					height:36px;
					line-height:36px;
				}
				p{
					font-size:12px;
				}
			}
			.details-attiention{
				width:60px;
				height:60px;
				line-height:60px;
				span{
					padding: 4px 6px;
					background:#666666;
					border-radius:5px;
					color:white;
				}
			}
			
		}
	}
	
	
	
	
	.info{
		width:100%;
		height: 100%;
		display:-webkit-box;
		-webkit-box-orient:vertical;
	}
	.info-content{
		-webkit-box-flex:1;
		overflow-y:scroll;
	}
	
	.info-footer{
		height:50px;
		display:-webkit-box;
		border-top:1px solid #E1E1E1;
	
		li{
			-webkit-box-flex:1;
			text-align: center;
			line-height:50px;
		}
	}
	
	.details-title{
		padding-top: 12px;
		line-height:24px;
		font-size:16px;
		text-align: center;
		color: #666666;
	}
	.details-text{
		text-indent: 24px;
		font-size:12px;
		line-height:22px;
		padding: 0 12px;
	}
	.details-imgs{
		width:100%;
		li{
			background:#E0E0E0;
			padding:12px;
			margin-top:12px;
		}
	}
	.like{
		height:40px;
		display:-webkit-box;
		dt{
			text-indent: 12px;
			-webkit-box-flex:1;
			display: -webkit-box;
			padding:4px 0;
			line-height:32px;
			img{
				display: block;
				width:32px;
				height:32px;
				border-radius:100%;
				margin-left:12px;
			}
		}
		dd{
			width:40px;
			height:40px;
			line-height:40px;
		}
		
		
		
	}
	
	.comment{
		text-indent:12px;
		color:#666666;
		font-weight:bolder;
	}
	
	
	
</style>