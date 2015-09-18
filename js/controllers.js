angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal  
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl',  function($scope,$http) {

    $http.get('http://kambamberos.wirez.com.ar/php/cargar_personas.php').
      then(function(response) {
       // $scope.$apply(function() {
            $scope.equipo = response.data;
            //console.log(response.data);
           
      //  })
        
     })

      $http.get('http://kambamberos.wirez.com.ar/php/listar_noticias.php').
      then(function(response) {
       // $scope.$apply(function() {
            $scope.inicio = response.data;
          //  console.log(response.data);
           
      //  })
        
     })



      $http.get('http://kambamberos.wirez.com.ar/php/listar_mision.php').
      then(function(response) {
       // $scope.$apply(function() {
            $scope.mision = response.data;
            //console.log(response.data);
           
      //  })
        
     })

      $http.get('http://kambamberos.wirez.com.ar/php/listar_vision.php').
      then(function(response) {
       // $scope.$apply(function() {
            $scope.vision = response.data;
            //console.log(response.data);
           
      //  })
        
     })

      $http.get('http://kambamberos.wirez.com.ar/php/listar_mensajes.php').
      then(function(response) {
       // $scope.$apply(function() {
            $scope.mural = response.data;
            //console.log(response.data);
           
      //  })
        
     })


      $http.get('http://kambamberos.wirez.com.ar/php/listar_personas.php').
      then(function(response) {
       // $scope.$apply(function() {
            $scope.cargar_personas = response.data;
            //console.log(response.data);
           
      //  })
        
     })

    $scope.guardar = function(){

    $id = document.getElementById("id").value;
    $email = document.getElementById("email").value;
    $mensaje = document.getElementById("mensaje").value;

     // var peticion = {
     //    data:{id:89},
     //    method:'POST',
     //    url:'php/guardar_mensajes.php',
     //    headers:{'Content-Type': 'application/json'}
     // }
  
        $http.post('http://kambamberos.wirez.com.ar/php/guardar_mensajes.php', {id:$id, email:$email, mensaje:$mensaje}).
        then(function(response) {
       // $scope.$apply(function() {
           // alert(response.data);
            window.alert(response.data);

            document.getElementById("id").value = "";
            document.getElementById("email").value = "";
            document.getElementById("mensaje").value = "";
           
      //  })
        
     })
      .catch(function(response) {
         console.log(response,'error')
      })

                    
     // alert("Funciona");

    }

    
})
.controller('PlaylistCtrl', function($scope, $stateParams) {
});
