// 组件库注册中心
import SearchCardComponent from './search-card/index'
const SearchCard = {
  install: function (Vue) {
    Vue.component('search-card', SearchCardComponent)
  }
}

import ThemeFooterComponent from './search-card/index'
const ThemeFooter = {
  install: function (Vue) {
    Vue.component('theme-footer', ThemeFooterComponent)
  }
}

export {
  SearchCard,
  ThemeFooter
}
