<template>
  <div class="tabcon">
    <div v-for="(item,index) in titles"
    class="tabconitem"
    :class="{active: index === currentIndex}" @click="itemclick(index)">

      <span>{{item}}</span>
    </div>
  </div>

</template>

<script>
  export default {
    name:"tabcroll",
    props:{
      titles:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    data(){
      return{
        currentIndex:0
      }
    },
    methods:{
      itemclick(index){
        this.currentIndex = index;
        this.$emit('tabclick',index)
      }
    }

  }
</script>

<style>
  .tabcon{
    display: flex;
    text-align: center;
    background-color: white;
    
  }
  .active{
    color: pink;

  }
  .active span {
    border-bottom: 3px solid pink;
  }
  .tabconitem{
    flex: 1;
    font-size: 16px;
  }
  .tabconitem span{
    padding: 5px;
  }

</style>
