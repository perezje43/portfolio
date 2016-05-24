(function(module) {
  var resumeController = {};

  resumeController.index = function() {
    resumeJobs.fetchAll();
    workView.populateResume();
  };
  module.resumeController = resumeController;
})(window);
