const {createApp} = Vue;

createApp({
  data(){
    return {
      tasks: [
        {
          text: 'fare la spesa',
          done: false
        },
        {
          text: 'lavare i piatti',
          done: false
        },
        {
          text: 'portare a spasso il cane',
          done: false
        }
      ]
    }
  },
  methods: {
    barTask(task) {
      task.done = !task.done;
    },
    deleteTask(index) {
      this.tasks.splice(index, 1)
    }
  }
}).mount('#app')