<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot>  </div>
    <div class="center"><slot name="center"></slot> </div>
    <div class="right"><slot name="right"></slot> </div>
  </div>
</template>

<script>
  export default{
    name:'navbar'
  }
</script>

<style scoped>
  .nav-bar{
    display: flex;
    height: 44px;
    text-align: center;
    line-height: 44px;
  }
  .left{
    float: left;
    width: 60px;
    
  }
  .center{
    flex: 1;
    
  }
  .right{
    float: right;
    width: 60px;
    
  }
</style>
