// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.inicio', {
    url: '/inicio',
    views: {
      'menuContent': {
        templateUrl: 'templates/inicio/inicio.html',
        controller: 'PlaylistsCtrl'
      }
    }
  }) 
  .state('app.mision', {
      url: '/mision',
      views: {
        'menuContent': {
          templateUrl: 'templates/mision/mision.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
  .state('app.vision', {
      url: '/vision',
      views: {
        'menuContent': {
          templateUrl: 'templates/vision/vision.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
  .state('app.equipo', {
      url: '/equipo',
      views: {
        'menuContent': {
          templateUrl: 'templates/equipo/equipo.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
  .state('app.perfil', {
      url: '/perfil',
      views: {
        'menuContent': {
          templateUrl: 'templates/miperfil/miperfil.html'
        }
      }
    })
  .state('app.contacto', {
      url: '/contacto',
      views: {
        'menuContent': {
          templateUrl: 'templates/contacto/contacto.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
  .state('app.acercade', {
      url: '/acercade',
      views: {
        'menuContent': {
          templateUrl: 'templates/acercade/acercade.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
  .state('app.mural', {
      url: '/mural',
      views: {
        'menuContent': {
          templateUrl: 'templates/mural/mural.html',
          controller: 'PlaylistsCtrl'
        }
      }
    });
    
/*
  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });*/
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/inicio');
});
