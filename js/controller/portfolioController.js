(function(module) {
  var portfolioController = {};

  portfolioController.index = function() {
    workView.populatePortfolio();
    repos.requestRepos(repoView.index);
    $('article').hide();
    $('.portfolio-info').fadeIn();
  };
  module.portfolioController = portfolioController;
})(window);
