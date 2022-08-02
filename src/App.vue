<template>
  <div id="app">
    <UpHeader></UpHeader>
    <!-- <TodoInput></TodoInput>
    <TodoHeader></TodoHeader>
    <TodoList></TodoList> -->
    <!-- <TodoFooter></TodoFooter> -->
    <router-link to="/about">about으로 가기</router-link> <br>
    <router-link to="/">메인으로 가기</router-link> <br>
    <router-link to="/footer">Footer로 가기</router-link> <br>
    <router-link to="/input">Input으로 가기</router-link> <br>
    <router-link to="/login">Login으로 가기</router-link> <br>
    <router-link to="/list">List로 가기</router-link> <br>
    <!-- <about-view></about-view>
    <home-view></home-view> -->
    <router-view></router-view>
  </div>
</template>

<script>

// import TodoHeader from './components/TodoHeader.vue'
// import TodoInput from './components/TodoInput.vue'
// import TodoList from './components/TodoList.vue'
// import TodoFooter from './components/TodoFooter.vue'
import UpHeader from './components/UpHeader.vue'
// import AboutView from './views/AboutView.vue'
// import HomeView from './views/HomeView.vue'
// import UserLogin from './components/user/UserLogin.vue'

export default {
  name: 'app',
  components: {
    // TodoHeader: TodoHeader,
    // TodoInput: TodoInput,
    // TodoList: TodoList,
    // TodoFooter: TodoFooter,
    UpHeader: UpHeader
    // AboutView: AboutView,
    // HomeView: HomeView
  }
}
</script>

<style>
  body {
    text-align: center;
    background-color: #F6F6F8;
  }
</style>
