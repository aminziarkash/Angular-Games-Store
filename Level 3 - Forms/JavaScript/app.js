//LEVEL 3
(function(){
    var app = angular.module('store', []);
    
    // Store Controller
    app.controller('StoreController', function(){
        this.products = games;        
    });
    
    // Panel Controller
    app.controller("PanelController", function(){
        this.tab = 1;
        
        this.selectedTab = function(setTab) {
            this.tab = setTab;
        };
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        };
    });
    
    // Review Controller
    app.controller("ReviewController", function(){
        this.review = {};
        this.addReview = function(product){
            this.review.createdOn = Date.now(); // Add current date to review
            product.reviews.push(this.review); // push the review to product reviews array
            this.review = {}; // reset the review (make it empty)
        };
    });
    
    var games = [
        {
            name: 'Need for Speed Underground',
            price: 3,
            description: 'Best Racing Game',
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
            description: 'Best Zombie mode Game Ever',
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
            description: 'Best Foorball Game',
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
            description: 'Another Zombie Game',
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