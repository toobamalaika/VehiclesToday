$(function () {
    "use strict";
    $(".car-1-data").click(function () {
      $(".car-1").toggleClass("pCard_on");
      $(".car-1-data i").toggleClass("fa-minus");
    });

    $(".car-2-data").click(function () {
      $(".car-2").toggleClass("pCard_on");
      $(".car-2-data i").toggleClass("fa-minus");
    });

    $(".car-3-data").click(function () {
      $(".car-3").toggleClass("pCard_on");
      $(".car-3-data i").toggleClass("fa-minus");
    });

    $(".car-4-data").click(function () {
      $(".car-4").toggleClass("pCard_on");
      $(".car-4-data i").toggleClass("fa-minus");
    });

    // Register link
    $(".register-account").click(function () {
      location.href = "register.html";
    });

    // Login link
    $(".login-account").click(function () {
      location.href = "index.html";
    });

  });