<!--
  Copyright Dingxuan. All Rights Reserved.

  name: 后端开发管理页面
  description:
    在"./android"文件夹中编写android的页面
    在"./golang"文件夹中编写关于golang的页面
    在"./java"文件夹中编写关于java的页面
    在"./python"文件夹中编写关于python的页面

  @author 潘世成
  @date 2019/12/10
  @company Dingxuan
-->

<template>
  <div class="develop-container">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<style lang="scss" scoped>
  .develop-container{
    width: 100%;
  }
</style>
