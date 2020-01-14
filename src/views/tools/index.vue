<!--
  Copyright Dingxuan. All Rights Reserved.

  name: 开发工具管理页面
  description:
    在"./hbuilder文件夹中编写android的页面
    在"./idea"文件夹中编写关于golang的页面
    在"./vscode"文件夹中编写关于java的页面
    在"./webstorm"文件夹中编写关于python的页面

  @author 潘世成
  @date 2019/12/10
  @company Dingxuan
-->
<template>
  <div class="tools-container">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<style lang="scss" scoped>
  .tools-container{
    width: 100%;
  }
</style>
