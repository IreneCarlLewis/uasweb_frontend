// frontend/src/product/product.server.js
angular.module('productApp')
    .service('productService', function ($http) {
        const API_URL = 'http://localhost:3000/api/products';  // URL dasar untuk mengambil produk
        
        // Fungsi untuk mengambil semua produk
        this.getProducts = function () {
            return $http.get(API_URL)
                .then(function (response) {
                    return response.data;
                })
                .catch(function (error) {
                    console.error('Error fetching products:', error);
                    throw error;
                });
        };

        // Fungsi untuk mengambil produk berdasarkan ID
        this.getProduct = function (id) {
            return $http.get(API_URL + '/' + id)
                .then(function (response) {
                    return response.data;
                })
                .catch(function (error) {
                    console.error('Error fetching product by ID:', error);
                    throw error;
                });
        };
    });
