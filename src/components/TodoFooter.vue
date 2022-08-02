<template>
  <div>
    <h1>All Users({{count}})</h1>
    <h2>POSTDATA ({{POSTDATA}})</h2>
    <table>
      <thead>
        <th v-for="(title, index) in titles" :key="index">{{title}}</th>
      </thead>
      <tbody>
        <tr v-for="(line, index) in content1" :key="index">
          <td v-for="(con, index) in line" :key="index">{{con}}</td>
        </tr>
      </tbody>
    </table>
    <table>
      <thead>
        <th v-for="(title, index) in titles" :key="index">{{title}}</th>
      </thead>
      <tbody>
        <tr v-for="(line, index) in content2" :key="index">
          <td v-for="(con, index) in line" :key="index">{{con}}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div>{{name}}</div> <br>
  <button @click="updateName">바꾸자</button>
  <hr>
</template>
<script>
import axios from 'axios'
import { mapState, mapGetters } from 'vuex'

export default {
  data () {
    return {
      content1: [],
      content2: []
    }
  },
  beforeCreate () {
    console.log('beforeCreate', this.name)
  },
  // created () {
  //   console.log('created', this.name)
  // },
  beforeMount () {
    // alert('beforeMount')
  },
  mounted () {
    // alert('mounted')
  },
  beforeUpdate () {
    console.log('beforeUpdate', this.name)
  },
  updated () {
    console.log('updated', this.name)
  },
  beforeUnmount () {
    console.log('beforeUnmounted', this.name)
  },
  unmounted () {
    console.log('unmounted', this.name)
  },
  methods: {
    updateName () {
      this.name = '바꼈지롱'
    }
  },
  computed: {
    ...mapGetters({
      count: 'allUsersCount'
    }),
    ...mapState(['titles'])
  },
  created () {
    axios
      .all([axios.get('http://localhost:8080/api/v1/user/list?page=0&size=8'), axios.get('http://localhost:8080/api/v1/board/list?page=0&size=4')])
      .then(
        axios.spread((res1, res2) => {
          this.$data.content1 = res1.data.data.content
          this.$data.content2 = res2.data.data.content
          console.log(res2)
        })
      )
  }
}
</script>
