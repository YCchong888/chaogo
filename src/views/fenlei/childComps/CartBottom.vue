<template>
  <div class="bottom">
    <div class="dibu" >
      <CheckButton class="allcheck"></CheckButton>
      <span>全选</span>
    </div>
    <div class="price">总价：{{totalPrice}}</div>
    <div class="zhifu">去付款({{checkLenth}})</div>
  </div>
</template>

<script>
  import CheckButton from '../../../components/content/checkButton/CheckButton.vue'

  export default {
    name:'CartBottom',
    components:{
      CheckButton
    },
    computed:{
      totalPrice(){
         return '￥'+ this.$store.state.cartList.filter(item =>{
           return !item.checked
         }).reduce((preValue,item)=>{
           return preValue + item.price * item.count
         },0)
      },
      checkLenth(){
        return this.$store.state.cartList.filter(item =>!item.checked).length
      }
    }
  }
</script>

<style>
  .bottom{

    /* bottom: -99px; */
    height: 49px;
    line-height: 49px;
    background-color: #EEEEEE;
    z-index: 99;
    display: flex;

    /* left: 0; */
    /* right: 0; */
  }
  .price{
    margin-left: 50px;
    flex: 1;
  }
  .dibu{
    display: flex;
    align-items: center;

  }
  .allcheck{
    width:20px ;
    height: 20px;
  }
  .zhifu{
    width: 100px;
    background-color: orange;
    color: white;
    
  }
</style>
