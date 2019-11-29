(window.onload = function() {
    'use strict'
	// ハンバーガメニュークリック処理
	var hamburger = document.getElementById('humbMenu');
	var navBar = document.getElementById('nav-bar');
	hamburger.addEventListener('click', () => {
		navBar.classList.toggle('hidden');
	});
	
	// スムーススクロール
	$('a[href^="#"]').click(function(){
		var speed = 500;
		var href = $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		navBar.classList.toggle('hidden');
		return false;
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
			document.getElementById('artModal').style.display ="flex";
			document.getElementById('artImg').src=img;
		});
	});
	
	// モーダルクリックで閉じる
	var modal = document.getElementById('artModal');
	modal.addEventListener('click', ()=> {
		document.getElementById('artModal').style.display ="none";
	});

	// スクロール時にフェードイン
	$(window).scroll(function (){
	    $('.fadein').each(function(){
	        var elemPos = $(this).offset().top,
                scroll = $(window).scrollTop(),
                windowHeight = $(window).height();
	        if (scroll > elemPos - windowHeight + 100){
	            $(this).addClass('scrollin');
	        }
	    });
	});

})();