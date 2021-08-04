const showMenu = function(toggleId, menuId){
    const toggle = document.getElementById(toggleId);
    const menu = document.getElementById(menuId);
  
    if(toggle && menu){
        toggle.addEventListener('click', () => {
            menu.classList.toggle('show-menu');
        })
  }
}
showMenu('toggle', 'gay_container');


const swiper = new Swiper(".swiper-container", {
    loop: true,
    spaceBetween: 300,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  const scrollAnimation = ScrollReveal({
    origin: 'bottom',
    distance: '100px',
    duration: 2000,
    reset: true,
  })

  ScrollAnimation.reveal('.квасс, .kindergarden i, .social-media',{
   interval: 200,
  })