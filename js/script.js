//TOPへ戻るボタン
const pageTopBtn = document.getElementById('page-top');

// スクロールで表示
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    pageTopBtn.classList.add('show');
  } else {
    pageTopBtn.classList.remove('show');
  }
});

// クリックでトップへ
pageTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

//ハンバーガーリスト
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});