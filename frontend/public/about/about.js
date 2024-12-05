// Define the AngularJS module
var app = angular.module('aboutApp', []);

// Define the controller
app.controller('AboutController', function ($scope) {
    // Journey data
    $scope.journeys = [
        { year: 2010, description: "Our story begins with a small idea that grew into something big.", image: "../images/sideroadshop.jpg" },
        { year: 2015, description: "We expanded our reach to new markets and built our community.", image: "../images/fundforshop.jpg" },
        { year: 2020, description: "Celebrated 10 years of excellence and innovation in our industry.", image: "../images/bdoty.jpg" },
        { year: 2023, description: "Launching new projects and embracing new challenges for the future.", image: "../images/topdesigner.png" }
    ];

    // Big Image Section
    $scope.bigImage = {
        image: "../images/enha.jpg",
        altText: "Big Image Example",
        caption: "We Are Pomefiore"
    };

    // Team data
    $scope.team = [
        { name: "Paquita Melawi", position: "CEO & Founder", description: "Visionary leader with a passion for innovation.", image: "https://via.placeholder.com/120" },
        { name: "Melfanny Leono", position: "Chief Technology Officer", description: "Expert in crafting cutting-edge solutions.", image: "https://via.placeholder.com/120" },
        { name: "Panicia", position: "Marketing Manager", description: "Creative strategist with a focus on brand growth.", image: "https://via.placeholder.com/120" },
        { name: "Irene Carl Lewis", position: "Product Designer", description: "Designing user-centric and innovative products.", image: "https://via.placeholder.com/120" }
    ];

    // Vision and Mission data
    $scope.visionMissions = [
        { title: "Customer Focus", description: "We care deeply about our customers' needs and satisfaction.", image: "../images/jay.jpeg" },
        { title: "Quality Products", description: "We deliver high-quality products that exceed expectations.", image: "../images/jay.jpeg" },
        { title: "Innovation", description: "We embrace innovation to continuously improve and grow.", image: "../images/jay.jpeg" },
        { title: "Sustainability", description: "We are committed to sustainable practices for a better future.", image: "../images/jay.jpeg" }
    ];
});
