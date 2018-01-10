import Vue from 'vue'
import Router from 'vue-router'
//首页
import Index from '@/components/index/index'
//动态
import Dynamic from "@/components/index/children/dynamic";
//关注
import Attiention from "@/components/index/children/attiention";
//分享

import Share from "@/components/index/children/share"
//个人中心

import Member from "@/components/index/children/member";
//我发表的
import My from "@/components/pages/my/index"
//个人设置
import Set from "@/components/pages/set/index"
//详情页
import Details from "@/components/pages/Details/index"
//用户详情页
import User from "@/components/pages/user/index"




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
   /*   name:"Index",*/
      children:[
      	{
      		path:"",
      		redirect:"/dynamic"
      	},
      	{
      		name:"Dynamic",
	      	path:"/dynamic",
	      	component:Dynamic
     		},
     		{
     			name:"Attiention",
     			path:"/attiention",
     			component:Attiention
     		},
     		{
     			name:"Share",
     			path:"/share",
     			component:Share
     		},
     		{
     			name:"Member",
     			path:"/member",
     			component:Member
     		}
      
      
      ]
    },
    {
    	name:"My",
    	path:"/my",
    	component:My
    },
    {
    	name:"Set",
    	path:"/set",
    	component:Set
    },
    {
    	name:"Details",
    	path:"/details",
    	component:Details
    },
    {
    	name:"User",
    	path:"/user",
    	component:User
    }
  ]
})
