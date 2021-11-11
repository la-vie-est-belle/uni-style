<template>
	<view class="tabbar">
		<view @click="changeTab(item.text)" v-for="(item, index) in tabs" :key="index" class="one-tab">
			<view><image class="tab-icon" :src="currentText==item.text ? item.selectedIconPath : item.iconPath"></image></view>
			<view><text class="tab-text" :style="currentText==item.text ?'color:black;' : 'color:#999999' ">{{ item.text }}</text></view>
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
	/* border-top: #C0C0C0 1px solid; */
/* 	border-top-left-radius: 10rpx;
	border-top-right-radius: 10rpx; */
	z-index: 1000;
}

.one-tab {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
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
