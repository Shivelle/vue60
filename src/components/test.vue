<template>
	<div class="test">
		<h1>{{title}}</h1>

		<input type="text" v-model="title"><br>
	<!-- 	<span>{{user.firstName}}</span> -->
	<!--	<span v-text="user.lastName"></span> -->

	<p v-if="showName">{{user.firstName}}, {{user.lastName}}</p>
	<p v-else>Nobody</p>

	<ul>
		<li v-for="item in items">{{item.title}}</li>
	</ul>


	<button v-on:click="greet('hello world')">Say Greeting</button>

	<input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit">
	<br>
	<hr>

	<label>First Name: </label> <input type="text" v-model="user.firstName">
	<br>
	<label>Last Name: </label> <input type="text" v-model="user.lastName">

	<h3>{{fullName}}</h3>

	<h2>{{msg}}</h2>

	</div>
	
</template>

<script>
	export default {
		name: 'Test',
		props: {
			msg: {
				type: String, 
				default: 'Foobar'
			}
		}, 

		data() {
			return {
				title: 'Hello User', 
				user: {
					firstName: 'John', 
					lastName: 'Doe'
				}, 
				showName: true, 
				items: [
					{title: 'item one'}, 
					{title: 'item two'}, 
					{title: 'item three'}
				]
			}
		}, 

		methods: {
			greet: function(greeting) {
				alert(greeting); 
			}, 
			pressKey: function(e ) {
				console.log(e.target.value); 
			}, 
			enterHit: function() {
				console.log('You hit enter'); 
			}
		}, 

		computed: {
			fullName: function() {
				return this.user.firstName + ' ' + this.user.lastName; 
			}
		}
	}

</script>

<style scoped>
	ul {
		list-style-type: none; 
	}
</style>