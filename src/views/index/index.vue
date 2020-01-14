<template>
  <div class="home-container">
    <div class="container-search">
      <theme-search />
    </div>
    <div class="main-content">
      内容区域
    </div>
  </div>
</template>

<script>
import ThemeSearch from '../../components/theme-search/ThemeSearch'
export default {
  name: 'Home',
  components: {
    'theme-search': ThemeSearch
  }
}
</script>

<style lang="scss" scoped>
  $header-height: 80px;
  $footer-height: 60px;
  .home-container{
    width: 100%;
    padding-top: 1rem;
    .container-search{
      width: 98%;
      margin: 0 auto;
    }
    .main-content{
      margin-top: 1rem;
      padding-left: 1rem;
      padding-bottom: 1rem;
    }
  }
</style>
