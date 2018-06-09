new Vue({
	el: '#anykate',
	data: {
		name: 'Aniket',
		gender: 'Male',
		website: 'https://www.google.co.in',
		webHTML: '<a href="https://www.google.co.in">Google</a>'
	},
	methods: {
		greet: function(text){
			// console.log('here');
			return 'Good ' + text + ' ' + this.name;
		}
	}
});