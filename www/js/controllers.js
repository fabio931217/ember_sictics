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

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
$scope.inicio = [
    { avatar: 'img/avatar.png', usuario: 'Jesson', fecha: 'Septiembre 04, 2015', img: 'img/delorean.jpg', id: 1, texto: 'Esto e suna prueba de como sera nuestra pagina de inicio 1' },
    { avatar: 'img/avatar.png', usuario: 'Ember', fecha: 'Septiembre 05, 2015', img: 'img/delorean.jpg', id: 2, texto: 'Esto e suna prueba de como sera nuestra pagina de inicio 2' },
    { avatar: 'img/avatar.png', usuario: 'Yhonatan', fecha: 'Septiembre 06, 2015', img: 'img/delorean.jpg', id: 3, texto: 'Esto e suna prueba de como sera nuestra pagina de inicio 3' }
  ];

  $scope.mision = [
    { texto: 'En este espacio ira la mision de nuestra empresa, la mision sera agregada modificada desde l apagina web de administracion y se cragara desde la base de datos' }
    ];

    $scope.vision = [
    { texto: 'En este espacio ira la Vision de nuestra empresa, la Vision sera agregada modificada desde l apagina web de administracion y se cragara desde la base de datos' }
    ];

    $scope.equipo = [
    { id: 1, usuario: 'Ember', profesion: 'Ingeniero Teleinformatico', img: 'img/avatar.png'},
    { id: 2, usuario: 'Fabio', profesion: 'Ingeniero Teleinformatico', img: 'img/avatar.png'},
    { id: 1, usuario: 'Harlinton', profesion: 'Ingeniero Teleinformatico', img: 'img/avatar.png'},
    { id: 1, usuario: 'Leon', profesion: 'Ingeniero Teleinformatico', img: 'img/avatar.png'}
  ];
})
.controller('PlaylistCtrl', function($scope, $stateParams) {
});
