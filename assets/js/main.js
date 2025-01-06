// Navbar menu

const navbar = document.querySelector(".header_navbar");
const humburger = document.querySelector(".humburger");
const close = document.querySelector(".close_menu");

humburger.addEventListener("click", function () {
  navbar.classList.add("active");
});
close.addEventListener("click", function () {
  navbar.classList.remove("active");
});
// scroll header navigation

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 80) {
        header.classList.add('shadow');
    } else {
        header.classList.remove('shadow');
    }
  });
  

  // show content
const btnReadmore = document.querySelectorAll(".hotels_readmore");
const desContent = document.querySelectorAll(".hotels_desc");
btnReadmore.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    desContent[index].classList.toggle("active");
  });
});

// $(document).ready(function () {
//   $(".hotels_readmore").click(function () {
//     $(this).parent().parent().find(".hotels_desc").slideToggle();
//   });
// });


// show content

const ReadMoreBtn = document.querySelector(".read_more");
const hotelBtmSec = document.querySelector(".hotel_btmSec");
ReadMoreBtn.addEventListener("click",function(){
  hotelBtmSec.classList.toggle("active")
})

