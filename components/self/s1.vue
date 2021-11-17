<template>
	<view class="self">
		<view>
			<view class="self-bg-banner"></view>
			<view class="self-bg-wave1"></view>
			<view class="self-bg-wave2"></view>
		</view>
		<view class="self-content">
			<view class="self-content-top">
				<view class="top-first">
					<image class="top-avatar" src="../../static/self/avatar.jpg"></image>
					<view class="top-username-intro">
						<text class="top-username">仍梦</text>
						<text class="top-intro">简介：仰望星空，以梦为马。</text>
					</view>
					<view class="top-sign-strip">
						<text>签到领积分</text>
					</view>
				</view>
				<view class="top-second">
					<view class="top-second-item">
						<text>3</text>
						<text class="top-second-item-name">银行卡</text>
					</view>
					<view class="top-second-item">
						<text>99</text>
						<text class="top-second-item-name">积分</text>
					</view>
					<view class="top-second-item">
						<text>23</text>
						<text class="top-second-item-name">优惠券</text>
					</view>
				</view>
			</view>
			<view class="self-content-center">
				<view class="center-first">
					<text class="center-title">我的订单</text>
					<text class="center-button">查看所有订单 ></text>
				</view>
				<view>
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.self-bg-banner {
		width: 100%;
		height: 300rpx;
		background-image:linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);
		position: fixed;
		top: 0px;
		left: 0px;
	}
	
	.self-bg-wave1 {
		width: 100%;
		height: 60%;
		border-radius: 45%;
		background-color: white;
		position: absolute;
		top: 20%;
		left: 20%;
		animation: wave-anim 8s linear infinite;
	}
	
	.self-bg-wave2 {
		width: 100%;
		height: 60%;
		border-radius: 45%;
		background-color: white;
		position: absolute;
		top: 20%;
		left: -20%;
		animation: wave-anim 11s linear infinite;
	}
	
	@keyframes wave-anim {
	    0% {transform: rotate(0deg);}
	    100% {transform: rotate(360deg);}
	}
	
	.self-content {
		position: absolute;
		top: 0;
		left: 0;
	}
	
	.self-content-top {
		width: 700rpx;
		height: 300rpx;
		background-color: white;
		box-shadow: 2rpx 2rpx 15rpx 2rpx rgba(0, 0, 0, 0.1);
		border-radius: 15rpx;
		position: relative;
		top: 80rpx;
		left: 25rpx;
	}
	
	.top-avatar {
		width: 130rpx;
		height: 130rpx;
		border-radius: 50%;
	}
	
	.top-username {
		font-size: 40rpx;
		font-weight: bold;
	}
	
	.top-intro {
		font-size: 25rpx;
		opacity: 0.5;
	}
	
	.top-first {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		position: relative;
		top: 25rpx;
		left: 25rpx
	}
	
	.top-sign-strip {
		color: white;
		font-size: 28rpx;
		opacity: 0.9;
		background-image:linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);
		padding-left: 20rpx;
		padding-right: 20rpx;
		padding-top: 5rpx;
		padding-bottom: 5rpx;
		border-top-left-radius: 20rpx;
		border-bottom-left-radius: 20rpx;
		border-top-right-radius: 5rpx;
		border-bottom-right-radius: 5rpx;
		position: relative;
		left: 56rpx;
	}
	
	.top-username-intro {
		display: flex;
		flex-direction: column;
		position: relative;
		left: 30rpx;
	}
	
	.top-second {
		display: flex;
		justify-content: space-around;
		position: relative;
		top: 55rpx;
	}
	
	.top-second-item {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.top-second-item-name {
		opacity: 0.5;
		font-size: 28rpx;
	}
	
	.self-content-center {
		width: 120%;
		height: 260rpx;
		background-color: white;
		box-shadow: 0rpx 5rpx 15rpx 1rpx rgba(0, 0, 0, 0.1);
		position: relative;
		top: 120rpx;
	}
	
	.center-first {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		position: relative;
		top: 20rpx;
	}
	
	.center-title {
		font-size: 35rpx;
		font-weight: bold;
		position: relative;
		left: 30rpx;
	}
	
	.center-button {
		opacity: 0.6;
		font-size: 23rpx;
		position: relative;
		left: 430rpx;
	}
</style>
