<template>
  <div>
    <button v-on:click="getData">가져오기</button>
    <table>
      <thead>
        <th v-for="(title, index) in titles" :key="index">{{title}}</th>
      </thead>
      <tbody>
        <tr v-for="(line, index) in items" :key="index">
          <td v-for="(con, index) in line" :key="index">{{con}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      titles: ['번호', '아이디', '이름', '이메일', '전화번호'],
      items: [],
      totalItems: 0,
      totalPages: 0
    }
  },
  methods: {
    getData: function (page, size) {
      var _app = this
      page = 0
      size = 5
      return axios.get('http://localhost:8080/api/v1/user/list?page=' + page + '&size=' + size)
        .then(function (response) {
          _app.$data.items = response.data.data.content
        })
    }
  }
}
</script>
<style>

</style>
