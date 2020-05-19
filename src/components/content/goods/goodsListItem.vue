<template>
  <div class="goods-item" @click="imgClick">
    <img @load="imgLoad" :src="showimg" />
    <div class="goods-info">
      <p>{{gooditem.title}}</p>
      <span class="price">价格：{{gooditem.price}}</span>
      <span class="collect">{{gooditem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:"goodslistitem",
    props:{
      gooditem:{
       type:Object,
       default(){
         return{}
       }
      }
    },
    computed:{
      showimg(){
          return this.gooditem.image || this.gooditem.show.img
      }
    },
    methods:{
      imgClick(){
        // console.log('tupian');
        this.$router.push('/detail/' + this.gooditem.iid)
      },
      imgLoad(){
        // if (this.$route.path.indexOf('/home')){
        //   this.$bus.$emit('homeItemLoad')
        // }else if (this.$route.path.indexOf('/detail')){
        //   this.$bus.$emit('detailItemLoad')
        // }
      }
    }
  }

</script>

<style>
  .goods-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;

    /* float: left; */
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;

  }

  .goods-info .price {
    color: black;
    margin-right: 20px;
    float: left;
  }

  .goods-info .collect {
    position: relative;
    float: right;
    color: red;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url(../../../assets/img/common/collect.svg) 0 0/14px 14px;
  }
</style>
