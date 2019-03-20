<template>
	<div class="login">
		<div class="row">
		  <form class="col s6 offset-l3" v-on:submit.prevent>
		    <div class="row">
		      <div class="input-field col s12">
		        <input id="login" type="text" class="validate" :value="login" autocomplete="off">
		        <label for="login">Login</label>
		      </div>
		    </div>

		    <div class="row">
		      <div class="input-field col s12">
		        <input id="password" type="password" class="validate" :value="pass" autocomplete="off">
		        <label for="password">Password</label>
		      </div>
		    </div>

		    <div class="row">
		      <div class="col s12 center">
		        <button @click="storeDataLogin" class="btn waves-effect waves-light btn-large">Enter
	            <i class="material-icons right">send</i>
	          </button>
		      </div>
		    </div>
		  </form>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			let UA = JSON.parse(sessionStorage.getItem('userAcess')) || '';
			let UAName = UA ? UA[0].name : '';
			let UAPass = UA ? UA[0].pass : '';

			return{
				'login': UAName,
				'pass': UAPass
			}
		},
		methods: {
			storeDataLogin: function() {
				let name = document.querySelector('#login').value;
				let pass = document.querySelector('#password').value;

				sessionStorage.setItem('userAcess', '[{"name": "' + name + '","pass": "' + pass + '"}]');

				this.$router.push('/list')
			}
		}
	}
</script>

<style>
	
</style>