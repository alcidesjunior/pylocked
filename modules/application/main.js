app.controller("mainController",function($scope){
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
});
