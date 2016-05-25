(function(module) {
  var resumeController = {};

  resumeController.index = function() {
    if( resumeJobs.all.length === 0) {
      resumeJobs.fetchAll();
      workView.indexPage();
      workView.populateResume();
      workView.populateFilters();
      workView.handleJobFilter();
      workView.initFilter();
    }
    $('article').hide();
    $('#resume-view').fadeIn();
  };
  module.resumeController = resumeController;
})(window);
