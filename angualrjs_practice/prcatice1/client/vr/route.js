

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: '/client/vr/home.html'
        })

        .state('about', {
          url: '/about',
          templateUrl: '/client/vr/about.html'
        });

});
