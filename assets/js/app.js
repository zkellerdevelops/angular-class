(function() {
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller("PanelController", function(){
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    }
    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
  });

  app.controller('ReviewController', function(){
    this.review = {};

    this.addReview = function(product) {
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  var gems = [
    {
      name: 'Quartz',
      price: 2,
      description: 'This is a big ass gem',
      canPurchase: true,
      soldOut: false,
      images: [
        {
          full: 'assets/img/quartz.jpg',
          thumb: 'assets/img/quartz-thumb.jpg'
        }
      ],
      reviews: [
        {
          stars: 5,
          body: "this gem is super heady bruh",
          author: "gd72@gmail.com"
        }
      ]
    },
    {
      name: 'Kyanite',
      price: 4.95,
      description: 'This one is blue',
      canPurchase: true,
      soldOut: false,
      images: [
        {
          full: 'assets/img/kyanite.jpg',
          thumb: 'assets/img/kyanite-thumb.jpg'
        }
      ]
    },
  ];
  
})();
