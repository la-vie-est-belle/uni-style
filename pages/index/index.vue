<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view v-for="(item,index) in 100"class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view><tabbar></tabbar></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: "Hello",
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
</style>
