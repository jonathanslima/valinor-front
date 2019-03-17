<template>
  <div id="app">
    <div class="container">
      <headerValinor :pName="projectName"></headerValinor>
      <router-view></router-view>
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
      }
    }
  }
</script>

<style scoped lang="sass">
</style>
