<template>
	<div class="login">
		<div class="row">
		  <form class="col s6 offset-l3" v-on:submit.prevent>
		    <div class="row">
		      <div class="input-field col s12">
		        <input id="login" type="text" class="validate">
		        <label for="login">Login</label>
		      </div>
		    </div>

		    <div class="row">
		      <div class="input-field col s12">
		        <input id="password" type="password" class="validate">
		        <label for="password">Password</label>
		      </div>
		    </div>

		    <div class="row">
		      <div class="col s12 center">
		        <span @click="storeDataLogin">
  		        <router-link to="List" class="btn waves-effect waves-light btn-large">Enter
  	            <i class="material-icons right">send</i>
  	          </router-link>
		        </span>
		      </div>
		    </div>
		  </form>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{

			}
		},
		methods: {
			storeDataLogin: function() {
				let name = document.querySelector('#login').value;
				let pass = document.querySelector('#password').value;

				sessionStorage.setItem('userAcess', {
					'name': name,
					'pass': pass
				})
			}
		}
	}
</script>

<style>
	
</style>