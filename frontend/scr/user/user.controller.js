angular.module('myApp').controller('AppController', function($scope, userService) {
    $scope.newUser = { name: '', email: '', password: '' };

    // Fungsi untuk registrasi user baru
    $scope.registerUser = function() {
        userService.createUser($scope.newUser).then((response) => {
            // Tampilkan alert saat berhasil
            alert('User registered successfully!');
            
            // Reset form
            $scope.newUser = { name: '', email: '', password: '' };

            // Redirect ke halaman home
            window.location.href = '/frontend/public/home/home.html'; // Ganti dengan URL halaman home Anda
        }).catch((error) => {
            // Tampilkan alert jika terjadi kesalahan
            alert('Registration failed: ' + error.message);
        });
    };
});
