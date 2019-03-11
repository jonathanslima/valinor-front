<template>
	<div>
		<span v-if="reading" class="bar-reading reading"></span>
		<span v-else-if="read" class="bar-reading read"></span>
		<span v-else class="bar-reading noread"></span>

		<i class="material-icons tooltipped" @mouseover="enableTooltip" data-position="right" data-tooltip="reading">info</i>
	</div>
</template>

<script>
	export default{
		props: ['bookRead'],
		data(){
			return{
				read: this.bookRead.toLowerCase() == 's' ? true : false,
				reading: this.bookRead.toLowerCase() == 'p' ? true : false,
				noread: this.bookRead.toLowerCase() == 'n' ? true : false,
			}
		},
		methods: {
			enableTooltip: () => {
		    var elems = document.querySelectorAll('.tooltipped');
		    var instances = M.Tooltip.init(elems);
			}
		}
	}
</script>

<style type="text/css" scoped lang="sass">
	$read: green;
	$noread: #ccc;

	.read{ background-color: $read }
	.noread{ background-color: $noread }
	.reading{ background: linear-gradient(to right, $read 50%, $noread 50%) }

	.bar-reading{
		width: 80%;
		height: 5px;
		margin: 10px 5px 10px 0;
		display: inline-block;
	}

	.tooltipped{
		width: 15%;
		text-align: right;
	}
</style>