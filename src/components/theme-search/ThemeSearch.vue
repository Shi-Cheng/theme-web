<template>
  <div class="search-container">
    <form action="">
      <div class="search-box">
        <input
          id="search-input"
          class="search-input"
          type="text"
          placeholder="输入内容进行查询"
          autocomplete="false"
        >
      </div>
      <div class="search-btn">
        <a id="global-search-btn" class="search-btn" href="javascript:;" @click="search()"><i class="el-icon-search"/></a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ThemeSearch',
  data() {
    return {

    }
  },
  mounted() {
    const inputBox = document.getElementById('search-input')
    inputBox.onkeydown = function (event) {
      const e = event || (window.event ? window.event : null)
      if (e.keyCode === 13) {
        document.getElementById('global-search-btn').click()
        return false
      }
    }
  },
  methods: {
    search() {
      const inputContent = document.getElementById('search-input').value.replace(/\s+/g, '')
      if (inputContent.length > 0) {
        console.log(inputContent)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .search-container{
    height: 4rem;
    line-height: 4rem;
    form{
      display: flex;
      justify-content: space-around;
      .search-box{
        flex-grow: 12;
        text-align: center;
        .search-input{
          width: 100%;
          height: 3.8rem;
          outline: none;
          border: solid 0.2rem;
          border-bottom-left-radius: 0.5rem;
          border-top-left-radius: 0.5rem;
          padding-left: 20px;
        }
      }
      .search-btn{
        flex-grow: 1;
        text-align: center;
        border-bottom-right-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
      }
    }
  }
</style>
