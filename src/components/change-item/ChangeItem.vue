<template>
  <div class="change-container">
    <div class="item-img">
      <img
        class="changeskin-icon"
        src="../../assets/images/change-skin.png"
        alt=""
      >
    </div>
    <div class="item-color">
      <el-dropdown class="change-skin-btn" @command="changeSkin">
        <span class="el-dropdown-link change-skin-text">
          {{ colorName }}<i class="el-icon-arrow-down el-icon--right" />
        </span>
        <el-dropdown-menu slot="dropdown" class="dropdown-menu">
          <el-dropdown-item v-for="skinName in skinNames" :key="skinName.name" :command="skinName">{{ skinName.cnName }}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChangeItem',
  props: {
    skinNames: {
      type: Array,
      default () {
        return [{
          name: 'dark',
          cnName: '默认'
        }]
      }
    }
  },
  data() {
    return {
      colorName: '默认'
    }
  },
  mounted() {
    this.changeSkin(this.skinNames[0])
  },
  methods: {
    changeSkin(skinName) {
      this.colorName = skinName.cnName
      require('../../assets/skins/' + skinName.type + '/' + skinName.type + '.scss')
      document.getElementById('app').className = skinName.type
    }
  }
}
</script>

<style lang="scss" scoped>
.change-container {
  display: flex;
  width: 100%;
  .item-img {
    .changeskin-icon {
      width: 16px;
      height: 16px;
      line-height: 16px;
      padding-right: 1rem;
    }
  }
  .item-color {
    height: 16px;
    line-height: 16px;
    .change-skin-btn{
        color: #fff;
     }
  }
}
</style>
