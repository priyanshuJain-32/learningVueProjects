const { createApp } = Vue

const app = createApp({
	data() {
		return {
			message: "Say What? "
		}
	}
})
app.mount('#app')