<template>
  <div>
    <navbar>
      <div  slot ='left' @click="backHome">
        <img  class="img" src="../../../assets/img/common/Back.png" />
      </div>
      <div slot="center" class="title">
        <div class="item" v-for="(item,index) in titles" :class="{active:index ===currentIndex}"
        @click="titleClick(index)">{{item}}</div>
      </div>
    </navbar>
  </div>
</template>

<script>
  import navbar from '../../../components/common/navbar/NavBar.vue'

  export default {
    name:'detailNav',
    components:{
      navbar,
    },
    data(){
      return{
        titles:['商品','参数','评论','推荐'],
        currentIndex:{
          type:Number,
          default:0
        },
      }
    },

    methods:{
      titleClick(index){
        this.currentIndex =index;
        this.$emit('titleClick',index)
      },
      backHome(){
        this.$router.back()
      }
    }
  }

</script>

<style scoped="scoped">
  .title{
    display: flex;
  }
  .item{
    flex: 1;
  }
  .active{
    color: pink;
  }
  .img{
    margin-top: 13px;
    margin-left: 0px;
  }
</style>
