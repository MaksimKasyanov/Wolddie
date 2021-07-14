
// !Burger
$('.sidebar__btn').on('click', function (e) {
	e.preventDefault();
	$('.sidebar').toggleClass('sidebar__active');
	$('.header__menu-list').toggleClass('header__menu-list--active');
	$('.header__logo').toggleClass('header__logo-active');
	$('.header__callback').toggleClass('header__callback-active');
});

const menuBtn = document.querySelector('.sidebar__btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
	if (!menuOpen) {
		menuBtn.classList.add('open');
		menuOpen = true;
	} else {
		menuBtn.classList.remove('open');
		menuOpen = false;
	}
});

// !Search
const searchBox = document.querySelector(".sidebar__search");
const searchBtn = document.querySelector(".sidebar__search-btn");
const cancelBtn = document.querySelector(".sidebar__cancel-btn");
const searchInput = document.querySelector(".sidebar__search-input");
searchBtn.onclick = () => {
	searchBox.classList.add("active");
	searchInput.classList.add("active");
	searchBtn.classList.add("active");
	cancelBtn.classList.add("active");
}
cancelBtn.onclick = () => {
	searchBox.classList.remove("active");
	searchInput.classList.remove("active");
	searchBtn.classList.remove("active");
	cancelBtn.classList.remove("active");
}

// !Scroll
$(window).scroll(function () {
	var scroll = $(window).scrollTop(),
		dh = $(document).height(),
		wh = $(window).height();
	scrollPercent = (scroll / (dh - wh)) * 100;
	$("#progressbar").css("height", scrollPercent + "%");
});

// !Scroll__top-btn
const scrollBtn = document.querySelector(".sidebar__scroll-top");

console.log(scrollBtn);
scrollBtn.addEventListener('click', () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
});

document.addEventListener('scroll', (e) => {
	if (document.documentElement.scrollTop < 1000) {
		scrollBtn.style.display = "none";
		scrollBtn.style.opacity = "0";
	}
	else {
		scrollBtn.style.display = "block";
		scrollBtn.style.opacity = "1";
	}
});

// !Slider - reviews

$('.reviews__text-wrapper').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	asNavFor: '.reviews__author',
	fade: true,
	// autoplay: true,
	arrows: false,
	infinite: false,
});
$('.reviews__author').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	asNavFor: '.reviews__text-wrapper',
	infinite: false,
	prevArrow: '<button class="slick-prev__reviews">Previous</button>',
	nextArrow: '<button class="slick-next__reviews">Next</button>'
});

// !Slider - employee

$('.employee__slider-inner').slick({
	prevArrow: '<button class="slick-prev__second"><img src="images/employee-arrow.svg" alt=""></button>',
	nextArrow: '<button class="slick-next__second"><img src="images/employee-arrow.svg" alt=""></button>',
	infinite: true,
	// autoplay: true,
	slidesToShow: 3,
	slidesToScroll: 1
});