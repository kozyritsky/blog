function logoAnimate(){var e=document.querySelector('[data-js="logo"]');console.log(e),e.addEventListener("mouseenter",function(e){e.target.classList.add("animate")})}var menuTop=document.getElementById("menu"),showMenu=document.getElementById("showMenu"),body=document.body;showMenu.onclick=function(){classie.toggle(this,"active"),classie.toggle(menuTop,"menu-open")},window.onload=function(){logoAnimate()},$(function(){$(".cover img").primaryColor(function(e){$(".cover .frame").css("background-color","rgb("+e+")")})}),lightbox.option({resizeDuration:0,fadeDuration:300,imageFadeDuration:300,wrapAround:!0,disableScrolling:!0,fitImagesInViewport:!0,showImageNumberLabel:!1}),$(".post .fotorama").fotorama({width:"100%",maxwidth:"100%",ratio:16/9,allowfullscreen:"native",fit:"cover"}),$(".post .youtube").each(function(){$(document).delegate("#"+this.id,"click",function(){var e="https://www.youtube.com/embed/"+this.id+"?autoplay=1&autohide=1";$(this).data("params")&&(e+="&"+$(this).data("params"));var t=$("<iframe/>",{frameborder:"0",src:e});$(this).html(t).addClass("playing"),$(this).fitVids()})}),$("[full], .full").addClass("space-minus-h-micro-xs space-minus-h-mili-md space-minus-h-base-lg space-out-h-zero-xl"),$("[color] .highlight pre").addClass("space-out-h-micro-xs space-out-h-mili-md space-out-h-base-lg"),$(".search-button").click(function(){$(".search").toggleClass("open")}),SimpleJekyllSearch({searchInput:document.getElementById("search-input"),resultsContainer:document.getElementById("results-container"),json:base_url+"/search.json",searchResultTemplate:'<li><a href="{url}" title="{title}">{title}</a></li>',noResultsText:'<li class="no-results">\u0423\u0432\u044b, \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e.</li>',limit:10,fuzzy:!1}),$(document).ready(function(){$(".sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close").on("click touchstart",function(e){$(".sliding-panel-content,.sliding-panel-fade-screen").toggleClass("is-visible"),e.preventDefault()})}),function(e,t,o){(t[o]=t[o]||[]).push(function(){try{t.yaCounter40455205=new Ya.Metrika({id:40455205,clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!0})}catch(e){}});var i=e.getElementsByTagName("script")[0],n=e.createElement("script"),a=function(){i.parentNode.insertBefore(n,i)};n.type="text/javascript",n.async=!0,n.src="https://mc.yandex.ru/metrika/watch.js","[object Opera]"==t.opera?e.addEventListener("DOMContentLoaded",a,!1):a()}(document,window,"yandex_metrika_callbacks"),tocbot.init({tocSelector:".js-toc",contentSelector:".js-toc-content",headingSelector:"h2, h3"}),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||(!function(e,t){"use strict";t.fn.stickyFooter=function(){function o(){n="static"!==a.css("position")?a.outerHeight(!0):0,i=e.innerHeight?e.innerHeight:t(e).height(),t("body").outerHeight(!0)+n<i?a.css({position:"fixed",width:"100%",bottom:0}):a.css({position:"static",width:"auto"})}var i=0,n=0,a=this;return o(),t(e).bind("resize.stickyFooter",function(){o()}),this}}(window,jQuery),$("footer").stickyFooter()),jQuery.extend(jQuery.fn,{toplinkwidth:function(){var e=jQuery("").outerWidth(),t=jQuery(this).children("a").outerWidth(!0);return jQuery(window).width()/2-e/2-t<0?(jQuery(this).addClass("hide"),!1):(jQuery(window).scrollTop()>=1200&&jQuery(this).addClass("show"),!0)}}),jQuery(function(e){var t=e(".scroll-to-top");e(window).scroll(function(){e(window).scrollTop()>=1200&&t.toplinkwidth()?t.fadeIn(300):t.fadeOut(300)}),t.click(function(){return e("html").animate({scrollTop:0},1e3),!1})});