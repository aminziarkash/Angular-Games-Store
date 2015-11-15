//LEVEL 2
(function(){
    var app = angular.module('store', []);
    
    app.controller('StoreController', function(){
        this.products = gems;        
    });
    
    app.controller("PanelController", function(){
        this.tab = 1;
        
        this.selectedTab = function(setTab) {
            this.tab = setTab;
        };
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        };
    });
    
    var gems = [
        {
            name: 'Need for Speed Underground',
            price: 3,
            description: 'Best Racing Game',
            dateInStore : '1203200349692',
            canPurchase: true,
            soldOut: false,
            images : [
                "images/nfs.jpg",
                "images/nfs_thumb.jpg"
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
                "images/bops3.jpg",
                "images/bosaaps3_thumb.jpg"
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
                "images/fifa16.jpg",
                "images/fifa16_thumb.jpg"
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
                "images/thelastofus.jpg",
                "images/thelastofus_thumb.jpg"
            ]
        },
    ]
})();