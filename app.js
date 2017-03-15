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
  .controller("AboutController", [
    AboutControllerFunction
  ])
  .controller("ContactController", [
    ContactControllerFunction
  ])
  .controller("PortfolioController", [
    PortfolioControllerFunction
  ])
  .controller("ResumeController", [
    ResumeControllerFunction
  ])
  .controller("SkillsController", [
    SkillsControllerFunction
  ])

  function RouterFunction($stateProvider){
    $stateProvider
    .state("Index", {
      url: "/index",
      templateUrl: "ng-views/index.html",
      controller: "IndexController",
      controllerAs: "vm"
    })
    .state("About", {
      url: "/about",
      templateUrl: "ng-views/about.html",
      controller: "AboutController",
      controllerAs: "vm"
    })
    .state("Contact", {
      url: "/contact",
      templateUrl: "ng-views/contact.html",
      controller: "ContactController",
      controllerAs: "vm"
    })
    .state("Portfolio", {
      url: "/portfolio",
      templateUrl: "ng-views/portfoli.html",
      controller: "PortfolioController",
      controllerAs: "vm"
    })
    .state("Resume", {
      url: "/resume",
      templateUrl: "ng-views/resume.html",
      controller: "ResumeController",
      controllerAs: "vm"
    })
    .state("Skills", {
      url: "/skills",
      templateUrl: "ng-views/skills.html",
      controller: "SkillsController",
      controllerAs: "vm"
    })
  }
