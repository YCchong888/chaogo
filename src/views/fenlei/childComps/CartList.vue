<template>
  <div class="list">
    <Scroll class='content'>
      
      <listitem v-for="(itemInfo,index) in cerList"
       :key='index'
       :item-info="itemInfo" ></listitem>
    </Scroll>

  </div>

</template>

<script>
  import Scroll from '../../../components/common/scroll/scroll.vue'
  import listitem from './list/listitem.vue'


  export default{
    name:'CartList',
    components:{
      Scroll,
      listitem,


    },
    methods:{
      dianji(){
        console.log(this.cerList);
      }
    },
    computed:{
      cerList(){
        return this.$store.state.cartList
      }
    }
  }

</script>

<style>
  .list{
    height: 100%;
  }
  .content{
    height:81vh;
    overflow: hidden;
  }

</style>
