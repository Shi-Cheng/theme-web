<template>
  <div class="menu-container">
    <el-menu :default-active="menuList[0].path" :default-openeds="[menuList[0].path]" class="open-el-menu" unique-opened @open="handleOpen" @close="handleClose" @select="handleSelect">
      <template v-for="(item,index) in menuList">
        <el-submenu v-if="item.leaf" :index="item.path" :key="index">
          <template slot="title">
            <i :class="item.icon"/>
            <span slot="title">{{ item.name }}</span>
          </template>
          <template v-for="child in item.children">
            <el-menu-item :index="child.path" :key="child.path">&nbsp;&nbsp;{{ child.name }}</el-menu-item>
          </template>
        </el-submenu>
        <el-menu-item v-if="!item.leaf" :key="index +''" :index="item.path"><i :class="item.icon"/>{{ item.name }}
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import menuList from '../../config/menu-setting'
export default {
  name: 'ThemeMenu',
  data() {
    return {
      menuList
    }
  },
  methods: {
    handleOpen(index, path) {
    },
    handleClose(index, path) {
    },
    handleSelect(index, path) {
      this.$router.push(path.join(''))
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
