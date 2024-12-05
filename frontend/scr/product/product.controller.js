angular.module('productApp')
    .controller('ProductController', function ($scope, productService) {
        // Initialize variables
        $scope.products = [];
        $scope.comments = [];


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

        // Get product comments
        $scope.getComments = function (productId) {
            productService.getComments(productId)
                .then(function (response) {
                    // Ensure each comment has a unique _id
                    $scope.comments = response.data.map(comment => {
                        if (!comment._id) {
                            comment._id = new Date().getTime();  // Fallback: create a unique ID based on timestamp
                        }
                        return comment;
                    });
                })
                .catch(function (error) {
                    console.error('Error fetching comments:', error);
                });
        };

        // Submit a new comment
        $scope.submitComment = function (event) {
            if (event.key === 'Enter' && $scope.newComment.trim()) {
                const user = JSON.parse(localStorage.getItem('user'));  // Get user data from localStorage

                if (!user || !user.name) {
                    alert("You need to log in first!");
                    return;
                }

                const newComment = {
                    _id: new Date().getTime(),  // Use timestamp for unique ID
                    author: user.name,          // Use the logged-in user's name
                    commentText: $scope.newComment,
                    productId: $scope.product._id,  // Product ID
                    userId: user._id             // User ID
                };

                productService.addComment(newComment)  // Send comment to the server
                    .then(function (response) {
                        $scope.comments.push(response.data.comment);  // Add the comment to the UI
                        $scope.newComment = '';  // Clear the input
                        alert('Comment added successfully!');
                    })
                    .catch(function (error) {
                        console.error('Error adding comment:', error);
                    });
            }
        };

        $scope.saveComments = function () {
            localStorage.setItem('productComments', JSON.stringify($scope.product.comments));
        };

        // Edit Comment
        $scope.editComment = function (index) {
            // Save the comment's original text to be used for editing
            $scope.editedCommentText = $scope.product.comments[index].text;  // Bind the current text to the input field
            $scope.editingIndex = index;  // Store the index of the comment being edited
        };

        $scope.saveEditedComment = function () {
            if ($scope.editedCommentText.trim()) {
                // Perbarui teks komentar pada array
                $scope.product.comments[$scope.editingIndex].text = $scope.editedCommentText;

                // Simpan komentar yang diperbarui ke localStorage
                $scope.saveComments();

                // Reset variabel edit setelah menyimpan
                $scope.editingIndex = null;
                $scope.editedCommentText = '';

                // Perbarui UI dengan komentar terbaru
                $scope.$applyAsync();
            } else {
                alert("Komentar tidak boleh kosong!");
            }
        };


        $scope.cancelEdit = function () {
            // Reset the editing mode without saving changes
            $scope.editingIndex = null;
            $scope.editedCommentText = ''; // Clear the edited text
        };

        // Delete a comment
        $scope.deleteComment = function (commentId) {
            productService.deleteComment(commentId)
                .then(function () {
                    const index = $scope.comments.findIndex(c => c._id === commentId);
                    if (index > -1) {
                        $scope.comments.splice(index, 1);  // Remove the comment from the UI
                    }
                    alert('Comment deleted successfully!');
                })
                .catch(function (error) {
                    console.error('Error deleting comment:', error);
                });
        };

        // Checkout function (for demo purpose)
        $scope.checkout = function () {
            alert('Proceeding to checkout...');
        };
    });