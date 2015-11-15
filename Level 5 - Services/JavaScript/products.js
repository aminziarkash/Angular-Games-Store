(function(){
    var app = angular.module('store-products', []);
    
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
})();