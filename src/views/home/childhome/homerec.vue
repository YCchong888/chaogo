<template>
  <div class="recommend">
    <div v-for="item in recommends" class="item">
      <a :href="item.link">
        <img :src="item.image" />
        <div>{{item.title}}</div>
      </a>
    </div>


  </div>
</template>

<script>
  export default{
    name:"rec",
    props:{
      recommends:{
        type:Array,
        default:[]
      }
    }
  }
</script>

<style>
  .recommend{
    display: flex;
    width: 100%;
    font-size: 12px;
    text-align: center;
    padding: 10px 0 20px;
  }
  .item{
    flex: 1;
  }
  .item img {
    width: 65px;
    height: 65px;
    margin-bottom: 10px;
  }
</style>
