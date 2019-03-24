import Vue from 'vue';

Vue.directive('show-more-items', {
	bind(el, binding, vnode) {
		// let limit = binding.value;

		let showCardsOnScroll = (item)=> {
			document.querySelector('.loader').style.display = 'none';
			item.style.transition = "opacity ease 1s";
			item.style.display = 'block';
			item.style.opacity = "1";	
		}
		  	
		window.onscroll =  function(){

		  let scrollTop = document.scrollingElement.scrollTop;
			let bodyHeight = document.body.scrollHeight - window.innerHeight;
			let scrollPercentage = (scrollTop / bodyHeight);

			if(scrollPercentage > 0.9) {
				let cards = [].slice.call(document.querySelectorAll('.card'));
				let hiddenItems;

				cards.map((item, index)=> {
					hiddenItems = [];
					for(let i = 0; i < cards.length; i++){
						if(cards[i].style.display == 'none'){
							hiddenItems.push(cards[i]);
						}
					}
					// console.log(hiddenItems);
					if(hiddenItems.length){ document.querySelector('.loader').style.display = 'block'; }
					
					return hiddenItems;
				})

				hiddenItems.map((item, index)=> {
					if(hiddenItems.length >= 12){

						if(index <= 11){
							setTimeout(()=> showCardsOnScroll(item), 1000)
						}
					}

					if(hiddenItems.length < 12){
						setTimeout(()=> showCardsOnScroll(item), 1000)
					}
				})
			}
		};
	}
});