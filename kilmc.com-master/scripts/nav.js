$(document).ready(function() {
  $(".logo").click(function() {
    $(".content-wrap, .site-header, .site-footer").fadeToggle("fast", function() {

    });
    $(".site-page-list").fadeToggle("fast", function() {

    });
  });
});