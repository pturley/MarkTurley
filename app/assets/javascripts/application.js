// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(function() {
  $("section.map").click(function() {
    window.location = "https://www.google.com/maps/place/401+N+Rolla+St+Suite+3/@37.9472257,-91.7727631,17z/data=!3m1!4b1!4m2!3m1!1s0x87da54bf7aa692ad:0xbd74f74da034b97c";
  });
});
