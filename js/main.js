(window.onload = function() {
    'use strict'

	var hamburger = document.getElementById('humbMenu');
	var navBar = document.getElementById('nav-bar');
	hamburger.addEventListener('click', () => {
		navBar.classList.toggle('hidden');
	});
})();