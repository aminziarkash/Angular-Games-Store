//LEVEL 4
(function(){
    
    //=============LEVEL1 & LEVEL2============
    var app = angular.module('store', []);
    
    // Store Controller
    app.controller('StoreController', function(){
        this.products = games;        
    });
    
    //=============LEVEL 3===========================
    // Level 3 had a seperate controller that was not needed at Level 4 so I moved the function to Level 4's    
    // productsReview directive. 
    
    //=============LEVEL 4================================
    // Product Name Element Directive
    app.directive('productTitle', function(){
       return {
           restrict: 'E',
           templateUrl: 'product-title.html'
       };
    });
    
    // Product Description Attribute Directive
    app.directive('productDescription', function(){
       return {
           restrict: 'A',
           templateUrl: 'product-description.html'
       };
    });
    
    // Product panel with panels controller in it
    app.directive('productPanels', function(){
       return {
           restrict: 'E',
           templateUrl: 'product-panels.html',

           // Controller part
           controller:function(){
               this.tab = 1;
               this.selectedTab = function(setTab) {
                   this.tab = setTab;
               };
               this.isSelected = function(checkTab){
                   return this.tab === checkTab;
               };
           },
           controllerAs: 'panel'
       };
    });
    
    // Product review Attribute Directive containing review controller function 
    app.directive('productReviewForm', function(){
        return {
            restrict: 'A',
            templateUrl: 'product-review-form.html',
            controller: function(){
                this.review = {};
                this.addReview = function(product){
                    this.review.createdOn = Date.now(); // Add current date to review
                    product.reviews.push(this.review); // push the review to product reviews array
                    this.review = {}; // reset the review (make it empty)
                };
            },
            controllerAs: 'reviewCtrl'
        };
    });
    
    var games = [
        {
            name: 'Need for Speed Underground',
            price: 3,
            description: 'Underground completely rebooted the franchise, ignoring the previous Need for Speed games. It was the first game in the series to offer a career mode featuring a storyline, and a garage mode that allowed players to fully customize their cars with a large variety of brand-name performance and visual upgrades.',
            dateInStore : '1203200349692',
            canPurchase: true,
            soldOut: false,
            images : [
                "images/nfs.jpg"
            ],
            reviews: [
                {
                    stars: 5,
                    body: "This game is awsome!",
                    author: "a.ziarkash@qualogy.com"
                }
            ]
        },
        {
            name: 'Call Of Duty Black Ops III',
            price: 99.95,
            description: 'Underground completely rebooted the franchise, ignoring the previous Need for Speed games. It was the first game in the series to offer a career mode featuring a storyline, and a garage mode that allowed players to fully customize their cars with a large variety of brand-name performance and visual upgrades.',
            dateInStore : '1493200349692',
            canPurchase: true,
            soldOut: false,
            images : [
                "images/bops3.jpg"
            ],
            reviews: [
                {
                    stars: 3,
                    body: "I really liked the zombies mode on this game!",
                    author: "a.ziarkash@qualogy.com"
                }
            ]
        },
        {
            name: 'FIFA 16',
            price: 59.65,
            description: 'All races take place in a generic city at night called Olympic City, though the city bears some resemblance to New York, San Francisco and Los Angeles. Rather than exotic cars, Underground featured vehicles associated with the import scene. Underground was commercially successful, and inspired a sequel.',
            dateInStore : '1233500369692',
            canPurchase: true,
            soldOut: false,
            images : [    
                "images/fifa16.jpg"
            ],
            reviews: [
                {
                    stars: 1,
                    body: "This game is awsome!",
                    author: "a.ziarkash@qualogy.com"
                }
            ]
        },
        {
            name: 'The Last Of Us',
            price: 50.59,
            description: 'All races take place in a generic city at night called Olympic City, though the city bears some resemblance to New York, San Francisco and Los Angeles. Rather than exotic cars, Underground featured vehicles associated with the import scene. Underground was commercially successful, and inspired a sequel.',
            dateInStore : '1303200349692',
            canPurchase: true,
            soldOut: false,
            images : [
                "images/thelastofus.jpg"            
            ],
            reviews: [
                {
                    stars: 4,
                    body: "This game is awsome!",
                    author: "a.ziarkash@qualogy.com"
                }
            ]
        },
    ]
})();