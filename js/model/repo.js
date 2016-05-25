(function(module) {
  var repos = {};
  repos.all = [];
  
  repos.requestRepos = function(callback) {
    $.get('/github/users/perezje43/repos' + '?per_page=15' + '&sort=updated').done(function(data) {
      repos.all = data;
    }).done(callback);
  };

  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);









(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    /* DONE: How would you like to fetch your repos? Someone say AJAX!?
       Don't forget to call the callback! */
    $.ajax({
      url: 'https://api.github.com/users/perezje43/repos' + '?per_page=10' + '&sort=updated',
      type: 'GET',
      headers: {'Authorization': 'token ' + gitHubToken},
      success: function(data, message, xhr) {
        repos.all = data;
        callback();
      }
    });
  };

  repos.with = function(attr) {
    /* DONE: This Model method filters the full repos collection based
        on a particular attribute. You could use this to filter all
        repos that have a non-zero `forks_count`, `stargazers_count`,
        or `watchers_count`. */
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
