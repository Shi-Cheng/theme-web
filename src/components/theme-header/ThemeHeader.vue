<template>
  <div class="header-logo">
    <div class="header-logo-left">
      <router-link class="img-logo" to="/">
        <!--<img src="../../assets/theme-logo3.png" alt="">-->
      </router-link>
    </div>
    <div class="header-logo-right">
      <div class="select-item">
        <change-item :skin-names="skins" />
      </div>
      <div class="change-item">
        <el-dropdown :hide-on-click="false" @command="handleCommand">
          <span class="el-dropdown-link" style="color:#fff;">
            您好！【{{ options[0].value }}】<i class="el-icon-arrow-down el-icon--right"/>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="info"><i class="el-icon-info"/> 查看信息</el-dropdown-item>
            <el-dropdown-item command="logout"><i class="el-icon-switch-button"/> 退出系统</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import SelectItem from '../../components/select-item/SelectItem'
import ChangeItem from '../../components/change-item/ChangeItem'
export default {
  name: 'ThemeHeader',
  inject: ['reload'],
  components: {
    'select-item': SelectItem,
    'change-item': ChangeItem
  },
  props: {
    options: {
      type: Array,
      default: Array
    },
    skins: {
      type: Array,
      default: Array
    }
  },
  data() {
    return {

    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
    },
    handleCommand(command) {
      switch (command) {
        case 'logout':
          this.logout()
          break
        case 'info':
          this.info()
          break
        default:
          console.log(command)
      }
    },
    logout() {
      this.$confirm('确认退出吗?', '提示', {
      }).then(() => {
        this.$router.push('/login')
      }).catch(() => {

      })
    },
    info() {
      var htmlVal = '<div>功能尚未开发' + '</div>'
      this.$alert(htmlVal, '用户信息', {
        dangerouslyUseHTMLString: true,
        confirmButtonText: '确定',
        center: true,
        callback: () => {
          this.$message({
            type: 'success',
            message: `用户信息`
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  $logo-height: 80px;
  .header-logo{
    display: flex;
    height: $logo-height;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    .header-logo-left{
      padding-left: 3rem;
      .img-logo img{
        display: inline-block;
        width: 90px;
        height: 56px;
      }
    }
    .header-logo-right{
      padding-right: 1rem;
      display: flex;
      height: 1rem;
      line-height: 1rem;
      .select-item{
        margin-right: 2rem;
      }
      .change-item{
        margin-right: 0.1rem;
      }
    }
  }
</style>
