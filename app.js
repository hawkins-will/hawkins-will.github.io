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
      templateUrl: "ng-views/PlusOne.html",
      controller: "PlusOneController",
      controllerAs: "vm"
    })
  }

  function IndexControllerFunction(){}

  function HanoiControllerFunction(){}

  function DeliverWeControllerFunction(){}

  function PlusOneControllerFunction(){}
