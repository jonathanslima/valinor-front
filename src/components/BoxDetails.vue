<template>
	<div class="box-details">
		<span class="close-box"><i class="material-icons">close</i></span>

		<ul class="list-details">
			<li class="detail-item"><b>Nota: </b><span class="grade">N/A</span></li>
			<li class="detail-item"><b>Editora: </b><span class="publisher">Objetiva</span></li>
			<li class="detail-item"><b>Gênero: </b><span class="category">Drama, Terror</span></li>
			<li class="detail-item"><b>Série: </b> <span class="serie"> - </span></li>
			<li class="detail-item"><b>Páginas: </b> <span class="pages">470</span></li>
			<li class="detail-item"><b>Sinopse: </b><span class="sinopse">Em Pesadelos e paisagens noturnas - livro em dois volumes -, Stephen King reúne suas melhores novelas. Histórias “muito estranhas”, nas palavras do autor, escritas em diferentes épocas, provando sua maestria também em narrativas curtas. Com vários filmes inesquecíveis já tendo sido adaptados de suas novelas – como Um sonho de liberdade, 1408, e À espera de um milagre –, os leitores ficarão encantados de redescobrir esta coleção de clássicos. Com vinte histórias curtas de terror, um script de televisão, um ensaio e um poema, Pesadelos e paisagens noturnas contém tramas únicas e arrepiantes, que incluem desde um rock-star zumbi a brinquedos malignos e assassinos.  Esta coleção de histórias, muitas inéditas, oferece uma viagem eletrizante a um mundo de pesadelos criado pelo mestre do terror e do imaginário grotesco.</span></li>
		</ul>
	</div>
</template>

<script>
	export default{
		props: [],
		data(){
			return{
			}
		}
	}
</script>

<style scoped lang="sass">
	.box-details{
		background: #ccc;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    padding: 15px;
    text-align: left;
		z-index: 1;
		display: none;
	}

	.box-details-show{
    height: 100%;
		display: table;
	}
	/* MEDIA QUERY MOBILE FIRST ------------------------------------------------------------*/
	//
	/* Small devices (smartphones, 320px and up) */
	@media (min-width: 320px) {}

	/* Small devices (tablets, 600px and up) */
	@media (min-width: 600px) {}

	/* Medium devices (desktops, 992px and up) */
	@media (min-width: 992px) {
		.box-details{
		  width: 80%;
		  margin-left: 10%;
		}
	}

	/* Large devices (large desktops, 1200px and up) */
	@media (min-width: 1200px) {}
</style>