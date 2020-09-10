<template>
  <view class="content">
	  <swiper indicator-dots autoplay circular>
			<swiper-item v-for="(item, index) in info.banner" :key="index">
				<image mode="aspectFill" :src="item.image_url"></image>
			</swiper-item>
	  </swiper>
	  <section class="channel">
		  <li v-for="(item) in info.channel" :key="item.id">
			  <image
				:src="item.icon_url"
				mode="scaleToFill"
				lazy-load="false">
			  </image>
			  <span>{{item.name}}</span>
		  </li>
	  </section>
  </view>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  computed: {
	...mapState({
		info: state=>state.home
	})
  },
  onLoad() {},
  methods: {
    ...mapActions({
      getIndex: "home/getIndex",
    }),
  },
  onShow() {
    console.log("onShow...");
    this.getIndex();
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
swiper, swiper image{
	width: 100%;
	height: 416rpx;
}
.channel{
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 10rpx 0;
	li{
		display: flex;
		flex-direction: column;
	}
	image{
		width: 56rpx;
		height: 56rpx;
		padding: 20rpx 0;
	}
	span{
		font-size: 24rpx;
	}
}

</style>
