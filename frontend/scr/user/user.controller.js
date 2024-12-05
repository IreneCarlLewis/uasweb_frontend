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
            window.location.href = '/frontend/public/profile/login.html'; 
        }).catch((error) => {
            // Tampilkan alert jika terjadi kesalahan
            alert('Registration failed: ' + error.message);
        });
    };

    // Fungsi untuk login
    $scope.loginUser = function() {
        userService.loginUser($scope.loginData)
            .then((response) => {
                console.log("Response from server:", response.data);
    
                // Simpan data pengguna di localStorage
                const user = response.data.user;
                const token = response.data.token;
    
                if (user && token) {
                    localStorage.setItem("user", JSON.stringify(user));
                    localStorage.setItem("token", token);
                    console.log("User and Token saved in localStorage:", localStorage.getItem("user"), localStorage.getItem("token"));
    
                    alert('Login successful! Welcome, ' + user.name);
                    window.location.href = '/frontend/public/home/home.html';
                } else {
                    console.error("User or token missing in response!");
                }
            })
            .catch((error) => {
                console.error("Login Error:", error);
                const message = error.data?.message || 'An error occurred during login.';
                alert('Login failed: ' + message);
            });
    };    
});
