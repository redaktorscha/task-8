//dynamically add background-image to selected div's

const changeBack = (picList) => {
   
    const urlArr = ["url('https://womenbz.ru/static/adv_quote/promo_quote/64.jpg')",
    "url('https://womenbz.ru/images/quotes/mne-ochen-hotelos-takzhe.png')",
    "url('https://womenbz.ru/images/quotes/kak-sdvinutsya-s-mertvoy-tochki.png')"];
    let n = 0;

    for (let i = 0; i < picList.length; i++) {
        picList[i].style.backgroundImage = urlArr[n];
        n++;
    }
}

changeBack(document.querySelectorAll('.backgr-js'));