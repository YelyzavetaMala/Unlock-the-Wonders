import{S as c,N as a,P as d,A as u}from"./assets/vendor-ClE5oc7k.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){const n=document.querySelectorAll("section"),i=document.querySelectorAll(".menu-link");window.addEventListener("scroll",()=>{let l="";n.forEach(o=>{const e=o.offsetTop,t=o.clientHeight;window.scrollY>=e-t/5&&(l=o.getAttribute("id"))}),i.forEach(o=>{o.classList.remove("active"),o.getAttribute("href")==="#"+l&&o.classList.add("active")})})});const s=document.getElementById("modal"),p=document.getElementById("openModalBtn"),f=document.querySelector(".close-btn"),y=document.querySelectorAll(".modal-item");p.onclick=function(){s.style.display="block",document.body.classList.add("body-no-scroll")};f.onclick=function(){s.style.display="none",document.body.classList.remove("body-no-scroll")};window.onclick=function(n){n.target==s&&(s.style.display="none",document.body.classList.remove("body-no-scroll"))};y.forEach(function(n){n.onclick=function(){s.style.display="none",document.body.classList.remove("body-no-scroll")}});new c(".tours-swiper",{modules:[a,d,u],loop:!0,navigation:{nextEl:".tours-button-next",prevEl:".tours-button-prev"},pagination:{el:".tours-pagination",clickable:!0},autoplay:{delay:3e3,disableOnInteraction:!1},breakpoints:{375:{slidesPerView:1,spaceBetween:16},834:{slidesPerView:1,spaceBetween:32},1440:{slidesPerView:4,spaceBetween:32}}});new c(".gallery",{modules:[a,d,u],loop:!0,navigation:{nextEl:".gallery-button-next",prevEl:".gallery-button-prev"},pagination:{el:".gallery-pagination",clickable:!0},autoplay:{delay:3e3,disableOnInteraction:!1},breakpoints:{375:{slidesPerView:1,spaceBetween:16},834:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}}});new c(".reviews-swiper",{modules:[a,d,u],loop:!0,navigation:{nextEl:".review-button-next",prevEl:".review-button-prev"},pagination:{el:".review-pagination",clickable:!0},autoplay:{delay:3e3,disableOnInteraction:!1},breakpoints:{375:{slidesPerView:1,spaceBetween:16},834:{slidesPerView:2.5,spaceBetween:32},1440:{slidesPerView:4,spaceBetween:32}}});
//# sourceMappingURL=index.js.map
