<template>
	<div class="bl-read">
		<span v-if="reading" class="bar-reading reading"></span>
		<span v-else-if="read" class="bar-reading read"></span>
		<span v-else class="bar-reading noread"></span>

		<i v-if="reading" class="material-icons tooltipped" @mouseover="enableTooltip" data-position="right" data-tooltip="Reading">info</i>
		<i v-else-if="read" class="material-icons tooltipped" @mouseover="enableTooltip" data-position="right" data-tooltip="Read">info</i>
		<i v-else class="material-icons tooltipped" @mouseover="enableTooltip" data-position="right" data-tooltip="Not read">info</i>
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

	.bl-read{
		margin-top: 10px;
	}

	.bar-reading{
		width: 88%;
		height: 5px;
		margin: 10px 0;
		display: inline-block;
	}

	.tooltipped{
		width: 10%;
		text-align: right;
	}
</style>