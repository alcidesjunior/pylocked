app.controller("mainController",function($http,$scope,$rootScope){
  $scope.teste = "meu teste";
  $scope.fullname = localStorage.name+" "+localStorage.lastname;
  $scope.usermail = localStorage.email;
  $scope.gender = localStorage.gender;
  $('.modal').modal();
  $('.tooltipped').tooltip({delay: 10});
  $(".menu-open").sideNav('');
  $scope.open_modal_cadastro=function(){
    $('#modal1').modal('open');
  };

  $scope.logout=function(){
    localStorage.clear();
    location.href="#/";
  };

  $scope.close_modal_cadastro=function(){
    $('#modal1').modal('close');
  };
  $scope.add_register=function(register){
    register.user_id = localStorage.user_id;
    $http.post("http://127.0.0.1:8080/add_register",
    JSON.stringify(register),
    {headers:{'Content-Type':'application/json'}
    }).success(function(e){
      location.reload();
    });
  };
  $scope.list_registers=function(){
    $('#loader').show();
    if(localStorage.user_id){
      var user_id = localStorage.user_id;
      $http.get('http://127.0.0.1:8080/list_registers/'+user_id).then(function(e){
        $scope.registers = e.data;
      }).finally(function(){
        $('#loader').hide();
      });
    }else {
      location.href="#/";
    }
  }
  $scope.delete_password=function(id,user_id){
    register = {};
    register.id = id;
    register.user_id = user_id;
    $http.post("http://127.0.0.1:8080/delete_register",
    JSON.stringify(register),
    {headers:{'Content-Type':'application/json'}
    }).success(function(e){
      location.reload();
    });
  };
  $scope.show_register=function(user_id,id){
    register = {};
    register.user_id = user_id;
    register.id = id;
    $http.post("http://127.0.0.1:8080/show_register",
    JSON.stringify(register),
    {headers:{'Content-Type':'application/json'}
    }).success(function(e){
      $scope.register_edit = {};
      $scope.register_edit = e[0];
      console.log(e);
      $('#modalEditRegister').modal('open')
    });

  };
  $scope.update_register=function(register){
    $http.post("http://127.0.0.1:8080/update_register",
    JSON.stringify(register),
    {headers:{'Content-Type':'application/json'}
    }).success(function(e){
      console.log(e);
      alert(e.message);
      location.reload();
    });
  };
  $scope.list_registers();
});
