<template>
  <div class="goods-list">

    <goodslistitem v-for="item in goods" :gooditem="item"></goodslistitem>
  </div>
</template>

<script>
  import goodslistitem from './goodsListItem.vue';

  export default {
    name:"goodslist",
    components:{
      goodslistitem
    },
    props:{
      goods:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style>
.goods-list {
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    justify-content: space-around;
  }

  .goods-list .item {
    width: 170px;
  }
</style>
