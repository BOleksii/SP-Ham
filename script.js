

// <section our services
const servicesList = document.querySelector('.services-list');

servicesList.addEventListener('click', function(event) {
    if (event.target.closest('.services-tabs-nav-item')) {
        event.preventDefault();

        // Видалити активний клас з усіх елементів вмісту вкладки
        const tabContents = document.querySelectorAll('.tab');
        for (let i = 0; i < tabContents.length; i++) {
            tabContents[i].classList.remove('active');
        }

        // Додати активний клас до елемента вмісту вкладки, яку ви натиснули
        const tabId = event.target.closest('.services-tabs-nav-item').getAttribute('data-id');
        const tabContent = document.querySelector('#tab' + tabId);
        tabContent.classList.add('active');

        // Видалити активний клас з усіх елементів навігації вкладок
        const tabNavItems = document.querySelectorAll('.services-tabs-nav-item');
        for (let i = 0; i < tabNavItems.length; i++) {
            tabNavItems[i].classList.remove('active');
        }

        // Додати активний клас до навігаційного елемента вкладки
        event.target.closest('.services-tabs-nav-item').classList.add('active');
        const canvas = document.getElementById("tutorial");
        const activeTab = document.querySelector('.services-tabs-nav-item.active');
        activeTab.insertAdjacentElement(   "beforeend", canvas);
    }
});

function draw() {
    const canvas = document.getElementById("tutorial");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(15, 15);
        ctx.lineTo(30, 0);
        ctx.fillStyle = "#18CFAB";
        ctx.fill();
    }
    // Додати канвас до активного табу
    const activeTab = document.querySelector('.services-tabs-nav-item.active');
    activeTab.insertAdjacentElement("beforeend", canvas);
}


// Викликати функцію draw() після завантаження сторінки
window.addEventListener('load', draw);

//==================================================


// <section main-section-amazing-work

const tabs = document.getElementsByClassName("tab-title");

const tabsContent = document.getElementsByClassName("tabs-image");

[...tabs].forEach(tab => tab.addEventListener('click', tabClick));



function tabClick(event) {
    const tabId = event.target.dataset.id;

    [...tabs].forEach((tab, i) => {
        tab.classList.remove('active');
        tabsContent[i].classList.remove('active');
    })

    tabs[tabId - 1].classList.add('active');
    tabsContent[tabId - 1].classList.add('active');



}


const imagesContainer = document.querySelector('.images-container');
const loadMoreBtn = document.querySelector('#load-more-btn');

let images = [
    // Список URL-адрес зображень
    'https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539__340.jpg',
    'https://cdn.pixabay.com/photo/2015/07/05/10/18/tree-832079__340.jpg',
    'https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267__340.jpg',
    'https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287__340.jpg',
    'https://cdn.pixabay.com/photo/2013/07/18/10/56/railroad-163518__340.jpg',
    'https://cdn.pixabay.com/photo/2016/02/13/12/26/aurora-1197753__340.jpg',
    'https://cdn.pixabay.com/photo/2018/11/17/22/15/trees-3822149__340.jpg',
    'https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367__340.jpg',
    'https://cdn.pixabay.com/photo/2016/04/18/22/05/seashells-1337565__340.jpg',
    'https://cdn.pixabay.com/photo/2014/08/01/00/08/pier-407252__340.jpg',
    'https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928__340.jpg',
    'https://cdn.pixabay.com/photo/2016/07/11/15/43/woman-1509956__340.jpg',
    //
    'https://media.istockphoto.com/id/825319778/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B7%D0%B0%D1%85%D1%96%D0%B4-%D1%81%D0%BE%D0%BD%D1%86%D1%8F-%D0%BD%D0%B0-%D0%BF%D0%BB%D1%8F%D0%B6%D1%96.jpg?s=612x612&w=0&k=20&c=vrE2k7l_jaGmilU93YtY5pTB6yCwW4vlXMnmBrgzdEk=',
    'https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_960_720.jpg',
    'https://media.istockphoto.com/id/1151755587/uk/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D1%85%D1%96%D0%B4-%D1%81%D0%BE%D0%BD%D1%86%D1%8F-%D0%B7%D0%B0-%D1%82%D1%80%D0%BE%D0%BF%D1%96%D1%87%D0%BD%D0%B8%D0%BC-%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B2%D0%BE%D0%BC-%D0%BD%D0%B0-%D0%BC%D0%B0%D0%BB%D1%8C%D0%B4%D1%96%D0%B2%D0%B0%D1%85.jpg?s=612x612&w=0&k=20&c=t71eHcLM2NhIHY8zCAe1oF5iIv5wK2EaQlFUonxURMI=',
    'https://media.istockphoto.com/id/1220536107/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B7%D0%B0%D1%85%D1%96%D0%B4-%D1%81%D0%BE%D0%BD%D1%86%D1%8F-%D0%B7%D0%B0-%D1%82%D1%80%D0%BE%D0%BF%D1%96%D1%87%D0%BD%D0%B8%D0%BC-%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B2%D0%BE%D0%BC-%D0%B7-%D0%BF%D0%B0%D0%BB%D1%8C%D0%BC%D0%B0%D0%BC%D0%B8-%D1%96-%D1%81%D0%BC%D0%B0%D1%80%D0%B0%D0%B3%D0%B4%D0%BE%D0%B2%D0%B8%D0%BC-%D0%BE%D0%BA%D0%B5%D0%B0%D0%BD%D0%BE%D0%BC-%D0%BD%D0%B0-%D0%BC%D0%B0%D0%BB%D1%8C%D0%B4%D1%96%D0%B2%D0%B0%D1%85.jpg?s=612x612&w=0&k=20&c=E3nNPRYdRXPbQI7cMSJOobqxQ-8DlNzsvYztEBuEm2g=',
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
    'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg',
    'https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830__340.jpg',
    'https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567__340.jpg',
    'https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228__340.jpg',
    'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg',
    'https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954__340.jpg',
    'https://cdn.pixabay.com/photo/2013/08/20/15/47/poppies-174276__340.jpg',
];

let currentImageIndex = 0;
let imagesPerLoad = 12;

function loadMoreImages() {
    let fragment = document.createDocumentFragment();

    for (let i = currentImageIndex; i < currentImageIndex + imagesPerLoad && i < images.length; i++) {
        let image = document.createElement('img');
        image.src = images[i];
        fragment.appendChild(image);
    }

    imagesContainer.appendChild(fragment);

    currentImageIndex += imagesPerLoad;

    if (currentImageIndex >= images.length) {
        loadMoreBtn.style.display = 'none';
    }
}

loadMoreBtn.addEventListener('click', loadMoreImages);



// ======================================================

// <section client-feedback

const swiper = new Swiper(".mySwiper", {

    spaceBetween: 10,
    slidesPerView: 4,
    // activeElement: ,
    // grabCursor: true,
    freeMode: true,
    watchSlidesProgress: true,

});
const swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    grabCursor: true,
    initialSlide: 2,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",

    },
    thumbs: {
        swiper: swiper,

    },

});
// ============================================

// section gallery-best-images


// external js: masonry.pkgd.js, imagesloaded.pkgd.js

// init Masonry
const grid = document.querySelector('.grid');

const msnry = new Masonry( grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
});

imagesLoaded( grid ).on( 'progress', function() {
    // макет Masonry після кожного завантаження зображення
    msnry.layout();
});

const loadMoreButton = document.querySelector('#load');

const newImages = [

    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/submerged.jpg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/look-out.jpg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/one-world-trade.jpg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/drizzle.jpg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/golden-hour.jpg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/cat-nose.jpg",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/contrail.jpg",
    'https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228__240.jpg',
    'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__240.jpg',
    'https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954__340.jpg',
    'https://cdn.pixabay.com/photo/2013/08/20/15/47/poppies-174276__340.jpg',
    'https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567__240.jpg',

];

let nextImageIndex = 0;

loadMoreButton.addEventListener('click', function() {
    // Додаємо по 1 фото
    for (let i = 0; i < 1; i++) {
        if (nextImageIndex >= newImages.length) {

            break;
        }

        // Створюємо елемент сітки та зображення для поточного зображення
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        const image = document.createElement('img');
        image.src = newImages[nextImageIndex];
        gridItem.appendChild(image);

        // Додаємо елемент сітки до макета та оновлюємо макет
        grid.appendChild(gridItem);
        msnry.appended(gridItem);

        nextImageIndex++;
    }
    msnry.layout();
});

const loader = document.querySelector('.loader');
const loadBtn = document.querySelector('#load');

loadBtn.addEventListener('click', function() {
    // додаємо клас loading
    loader.classList.add('loading');
    loadBtn.classList.add('loading');

    // імітація затримки завантаження даних
    setTimeout(function() {

        loader.classList.remove('loading');
        loadBtn.classList.remove('loading');


    }, 2000); // затримка у 2 секунди, щоб показати анімацію
    msnry.layout();
});






