const body=document.querySelector("body");
const nav=document.querySelector("nav")
const searchToggle=document.querySelector(".search_toggle");
const sidebarOpen=document.querySelector(".sidebar_open");
const sidebarClose=document.querySelector(".sidebar_close");
const searchBtn=document.querySelector(".searchBtn")
const closeBtn=document.querySelector(".closeBtn")
const searchBox=document.querySelector(".searchBox");

const navbar= document.querySelector("nav");
var lastScroll=0;

window.addEventListener('scroll',function(){
   const currentScroll=window.pageYOffset;
  
   if(currentScroll<=0){
    navbar.classList.remove("scroll-up")
  
   }

   if (currentScroll>lastScroll && !navbar.classList.contains("scroll-down")){
    navbar.classList.remove("scroll-up");
    navbar.classList.add("scroll-down")
        
   }

   if (currentScroll<lastScroll && navbar.classList.contains("scroll-down")){
    navbar.classList.remove("scroll-down");
    navbar.classList.add("scroll-up")
    
}

   lastScroll= currentScroll;

})




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
var slider=document.querySelector(".slide")


var button=document.querySelectorAll(".button-container button");
function product(){
    var clutter="";
    button.forEach(function(btn,index){
        if(btn.classList.contains("active")&&(btn.textContent=="Featured")){
            Featured.forEach(function(a){
                clutter+=` <div class="product">
                                <img src=${a.image} alt="Product 1">
                                <div class="description">${a.name}</div>
                                <div class="price">${a.price}</div>
                            </div>`
            })
            slider.innerHTML=clutter
        }
        else if(btn.classList.contains("active")&&(btn.textContent=="Top Rated")){
            TopRated.forEach(function(a){
                clutter+=` <div class="product">
                                <img src=${a.image} alt="Product 1">
                                <div class="description">${a.name}</div>
                                <div class="price">${a.price}</div>
                            </div>`
            })
            slider.innerHTML=clutter
        }
        else if(btn.classList.contains("active")&&(btn.textContent=="On Sale")){
            OnSale.forEach(function(a){
                clutter+=` <div class="product">
                                <img src=${a.image} alt="Product 1">
                                <div class="description">${a.name}</div>
                                <div class="price">${a.price}</div>
                            </div>`
            })
            slider.innerHTML=clutter
        }
        
    })
}
button.forEach(function(btn,index){
    btn.addEventListener("click",()=>{
        button.forEach(btn=>{btn.classList.remove("active")})
        btn.classList.add("active")
       product()
    })
    
})
var herAll=[{image:"https://i.pinimg.com/564x/79/59/88/7959883ae74ba18758f0aa09286a4701.jpg",name:"High-Waisted Loose 2-Buttons Shorts",price:"₹299"},
    {image:"https://i.pinimg.com/564x/03/d4/f3/03d4f34797557907f3a4fb378ecdb4f9.jpg",name:"Woven Leather Handbag- Small/ Off White",price:"₹1,679"},
    {image:"https://i.pinimg.com/564x/b2/78/43/b278431ad414046c7e3190f805baeff0.jpg",name:"Casual Women Puffer Jacket-Cotton Padded",price:"₹999"},
    {image:"https://i.pinimg.com/564x/c3/13/a9/c313a9b3cd06712f07c0a7d0343eda34.jpg",name:"Running Vulcanized White Shoes Femaile Chuncky Sneakers ",price:"₹1200"},
    {image:"https://i.pinimg.com/564x/09/27/d6/0927d65cde17389cbe6f7bb3d51ed4aa.jpg",name:"ButterFly Necklace For Women",price:"₹299"},
    {image:"https://i.pinimg.com/564x/50/0a/3b/500a3bc054dbee0d310210a65a62ed73.jpg",name:"Criss Cross Back Ruffle Hem Camoi Top",price:"₹599"}
]
var herClothing=[{image:"https://i.pinimg.com/564x/5b/ac/4d/5bac4d3f8f6ca26905b4d8ec4c20938b.jpg",name:"Women Fit And Flare White Dress-Casual Dress",price:"₹379"},
    {image:"https://i.pinimg.com/564x/08/bf/8c/08bf8ca23a054a7c50ea10d32b04ee49.jpg",name:"Open Back Frill Top With Pearl Embellished",price:"₹249"},
    {image:"https://i.pinimg.com/564x/e1/f5/c8/e1f5c8569f5d0d865a836196db7c3a26.jpg",name:"Women top and lower Combo set-Off White",price:"₹879"},
    {image:"https://i.pinimg.com/564x/6b/a3/08/6ba308cbb93693c81700e1e0b76ca1b2.jpg",name:"Zip Back Lace Up Shorts",price:"₹499"},
    {image:"https://i.pinimg.com/564x/38/2f/45/382f45e390506ee05f4af742c2be29b6.jpg",name:"Mandi Mini Dress-Blue-Women's Dress",price:"₹679"},
    {image:"https://i.pinimg.com/564x/31/d4/3a/31d43a45f93ebffa41321112bed76625.jpg",name:"Women Top and Shorts Set-White Women Dress",price:"₹1,029"}
]
var herFootwear=[{image:"https://i.pinimg.com/564x/4c/f6/d0/4cf6d0b2bb375de1810d6175b57ffea2.jpg",name:"Picasso </br> Sadie Sandals Cream",price:"₹799"},
    {image:"https://i.pinimg.com/564x/61/ef/da/61efda196fe90fa4236f454d735e52ca.jpg",name:"Dressberry </br> Women Black Flats Sandals",price:"₹599"},
    {image:"https://i.pinimg.com/736x/b2/2b/1a/b22b1af0212be4b5ac81f5ac0dca3dd3.jpg",name:"Roadster </br> Women White Shoes",price:"₹899"},
    {image:"https://i.pinimg.com/564x/15/68/ba/1568ba09d47a7584df1c0403894db186.jpg",name:"White Fashion </br> Women White Heels Sandals",price:"₹1799"},
    {image:"https://i.pinimg.com/564x/7d/3d/74/7d3d7435dd42f6b3c8df8cb5e24c9fd9.jpg",name:"Bata </br> Women Multicolor Heels Sandals",price:"₹1899"},
    {image:"https://i.pinimg.com/564x/cc/81/ea/cc81ea6a41791b59f88c62a7a6766bc2.jpg",name:"Bata </br> Women bow White Slippers",price:"₹500"}
]
var herAccessories=[{image:"https://rukminim2.flixcart.com/image/612/612/xif0q/sling-bag/a/z/n/-original-imagzy3hrkbcbbtg.jpeg?q=70",name:"Tautuaa </br> Pink Women Sling Bag",price:"₹419"},
    {image:"https://i.pinimg.com/564x/2c/2b/56/2c2b56f697410067b6cef311e11641f3.jpg",name:"Linked Rings Necklace-Interlocking Circle",price:"₹149"},
    {image:"https://rukminim2.flixcart.com/image/612/612/xif0q/watch/o/b/7/-original-imagrdfcnndvg6rr.jpeg?q=70",name:"Black Dial With Silver Strap Analog Watch",price:"₹294"},
    {image:"https://rukminim2.flixcart.com/image/612/612/l1xwqkw0/bangle-bracelet-armlet/i/k/q/-original-imagde4ugx36wmhk.jpeg?q=70",name:"Metal Crystal Siver Bracelet",price:"₹227"},
    {image:"https://rukminim2.flixcart.com/image/612/612/xif0q/hand-messenger-bag/0/u/v/-original-imah2c43cabspc2v.jpeg?q=70",name:"ecoright </br> Women Black Tote",price:"₹499"},
    {image:"https://rukminim2.flixcart.com/image/612/612/xif0q/hand-messenger-bag/1/l/b/-original-imagychewstt4fwh.jpeg?q=70",name:"Caprese </br> Women Pink Tote",price:"$88.00 - $89.00"}
]
var herBeauty=[{image:"https://i.pinimg.com/564x/fc/95/a8/fc95a8fde6efd87c6377786a9ab11058.jpg",name:"L'Absolu Rouge Drama Matte Lipstick",price:"₹799"},
    {image:"https://rukminim2.flixcart.com/image/612/612/jxc5a4w0/perfume/g/6/h/50-romance-eau-de-parfum-secret-temptation-women-original-imafhtt7m5v6zmdm.jpeg?q=70",name:"Secret Temptation Romance Eau de Parfum",price:"₹219"},
    {image:"https://rukminim2.flixcart.com/image/612/612/xif0q/foundation/c/w/k/30-hydra-glow-cc-serum-with-vitamin-c-hyaluronic-acid-mamaearth-original-imagkxhjgg7yfgzv.jpeg?q=70",name:"Mamaearth Hydra-Glow CC Sreum Foundation",price:"₹583"},
    {image:"https://rukminim2.flixcart.com/image/612/612/kulk9zk0/hair-straightener/v/h/h/temperature-control-professional-nhs-860-nova-original-imag7zsaa7tfvmzd.jpeg?q=70",name:"Nova Temperature Control Hair Straightner",price:"₹599"},
    {image:"https://rukminim2.flixcart.com/image/612/612/xif0q/hair-serum/u/f/u/50-vitamin-b6-carnitine-3-scalp-hair-serum-for-sebum-oil-control-original-imagy2gx7kdrkujg.jpeg?q=70",name:"Minimalist Hair Serums For Oil Control",price:"₹599"},
    {image:"https://rukminim2.flixcart.com/image/612/612/xif0q/mascara/a/f/p/-original-imagufecywfu66x2.jpeg?q=70",name:"MAYBELLINE NEW YORK Masccara",price:"₹383"}
]
var products1=document.querySelector(".page2 .products")

var forher=document.querySelectorAll(".page2 .nav a")
console.log(forher)
function forherproduct(){
    var clutter="";
    forher.forEach(function(product,index){
        if(product.classList.contains("active")&&(product.textContent=="All")){
            herAll.forEach(function(a){
                clutter+=` <div class="product-box">
                            <div class="product-image">
                                <img src="${a.image}" alt="Product Image">
                            </div>
                            <div class="product-name">${a.name}</div>
                            <div class="product-price">${a.price}</div>
                        </div>`
            })
            products1.innerHTML=clutter
        }
        else if(product.classList.contains("active")&&(product.textContent=="Clothing")){
            herClothing.forEach(function(a){
                clutter+=` <div class="product-box">
                            <div class="product-image">
                                <img src="${a.image}" alt="Product Image">
                            </div>
                            <div class="product-name">${a.name}</div>
                            <div class="product-price">${a.price}</div>
                        </div>`
            })
            products1.innerHTML=clutter
        }
        else if(product.classList.contains("active")&&(product.textContent=="Accessories")){
            herAccessories.forEach(function(a){
                clutter+=` <div class="product-box">
                            <div class="product-image">
                                <img src="${a.image}" alt="Product Image">
                            </div>
                            <div class="product-name">${a.name}</div>
                            <div class="product-price">${a.price}</div>
                        </div>`
            })
            products1.innerHTML=clutter
        }
        else if(product.classList.contains("active")&&(product.textContent=="Footwear")){
            herFootwear.forEach(function(a){
                clutter+=` <div class="product-box">
                            <div class="product-image">
                                <img src="${a.image}" alt="Product Image">
                            </div>
                            <div class="product-name">${a.name}</div>
                            <div class="product-price">${a.price}</div>
                        </div>`
            })
            products1.innerHTML=clutter
        }
        else if(product.classList.contains("active")&&(product.textContent=="Beauty & Personal Care")){
            herBeauty.forEach(function(a){
                clutter+=` <div class="product-box">
                            <div class="product-image">
                                <img src="${a.image}" alt="Product Image">
                            </div>
                            <div class="product-name">${a.name}</div>
                            <div class="product-price">${a.price}</div>
                        </div>`
            })
            products1.innerHTML=clutter
        }
    })
}

forher.forEach(function(product){
    product.addEventListener("click",()=>{
        forher.forEach(product=>{product.classList.remove("active")})
        product.classList.add("active")
        forherproduct()
    })
})

var himAll=[{image:"https://i.pinimg.com/564x/1a/54/31/1a54316fc74550e9fec38b42b0782cf8.jpg",name:"Round Neck Short Sleeve Cotton T-Shirts",price:"₹399"},
    {image:"https://i.pinimg.com/736x/f4/de/33/f4de3353c4db98e57f83217ce98dd52f.jpg",name:"Men Formal Casual,Party Leather Belt",price:"₹349"},
    {image:"https://i.pinimg.com/564x/78/ef/9d/78ef9d459126fa10c1091dbcbf89d249.jpg",name:"Casual Shirts - Light Blue ",price:"₹549"},
    {image:"https://rukminim2.flixcart.com/image/612/612/xif0q/deodorant/k/8/r/-original-imagwfhxrjhhdszp.jpeg?q=70",name:"Wild Stone Ultra Sensual Perfume",price:"₹333"},
    {image:"https://i.pinimg.com/564x/3c/92/6a/3c926a8d031f417035cc4126f9ecddf0.jpg",name:"Nike Air Monarch Training Shoes",price:"₹899"},
    {image:"https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/k/n/t/two-noise-original-imaggy72wvh8hvge.jpeg?q=70",name:"Noise three With 70 hours Playtime",price:"₹1,999"}
]
var himClothing=[{image:"https://i.pinimg.com/564x/71/a5/cc/71a5cc69d15dba43aea4b3b7a0772799.jpg",name:"Manfinity Hypemode Men Solid Dual Pocket Denim Jacket ",price:"₹399"},
    {image:"https://i.pinimg.com/564x/ed/db/e9/eddbe992089e51614062fcdb297d91f7.jpg",name:"Mens Casual Cotton Pockets Cargo Shorts",price:"₹359"},
    {image:"https://i.pinimg.com/736x/99/04/ed/9904ed074f07f53ebc78a45f292033dc.jpg",name:"Retro Drop-shoulder Round Neck Men's Sweater",price:"₹579"},
    {image:"https://i.pinimg.com/564x/25/95/f4/2595f49c4e8be9d4f09e2d2927892b0c.jpg",name:"Mens Relaxed Fit Mid Rise Blue Jeans",price:"₹479"},
    {image:"https://i.pinimg.com/564x/d0/22/ac/d022acb3ec8f9993003aefedb6cdb7ed.jpg",name:"Men Solid Patched Detail Tee",price:"₹699"},
    {image:"https://i.pinimg.com/736x/31/92/87/31928786c35833a4832211d04c149319.jpg",name:"Loose Casual Elastic Men's Trousers",price:"₹1,479"}
]
var himFootwear=[{image:"https://i.pinimg.com/564x/ef/29/85/ef2985c6d9f69ec9a032ca617048540e.jpg",name:"White Sports Running Shoes",price:"₹1,399"},
    {image:"https://i.pinimg.com/564x/d9/ed/61/d9ed612739ee671c1be26c49fc94bad1.jpg",name:"Professional Atheletic Training men's Air Shoes",price:"₹785"},
    {image:"https://i.pinimg.com/564x/35/b5/d7/35b5d752c6e62dc68c3ece21e1d69445.jpg",name:"Mens Solid color Comfortable Sandals ",price:"₹399"},
    {image:"https://i.pinimg.com/564x/2b/ff/a7/2bffa7cdd7d2a9e8e8adca131408d51d.jpg",name:"Letter Graphic Running Shoes",price:"₹899"},
    {image:"https://i.pinimg.com/564x/78/98/f6/7898f6d64fa9969572f12c88f4006b9d.jpg",name:"Daily Wear Men's Sneakers",price:"₹499"},
    {image:"https://i.pinimg.com/564x/c6/f3/be/c6f3beffeaa1e2545dfd6d9104a3d1f8.jpg",name:"Water Resistant Formal Footwear",price:"₹999"}
]
var himAccessories=[{image:"https://i.pinimg.com/564x/6b/8c/07/6b8c0728e4b0cd2dce9046a7c27172ba.jpg",name:"Square Frame Eyeglasses",price:"₹660"},
    {image:"https://i.pinimg.com/564x/13/06/83/130683735369c7991bf28c20d90242b3.jpg",name:"Analog Bracelet Watch and Leather Strap Set",price:"₹1129"},
    {image:"https://i.pinimg.com/564x/fe/d4/cc/fed4ccaa51ab5bdc3a5de814ca65fef6.jpg",name:"Black Casual Collar Fabric Geometric Baseball Cap",price:"₹344"},
    {image:"https://i.pinimg.com/564x/9c/52/2a/9c522a932d96ddffda434ccf6e3f220d.jpg",name:"High-end Leather Multi-functional Short Wallets",price:"₹219"},
    {image:"https://i.pinimg.com/564x/e8/ac/27/e8ac270fa9e6b96668594ffaa9e6528d.jpg",name:"Minimalist Pendant Necklace",price:"₹157"},
    {image:"https://i.pinimg.com/564x/1e/3e/66/1e3e6612c063a5122061f389f04c739c.jpg",name:"Chain Bracelet",price:"₹180"}
]
var himBeauty=[{image:"https://i.pinimg.com/564x/41/db/a4/41dba438abe65e730db76815df2444fd.jpg",name:"Dior SAUVAGE Eau De Parfum ",price:"₹660"},
    {image:"https://rukminim2.flixcart.com/image/612/612/xif0q/trimmer/8/g/k/1-9-mm-all-terrain-hair-trimmer-with-black-silver-edition-with-original-imah27qhhregvuzz.jpeg?q=70",name:"iGRiD All Terrain Hair Trimmer",price:"₹903"},
    {image:"https://i.pinimg.com/564x/e3/c8/d2/e3c8d2a758eb2dfad942a9b15063dca6.jpg",name:"Preston Grooming Shave Cream",price:"₹407"},
    {image:"https://rukminim2.flixcart.com/image/612/612/xif0q/face-wash/3/p/4/100-de-tan-beardo-original-imagm7f2akjpnhgy.jpeg?q=70",name:"BEARDO De-Tan Face Wash",price:"₹180"},
    {image:"https://rukminim2.flixcart.com/image/612/612/xif0q/perfume/i/v/0/150-gentleman-s-signature-trio-long-lasting-perfume-combo-for-original-imahfkdahagn9v8m.jpeg?q=70",name:"THE MAN COMPANY Gentleman’s Signature Trio ",price:"₹699"},
    {image:"https://rukminim2.flixcart.com/image/612/612/xif0q/perfume/d/m/r/50-night-long-lasting-perfume-the-man-company-men-original-imahf2ddqbenh9ab.jpeg?q=70",name:"THE MAN COMPANY Night Long Lasting Perfume",price:"₹327"}
]
var products=document.querySelector(".page5 .products")
var forhim=document.querySelectorAll(".page5 .nav a")
function forhimproduct(){
    var clutter="";
    forhim.forEach(function(product,index){
        if(product.classList.contains("active")&&(product.textContent=="All")){
            himAll.forEach(function(a){
                clutter+=` <div class="product-box">
                            <div class="product-image">
                                <img src="${a.image}" alt="Product Image">
                            </div>
                            <div class="product-name">${a.name}</div>
                            <div class="product-price">${a.price}</div>
                        </div>`
            })
            products.innerHTML=clutter
        }
        else if(product.classList.contains("active")&&(product.textContent=="Clothing")){
            himClothing.forEach(function(a){
                clutter+=` <div class="product-box">
                            <div class="product-image">
                                <img src="${a.image}" alt="Product Image">
                            </div>
                            <div class="product-name">${a.name}</div>
                            <div class="product-price">${a.price}</div>
                        </div>`
            })
            products.innerHTML=clutter
        }
        else if(product.classList.contains("active")&&(product.textContent=="Accessories")){
            himAccessories.forEach(function(a){
                clutter+=` <div class="product-box">
                            <div class="product-image">
                                <img src="${a.image}" alt="Product Image">
                            </div>
                            <div class="product-name">${a.name}</div>
                            <div class="product-price">${a.price}</div>
                        </div>`
            })
            products.innerHTML=clutter
        }
        else if(product.classList.contains("active")&&(product.textContent=="Footwear")){
            himFootwear.forEach(function(a){
                clutter+=` <div class="product-box">
                            <div class="product-image">
                                <img src="${a.image}" alt="Product Image">
                            </div>
                            <div class="product-name">${a.name}</div>
                            <div class="product-price">${a.price}</div>
                        </div>`
            })
            products.innerHTML=clutter
        }
        else if(product.classList.contains("active")&&(product.textContent=="Grooming")){
            himBeauty.forEach(function(a){
                clutter+=` <div class="product-box">
                            <div class="product-image">
                                <img src="${a.image}" alt="Product Image">
                            </div>
                            <div class="product-name">${a.name}</div>
                            <div class="product-price">${a.price}</div>
                        </div>`
            })
            products.innerHTML=clutter
        }
    })
}

forhim.forEach(function(product){
    product.addEventListener("click",()=>{
        forhim.forEach(product=>{product.classList.remove("active")})
        product.classList.add("active")
        forhimproduct()
    })
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
            const maxScrollDelta = slideWidth / 2; // Set a maximum delta value
            let scrollDelta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : 0;
            
            // Clamp scrollDelta to avoid too fast scrolling
            scrollDelta = Math.max(-maxScrollDelta, Math.min(maxScrollDelta, scrollDelta));
            
            const scrollStep = slideWidth / 3; // Adjusted base scroll step
        
            if (scrollDelta !== 0) {
                if (!isScrolling) {
                    scrollAmount += scrollDelta * scrollStep;
                    updateSlider();
                }
        
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                    isScrolling = false;
                }, 100);
        
                isScrolling = true;
        
                event.preventDefault();
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
  
  const swipers = new Swiper('.page7 .swiper-container', {
    
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
  
//   Function to update the navigation buttons' visibility and color
  function updateNavigation() {
      prevButtons.classList.toggle('swiper-button-disabled', swipers.isBeginning);
      nextButtons.classList.toggle('swiper-button-disabled', swipers.isEnd);
  
      prevButtons.classList.toggle('swiper-button-end', swipers.isBeginning);
      nextButtons.classList.toggle('swiper-button-end', swipers.isEnd);
  }
  
  
  updateNavigation();
  
  document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.page1 .swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        slidesPerView: 1.5,
        centeredSlides: true,
        spaceBetween: 20,
  
        // Remove default navigation
        navigation: {
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
        },
    });
  });
  
