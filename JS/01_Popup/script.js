// JavaScript Document
$(document).ready(function(e) {
    // Open Popup Js
    $(".popupbtn").click( function(){
      $(".popubody, .dullbg").fadeIn("200");	
    });
    // Close Popup Js
    $(".close").click( function(){
      $(".popubody, .dullbg").fadeOut("200");	
    });
});
