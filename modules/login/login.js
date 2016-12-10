 app.controller('loginController',function($scope,$http){

  $scope.do_login=function(login){
    // $http({
    //   url:"http://192.168.42.126:3000/login",
    //   contentType:"application/json",
    //   method:"POST",
    //   data:  JSON.stringify(login) ,
    //
    // }).success(function(e){
    //   console.log(e);
    // });
    $.ajax({
      url:"http://localhost:3000/login",
      type:"POST",
      contentType:'application/json',
      crossDomain:true,
      data: login,
      success:function(e){
        console.log(e);
      }
    });
  }
});
