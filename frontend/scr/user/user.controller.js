angular.module('myApp').controller('AppController', function($scope, userService) {
    $scope.newUser = { name: '', email: '', password: '' };
    $scope.loginData = { name: '', password: '' };
    $scope.updateData = { email: '', phone: '', address: '' };

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
    
    // Fungsi untuk memperbarui data pengguna
    $scope.updateUser = function () {
        // Ambil ID pengguna dari localStorage
        const user = JSON.parse(localStorage.getItem("user"));
        const userId = user.id; // Pastikan ID tersedia

        if (!userId) {
            alert("User is not logged in!");
            return;
        }

        userService.updateUser(userId, $scope.updateData)
            .then((response) => {
                alert('User updated successfully!');
                localStorage.setItem("user", JSON.stringify(response.data.user)); // Perbarui localStorage
                $scope.updateData = {}; // Reset form
            })
            .catch((error) => {
                const message = error.data?.message || 'An error occurred during update.';
                alert('Update failed: ' + message);
            });

            userService.updateUser(userId, $scope.updateData)
    .then((response) => {
        console.log("Update Response:", response.data); // Debugging
        alert('User updated successfully!');
        localStorage.setItem("user", JSON.stringify(response.data.user)); // Update localStorage
    })
    .catch((error) => {
        console.error("Update Error:", error); // Debugging
        const message = error.data?.message || 'An error occurred during update.';
        alert('Update failed: ' + message);
    });

    };

    // Fungsi untuk menghapus pengguna
    $scope.deleteUser = function() {
        // Ambil ID pengguna dari localStorage
        const user = JSON.parse(localStorage.getItem("user"));
        const userId = user?.id; // Pastikan ID tersedia

        if (!userId) {
            alert("User is not logged in!");
            return;
        }

        if (!confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
            return;
        }

        userService.deleteUser(userId)
            .then(() => {
                alert('User deleted successfully!');
                localStorage.clear(); // Hapus semua data di localStorage
                window.location.href = '/frontend/public/profile/login.html'; // Redirect ke halaman login
            })
            .catch((error) => {
                const message = error.data?.message || 'An error occurred during deletion.';
                alert('Deletion failed: ' + message);
            });
    };
});

