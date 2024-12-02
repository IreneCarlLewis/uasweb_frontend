angular.module('productApp', [])
    .controller('ProductController', function ($scope) {
        $scope.products = [
            { name: 'Caroline Slim Fit Flared Jeans', price: 350000, link: '/products/caroline-slim-fit-flared-jeans.html', mainImg: '/frontend/public/images/products/pants/K_1.jpg', hoverImg: '/frontend/public/images/products/pants/K_2.jpg' },
            { name: 'Tori Slim-Fit Crop Tee', price: 325000, link: '/products/tori-slim-fit-crop-tee.html', mainImg: '/frontend/public/images/products/tops/A_1.jpg', hoverImg: '/frontend/public/images/products/tops/A_2.jpg' },
            { name: 'Karina Raglan Sweatshirt', price: 315000, link: '/products/karina-raglan-sweatshirt.html', mainImg: '/frontend/public/images/products/tops/B_1.jpg', hoverImg: '/frontend/public/images/products/tops/B_2.jpg' },
            { name: 'Airi Off-Shoulder Cropped Sweatshirt', price: 350000, link: '/products/airi-off-shoulder-cropped-sweatshirt.html', mainImg: '/frontend/public/images/products/tops/V_1.jpg', hoverImg: '/frontend/public/images/products/tops/V_2.jpg' },
            { name: 'Corrin Cotton Jacket', price: 515000, link: '/products/corrin-cotton-jacket.html', mainImg: '/frontend/public/images/products/outerwears/J_1.jpg', hoverImg: '/frontend/public/images/products/outerwears/J_2.jpg' },
            { name: 'Nayu Wool Blend Long Sleeve Trench Coat', price: 1250000, link: '/products/nayu-wool-blend-long-sleeve-trench-coat.html', mainImg: '/frontend/public/images/products/outerwears/Y_1.jpg', hoverImg: '/frontend/public/images/products/outerwears/Y_2.jpg' },
            { name: 'Yuzu Fuzzy Bomber', price: 680000, link: '/products/yuzu-fuzzy-bomber.html', mainImg: '/frontend/public/images/products/outerwears/D_1.jpg', hoverImg: '/frontend/public/images/products/outerwears/D_2.jpg' },
            { name: 'Bolero Sleeve Sweater Mini Dress', price: 525000, link: '/products/bolero-sleeve-sweater-mini-dress.html', mainImg: '/frontend/public/images/products/dress/E_1.jpg', hoverImg: '/frontend/public/images/products/dress/E_2.jpg' },
            { name: 'San Stitched Chic Cut-Out Top', price: 315000, link: '/products/san-stitched-chic-cut-out-top.html', mainImg: '/frontend/public/images/products/tops/Z_1.jpg', hoverImg: '/frontend/public/images/products/tops/Z_2.jpg' },
            { name: 'Mili Mini Dress and Cardigan Set', price: 580000, link: '/products/mili-mini-dress-and-cardigan-set.html', mainImg: '/frontend/public/images/products/dress/F_1.jpg', hoverImg: '/frontend/public/images/products/dress/F_2.jpg' },
            { name: 'Dami Buttoned Cardigan', price: 350000, link: '/products/dami-buttoned-cardigan.html', mainImg: '/frontend/public/images/products/outerwears/G_1.jpg', hoverImg: '/frontend/public/images/products/outerwears/G_2.jpg' },
            { name: 'Deuce Off Shoulder Cut Out Mini Dress', price: 590000, link: '/products/deuce-off-shoulder-cut-out-mini-dress.html', mainImg: '/frontend/public/images/products/dress/H_1.jpg', hoverImg: '/frontend/public/images/products/dress/H_2.jpg' },
            { name: 'Ann Pocketed Pleated Tube Top Mini Dress', price: 650000, link: '/products/ann-pocketed-pleated-tube-top-mini-dress.html', mainImg: '/frontend/public/images/products/dress/W_1.jpg', hoverImg: '/frontend/public/images/products/dress/W_2.jpg' },
            { name: 'LuxeLace Mini Skirt', price: 310000, link: '/products/luxelace-mini-skirt.html', mainImg: '/frontend/public/images/products/skirts/I_1.jpg', hoverImg: '/frontend/public/images/products/skirts/I_2.jpg' },
            { name: 'Han Checkered Pleated Mini Skirt', price: 350000, link: '/products/han-checkered-pleated-mini-skirt.html', mainImg: '/frontend/public/images/products/skirts/Q_1.jpg', hoverImg: '/frontend/public/images/products/skirts/Q_2.jpg' },
            { name: 'Brie Lace Trimmed Mini Skirt', price: 400000, link: '/products/brie-lace-trimmed-mini-skirt.html', mainImg: '/frontend/public/images/products/skirts/M_1.jpg', hoverImg: '/frontend/public/images/products/skirts/M_2.jpg' },
            { name: 'Xyn Pocket Eco-Leather Shorts', price: 425000, link: '/products/xyn-pocket-eco-leather-shorts.html', mainImg: '/frontend/public/images/products/shorts/N_1.jpg', hoverImg: '/frontend/public/images/products/shorts/N_2.jpg' },
            { name: 'Rose Chic Low-Waisted Shorts', price: 360000, link: '/products/rose-chic-low-waisted-shorts.html', mainImg: '/frontend/public/images/products/shorts/O_1.jpg', hoverImg: '/frontend/public/images/products/shorts/O_2.jpg' },
            { name: 'Tessa Washed Bermuda Pants', price: 435000, link: '/products/tessa-washed-bermuda-pants.html', mainImg: '/frontend/public/images/products/pants/P_1.jpg', hoverImg: '/frontend/public/images/products/pants/P_2.jpg' },
            { name: 'Robin Corduroy Dream Maxi Skirt', price: 340000, link: '/products/robin-corduroy-dream-maxi-skirt.html', mainImg: '/frontend/public/images/products/skirts/L_1.jpg', hoverImg: '/frontend/public/images/products/skirts/L_2.jpg' },
            { name: 'Magi Solid Slim Fit Corduroy Pants', price: 470000, link: '/products/magi-solid-slim-fit-corduroy-pants.html', mainImg: '/frontend/public/images/products/pants/R_1.jpg', hoverImg: '/frontend/public/images/products/pants/R_2.jpg' },
            { name: 'Rin Wide Fit Camouflage Cargo Pants', price: 510000, link: '/products/rin-wide-fit-camouflage-cargo-pants.html', mainImg: '/frontend/public/images/products/pants/S_1.jpg', hoverImg: '/frontend/public/images/products/pants/S_2.jpg' },
            { name: 'Kana SlimFit Ribbed Strap Shorts', price: 340000, link: '/products/kana-slimfit-ribbed-strap-shorts.html', mainImg: '/frontend/public/images/products/shorts/X_1.jpg', hoverImg: '/frontend/public/images/products/shorts/X_2.jpg' },
            { name: 'Anzu Corduroy Chic Shorts', price: 465000, link: '/products/anzu-corduroy-chic-shorts.html', mainImg: '/frontend/public/images/products/shorts/T_1.jpg', hoverImg: '/frontend/public/images/products/shorts/T_2.jpg' },
            { name: 'Zay Chic Silhouette Jacket', price: 560000, link: '/products/zay-chic-silhouette-jacket.html', mainImg: '/frontend/public/images/products/outerwears/U_1.jpg', hoverImg: '/frontend/public/images/products/outerwears/U_2.jpg' },
            { name: 'Luna Off-Shoulder Long Sleeve Top', price: 380000, link: '/products/luna-off-shoulder-long-sleeve-top.html', mainImg: '/frontend/public/images/products/tops/C_1.jpg', hoverImg: '/frontend/public/images/products/tops/C_2.jpg' }
        ];

        $scope.sortOption = 'default';
        $scope.minPrice = undefined;
        $scope.maxPrice = undefined;

        // Variables to store applied filter values
        $scope.appliedMinPrice = undefined;
        $scope.appliedMaxPrice = undefined;

        // Apply filter logic
        $scope.applyFilters = function () {
            $scope.appliedMinPrice = $scope.minPrice;
            $scope.appliedMaxPrice = $scope.maxPrice;
        };

        // Reset filter logic
        $scope.resetFilters = function () {
            $scope.minPrice = undefined;
            $scope.maxPrice = undefined;
            $scope.appliedMinPrice = undefined;
            $scope.appliedMaxPrice = undefined;
        };

        // Custom search filter
        $scope.searchFilter = function (product) {
            const withinPriceRange = (!$scope.appliedMinPrice || product.price >= $scope.appliedMinPrice) &&
                (!$scope.appliedMaxPrice || product.price <= $scope.appliedMaxPrice);
            const matchesSearch = !$scope.searchQuery || product.name.toLowerCase().includes($scope.searchQuery.toLowerCase());
            return withinPriceRange && matchesSearch;
        };
    });