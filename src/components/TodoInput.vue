<template>
  <div>
    <input type="text" v-model="search">
    <button v-on:click="detailBoard">검색</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      search: ''
    }
  },
  methods: {
    detailBoard (search) {
      console.log(search)
      const _app = this
      return axios.get('http://localhost:8080/api/v1/board/' + search, { search: this.search })
        .then(function (response) {
          _app.$data.search = search
          console.log(response)
        })
    }
  }
}
</script>
