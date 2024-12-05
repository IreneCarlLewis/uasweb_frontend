angular.module('productApp')
    .controller('ProductController', function ($scope, productService) {
        // Initialize variables
        $scope.products = [];

        // Load all products for display
        productService.getProducts()  // Assuming productService gets all products
            .then(function (response) {
                $scope.products = response;  // Populate products array

                // Check if each product is in the wishlist (based on localStorage)
                const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

                // Loop through products and set the wishlist status for each product
                $scope.products.forEach(product => {
                    const productInWishlist = wishlist.find(item => item._id === product._id);
                    product.isInWishlist = !!productInWishlist;  // Set the wishlist status
                });
            })
            .catch(function (error) {
                console.error('Error fetching products:', error);
            });

        // Toggle Wishlist (Add/Remove product)
        $scope.toggleWishlist = function (product) {
            let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
            const index = wishlist.findIndex(item => item._id === product._id);

            if (index > -1) {
                // Item is already in wishlist, remove it
                wishlist.splice(index, 1);
                product.isInWishlist = false;
                alert('Item removed from wishlist!');
            } else {
                // Item not in wishlist, add it
                wishlist.push(product);
                product.isInWishlist = true;
                alert('Item added to wishlist!');
            }

            // Save updated wishlist to localStorage
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
        };

        // Add to Cart (Mock function)
        $scope.addToCart = function (product) {
            alert('Product added to cart: ' + product.name);
        };

        // Update Cart Quantity (Mock function)
        $scope.updateCart = function () {
            console.log('Quantity updated to: ' + $scope.cartQuantity);
        };

        // Submit Comment (Add new comment to product)
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
