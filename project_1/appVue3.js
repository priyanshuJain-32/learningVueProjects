const { createApp } = Vue

const app = createApp({
  data() {
    return {
      message : 'Hello vue 3'
    }
  }
})

app.mount('#app')