<template>
  <div>
    <input type="text" v-model="addWord">
    <button v-on:click="detailBoard">검색</button>
    <button v-on:click="gogo">누르기</button>
    <button v-on:click="add">추가</button>
    <h1>{{ $store.state.info3 }}</h1>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      search: '',
      info: [],
      info2: []
    }
  },
  methods: {
    // ...mapMutations(['addTitles']),
    ...mapActions(['addTitles']),
    add () {
      // this.addTitles(this.addWord)
      // this.$store.commit('addTitles', this.addWord)
      this.addTitles(this.addWord)
    },
    // detailBoard (search) {
    //   console.log(search)
    //   const _app = this
    //   return axios.get('http://localhost:8080/api/v1/board/' + search, { search: this.search })
    //     .then(function (response) {
    //       _app.$data.search = search
    //       console.log(response)
    //     })
    // },
    gogo () {
      return axios.get('http://localhost:8080/api/v1/board/list?page=0&size=4')
        .then(function (response) {
          console.log(response.data.data.content)
        })
    }
  }
}
</script>
