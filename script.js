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