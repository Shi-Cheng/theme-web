<template>
  <div class="home-container">
    <div class="theme-header">
      <theme-header :options="options" :skins="skins"/>
    </div>
    <div class="theme-container">
      <div class="theme-container-menus">
        <theme-menu/>
      </div>
      <div class="theme-container-box">
        <div class="container-content">
          <router-view v-if="isRouterAlive"/>
        </div>
      </div>
    </div>
    <div class="theme-footer">footer</div>
  </div>
</template>

<script>
import ThemeHeader from './components/theme-header/ThemeHeader'
import SkinsConfig from './config/theme.config'

import ThemeMenu from './components/theme-menus/ThemeMenu'
export default {
  name: 'Home',
  components: {
    'theme-header': ThemeHeader,
    'skins-config': SkinsConfig,
    // 'theme-search': ThemeSearch,
    'theme-menu': ThemeMenu
  },
  data() {
    return {
      skins: SkinsConfig.skins,
      options: [{
        value: '普通',
        label: 'normal'
      }, {
        value: '会员',
        label: 'member'
      }],
      isRouterAlive: true,
      isHome: ''
    }
  },
  watch: {
    $route: {
      handler: function (val, oldVal) {
        this.isHome = val.name
      },
      deep: true
    }
  },
  mounted() {
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  @import "assets/css/home";
</style>
