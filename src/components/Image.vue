<template>
	<figure>
		<span v-if="status" class="icon-status icon-home"><i class="material-icons">home</i></span>
		<span v-else class="icon-status icon-away"><i class="material-icons">block</i></span>

		<img :src="bookURL" :alt="bookAlt" class="book-img" :status="bookStatus">
	</figure>
</template>

<script>
	export default{
		props: ['bookURL', 'bookAlt', 'bookStatus'],
		data(){
			return{
				status: this.bookStatus.toLowerCase() == 'h' ? true : false
			}
		}
	}
</script>

<style scoped lang="sass">
	.card{
		.icon-status{
			position: absolute;
	    top: 0;
	    left: 0;

	    .material-icons{
				font-size: 50px;
	  	}
		}

		.icon-away{ color: red; }
		.icon-home{ color: green; }

		figure{
			margin-top: 30px;
			margin-bottom: 0;
			overflow: hidden;
			height: 270px;
		}

		.book-img{
			width: 100%;
		}
	}
	
	/* Medium devices (desktops, 992px and up) */
	@media (min-width: 992px) {
		.card{
			.icon-status{
		    .material-icons{
		    	font-size: 40px;
		  	}
			}
		}
	}

	/* Large devices (large desktops, 1200px and up) */
	@media (min-width: 1200px) {
		.card{
			.icon-status{
		    .material-icons{
		    	font-size: 40px;
		  	}
			}
		}
	}
</style>