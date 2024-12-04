angular.module('productApp').controller('ProductController', function ($scope, productService) {
    $scope.products = [];

    productService.getProducts()
        .then(function (response) {
            $scope.products = response.data;
        })
        .catch(function (error) {
            console.error('Error fetching products:', error);
        });
});
