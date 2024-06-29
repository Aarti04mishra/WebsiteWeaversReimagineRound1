const body=document.querySelector("body");
const nav=document.querySelector("nav")
const searchToggle=document.querySelector(".search_toggle");
const sidebarOpen=document.querySelector(".sidebar_open");
const sidebarClose=document.querySelector(".sidebar_close");
const searchBtn=document.querySelector(".searchBtn")
const closeBtn=document.querySelector(".closeBtn")
const searchBox=document.querySelector(".searchBox");

// js code to toggle slidebar

sidebarOpen.addEventListener("click",()=>{
   nav.classList.add("active")
})

body.addEventListener("click",e=>{
    let clickedElm = e.target;
    if(!clickedElm.classList.contains("sidebar_open") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active")
    }
 })

 //js code to appear search box
 searchBtn.addEventListener("click",function(){
    searchBox.classList.add("active")
 })

 //js code to remove search box
 closeBtn.addEventListener("click",function(){
    searchBox.classList.remove("active")
 })


 function initializeSliders(sliderContainerSelector, sliderSelector, prevButtonSelector, nextButtonSelector) {
    const sliderContainers = document.querySelectorAll(sliderContainerSelector);
    const sliders = document.querySelectorAll(sliderSelector);
    const prevButtons = document.querySelectorAll(prevButtonSelector);
    const nextButtons = document.querySelectorAll(nextButtonSelector);
  
    sliderContainers.forEach((sliderContainer, index) => {
        const slider = sliders[index];
        const slides = slider.querySelectorAll('.product');
        const prevButton = prevButtons[index];
        const nextButton = nextButtons[index];
  
        let scrollAmount = 0;
        let isScrolling = false;
        let scrollTimeout;
  
        function getSlideWidth() {
            return slides[0].clientWidth + 20; // Adjust for margin/padding
        }
  
        function updateSlider() {
            const slideWidth = getSlideWidth();
            const maxScroll = slides.length * slideWidth - sliderContainer.clientWidth;
            if (scrollAmount > maxScroll) {
                scrollAmount = maxScroll;
            } else if (scrollAmount < 0) {
                scrollAmount = 0;
            }
            slider.style.transform = `translateX(${-scrollAmount}px)`;
  
            // Hide/show navigation buttons based on the current scroll amount
            if (scrollAmount === 0) {
                prevButton.style.display = 'none';
            } else {
                prevButton.style.display = 'block';
            }
  
            if (scrollAmount >= maxScroll) {
                nextButton.style.display = 'none';
            } else {
                nextButton.style.display = 'block';
            }
        }
  
        function resizeHandler() {
            updateSlider();
        }
  
        // Handle wheel event for horizontal scrolling only
        function handleWheel(event) {
            const slideWidth = getSlideWidth();
            const scrollDelta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : 0; // Only scroll horizontally
            const scrollStep = slideWidth / 5; // Adjust for slower movement
  
            if (scrollDelta !== 0) {
                if (!isScrolling) {
                    scrollAmount += scrollDelta * scrollStep;
                    updateSlider();
                }
  
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                    isScrolling = false;
                }, 100); // Adjust delay as needed
  
                isScrolling = true;
  
                event.preventDefault(); // Prevent default behavior to avoid interference
            }
        }
  
        function snapToProduct() {
            const slideWidth = getSlideWidth();
            // Adjust snapping calculation to increase the snapping effect
            scrollAmount = Math.round(scrollAmount / slideWidth) * slideWidth;
            updateSlider();
        }
  
        function enableWheelInteraction() {
            if (window.innerWidth < 1000) {
                sliderContainer.addEventListener('wheel', handleWheel, { passive: false });
                sliderContainer.addEventListener('wheelend', snapToProduct);
            } else {
                sliderContainer.removeEventListener('wheel', handleWheel);
                sliderContainer.removeEventListener('wheelend', snapToProduct);
            }
        }
  
        nextButton.addEventListener('click', () => {
            const slideWidth = getSlideWidth();
            scrollAmount += slideWidth;
            snapToProduct();
        });
  
        prevButton.addEventListener('click', () => {
            const slideWidth = getSlideWidth();
            scrollAmount -= slideWidth;
            snapToProduct();
        });
  
        window.addEventListener('resize', resizeHandler);
        window.addEventListener('resize', enableWheelInteraction);
        enableWheelInteraction(); // Initial call to set up wheel interaction based on current screen width
  
        // Adjust snap effect for screens below 1000px
        slider.addEventListener('transitionend', () => {
            if (window.innerWidth < 1000) {
                snapToProduct();
            }
        });
        resizeHandler();
    });
  }
  
  initializeSliders('.slider-container', '.slider', '#prev', '#next');
  
const prevButtons = document.querySelector('.swiper-button-prev-custom');
const nextButtons = document.querySelector('.swiper-button-next-custom');

const swiper = new Swiper('.swiper-container', {
  
    navigation: {
        nextEl: nextButtons,
        prevEl: prevButtons,
    },
    on: {
        slideChange: updateNavigation,
        reachBeginning: updateNavigation,
        reachEnd: updateNavigation,
    }
});

// Function to update the navigation buttons' visibility and color
function updateNavigation() {
    prevButtons.classList.toggle('swiper-button-disabled', swiper.isBeginning);
    nextButtons.classList.toggle('swiper-button-disabled', swiper.isEnd);

    prevButtons.classList.toggle('swiper-button-end', swiper.isBeginning);
    nextButtons.classList.toggle('swiper-button-end', swiper.isEnd);
}


updateNavigation();




