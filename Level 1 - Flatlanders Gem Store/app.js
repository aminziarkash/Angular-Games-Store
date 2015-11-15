//LEVEL 1
(function(){
    var app = angular.module('store', []);
    
    app.controller('StoreController', function(){
        this.products = gems;        
    });
    
    var gems = [
        {
            name:   'Need for Speed Underground',
            price:  3,
            description:    'Some description about the Game',
            canPurchase: false,
            soldOut: false,
        },
        {
            name:   'Call Of Duty Black Ops III',
            price:  99.95,
            description:    'Some description about the Blac Ops III Game',
            canPurchase: true,
            soldOut: false,
        },
        {
            name:   'FIFA 16',
            price:  59.65,
            description:    'Some description about the FIFA 16 Game',
            canPurchase: false,
            soldOut: false,
        },
        {
            name:   'The Last Of Us',
            price:  50.59,
            description:    'Some description about the Game',
            canPurchase: true,
            soldOut: false,
        },
    ]
})();