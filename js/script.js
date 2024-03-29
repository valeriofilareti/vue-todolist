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
        this.errorMessage = 'Attenzione! La task non è stata completata!'
        setTimeout(() => {
          this.errorMessage ='';
        },2000)
      }
    },
    addTask(){
      if (this.newTaskText.length > 5) {
        const newTask = {
          text: this.newTaskText,
          done: false
        };
        this.tasks.push(newTask);
        this.newTaskText = '';
      } else {
        this.errorMessage = 'Attenzione! La task deve contenere almeno 5 caratteri!'
        setTimeout(() => {
          this.errorMessage ='';
        },2000)
      }
    }
  }
}).mount('#app')