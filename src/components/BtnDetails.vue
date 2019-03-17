<template>
	<div class="">
		<button @click="showDetails" class="btn btn-details waves-effect waves-light">{{ details }}</button>
	</div>
</template>

<script>
	import { serverBus } from '../main.js';
	export default{

		props: ['bookDataToModal'],
		data(){
			return {
				'details': 'Details'
			}
		},
		methods: {
			showDetails: function(){
				serverBus.$emit('showDetails', this.bookDataToModal);
				document.querySelector('.box-details').style.display = 'block';
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