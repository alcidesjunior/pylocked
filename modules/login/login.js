 app.controller('loginController',function($scope,$http,$location,$rootScope){
    $('select').material_select();
   $('.modal').modal({
     complete: function() {
      //  location.reload();
      $('#formuser')[0].reset();
     }
   });
  $scope.do_login=function(login){
    // $http.post("http://127.0.0.1:8080/login",
    // JSON.stringify(login),
    // {headers:{'Content-Type':'application/json'}
    // }).success(function(e){
    //   if(typeof e.auth_token != "undefined" && e.auth_token.length>0){
    //     localStorage.setItem("user_id",e.user_id);
    //     localStorage.setItem('name',e.name);
    //     localStorage.setItem('lastname',e.lastname);
    //     localStorage.setItem('email',e.email);
    //     localStorage.setItem('gender',e.gender);
    //     $rootScope.token = e.auth_token;
    //     $location.path('/app');
    //   }else{
    //     Materialize.toast('Authentication failed!', 3000,'rounded')
    //   }
    // });
      $location.path('/app');

  }
  $scope.new_user=function(){
    $('#modalNewUser').modal('open');
  }
  $scope.add_user=function(user){
    user.gender = $('#gender').val();
    console.log(user);
    $http.post("http://127.0.0.1:8080/add_user",
    JSON.stringify(user),
    {headers:{'Content-Type':'application/json'}
    }).success(function(e){
        if(e.error==0){
          Materialize.toast(e.response, 3000,'rounded',function(){location.reload()});
        }else{
          Materialize.toast(e.response, 3000,'rounded');
        }
    });
  };
});
