// nav ==========================================
window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
console.log("ok");

$(".nav-icon").click(function () {
  $("span").toggleClass("cancel");
});

// nav ============================================

// // Home page slider start

// .carousel-open:checked + .carousel-item {
//     position: static;
//     opacity: 100;
// }
// .carousel-item {
//     -webkit-transition: opacity 0.6s ease-out;
//     transition: opacity 0.6s ease-out;
// }
// #carousel-1:checked ~ .control-1,
// #carousel-2:checked ~ .control-2,
// #carousel-3:checked ~ .control-3 {
//     display: block;
// }
// .carousel-indicators {
//     list-style: none;
//     margin: 0;
//     padding: 0;
//     position: absolute;
//     bottom: 2%;
//     left: 0;
//     right: 0;
//     text-align: center;
//     z-index: 10;
// }
// #carousel-1:checked ~ .control-1 ~ .carousel-indicators li:nth-child(1) .carousel-bullet,
// #carousel-2:checked ~ .control-2 ~ .carousel-indicators li:nth-child(2) .carousel-bullet,
// #carousel-3:checked ~ .control-3 ~ .carousel-indicators li:nth-child(3) .carousel-bullet {
//     color: #2b6cb0;  /*Set to match the Tailwind colour you want the active one to be */
// }

// // Home page slider end

// header toggle

$(document).ready(function () {
  $(".search-icon").click(function () {
    $(".search-icon").toggleClass("active"); //search icon change onClick
    $(".search-box").toggleClass("active"); //box show when click on icon
    $("header").toggleClass("active-search"); //In mobile logo and bars                                             hide when search box show
  });
});
/*sub-menu visible on click  */

$(document).ready(function () {
  $("ul li").click(function () {
    $(this).siblings().removeClass("active"); //remove active 									class when click again

    $(this).toggleClass("active"); //Add Active class first click
  });
});

$(document).ready(function () {
  $(".toggle").click(function () {
    $(".toggle").toggleClass("active"); //change menu icon onClick

    $("header").toggleClass("active-menu"); //hide logo and search 							icon when click on menu icon in mobile
  });
});

// home3 works section slider
$(document).ready(function () {
  $("#autoWidth").lightSlider({
    autoWidth: true,
    loop: true,
    onSliderLoad: function () {
      $("#autoWidth").removeClass("cS-hidden");
    },
  });
});

// const btn = document.querySelector("button.mobile-menu-button");
// const menu = document.querySelector(".mobile-menu");

// // add event listeners
// btn.addEventListener("click", () => {
//     menu.classList.toggle("hidden");
// });

// $(document).ready(function () {
//     $('.menu-toggle').click(function () {
//         $('nav').toggleClass('active');
//     })
//     $('ul li').click(function () {
//         $(this).siblings().removeClass('active');
//         $(this).toggleClass('active');
//     })
// })

// home3 works section slider
// current date taking start
var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleDateString();
document.getElementById("datetime1").innerHTML = dt.toLocaleDateString();
document.getElementById("datetime2").innerHTML = dt.toLocaleDateString();
document.getElementById("datetime3").innerHTML = dt.toLocaleDateString();

// current date taking end

//news single
const categoriesHeaders = document.querySelectorAll(".category-item-header");

categoriesHeaders.forEach((categoriesHeader) => {
  categoriesHeader.addEventListener("click", (event) => {
    categoriesHeader.classList.toggle("active");
  });
});
