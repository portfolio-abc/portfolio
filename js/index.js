/*
ローディング画面
================================================================= */

//ローディンググレースクリーン
const loadingAreaGrey = document.querySelector('#loading');

//ローディング青スクリーン
const loadingAreaBlue = document.querySelector('#loading-screen');

//ローディングテキスト
const loadingText = document.querySelector('#loading p');

//ローディングから画面遷移
window.addEventListener('load', () => {
	
	//ローディング中（グレースクリーン）
	loadingAreaGrey.animate(
		{
			opacity: [1, 0],
			visibility: 'hidden',
		},
		{
			duration: 2000,
			delay: 1200,
			easing: 'ease',
			fill: 'forwards',
		}
	);
	
	//ローディング中（青スクリーン）
	loadingAreaBlue.animate(
		{
			translate: ['0 100vh', '0 0', '0 -100vh']
		},
		{
			duration: 2000,
			delay: 800,
			easing: 'ease',
			fill: 'forwards',
		}
	);

	//ローディング中テキスト
	loadingText.animate(
		[
			{
				opacity: 1,
				offset: 0.8,
			},
			{
				opacity: 0,
				offset: 1,
			},
		],
		{
			duration: 1200,
			easing: 'ease',
			fill: 'forwards',
		}
	);
});

/*
フェードイン
================================================================= */

//監視対象が範囲内に現れたら実行する動作
const animateFade = (entries, obs) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.animate(
				{
					opacity: [0, 1],
					filter: ['blur(0.4rem)','blur(0)'],
					translate: ['0 4rem', 0],
				},
				{
					duration: 1000,
					easing: 'ease',
					fill: 'forwards',
				}
			);
			//一度表示したら監視を終了
			obs.unobserve(entry.target);
		}
	});
};

//監視設定
const fadeObserver = new IntersectionObserver(animateFade);

//.fadeinを監視するように指示
const fadeElements = document.querySelectorAll('.fadein');
fadeElements.forEach((fadeElement) => {
	fadeObserver.observe(fadeElement);
});