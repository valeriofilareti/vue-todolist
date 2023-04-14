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
      ],
      errorMessage: '',
      newTaskText: ''
    }
  },
  methods: {
    barTask(task) {
      task.done = !task.done;
    },
    deleteTask(index) {
      if(this.tasks[index].done) {
        this.tasks.splice(index, 1)
      } else {
        this.errorMessage = 'errore'
        setTimeout(() => {
          this.errorMessage ='';
        },2000)
      }
    },
    addTask(){
      const newTask = {
        text: this.newTaskText,
        done: false
      };
      this.tasks.push(newTask);
    }
  }
}).mount('#app')