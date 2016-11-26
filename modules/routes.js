app.config(function($routeProvider){
  $routeProvider
  .when("/app",{
    templateUrl: "modules/application/app.html",
    controller:"appController"
  })
  .when("/login",{
    templateUrl:"index.html"
  })
})
