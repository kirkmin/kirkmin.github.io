"use strict";var windowHeight=window.innerHeight,windowHeightExtra=0,safari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),mobile=/Mobi/.test(navigator.userAgent);function positionParallax(e,t,a,i){var n=e.top/t-windowHeightExtra;a[i].style.top=n+"px"}function animateParallax(e,t){for(var a=0;e.length>a;a++){var i=e[a].parentElement.parentElement.getBoundingClientRect();i.top+i.height>=0&&i.top<=windowHeight&&positionParallax(i,t,e,a)}}function calculateHeight(e,t){for(var a=0;e.length>a;a++){var i=e[a].parentElement.parentElement.getBoundingClientRect(),n=(windowHeight-i.height)/2,o=i.height+2*(n-n/t);e[a].style.height=o+2*windowHeightExtra+"px",positionParallax(i,t,e,a)}}safari&&!mobile&&(windowHeightExtra=window.outerHeight-window.innerHeight),mobile&&(windowHeight=window.screen.availHeight,windowHeightExtra=(window.screen.availHeight-window.innerHeight)/2);var universalParallax=function(){this.init=function(e){void 0===e&&(e={}),e={speed:void 0!==e.speed?e.speed:1.5,className:void 0!==e.className?e.className:"parallax"};for(var t,a,i=document.getElementsByClassName(e.className),n=0;i.length>n;n++){var o=document.createElement("div");i[n].parentNode.insertBefore(o,i[n]),o.appendChild(i[n]);var r=i[n].parentElement;r.className+="parallax__container","relative"!==window.getComputedStyle(r.parentElement,null).getPropertyValue("position")&&(r.parentElement.style.position="relative");var l=i[n].dataset.parallaxImage;void 0!==l&&(i[n].style.backgroundImage="url("+l+")",1===i[n].classList.length&&"parallax"===i[n].classList[0]&&Object.assign(i[n].style,{"background-repeat":"no-repeat","background-position":"center","background-size":"cover"}))}t=i,(a=e.speed)<1&&(a=1),calculateHeight(t,a),mobile||window.addEventListener("resize",function(){windowHeight=window.innerHeight,calculateHeight(t,a)}),window.addEventListener("scroll",function(){animateParallax(t,a)})}};