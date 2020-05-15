<template>
  <div id="tab-bar" >
    <!-- <div class="tab-bar-flex">
      <img src="../../assets/img/tabbar/20200319210448.png" />
      <div>
        首页
      </div>

      </div>
    <div class="tab-bar-flex">
      <img src='../../assets/img/tabbar/20200319231920.png' />
      <div>
        分类
      </div>

      </div>
    <div class="tab-bar-flex">
      <img src="../../assets/img/tabbar/20200319231937.png" />
      <div>
        购物
      </div>

      </div>
    <div class="tab-bar-flex">
      <img src="../../assets/img/tabbar/20200320172904.png" />
      <div>
        我的
      </div> -->

         <slot></slot>



  </div>
</template>

<script>
  export default {
    name:"tabbar"
  }

</script>

<style>
  #tab-bar{
    display: flex;
    background-color: aliceblue;
    position: fixed;
    left: 0;
    bottom:0;
    right: 0;
    box-shadow: 0px -3px 1px rgba(100,100,100,0.35);
  }
  .tab-bar-flex{
    flex: 1;
    text-align: center;
    height: 49px;
  }

</style>
