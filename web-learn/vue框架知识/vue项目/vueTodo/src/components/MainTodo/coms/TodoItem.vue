<template>
  <div :class="['todo-item', todo.completed ? 'completed' : '']">
    <input v-model="todo.completed" type="checkbox" />
    <label>{{ todo.content }}</label>
    <button @click="delItem"></button>
  </div>
</template>
<script>
export default {
  name: 'TodoItem',
  props: {
    todo: Object
  },
  methods: {
    delItem () {
      this.$emit('del', this.todo.id)
    }
  },
}
</script>
<style lang="stylus" scoped>
@import '~css/theme.styl'
@import '~css/mixins.styl'

.todo-item
  display: flex
  justify-content: space-between
  padding: 10px
  font-size: 24px
  border-top: 1px solid #cccccc

  &:hover
    button:after
      content: 'x'
      font-size: 24px
      color: $lightred

  &.completed
    label
      color: #d9d9d9
      text-decoration: line-through

  input
    width: 50px
    height: 30px
    text-align: center
    cleanDefaultStyle()

    &:after
      content: url('~img/unchecked.svg')

    &:checked:after
      content: url('~img/checked.svg')

  label
    flex: 1
    transition: color 0.4s

  button
    width: 40px
    background-color: transparent
    cleanDefaultStyle()
    cursor: pointer
</style>