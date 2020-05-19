<template>
  <swiper>
    <SwiperItem v-for='item in banners' >
      <a href="item.link">
        <img :src="item.image" @load="imgload" />
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
    data(){
      return{
        isload : false
      }
    },
    methods:{
      imgload(){
        if(!this.isload){
          console.log('图片加载')
          this.$emit('swiperload')
          this.isload = true
        }

      }
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
