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
	var img;
	arts = Array.prototype.slice.call(arts);
	arts.forEach(art => {
		art.addEventListener('click', (e) => {
            if (art.dataset.img != undefined)
            {
                img = art.dataset.img;
            } else {
                img = art.getElementsByTagName('img')[0].src;
            }
			document.getElementById('artModal').style.display ="block";
			document.getElementById('artImg').src=img;
		});
	});
	
	// モーダルクリックで閉じる
	var modal = document.getElementById('artModal');
	modal.addEventListener('click', ()=> {
		document.getElementById('artModal').style.display ="none";
	});
	
})();