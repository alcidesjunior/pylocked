app.config(function($routeProvider){
  $routeProvider
  .when("/",{
    templateUrl: "modules/login/login.html",
    controller: "loginController"
  })
  .when("/app",{
    templateUrl: "modules/application/app.html",
    controller: "mainController"
  })
})
