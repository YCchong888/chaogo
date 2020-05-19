<template>
  <div id="detail">
    <detailNav class='nav' @titleClick='titleClick' ></detailNav>

    <scroll class="height" ref='scroll' @scroll='jianting' :probeType="3">
      <detailswiper :topImages = 'topImages' ></detailswiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop='shop'></detail-shop-info>
      <!-- <detail-goods-info :detailInfo='detailInfo' ></detail-goods-info> -->
      <detail-param-info ref="params" :paramInfo='paramInfo'></detail-param-info>
      <DetailCommentInfo ref="comment" :commentInfo='commentInfo'></DetailCommentInfo>
      <goodslist ref='recomen' :goods='recommends'></goodslist>
    </scroll>
    <backtop class="back" @click.native='backclick' v-show="isshow" ></backtop>
    <DetailBottom @addCart='addToCart'></DetailBottom>
  </div>

</template>

<script>
  import detailNav from '../detail/chidcomps/navbar.vue'
  import detailswiper from './chidcomps/childswiper.vue'
  import detailBaseInfo from './chidcomps/DetailBaseInfo.vue'
  import detailShopInfo from './chidcomps/DetailShopInfo.vue'
  import DetailGoodsInfo from './chidcomps/DetailGoodsInfo.vue'
  import scroll from '../../components/common/scroll/scroll.vue'
  import DetailParamInfo from './chidcomps/DetailParamInfo.vue'
  import DetailCommentInfo from './chidcomps/DetailCommentInfo.vue'
  import DetailBottom from './chidcomps/DetailBottomBar.vue'
  import goodslist from '../../components/content/goods/goodsList.vue'
  import backtop from '../../components/content/backTop/backtop.vue'

  import {getDetail,Goods,Shop,GoodsParam,getRecommend} from '../../network/detail.js'


  export default{
    name:"detail",
    methods:{
      titleClick(index){
        // console.log(index);
        this.$refs.scroll.scrollTo(0,this.tiaozhuan[index],100)
        // console.log(this.tiaozhuan[index]);

      },
      addToCart(){
        console.log('12312');
        // this.$router.push()
        const product = {}
        product.image = this.topImages[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.price =this.goods.realPrice;
        product.iid =this.iid;

        //2.将商品添加到购物车里
        this.$store.commit('addCart',product);
      },
      backclick(){
        this.$refs.scroll.scroll.scrollTo(0,0,0)
      },
      jianting(position){
        const jiantingY = -position.y
        // console.log(jiantingY);\
        this.isshow = -position.y > 1000
        position.y >1000
        let length = this.tiaozhuan.length;
        for (let i = 0; i< length; i++) {
          let iPos =this.tiaozhuan[i];
          // console.log(this.currentIndex);
          if (position >= iPos && position < this.tiaozhuan[i+1]){
            if (this.currentIndex !== i) {
              this.currentIndex = i;
              console.log(i);

            }
            break;
          }
        }
      }
    },
    components:{
      detailNav,
      detailswiper,
      detailBaseInfo,
      detailShopInfo,
      scroll,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      goodslist,
      DetailBottom,
      backtop
    },



    data(){
      return{
        iid:null,
        topImages:[],
        goods:{},
        shop:{},
        detailInfo:{},
        paramInfo:{},
        commentInfo:{},
        recommends:[],
        tiaozhuan:[],
        currentIndex:0,
        isshow:true,
      }
    },
    created(){
      this.iid = this.$route.params.iid
      //请求详情网络信息
      getDetail(this.iid).then(res =>{
        // console.log(res);
        const data = res.result;
        //1.获取顶部轮播图数据
         this.topImages = data.itemInfo.topImages

         //2.获取商品信息
         this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)

         //3.创建店铺信息
         this.shop = new Shop(data.shopInfo)

         //4.直接保存商品的详情
         this.detailInfo = data.detailInfo;

          //5.获取param信息
         this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

          //6.取出评论信息
          if(data.rate.cRate !==0){
            this.commentInfo =data.rate.list[0]
          }
      })

      //请求推荐数据

      getRecommend().then(res =>{
        this.recommends = res.data.list
      })

    },
    updated() {
      this.tiaozhuan.push(0);
      this.tiaozhuan.push(-this.$refs.params.$el.offsetTop);
      this.tiaozhuan.push(-this.$refs.comment.$el.offsetTop);
      this.tiaozhuan.push(-this.$refs.recomen.$el.offsetTop);
      this.tiaozhuan.push(Number.MAX_VALUE);
    }



}

</script>

<style>
  #detail{
    /* position: absolute; */
    z-index: 9;
    background-color: white;
    height: 100vh;
  }
  .nav{
    position: relative;
    /* z-index: 9; */
    background-color: white;
  }
  .height{
    position: absolute;
    top: 44px;
    bottom: 0px;
    left: 0;
    right: 0;
    background-color: white;
    z-index: 9;
  }
  .back{
    z-index: 99;
  }
</style>
