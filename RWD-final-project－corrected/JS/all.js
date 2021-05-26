$(document).ready(function () {
  $('.show-menu').click(function (e) {
    e.preventDefault();
    $('.menu').toggleClass('menu-show');
  });

  //點擊空心愛心，白色愛心會從display:none變成display:block
  $('.like-product-icon').click(function (e) {
    e.preventDefault();
    $(this).siblings('.like-product-icon-active').toggleClass('like-product-icon-active-show');
  });

  //點擊白色愛心，白色愛心會將display:block屬性移除
  $('.like-product-icon-active').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('like-product-icon-active-show');
  });

  $('.shopping a').click(function (e) {
    e.preventDefault();
    $(this).parent('.shopping').toggleClass('active');
    $(this).toggleClass('active');
  });

});