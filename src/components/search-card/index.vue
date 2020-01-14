<template>
  <div class="search-card">
    <el-row>
      <el-form :inline="true" size="mini" style="width:100%">
        <el-col style="max-width:840px">
          <el-form-item v-for="(filter,index) in filters" :key="filter.cnName" :label="filter.cnName + &quot; :&quot;" label-width="120px">
            <el-input v-if="filter.type==='input'||!filter.type" v-model="keyWords[index].value" style="width:140px;" size="mini" clearable/>
            <el-select v-if="filter.type==='select'" v-model="keyWords[index].value" size="mini" style="width:140px;" clearable placeholder="请选择">
              <el-option v-for="option in filter.options" :key="option.value" :value="option.value" :label="option.label" style="text-align:center;"/>
            </el-select>
            <el-date-picker v-if="filter.type==='date'" v-model="keyWords[index].value" style="width:140px;" size="mini" type="date" placeholder="选择日期" value-format="yyyy-MM-dd"/>
          </el-form-item>
        </el-col>
        <el-col style="width:calc(100% - 840px)">
          <el-form-item>
            <el-button style="width:80px;" type="primary" size="mini" icon="el-icon-search" @click="search">查询</el-button>
            <span v-if="btns.length>0">
              <el-button v-for="btn in btns" :style="'width:' + (btn.name.length>4||btn.icon)?(btn.name.length + 1)*20:80 +'px;'" :key="btn.name" :icon="btn.name.indexOf('新增')!=-1?'el-icon-circle-plus-outline' : btn.icon" size="mini" type="primary" @click="clickFun">{{ btn.name }}</el-button>
            </span>
          </el-form-item>
        </el-col>
      </el-form>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Index',
  props: {
    filters: {
      type: Array,
      default() {
        return []
      }
    },
    btns: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      keyWords: [{
        key: '',
        value: ''
      }]
    }
  },
  beforeMount() {
    this.keyWords = []
    for (let i = 0; i < this.filters.length; i++) {
      this.keyWords.push({
        key: this.filters[i].enName,
        value: ''
      })
    }
  },
  methods: {
    search() {
      let obj = '{'
      for (let i = 0; i < this.keyWords.length; i++) {
        obj += '"' + this.keyWords[i].key + '":"' + this.keyWords[i].value.replace(/\s+/g, '') + '",'
      }
      obj = obj.slice(0, -1)
      obj += '}'
      this.$emit('search', JSON.parse(obj))
    },
    reset() {
      for (const i in this.filters) this.filters[i] = ''
    },
    clickFun(e) {
      for (let i = 0; i < this.btns.length; i++) {
        if (this.btns[i].name === e.target.innerText) {
          const funName = this.btns[i].clickFun
          this.$emit(funName)
          break
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .search-card{
    border-bottom: 1px solid #ccc;
    padding-bottom: .5rem;
    margin-bottom: 1rem;
    .el-form {
      .el-form-item__label {
        color: #909399;
      }
      .el-form-item {
        margin-bottom: 10px;
      }
    }
  }
</style>
