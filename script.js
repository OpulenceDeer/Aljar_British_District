var swiper = new Swiper(".mySwiper", {
    effect: "swiper",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
  });
  
  function openPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'flex';
    setTimeout(() => {
      popup.classList.add('show');
    }, 10);
  }
  
  function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('show');
    setTimeout(() => {
      popup.style.display = 'none';
    }, 400);
  }
  