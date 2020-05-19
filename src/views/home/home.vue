<template>
  <div id="home">
    <navbar class="homenb">
      <div slot="center" style="color: white;">购物车</div>
    </navbar>
    <tabctroll  :titles="['新款','经典','热门']"
    @tabclick="tabclick"
    ref='tabControl2' class="tabcontrol" v-show="istabshow"></tabctroll>
    <scroll class="content2" ref='scroll' :probeType="3"
     @scroll='contentscroll'
    :pullUpLoad='true'
    @pullingUp='loadMore'
    >
      <homeswiper :banners="banners" @swiperload='swiperload'></homeswiper>
      <homerec :recommends="recomends"></homerec>
      <homezhong class="zhong"></homezhong>
      <tabctroll  :titles="['新款','经典','热门']"
      @tabclick="tabclick"
      ref='tabControl'></tabctroll>
      <goodslist :goods="goods[currentType].list"></goodslist>
    </scroll>
    <backtop @click.native='backclick' v-show="isshow" ></backtop>
  </div>
</template>

<script>
  import navbar from '../../components/common/navbar/NavBar.vue';
  import {getHomedata,getHomeGoods} from '../../network/home.js';
  import homeswiper from './childhome/homeswiper.vue';
  import homerec from './childhome/homerec.vue';
  import homezhong from "./childhome/homezhong.vue";
  import tabctroll from '../../components/common/TabCtroll/TabCtroll.vue';
  import goodslist from '../../components/content/goods/goodsList.vue';
  import scroll from '../../components/common/scroll/scroll.vue';
  import backtop from '../../components/content/backTop/backtop.vue';

  export default {
    name:"home",
    components:{
      navbar,
      homeswiper,
      homerec,
      homezhong,
      tabctroll,
      goodslist,
      scroll,
      backtop,
    },
    data(){
      return{
        currentType:'pop',
        banners:[],
        recomends:[],
        goods:{
          'pop':{page:0, list:[]},
          'new':{page:0, list:[]},
          'sell':{page:0,list:[]}
        },
        tabOffsetTop:0,
        isshow:true,
        istabshow:false,
      }
    },
    created(){
      //1请求多个数据
	  console.log('chuangzao');
      this.getHomeMultidata();
      //请求goods商品数据
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
      
    },
	destroyed(){
		console.log('cuihui');
	},
    mounted() {

    },
    methods:{
      //事件监听相关
      tabclick(index){
        switch (index){
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType ='new'
            break
          case 2:
            this.currentType ='sell'
            break
        }
        //获取 offsettop
        this.$refs.tabControl2.currentIndex = index;
        this.$refs.tabControl.currentIndex = index;


      },
      swiperload(){
        this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
      },
      backclick(){
        this.$refs.scroll.scroll.scrollTo(0,0,500)
      },
      contentscroll(position) {
        //1.判断tabcontroll是否吸顶
        this.istabshow = -position.y > this.tabOffsetTop

        this.isshow = -position.y > 1000
        position.y >1000
        // console.log(position);
      },
      loadMore(){
        console.log('上拉');
        this.getHomeGoods(this.currentType)
      },




      //网络请求相关
      getHomeMultidata(){
        getHomedata().then(res =>{
          console.log(res);
          this.banners = res.data.banner.list;
          this.recomends = res.data.recommend.list
        })
      },
      getHomeGoods(type){
        const page =this.goods[type].page + 1
        getHomeGoods(type,page).then(res =>{
          // console.log(res.data.list);
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page++;
          this.$refs.scroll.scroll.finishPullUp()

        })
      }

    }

  }
</script>

<style scoped>
  .zhong{
    width: 100%;
  }
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
  .tabcontrol{
    position: relative;
    z-index: 9;
    background-color: white;
    padding-bottom: 9px;
  }
  .content2{
   position: absolute;
   top: 44px;
   bottom: 49px;
   left: 0;
   right: 0;
  }
</style>
