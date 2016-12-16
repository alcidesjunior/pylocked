app.controller("mainController",function($http,$scope,$rootScope){
  $scope.teste = "meu teste";
  $('.modal').modal();
  $('.tooltipped').tooltip({delay: 10});
  $(".menu-open").sideNav('');
  $scope.open_modal_cadastro=function(){
    $('#modal1').modal('open');
  };
  $scope.close_modal_cadastro=function(){
    $('#modal1').modal('close');
  };
  $scope.add_register=function(register){
    register.user_id = 2;
    $http.post("http://127.0.0.1:8080/add_register",
    JSON.stringify(register),
    {headers:{'Content-Type':'application/json'}
    }).success(function(e){
      console.log(e);
    });
  };
  $scope.list_registers=function(){
    $('#loader').show();
    $http.get('http://127.0.0.1:8080/list_registers/2').then(function(e){
      $scope.registers = e.data;
    }).finally(function(){
      $('#loader').hide();
    });
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
  $scope.list_registers();
});
