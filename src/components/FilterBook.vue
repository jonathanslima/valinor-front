<template>
	<div class="filter">
		<div class="row">
			<div class="col s12">
				<div class="input-field col s12">
          <input id="filter" @input="$emit('item-filtered', $event.target.value)" type="search" class="validate">
          <label for="filter">Filter</label>
        </div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
			}
		}
	}
</script>

<style scoped lang="scss">
	#filter{ 
		&:focus{
			box-shadow: 0 1px 0 0 #26a69a;
		}
	}
</style>

