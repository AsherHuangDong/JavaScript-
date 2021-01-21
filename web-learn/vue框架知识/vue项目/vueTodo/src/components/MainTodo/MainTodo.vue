<template>
  <div class="main-todo">
    <input
      v-model="content"
      type="text"
      class="add-todo"
      placeholder="what to do"
      autofocus
      @keyup.enter="addTodo"
    />
    <todo-item
      v-for="(item, index) in filterData"
      :key="index"
      :todo="item"
      @del="handleDeleteItem(item.id)"
    ></todo-item>
    <todo-info :total="total" @toggleState="handleToggleState" @clearCompleted="handleClear"></todo-info>
  </div>
</template>
<script>
import TodoItem from './coms/TodoItem'
import TodoInfo from './coms/TodoInfo'

let id = 0
export default {
  name: 'MainTodo',
  data () {
    return {
      todoData: [],
      content: '',
      total: 0,
      filter: 'all'
    }
  },
  computed: {
    filterData () {
      switch (this.filter) {
        case 'all':
          return this.todoData
          break
        case 'active':
          return this.todoData.filter(item => item.completed === false)
          break
        case 'completed':
          return this.todoData.filter(item => item.completed === true)
      }
    }
  },
  watch: {
    todoData: {
      deep: true,
      handler () {
        this.total = this.todoData.filter(item => item.completed === false).length
      }
    }
  },
  components: {
    TodoItem,
    TodoInfo
  },
  methods: {
    addTodo () {
      if (this.content === '') return

      this.todoData.unshift({
        id: id++,
        content: this.content,
        completed: false
      })
      this.content = ''
    },
    handleDeleteItem (id) {
      this.todoData.splice(this.todoData.findIndex(item => item.id === id), 1)
    },
    handleToggleState (state) {
      this.filter = state
    },
    handleClear () {
      this.todoData = this.todoData.filter(item => item.completed === false)
    }
  },
}
</script>
<style lang="stylus" scoped>
@import '~css/theme.styl'

.main-todo
  margin: 0 auto
  width: 600px
  background-color: #fff
  box-shadow: 0 0 5px #666

  .add-todo
    width: 100%
    padding: 16px 16px 16px 36px
    font-size: 24px
    font-weight: inherit
    font-family: inherit
    color: inherit
    border: none
    outline: none
    box-sizing: border-box
</style>