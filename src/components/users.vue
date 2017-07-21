<template>
	<div class="users">
		<h1>Users</h1>

		<form v-on:submit="addUser">
			<input type="text" v-model="newUser.name" placeholder="Enter Name">
			<br>
			<input type="text" v-model="newUser.email" placeholder="Enter Email">
			<br>
			<input type="submit" value="Submit">
			<ul>
				<li v-for="user in users">
					<input type="checkbox" class="toggle" v-model="user.contacted">
					<span :class="{contacted: user.contacted}">
					{{user.name}}: {{user.email}}

					<button v-on:click="deleteUser(user)">x</button>
					</span>
					
				</li>
			</ul>
		</form>
	</div>
	
</template>

<script>
	export default {
		name: 'Users',

		data() {
			return {
				newUser: {},
				users: [
					{
						name: 'John Doe',
						email: 'jdoe@gmail.com', 
						contacted:  false
					},
					{
						name: 'John Smith',
						email: 'jsmith@gmail.com', 
						contacted:  false
					},
					{
						name: 'Rose Tyler',
						email: 'rtyler@gmail.com',
						contacted:  false
					}
				]
			}
		}, 

		methods: {
			addUser: function(e) {
				this.users.push({
					name: this.newUser.name, 
					email: this.newUser.email, 
					contacted:  false
				}) 
				e.preventDefault(); 
			}, 
			deleteUser: function() {
				this.users.splice(this.users.indexOf()); 
			}
		}


	}

</script>

<style scoped>
	ul {
		list-style-type: none; 
	}

	.contacted {
		text-decoration: line-through;
	}
</style>