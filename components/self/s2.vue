<template>
	<view class="self">
		<view class="fisrt-row">
			<view class="bg"><image src="../../static/self/bg.png"></image></view>
			<view class="notify"><image src="../../static/self/message.png"></image></view>
			<view class="avatar"><image src="../../static/self/avatar.jpg"></image></view>
			<view class="name"><text>ren_meng</text><image src="../../static/self/modify.png"></image></view>
		</view>
		<view class="second-row">
			<view class="row-one">
				<view class="item"><image src="../../static/self/coupon.png"></image><text>优惠金券</text></view>
				<view class="item"><image src="../../static/self/invite.png"></image><text>邀请好友</text></view>
				<view class="item"><image src="../../static/self/collection.png"></image><text>收藏浏览</text></view>
			</view>
			<view  class="row-two">
				<view class="item"><image src="../../static/self/service.png"></image><text>联系客服</text></view>
				<view class="item"><image src="../../static/self/comment.png"></image><text>我的评价</text></view>
				<view class="item"><image src="../../static/self/data.png"></image><text>数据分析</text></view>
			</view>
		</view>
		<view class="third-row">
			<text>- 我的分享 -</text>
		</view>
		<view class="fourth-row">
			<uni-list class="uni-list">
				<uni-list-item title="意见反馈" link="reLaunch" to="/pages/index/index"></uni-list-item>
				<uni-list-item title="喜欢我们" link="reLaunch" to="/pages/index/index"></uni-list-item>
				<uni-list-item title="关于我们" link="reLaunch" to="/pages/index/index"></uni-list-item>
			</uni-list>
		</view>
		
		<view class="end-line">
			<text>- 我是有底线的 -</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	$shadow: 2rpx 2rpx 15rpx 2rpx rgba(0, 0, 0, 0.1);
	$radius: 20rpx;
	
	.self {
		// height: 1200rpx;
	}
	
	.fisrt-row {
		width: 100%;
		height: 330rpx;
		text-align: center;
		
		.bg > image{
			width: 100%;
			height: 330rpx;
			position: fixed;
			top: 0px;
			left: 0px;
		}
		
		.notify > image {
			width: 45rpx;
			height: 45rpx;
			position: fixed;
			right: 20rpx;
			top: 20rpx;
		}
		
		.avatar > image {
			width: 130rpx;
			height: 130rpx;
			position: relative;
			top: 50rpx;
			border-radius: 50%;
			border: 2px lightgray solid;
		}
		
		.name {
			display: flex;
			justify-content: center;
			align-items: center;
			position: relative;
			top: 50rpx;
			font-weight: bold;
			font-size: 40rpx;
			color: white;
			
			image {
				width: 50rpx;
				height: 50rpx;
			}
		}
	}
	
	.second-row {
		width: 90%;
		height: 300rpx;
		box-shadow: $shadow;
		position: relative;
		top: 50rpx;
		left: 35rpx;
		border-radius: $radius;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		z-index: -1;
		
		.row-one, .row-two {
			display: flex;
			justify-content: space-around;
			align-items: center;
			font-size: 25rpx;
			
			.item > image {
				width: 70rpx;
				height: 70rpx;
				opacity: 0.8;
			}
			
			.item {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}
		}
	}
	
	.third-row {
		width: 90%;
		height: 100rpx;
		box-shadow: $shadow;
		position: relative;
		top: 80rpx;
		left: 35rpx;
		border-radius: $radius;
		display: flex;
		justify-content: center;
		align-items: center;
		opacity: 0.8;
		z-index: -1;
	}
	
	.fourth-row {
		width: 90%;
		position: relative;
		top: 110rpx;
		left: 35rpx;
		border-radius: $radius;
		box-shadow: $shadow;
	}
	
	.end-line {
		text-align: center;
		position: relative;
		top: 240rpx;
		font-size: 20rpx;
		opacity: 0.7;
	}
</style>
