<template>
  <div>
    <h1>userlogin</h1>
  </div>
  <div>
      <input type="text" v-model="userId" placeholder="아이디">
      <input type="password" v-model="password" placeholder="비밀번호">
      <button v-on:click="login({userId, password})">로그인</button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

// const url = 'http://localhost:8080'

export default {
  data () {
    return {
      items: [],
      userId: null,
      password: null
    }
  },
  computed: {
    ...mapState([''])
  },
  methods: {
    ...mapActions(['login'])
  }
}
</script>
