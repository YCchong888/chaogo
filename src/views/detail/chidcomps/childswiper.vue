<template>
  <div class="detail-swiper">
    <swiper class='lunbo'>
      <SwiperItem v-for="item in topImages">
        <img :src="item" alt=""/>
      </SwiperItem>

    </swiper>

  </div>

</template>


<script>
  import {Swiper,SwiperItem} from '../../../components/common/swiper/index.js'

  export default {
    name:'detailswiper',
    components:{
      Swiper,
      SwiperItem
    },
    created(){
      console.log(this.topImages);
    },
    props:{
      topImages:{
        type:Array,
        default(){
          return []
        }
      }

    }
  }
</script>

<style>
  .lunbo{
    height: 350px;
    overflow: hidden;
  }
</style>
