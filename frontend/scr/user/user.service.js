angular.module('myApp').service('userService', function($http) {
    const API_URL = 'http://localhost:3000/api/users';

    // Fungsi untuk membuat user baru
    this.createUser = function(user) {
        return $http.post(API_URL, user);
    };

    // Fungsi untuk login user
    this.loginUser = function(loginData) {
        return $http.post(`${API_URL}/login`, loginData);
    };

    // Fungsi untuk memperbarui user
    this.updateUser = function(userId, updateData) {
        return $http.put(`${API_URL}/${userId}`, updateData);
    };

    // Fungsi untuk menghapus user
    this.deleteUser = function(userId) {
        return $http.delete(`${API_URL}/${userId}`);
    };
});
