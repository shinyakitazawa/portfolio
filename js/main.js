(window.onload = function() {
    'use strict'
	// ハンバーガメニュークリック処理
	var hamburger = document.getElementById('humbMenu');
	var navBar = document.getElementById('nav-bar');
	hamburger.addEventListener('click', () => {
		navBar.classList.toggle('hidden');
	});
	
	// ポートフォリオクリック時
	var arts = document.getElementsByClassName('portfolio__art');
	arts = Array.prototype.slice.call(arts);
	arts.forEach(art => {
		art.addEventListener('click', (e) => {
            if (art.dataset.img != undefined)
            {
                alert(art.dataset.img);
            } else {
                alert(art.getElementsByTagName('img')[0].src);
            }
			
		});
	});
	
})();