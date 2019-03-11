<template>
	<header>
		<h1 class="main-title upp">{{ bookName }}</h1>
		<h2 class="subtitle">{{ authorName }}</h2>
	</header>
</template>

<script>
	export default{
		props: ['bookName', 'authorName'],
		data(){
			return{
			}
		}
	}
</script>

<style type="text/css" scoped lang="sass">
	// Vars
	$black: #333;
	$font-title-sz: 18px; 
	$font-subtitle-sz: 14px; 
	$main-font: 'ubuntu';

	.upp{
		text-transform: uppercase;
	}

	.main-title, .subtitle{
		font-family: $main-font;
		color: $black;
		margin-top: 15px;
	}

	// Title
	.main-title{
		height: 57px;
		font-size: $font-title-sz;
		font-weight: bold;
	}

	.subtitle{
		font-size: $font-subtitle-sz;
	}

	/* Medium devices (desktops, 992px and up) */
	@media (min-width: 992px) {
		.main-title{
			height: 37px;
		}
	}

	/* Large devices (large desktops, 1200px and up) */
	@media (min-width: 1200px) {}
</style>