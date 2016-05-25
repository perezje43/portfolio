(function(module) {
  var repoView = {};

  var render = Handlebars.compile($('#project-template').text());
  repoView.index = function() {
    $('.portfolio-info ul').append(
      repos.with('name').map(render)
    );
  };
  module.repoView = repoView;
})(window);
