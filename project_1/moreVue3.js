const { createApp } = Vue

const app = createApp({
	data() {
		return {
			message: "Say What? ",
			bgColor: 0
		}
	},
	methods: {
		changeTheme() {
			this.bgColor += 50
		}
	}
})
app.mount('#app')