<template>
	<div class="">
		<button @click="showDetails()" class="btn btn-details waves-effect waves-light">{{ details }}</button>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				'details': 'Detalhes'
			}
		},
		methods: {
			showDetails: () => {
				console.log('$emit')
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