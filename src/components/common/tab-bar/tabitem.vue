<template>

   <!-- <img src="../../assets/img/tabbar/20200319210448.png" />
    <div>
      首页
    </div> -->
    <div class="tab-bar-flex" @click="divclick" :class="isactive">
      <div v-if="!isactive">
        <slot name="icon" ></slot>
      </div>
      <div v-else>
        <slot name="icon-active" ></slot>
      </div>
      <div :style="activeStyle" >
        <slot name="text" ></slot>
      </div>

    </div>

    <!-- </div>
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
      我的 -->


</template>

<script>
  export default {
    computed:{
      isactive(){
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){
        return this.isactive ? {color: this.activeColor} : {}
      }
    },
    name:"tabitem",
    props:{
      path: String,
      activeColor:{
        type:String,
        default:'red'
      }
    },
    methods:{
      divclick(){
        this.$router.replace(this.path)
      }
    }
  }

</script>

<style>
  .tab-bar-flex{
    flex: 1;
    text-align: center;
    height: 49px;
  }
  .tab-bar-flex img{
    width: 24px;
    height: 24px;
  }


</style>
