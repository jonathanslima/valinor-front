<template>
  <div id="app">
    <div class="container">
      <headerValinor :pName="projectName"></headerValinor>
      <router-view></router-view>
      <div class="loader center"><img :src="loader"></div>
      <footer  v-show-more-items id="footer" class="center">2019@Copyright - Valinor</footer>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue';

  export default{
    components: {
      'headerValinor': Header,
      
    },
    data(){
      return{
        projectName: 'Valinor',
        loader: '../src/assets/img/loader.gif'
      }
    }
  }
</script>

<style scoped lang="sass">
  .loader{
    display: none;
    img{
      width: 150px;

    }
  }

  #footer{
    margin: 30px 0;
  }
</style>
