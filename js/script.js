var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
  });


// const body = document.body,
//   scrollWrap = document.getElementsByClassName("content")[0],
//   height = scrollWrap.getBoundingClientRect().height - 1,
//   speed = 0.0275;

// var offset = 0;

// body.style.height = Math.floor(height) + "px";

// function smoothScroll() {
//     offset += (window.pageYOffset - offset) * speed;

//     var scroll = "translateY(-" + offset + "px) translateZ(0)";
//     scrollWrap.style.transform = scroll;

//     callScroll = requestAnimationFrame(smoothScroll);
// }

// smoothScroll();