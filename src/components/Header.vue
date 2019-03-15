<template>
	<header class="header">
		<img class="logo" :src="imagePath">
		<h1 class="title">{{ pName }}</h1>

		<nav class="menu-nav">
			<ul>
				<li v-for="li in menuItem" class="menu-item">{{ li }}</li>
			</ul>
		</nav>
	</header>
</template>

<script>
	export default{
		props: [ 'pName' ],
		data(){
			return{
				imagePath: './src/assets/img/blason-gondor.png',
				menuItem: ['Lista', 'Cadastro']
			}
		},
		methods() {
		}
	}
</script>

<style scoped lang="sass">
	.header{
		margin-top: 15px;
		margin-bottom: 70px;
		display: flex;
		justify-content: left;
		align-items: center; 
		height: 100px;
		width: 100%;
	}

	.logo{
		max-width: 80px;
		margin-right: 15px;
	}

	.title{
		font-size: 36px;
		margin: 0;
	}

	.menu-nav{
		background: none;
		color: #333;
		box-shadow: none;
		text-align: right;

		ul{
			display: inline-block;
		}

		.menu-item{
			margin: 0 15px;
		}
	}
</style>