<template>
	<section class="center col s12 m6 l4">
		<div class="card">
			<slot></slot>
		</div>
	</section>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
			}
		}
	}
	
</script>

<style type="text/css" scoped lang="sass">
	.card{
		box-shadow: 0 8px 15px rgba(150, 150, 150, 1);
		padding: 10px;
	}
</style>