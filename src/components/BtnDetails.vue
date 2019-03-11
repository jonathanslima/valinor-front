<template>
	<div class="">
		<button class="btn btn-details waves-effect waves-light">{{ details }}</button>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				'details': 'Detalhes'
			}
		}
	}
</script>

<style scoped lang="sass">
	.btn-details{
		text-transform: uppercase;
		margin-bottom: 15px;
	}
</style>