<template>
  <div>
    <router-view />
    <FooterGuide v-show="$route.meta.ShowFooter"/>
  </div>
</template>

<script>
  import {reqCategory} from './api'
  import FooterGuide from './components/FooterGuide/FooterGuide'
  export default {
    name: 'App',
    components: {FooterGuide},
     mounted(){
      this.$store.dispatch('getAddress')
       this.$store.dispatch('getUser')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
