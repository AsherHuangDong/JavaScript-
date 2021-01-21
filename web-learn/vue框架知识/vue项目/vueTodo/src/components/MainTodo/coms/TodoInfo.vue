<template>
  <div class="todo-info">
    <span class="total">{{ total }} item left</span>
    <div class="tabs">
      <a
        :class="['btn', 'primary', 'border', state === item ? 'active' : '']"
        @click="toggleState(item)"
        v-for="(item, index) in states"
        :key="index"
      >{{ item }}</a>
    </div>
    <button @click="clearCompleted" class="btn info">Clear Completed</button>
  </div>
</template>
<script>
export default {
  name: 'TodoInfo',
  props: {
    total: Number
  },
  data () {
    return {
      states: ['all', 'active', 'completed'],
      state: 'all'
    }
  },
  methods: {
    toggleState (state) {
      this.state = state
      this.$emit('toggleState', this.state)
    },
    clearCompleted () {
      this.$emit('clearCompleted')
    }
  },
}
</script>
<style lang="stylus" scoped>
@import '~css/theme.styl'
@import '~css/mixins.styl'

.todo-info
  display: flex
  justify-content: space-between
  padding: 5px 10px
  font-weight: 400
  line-height: 30px
  border-top: 1px solid rgba(0, 0, 0, 0.1)

  .total
    color: $red

  .tabs
    display: flex
    justify-content: space-between
    width: 210px

    .btn.primary.border
      primaryBorderBtn()

      &.active
        primaryBtn()

  .btn.info
    infoBtn()
</style>