/*section-top-return*/
const button = document.querySelector('.js-backToTop');

//クリックイベント
button.addEventListener('click', () => {
  //ページ上部へスムーススクロール
  window.scroll({ 
    top: 0, 
    behavior: "smooth"
  });
});

//スクロールイベント
window.addEventListener('scroll', () => {
  //スクロール量を判定して要素にクラスを付与
  if(window.scrollY > 100){
    button.classList.add('is-active');
  }else{
    button.classList.remove('is-active');
  }
});


