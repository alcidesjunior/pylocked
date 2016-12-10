app.config(function($routeProvider){
  $routeProvider
  .when("/",{
    templateUrl: "modules/login/login.html",
    controller: "loginController"
  })
  // .when("/login",{
  //   templateUrl: "modules/application/app.html",
  //   controller: "mainController"
  // })
})
