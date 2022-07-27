<template>
  <div>
    <button v-on:click="getData">가져오기</button> <br>
      totalItems : {{ totalItems }} <br />
      totalPages : {{ totalPages }} <br />
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
    <button v-on:click="getBusTime">게시글 가져오기</button> <br>
    <table>
      <thead>
        <th v-for="(title, index) in boardtitles" :key="index">{{title}}</th>
      </thead>
      <tbody>
        <tr v-for="(lines, index) in boards" :key="index">
          <td v-for="(con, index) in lines" :key="index">{{con}}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div>
    <input type="text" v-model="title" placeholder="제목">
    <input type="text" v-model="content" placeholder="내용">
    <button @click="saveBoard">작성</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      titles: ['번호', '아이디', '이름', '이메일', '전화번호'],
      boardtitles: ['번호', '제목', '분류', '작성자'],
      items: [],
      boards: [],
      totalItems: 0,
      totalPages: 0,
      title: [],
      content: []
    }
  },
  created: function () {
    const _app = this
    return axios.get('http://localhost:8080/api/v1/board/list?page=0&size=4')
      .then(function (response) {
        _app.$data.boards = response.data.data.content
      })
  },
  methods: {
    getData: function (page, size) {
      const _app = this
      page = 0
      size = 5
      return axios.get('http://localhost:8080/api/v1/user/list?page=' + page + '&size=' + size)
        .then(function (response) {
          _app.$data.items = response.data.data.content
          console.log(response)
          _app.$data.totalItems = response.data.data.totalElements
        })
    },
    getBusTime: function () {
      const _app = this
      return axios.get('http://localhost:8080/api/v1/board/list?page=0&size=6')
        .then(function (response) {
          _app.$data.boards = response.data.data.content
        })
    },
    saveBoard: function () {
      const _app = this
      return axios.post('http://localhost:8080/api/v1/board', { title: this.title, content: this.content })
        .then(function (response) {
          console.log(_app.title)
        })
    }
  }
}
</script>
<style>

</style>
