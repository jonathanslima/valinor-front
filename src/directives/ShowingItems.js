import Vue from 'vue';

Vue.directive('show-more-items', {
	bind(el, binding, vnode) {
		// let limit = binding.value;
		window.onscroll =  function(){
			if(window.pageYOffset > 100) {
				console.log(window.pageYOffset);
				console.log(window.innerHeight);


			}
		};
  }
});