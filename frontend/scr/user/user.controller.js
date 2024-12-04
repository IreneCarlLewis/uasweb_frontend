angular.module('myApp').controller('AppController', function($scope, userService) {
    $scope.newUser = { name: '', email: '', password: '' };
    $scope.loginData = { name: '', password: '' };

    // Fungsi untuk registrasi user baru
    $scope.registerUser = function() {
        userService.createUser($scope.newUser).then((response) => {
            // Tampilkan alert saat berhasil
            alert('User registered successfully!');
            
            // Reset form
            $scope.newUser = { name: '', email: '', password: '' };

            // Redirect ke halaman home
            window.location.href = '/frontend/public/home/home.html'; 
        }).catch((error) => {
            // Tampilkan alert jika terjadi kesalahan
            alert('Registration failed: ' + error.message);
        });
    };

    // Fungsi untuk login
    $scope.loginUser = function() {
        userService.loginUser($scope.loginData)
            .then((response) => {
                console.log("Login successful:", response.data); // Log data user setelah login berhasil
                alert('Login successful! Welcome, ' + response.data.user.name);

                // Redirect ke halaman home
                window.location.href = '/frontend/public/home/home.html';
            })
            .catch((error) => {
                console.error("Login Error:", error); // Log error yang diterima
                const message = error.data?.message || 'An error occurred during login.';
                alert('Login failed: ' + message);
            });
    };
});
