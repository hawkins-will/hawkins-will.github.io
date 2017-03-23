var scrollHeadline = function(){
  $("html, body").animate({
    scrollTop: $("#headline").offset().top - 50},
    'slow');
};

var scrollPortfolio = function(){
  $("html, body").animate({
    scrollTop: $("#portfolio").offset().top - 50},
    'slow');
};

var scrollAbout = function(){
  $("html, body").animate({
    scrollTop: $("#about").offset().top - 50},
    'slow');
};

var scrollResume = function(){
  $("html, body").animate({
    scrollTop: $("#resume").offset().top - 50},
    'slow');
};

var scrollContact = function(){
  $("html, body").animate({
    scrollTop: $("#contact").offset().top - 50},
    'slow');
};

"use strict"

angular
  .module("portfolioApp", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
  .controller("IndexController", [
    IndexControllerFunction
  ])
  .controller("HanoiController", [
    HanoiControllerFunction
  ])
  .controller("DeliverWeController", [
    DeliverWeControllerFunction
  ])
  .controller("PlusOneController", [
    PlusOneControllerFunction
  ])

  function RouterFunction($stateProvider){
    $stateProvider
    .state("Index", {
      url: "",
      templateUrl: "ng-views/index.html",
      controller: "IndexController",
      controllerAs: "vm"
    })
    .state("Hanoi", {
      url: "/hanoi",
      templateUrl: "ng-views/hanoi.html",
      controller: "HanoiController",
      controllerAs: "vm"
    })
    .state("DeliverWe", {
      url: "/deliverwe",
      templateUrl: "ng-views/deliverWe.html",
      controller: "DeliverWeController",
      controllerAs: "vm"
    })
    .state("PlusOne", {
      url: "/plusone",
      templateUrl: "ng-views/plusOne.html",
      controller: "PlusOneController",
      controllerAs: "vm"
    })
  }

  function IndexControllerFunction(){}

  function HanoiControllerFunction(){}

  function DeliverWeControllerFunction(){}

  function PlusOneControllerFunction(){}
