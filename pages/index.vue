<template>
  <div v-cloak>
    <h4>Top Stories</h4>
    <div v-for='item in items'>
      <nuxt-link :to="'/'+item">
        Story ID : {{item}}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
  var client = require('./../plugins/client')
  export default {
    data () {
      return {
        items: []
      }
    },
    created () {
      var vm = this
      client.get(`topstories.json`).then(res => {
        vm.items = res.data.slice(0,10)
      })
    }
  }
</script>