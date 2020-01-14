<template>
  <el-card>
    <div slot="header">
      web-javascript  111
    </div>
    <div style="float: left; margin-bottom: 10px">
      <Calendar
        ref="Calendar"
        @choseDay="chosenDay"
        @changeMonth="changeMonth"/>
    </div>
  </el-card>
</template>

<script>
import Calendar from 'vue-calendar-component'
export default {
  name: 'Index',
  components: {
    Calendar
  },
  methods: {
    chosenDay(val) {
      console.log(val)
    },
    changeMonth(val) {
      console.log(val)
    }
  }
}
</script>

<style lang="scss">
  .wh_content_all[data-v-2ebcbc83]{
    background-color: #afad9c;
  }
  .card div:nth-child(1){
    background-color:#BDC0BA;
    padding-bottom:0;
  }
  .card div:nth-child(3) div ,.card div:nth-child(2) div{
    height: 35px;
    width: 35px;
  }
  /*今天*/
  .wh_content_item .wh_isToday[data-v-2ebcbc83]{
    background-color:rgb(139, 175, 241);
  }
  /*日历点击*/
  .wh_content_item .wh_chose_day[data-v-2ebcbc83]{
    background-color:transparent;
  }
  /*日历划过*/
  .wh_item_date[data-v-2ebcbc83]:hover {
    background-color: rgb(111, 223, 223);
    border-radius: 100%;
  }

</style>
