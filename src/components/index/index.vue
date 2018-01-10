<template>
	<div class="index">
		<div class="content">

			<router-view></router-view>

		</div>

		<div class="footer">
			<tabbar>
				<tabbar-item :selected="path=='/dynamic'  ?  true : false " link="/dynamic">
					<img slot="icon" src="">
					<span slot="label">首页</span>
				</tabbar-item>
				<tabbar-item :selected="path=='/attiention'  ?  true : false " link="/attiention">
					<img slot="icon" src="">
					<span slot="label">关注</span>
				</tabbar-item>

				<tabbar-item :selected="path=='/share'  ?  true : false " link="/share">
					<img slot="icon" src="">
					<span slot="label">分享</span>
				</tabbar-item>

				<tabbar-item :selected="path=='/member'  ?  true : false " link="/member">
					<img slot="icon" src="">
					<span slot="label">我的</span>
				</tabbar-item>
			</tabbar>
		</div>
	</div>

</template>

<script>
	import { Tabbar, TabbarItem } from 'vux'

	export default {
		name: "Index",
		components: {
			Tabbar,
			TabbarItem
		},
		data() {
			return {
				path: null
			}
		},
		mounted: function() {
			this.path = this.$route.path;
			console.log(this.path)
		},
		updated: function() {
			this.path = this.$route.path;
			console.log(this.path)
		}

	}
</script>

<style>
	.index {
		display: -webkit-box;
		height: 100%;
		-webkit-box-orient: vertical;
		width: 100%;
	}
	
	.content {
		-webkit-box-flex: 1;
		overflow-y: scroll;
		background: #EED97C;
	}
	
	.footer {
		height: 57px;
		position: relative;
	}
</style>