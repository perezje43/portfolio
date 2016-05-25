(function(module) {
  var homeController = {};

  homeController.index = function() {
    workView.populateHome();
    $('article').hide();
    $('.profile').fadeIn();
  };
  module.homeController = homeController;
})(window);
