<template>
  <div>
    menus
  </div>
</template>

<script>
export default {
  name: 'MenuIndex',
  data() {
    return {

    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.axios.get('/static/data/menus.json').then(res => {
        console.log(res.data)
      })
    }
  }
}
</script>

<style scoped>

</style>
