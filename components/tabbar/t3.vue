<template>
	<view class="tabbar">
		<view @click="changeTab(item.text)" v-for="(item, index) in tabs" :key="index">
			<view class="middle-tab" v-if="index==2">
				<view><image class="middle-tab-icon" :src="item.iconPath"></image></view>
			</view>
			<view v-else class="side-tab">
				<view><image class="tab-icon" :src="currentText==item.text ? item.selectedIconPath : item.iconPath"></image></view>
				<view><text class="tab-text" :style="currentText==item.text ?'color:black;' : 'color:#999999' ">{{ item.text }}</text></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			tabs: {
				type: Array,
				default: () => {[]}
			}
		},
		
		data() {
			return {
				currentText: "首页"
			}
		},
		
		methods: {
			changeTab(text) {
				if (this.currentText == text) {
					return;
				}
				
				this.currentText = text;
				this.$emit('tabChanged', text)
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
}

.side-tab, .middle-tab {
	text-align: center;
}

.middle-tab {
	background-color: white;
	width: 130rpx;
	height: 110rpx;
	border-radius: 50%;
	margin-bottom: 40rpx;
	border-top: whitesmoke 1px solid;
}

.middle-tab-icon {
	width: 80rpx;
	height: 80rpx;
	margin-top: 20rpx;
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