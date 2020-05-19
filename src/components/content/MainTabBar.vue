<template>
  <body>
    <div id="app">
      <keep-alive exclude="detail">
        <router-view></router-view>
      </keep-alive>

      <tabbar>
        <tabitem path="/home" >
          <img  slot="icon" src="../../assets/img/tabbar/20200319210448.png" />
          <img slot="icon-active" src="../../assets/img/tabbar/20200319231920.png" />
          <div slot="text">首页</div>
        </tabitem>
        <tabitem path="/goods">
          <img  slot="icon" src="../../assets/img/tabbar/20200319231937.png" />
          <img slot="icon-active" src="../../assets/img/tabbar/20200319210448.png" />
          <div slot="text">分类</div>
        </tabitem>
        <tabitem path="/fenlei">
          <img  slot="icon" src="../../assets/img/detail/cart.png" />
          <img slot="icon-active" src="../../assets/img/tabbar/20200319231920.png" />
          <div slot="text">购物车</div>
        </tabitem>
        <tabitem path="/wode">
          <img  slot="icon" src="../../assets/img/tabbar/20200320172904.png" />
          <img slot="icon-active" src="../../assets/img/tabbar/20200319210448.png" />
          <div slot="text">我的</div>
        </tabitem>
      </tabbar>
    </div>
  </body>
</template>

<script>
  import tabbar from '../common/tab-bar/tabbar.vue'
  import tabitem from '../common/tab-bar/tabitem.vue'
  export default {


    name:'MTB',
    components:{
      tabbar,
      tabitem
    }
  }
</script>

<style>
  body{
    margin: 0;
    padding: 0;
  }
</style>
