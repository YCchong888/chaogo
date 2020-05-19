<template>
  <div class="chen-button" :class="{check:isCheck}">
    <img src="../../../assets/img/cart/tick.svg" />
  </div>
</template>

<script>
  export default {
    name:'CheckButton',
    props:{
      isCheck:{
        type:Boolean,
        default:false
      }
    }
  }
</script>

<style>
  .chen-button{
    background-color: pink;
    border-radius: 50%;
    border: 2px solid deeppink;
  }
  .check{
    border-color: gray;
    background-color: white;
  }
</style>
