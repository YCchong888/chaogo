<template>
  <div>
    <fnavbar class="fnav">
      <div slot='center'>购物车({{carLength}})</div>
    </fnavbar>
    <CartList></CartList>
    <CartBottom class='dibu'></CartBottom>
  </div>
</template>

<script>

  import fnavbar from '../../components/common/navbar/NavBar.vue'
  import CartList from './childComps/CartList.vue'
  import CartBottom from './childComps/CartBottom.vue'


  export default {
    name:"fenlei",
    components:{
      fnavbar,
      CartList,
      CartBottom

    },
    data(){
      return {

      }
    },
    computed:{
      carLength(){
        return this.$store.state.cartList.length
      }
    },
    mounted(){


      }
    }



</script>

<style>
  .fnav{

    background-color: pink;
    color: white;
    font-size: 20px;
  }
  .dibu{
    

  }
</style>
