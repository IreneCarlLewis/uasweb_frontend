angular.module('myApp').service('userService', function($http) {
    const API_URL = 'http://localhost:3000/api/users';

    // Fungsi untuk membuat user baru
    this.createUser = function(user) {
        return $http.post(API_URL, user);
    };
});
