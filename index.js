import{S as o,N as s,P as a,A as l}from"./assets/vendor-CAcR5fvw.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();new o(".swiper-container-2",{modules:[s,a,l],loop:!0,navigation:{nextEl:".swiper-button-next-2",prevEl:".swiper-button-prev-2"},pagination:{el:".swiper-pagination-2",clickable:!0},autoplay:{delay:3e3,disableOnInteraction:!1},breakpoints:{320:{slidesPerView:1,spaceBetween:16},768:{slidesPerView:2,spaceBetween:16},1024:{slidesPerView:3.5,spaceBetween:16}}});new o(".swiper-container-1",{modules:[s,a,l],loop:!0,navigation:{nextEl:".swiper-button-next-1",prevEl:".swiper-button-prev-1"},pagination:{el:".swiper-pagination-1",clickable:!0},autoplay:{delay:3e3,disableOnInteraction:!1},breakpoints:{375:{slidesPerView:1,spaceBetween:32},834:{slidesPerView:1,spaceBetween:32},1440:{slidesPerView:2,spaceBetween:32}}});
//# sourceMappingURL=index.js.map
