(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    workView.populateAbout();
    $('article').hide();
    $('.about-me').fadeIn();
  };
  module.aboutController = aboutController;
})(window);
