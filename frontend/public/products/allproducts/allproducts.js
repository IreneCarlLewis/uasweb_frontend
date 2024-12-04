angular.module('productApp', [])
    .controller('ProductController', function ($scope, $http) {
        // Inisialisasi produk
        $scope.products = [];

        // Ambil produk dari backend
        $http.get('http://localhost:3000/api/products') // Ganti dengan URL API backendmu
            .then(function (response) {
                // Sukses menerima data
                $scope.products = response.data;
            })
            .catch(function (error) {
                // Tangani error jika terjadi
                console.error("Terjadi kesalahan saat mengambil data produk: ", error);
            });

        $scope.sortOption = 'default';
        $scope.minPrice = undefined;
        $scope.maxPrice = undefined;

        // Variabel untuk menyimpan nilai filter yang diterapkan
        $scope.appliedMinPrice = undefined;
        $scope.appliedMaxPrice = undefined;

        // Terapkan filter
        $scope.applyFilters = function () {
            $scope.appliedMinPrice = $scope.minPrice;
            $scope.appliedMaxPrice = $scope.maxPrice;
        };

        // Reset filter
        $scope.resetFilters = function () {
            $scope.minPrice = undefined;
            $scope.maxPrice = undefined;
            $scope.appliedMinPrice = undefined;
            $scope.appliedMaxPrice = undefined;
        };

        // Filter pencarian
        $scope.searchFilter = function (product) {
            const withinPriceRange = (!$scope.appliedMinPrice || product.price >= $scope.appliedMinPrice) &&
                (!$scope.appliedMaxPrice || product.price <= $scope.appliedMaxPrice);
            const matchesSearch = !$scope.searchQuery || product.name.toLowerCase().includes($scope.searchQuery.toLowerCase());
            return withinPriceRange && matchesSearch;
        };
    });