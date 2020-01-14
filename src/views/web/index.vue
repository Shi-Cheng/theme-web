<!--
  Copyright Dingxuan. All Rights Reserved.

  name: 前端开发管理页面
  description:
    在"./css"文件夹中编写css的页面
    在"./html"文件夹中编写关于html的页面
    在"./javascript"文件夹中编写关于javascript的页面

  @author 潘世成
  @date 2019/12/10
  @company Dingxuan
-->
<template>
  <div class="web-container">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<style lang="scss" scoped>
  .web-container{
    width: 100%;
  }
</style>
