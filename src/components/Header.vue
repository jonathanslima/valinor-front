<template>
	<header class="header">
		<router-link to="/">
			<img class="logo" :src="imagePath">
		</router-link>
		<h1 class="title">{{ pName }}</h1>

		<nav class="menu-nav">
			<ul>
				<li v-for="li in menuItem" class="menu-item">
					<router-link :to="li">{{ li }}</router-link>
				</li>
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
				menuItem: ['list', 'register']
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
		display: none;
		background: none;
		color: #333;
		box-shadow: none;
		text-align: right;

		ul{
			display: inline-block;
			text-transform: uppercase;
		}

		.menu-item{
			margin: 0 15px;

			a{
				color: #333;
			}
		}
	}

	/* Small devices (tablets, 600px and up) */
	@media (min-width: 600px) {
		.menu-nav{
			display: block;
		}
	}
</style>