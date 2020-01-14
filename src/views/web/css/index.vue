<template>
  <el-card>
    <div slot="header" style="color:#909399">
      CSS
    </div>
    <div class="css-search">
      <search-card :filters="filters" :btns="btns"/>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      filters: [{
        enName: 'property',
        cnName: '属性'
      },
      {
        enName: 'time',
        cnName: '时间',
        type: 'date'
      },
      {
        enName: 'function',
        cnName: '方法'
      },
      {
        enName: 'type',
        cnName: '类别'
      }
      ],
      btns: [{
        type: 'success',
        clickFun: 'newAddCSS',
        name: '新增内容'
      }]
    }
  }
}
</script>

<style scoped></style>
