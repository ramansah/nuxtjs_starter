<template>
  <div>
    <h3>{{item.title}}</h3>
  </div>
</template>

<script>
  var client = require('./../plugins/client')

  export default {

    async fetch ({ store, params }) {
      let item = await client.get(`item/${params.id}.json`).then(res => {
        return res.data
      })
      store.commit('SET_ITEM', item)
    },

    data () {
      return {
        item: this.$store.state.item,
      }
    },

    head () {
      return {
        meta: [{
          'og:title': this.item.title,
          'og:description': this.item.type
        }]
      }
    },

  }
</script>
