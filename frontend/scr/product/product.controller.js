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

        // Add to Cart
        $scope.addToCart = function (product) {
            // Check if product is already in the cart
            const cartItemIndex = $scope.cart.findIndex(item => item._id === product._id);

            if (cartItemIndex > -1) {
                // If product exists, update the quantity
                $scope.cart[cartItemIndex].quantity++;
            } else {
                // If product doesn't exist, add to cart with quantity 1
                $scope.cart.push({
                    ...product,
                    quantity: 1
                });
            }

            // Save updated cart to localStorage
            localStorage.setItem('cart', JSON.stringify($scope.cart));
            alert('Product added to cart!');
        };

        // Update Cart Quantity
        $scope.updateCart = function (product) {
            const cartItemIndex = $scope.cart.findIndex(item => item._id === product._id);
            if (cartItemIndex > -1) {
                // Update quantity in the cart
                $scope.cart[cartItemIndex].quantity = product.quantity;

                // Save updated cart to localStorage
                localStorage.setItem('cart', JSON.stringify($scope.cart));
                alert('Cart updated successfully!');
            }
        };

        // Remove from Cart
        $scope.removeFromCart = function (productId) {
            // Remove the product from the cart
            $scope.cart = $scope.cart.filter(item => item._id !== productId);

            // Update localStorage with new cart data
            localStorage.setItem('cart', JSON.stringify($scope.cart));
            alert('Item removed from cart!');
        };

        // Checkout function (for demo purpose)
        $scope.checkout = function () {
            alert('Proceeding to checkout...');
        };
    });