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
  }
}).mount('#app')