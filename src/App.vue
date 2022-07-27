<template>
  <div id="app">
    <UpHeader></UpHeader>
    <TodoInput></TodoInput>
    <TodoHeader></TodoHeader>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>

import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
import UpHeader from './components/UpHeader.vue'

export default {
  name: 'app',
  components: {
    TodoHeader: TodoHeader,
    TodoInput: TodoInput,
    TodoList: TodoList,
    TodoFooter: TodoFooter,
    UpHeader: UpHeader
  }
}
</script>

<style>
  body {
    text-align: center;
    background-color: #F6F6F8;
  }
</style>
