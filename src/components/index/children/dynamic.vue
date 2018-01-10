<template>

		<div class="dynamic">
	<scroller :lockX=true  
		:pulldown-config="{downContent: '下拉刷新', upContent: '释放后更新'}" 
		:pullup-config="{upContent:'上拉加载更多', downContent: '释放后加载'}" 
		:use-pulldown=true 
		:use-pullup=true 
		@on-pulldown-loading="onPulldownLoading" 
		@on-pullup-loading="onPullupLoading"
ref="scrollerEvent"

		>
		<div>
			
			<ul class="dynamic-item">
				<li class="dynamic-list" >
					<router-link to="/user">
					<dl class="dynamic-header">
						<dt>
							<img src="../../../../static/image/timg.jpg"/>
						</dt>
						<dd>
							<h2>
								标题
							</h2>							
							<p>
								啊是尽量快点哈手机客户端就
							</p>
						</dd>
					</dl>
					</router-link>
					
					<router-link to="/details">
					<div class="dynamic-content">
						<swiper loop class="swiper">
						<swiper-item  v-for="(item, index) in imgList" :key="index">
							<img :src="item">
						</swiper-item>
					</swiper>
					</div>
				</router-link>
					<div class="dynamic-footer">
						<p>asjdhgghasdhjghasjgdhgashjghajgsdghj</p>
						<div>
							<span>
								点赞
							</span>
							<span>
								关注
							</span>
						</div>
						
						
					</div>
			
					
					
				</li>
			</ul>
			
			
			
			
			
			
			
			
			
			
			
		<!--	<card v-for="(key,item) in 10" :key="item" >
				<panel slot="header" :list="list" type="5" ></panel>
				<div slot="content" class="card-padding">
					<router-link to="/attiention">
					<swiper loop index="0">
						<swiper-item class="swiper-demo-img" v-for="(item, index) in imgList" :key="index">
							<img :src="item">
						</swiper-item>
					</swiper>
					</router-link>
					<p style="color:#999;font-size:12px;">Posted on January 21, 2015</p>
					<p style="font-size:14px;line-height:1.2;">Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit..</p>
				</div>
			</card>-->
			</div>
				</scroller>
			
			
		</div>

</template>

<script>
	import { Card, Panel, Swiper, SwiperItem, Scroller,LoadMore } from "vux";
	const imgList = [
		'http://pic.58pic.com/58pic/14/26/45/38j58PICyYN_1024.jpg',
		'http://pic.58pic.com/58pic/15/14/14/37b58PICeym_1024.jpg',
		'http://pic.58pic.com/images/ctss_img/m_5590beba32d92.jpg'
	]
	export default {
		name: "Dynamic",
		data: function() {

			return {
				path:null,
				message: 1,
				list: [{
					src: '../../../static/image/timg.jpg',
					title: '标题一',
					desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
					url:"/member"
				}],
				imgList: imgList,
				catId:0
			}

		},
		components: {
			Card,
			Panel,
			Swiper,
			SwiperItem,
			Scroller,
			LoadMore

		},
		methods: {
			onScroll: function(pos) {

			},
			onScrollBottom(){
				
			},
			onPulldownLoading(){
				console.log("下拉刷新")
				let _this=this;
				setTimeout(function(){
					_this.$nextTick(() => {
				_this.$refs.scrollerEvent.reset({
					top: 0
				})
			})
				},2000)
			},
			onPullupLoading(){
				console.log("上啦加载更多")
				
				
			},
			header:function(){
				
				console.log("aaa")
				
			}
		},
		mounted() {
			this.path=this.$route.path
			
			console.log(this.path)
		}

	}
</script>

<style lang="less">
	img{
		display:block;
		width:100%;
	}
	.dynamic {
		width: 100%;
		height: auto;
	}
	
	.dynamic-item,
	.dynamic-list{
		width:100%;
		height:auto;

	}
	.dynamic-item{
		padding:12px;
		background:white;
	}
	.dynamic-header{
		height:60px;
		display: -webkit-box;
		border-bottom:1px solid #E0E0E0;
		dt{
			width:60px;
			height:60px;
			padding: 4px;
			img{
				display: block;
				width:100%;
				border-radius:100%;
			}
		}
		dd{
			-webkit-box-flex:1;
			padding-left:12px;
			h2{
				height:28px;
				line-height:28px;
			}
			p{
				height:32px;
				font-size:12px;
				line-height:16px;
				font-size:12px;
				overflow: hidden;
			}
		}
	}
	.dynamic-content{
		margin-top:12px;
	}
	
	.dynamic-footer{
		height:60px;
		margin-top:12px;
		p{
			height:36px;
			line-height:18px;
			text-indent: 12px;
		}
		div{
			height:24px;
			text-align: right;
		}
	}
	
</style>