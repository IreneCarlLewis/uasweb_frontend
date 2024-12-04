angular.module('productApp').service('productService', function ($http) {
    const API_URL = 'http://localhost:3000/api/products';

    this.getProducts = function () {
        return $http.get(API_URL);
    };
});
