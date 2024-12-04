// frontend/src/product/product.controller.js
angular.module('productApp')
    .controller('ProductController', function ($scope, productService) {
        $scope.products = [];
        $scope.product = {};
        $scope.productId = "67501d65708c9617abd1c85a";  // ID produk untuk contoh, ganti sesuai dengan produk yang diinginkan

        // Mengambil data produk berdasarkan ID (misalnya ID produk "caroline-slim-fit-flared-jeans")
        productService.getProduct($scope.productId)
            .then(function (response) {
                $scope.product = response;
            })
            .catch(function (error) {
                console.error('Error fetching product:', error);
            });

        // Mengambil semua produk (Jika ingin menampilkan daftar produk di halaman)
        productService.getProducts()
            .then(function (response) {
                $scope.products = response;
            })
            .catch(function (error) {
                console.error('Error fetching products:', error);
            });

        // Toggle Wishlist
        $scope.toggleWishlist = function () {
            $scope.product.isInWishlist = !$scope.product.isInWishlist;
        };

        // Add to Cart
        $scope.addToCart = function () {
            alert('Product added to cart!');
        };

        // Update Cart Quantity
        $scope.updateCart = function () {
            console.log('Quantity updated to: ' + $scope.cartQuantity);
        };

        // Submit Comment
        $scope.submitComment = function (event) {
            if (event.key === 'Enter' && $scope.newComment.trim()) {
                const newComment = { author: 'Guest', text: $scope.newComment };
                $scope.product.comments.push(newComment);
                $scope.newComment = ''; // Clear input
            }
        };

        // Checkout function (for demo purpose)
        $scope.checkout = function () {
            alert('Proceeding to checkout...');
        };
    });
