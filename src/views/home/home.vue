<template>
  <div id="home">
    <navbar class="homenb">
      <div slot="center" style="color: white;">购物车</div>
    </navbar>
    <homeswiper :banners="banners"></homeswiper>
    <homerec :recommends="recomends"></homerec>
    <homezhong></homezhong>
    <tabctroll class="tab-control" :titles="['新款','经典','热门']"></tabctroll>
    
  </div>
</template>


<script>
  import navbar from '../../components/common/navbar/NavBar.vue';
  import {getHomedata} from '../../network/home.js';
  import homeswiper from './childhome/homeswiper.vue';
  import homerec from './childhome/homerec.vue';
  import homezhong from "./childhome/homezhong.vue";
  import tabctroll from '../../components/common/TabCtroll/TabCtroll.vue';

  export default {
    name:"home",
    components:{
      navbar,
      homeswiper,
      homerec,
      homezhong,
      tabctroll
    },
    data(){
      return{
        banners:[],
        recomends:[]
      }
    },
    created(){
      //1请求多个数据
      getHomedata().then(res =>{
        console.log(res);
        this.banners = res.data.banner.list;
        this.recomends = res.data.recommend.list
      })
    }

  }
</script>

<style>
  #home{
    padding-top: 44px;
  }
  .homenb{
    background-color: pink;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 9;
  }
  .tab-control{
    position: sticky;
    top: 44px;
  }
</style>
