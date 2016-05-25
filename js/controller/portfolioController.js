(function(module) {
  var portfolioController = {};

  portfolioController.index = function() {
    workView.populatePortfolio();
    $('article').hide();
    $('.portfolio-info').fadeIn();
  };
  module.portfolioController = portfolioController;
})(window);
