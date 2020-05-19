<template>
  <swiper>
    <SwiperItem v-for='item in banners' >
      <a href="item.link">
        <img :src="item.image" />
      </a>
    </Swiperitem>
  </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from '../../../components/common/swiper/index.js'

  export default {
    name:"homeswiper",
    components:{
      Swiper,
      SwiperItem
    },
    props:{
      banners:{
        type:Array,
        default(){
          return[]
        }
      }
    },
  }
</script>

<style>
</style>
