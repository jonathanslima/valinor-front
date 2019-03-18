<template>
  <login></login>		
</template>

<script>
  import Header from './Header.vue';
  import Login from './Login.vue';

	export default{
		components: {
      'headerValinor': Header,
      'login': Login
		},
		data(){
			return{
			}
		}
	}
</script>

<style scoped lang="scss">
	@media (min-width: 900px) {
		.login{
			margin-top: 150px;
		}

		.btn{
			background: #4CAF50;

			&:hover{
				opacity: 0.8;
			}
		}
	}
</style>