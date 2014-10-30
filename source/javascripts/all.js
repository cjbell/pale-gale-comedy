//= require 'jquery/dist/jquery.min.js'
//= require 'ajaxchimp/jquery.ajaxchimp.js'

var header = document.getElementsByClassName("js-site-head")[0];
var SCROLL_THRESHOLD = 25;
var doc = document.documentElement;

window.addEventListener("scroll", function() {
  var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  if (top > SCROLL_THRESHOLD) {
    doc.classList.add("has-scrolled");
  } else {
    doc.classList.remove("has-scrolled");
  }
});

function onMailChimpCallback(resp) {
  if (resp.result === 'success') {
    $(".js-sign-up-form").addClass('is-hidden');
    $(".js-sign-up-content").removeClass('is-hidden');
  }
};

$(function(){
  $('.js-sign-up').ajaxChimp({
    callback: onMailChimpCallback
  });
})