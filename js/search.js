$(function(){
var $top-search= $('.top-search');
$(window).scroll(function(){
var scrollTop = $(document).scrollTop();
scrollTop>=300?$top-search.show():$top-search.hide();
});
});