<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view v-for="(item,index) in 1000"class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view class="tabbar"><tabbar :tabs="tabs" @tabChanged=""></tabbar></view>
	</view>
</template>

<script>
	import tabbar from "../../components/tabbar/t1.vue"
	export default {
		components: {
			tabbar
		},
		data() {
			return {
				title: "Hello",
				tabs: [
					{
						"text": "首页",
						"iconPath": "../../static/tabbar/home.png",
						"selectedIconPath": "../../static/tabbar/homeSelected.png",
					},
					{
						"text": "购物",
						"iconPath": "../../static/tabbar/shop.png",
						"selectedIconPath": "../../static/tabbar/shopSelected.png",
					},
					{
						"text": "消息",
						"iconPath": "../../static/tabbar/message.png",
						"selectedIconPath": "../../static/tabbar/messageSelected.png",
					},
					{
						"text": "我的",
						"iconPath": "../../static/tabbar/person.png",
						"selectedIconPath": "../../static/tabbar/personSelected.png",
					}
				]
			}
		},
		
		onLoad() {

		},
		
		methods: {
			changeTab(text) {
				console.log(text)
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	
	.tabbar {
		position: fixed;
		left: 0rpx;
		bottom: 0rpx;
	}
</style>
