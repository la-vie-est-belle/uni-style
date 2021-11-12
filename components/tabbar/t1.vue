<template>
	<view class="tabbar">
		<view @click="changeTab(item.page)" v-for="(item, index) in tabs" :key="index" class="one-tab">
			<view><image class="tab-icon" :src="currentPage==item.page ? item.selectedIconPath : item.iconPath"></image></view>
			<view><text class="tab-text" :style="currentPage==item.page ? 'color:black;' : 'color:#999999' ">{{item.text}}</text></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentPage: getApp().globalData.page,
				tabs: [
					{
						"text": "首页",
						"page": "index",
						"iconPath": "../../static/tabbar/home.png",
						"selectedIconPath": "../../static/tabbar/homeSelected.png",
					},
					{
						"text": "购物",
						"page": "shop",
						"iconPath": "../../static/tabbar/shop.png",
						"selectedIconPath": "../../static/tabbar/shopSelected.png",
					},
					{
						"text": "拍照",
						"page": "photo",
						"iconPath": "../../static/tabbar/camera.png",
						"selectedIconPath": "../../static/tabbar/cameraSelected.png",
					},
					{
						"text": "消息",
						"page": "message",
						"iconPath": "../../static/tabbar/message.png",
						"selectedIconPath": "../../static/tabbar/messageSelected.png",
					},
					{
						"text": "我的",
						"page": "self",
						"iconPath": "../../static/tabbar/person.png",
						"selectedIconPath": "../../static/tabbar/personSelected.png",
					}
				]
			}
		},
		
		methods: {
			changeTab(page) {
				if (this.currentPage == page) {
					return;
				}
				
				getApp().globalData.page = page;
				uni.switchTab({
					url: `../../pages/${page}/${page}`
				});
			}
		}
	}
</script>

<style>
.tabbar {
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	height: 135rpx;
	background-color:white;
	z-index: 1000;
	position: fixed;
	left: 0rpx;
	bottom: 0rpx;
}

.one-tab {
	text-align: center;
}

.tab-icon {
	width: 50rpx;
	height: 50rpx;
	margin-bottom: -13rpx;
}

.tab-text {
	font-size: 25rpx;
}

</style>
