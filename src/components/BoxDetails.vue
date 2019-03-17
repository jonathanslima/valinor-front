<template>
	<div class="box-details">
		<span class="close-box"><i @click="closeBox" class="material-icons">close</i></span>

		<ul class="list-details">
			<li class="detail-item"><b></b><span class="name">{{ name }}</span></li>
			<li class="detail-item"><b>Nota: </b><span class="grade">{{ grade }}</span></li>
			<li class="detail-item"><b>Editora: </b><span class="publisher">{{ publisher }}</span></li>
			<li class="detail-item"><b>Gênero: </b><span class="category">{{ category }}</span></li>
			<li class="detail-item"><b>Série: </b> <span class="serie"> {{ serie }} </span></li>
			<li class="detail-item"><b>Páginas: </b> <span class="pages">{{ pages }}</span></li>
			<li class="detail-item"><b>Sinopse: </b><span class="sinopse">{{ sinopse }}</span></li>
		</ul>
	</div>
</template>

<script>
	import { serverBus } from '../main.js';
	export default{
		data(){
			return{
				name: null,
				grade: null,
				publisher: null,
				category: null,
				serie: null,
				pages: null,
				sinopse: null
			}
		},
		methods: {
			closeBox: () => {
				document.querySelector('.box-details').style.display = 'none';
			}
		},
		created(){
			serverBus.$on('showDetails', (book) => {
			   this.name = book.livro.toUpperCase();
			   this.grade = book.detalhes.nota;
			   this.publisher = book.detalhes.editora;
			   this.category = book.genero;
			   this.serie = book.detalhes.serie;
			   this.pages = book.detalhes.paginas;
			   this.sinopse = book.sinopse;
			  });
		}
	}
</script>

<style scoped lang="sass">
	.box-details{
		background: rgba(80, 80, 80, 0.9);
		color: #fff;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    padding: 15px;
    text-align: left;
		z-index: 1;
		height: 100vh;
		overflow: scroll;
		display: none;
	}

	.box-details-show{
		display: table;
	}

	.close-box{
		cursor: pointer;
	}

	.name{
		font-size: 24px;
	}
	/* MEDIA QUERY MOBILE FIRST ------------------------------------------------------------*/
	//
	/* Small devices (smartphones, 320px and up) */
	@media (min-width: 320px) {}

	/* Small devices (tablets, 600px and up) */
	@media (min-width: 600px) {}

	/* Medium devices (desktops, 992px and up) */
	@media (min-width: 992px) {

	}

	/* Large devices (large desktops, 1200px and up) */
	@media (min-width: 1200px) {
		.box-details{
			background: rgba(80, 80, 80, 0.9);
			color: #fff;
	    position: fixed;
	    width: 80%;
	    top: 25%;
	    left: 10%;
	    padding: 15px 50px;
	    text-align: left;
			z-index: 1;
			height: 60%;
		}
	}
</style>