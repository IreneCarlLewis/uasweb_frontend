var myContactApp = angular.module('contactApp', []);

// Controller untuk form contact
myContactApp.controller('contactController', function($scope) {
  // Model data form
  $scope.contact = {
    name: '',
    email: '',
    message: ''
  };

  // Status untuk form submission
  $scope.formSubmitted = false;

  // Fungsi untuk submit form
  $scope.submitForm = function() {
    $scope.formSubmitted = true;
    console.log('Form Data:', $scope.contact);
    // Di sini kamu bisa tambahkan logic untuk mengirim data ke server
  };
});


