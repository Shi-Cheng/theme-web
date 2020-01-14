<template>
  <div class="select-container">
    <span>{{ options[0].value }}</span>
  </div>
</template>

<script>
export default {
  name: 'SelectItem',
  props: {
    options: {
      type: Array,
      default: Array
    }
  },
  data() {
    return {

    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
    }
  }
}
</script>

<style lang="scss" scoped>
  .select-container{
    height: 18px;
    line-height: 18px;
    span{
      color: #fff;
      font-size: 1rem;
    }
  }
</style>
