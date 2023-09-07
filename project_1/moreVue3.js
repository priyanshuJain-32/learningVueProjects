const { createApp } = Vue

const app = createApp({
	data() {
		return {
			message: "Say What? ",
			bgColor: 0,
			btnClass: "btn-primary"
		}
	},
	methods: {
		changeTheme() {
			this.bgColor += 50;
		},
		btnColor() {
			if (this.btnClass === "btn-primary") {
				this.btnClass = "btn-secondary";	
			}
			else {
				this.btnClass = "btn-primary";
			}
			
		}
	}

})
app.mount('#app')