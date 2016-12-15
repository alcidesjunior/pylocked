 app.controller('loginController',function($scope,$http,$location,$rootScope){
  $scope.do_login=function(login){
    $http.post("http://127.0.0.1:8080/login",
    JSON.stringify(login),
    {headers:{'Content-Type':'application/json'}
    }).success(function(e){
      console.log(e);
      if(typeof e.auth_token != "undefined" && e.auth_token.length>0){
        $rootScope.token = e.auth_token;
        $location.path('/app');
      }
    });
  }
});
