(function (module) {
  var workView = {};

  workView.handleJobFilter = function() {
    $('#work-filter').on('change', function() {
      if($(this).val()) {
        $('.unique-field').hide();
        $('#work section').hide();
        var filterValue = $(this).val();
        $("[data-work = '" + filterValue + "']").fadeIn();
      } else {
        $('.unique-field').fadeIn();
        $('#work section').fadeIn();
      }
    });
  };

  workView.populateFilters = function() {
    $('.resume').each(function() {
      var val = $(this).find('.work-company').text();
      var optionTag = '<option value="' + val + '">' + val + '</option>';
      $('#work-filter').append(optionTag);
    });
  };

  workView.indexPage = function() {
    resumeJobs.all.forEach(function(a) {
      $('#work').append(a.toHtml());
    });
  };

  function populateTemplate(clickedTab, unhideArticle) {
    $('.navigation-options').on('click', clickedTab, function(e) {
      e.preventDefault();
      $('article').hide();
      $(unhideArticle).fadeIn();
    });
  }

  function populateHome() {
    populateTemplate('.home', '.profile');
  }

  function populateAbout() {
    populateTemplate('.about', '.about-me');
  }

  function populatePortfolio() {
    populateTemplate('.portfolio', '.portfolio-info');
  }

  function populateResume() {
    populateTemplate('.resume-tab', '#resume-view');
    $('.unique-field').fadeIn();
  }

  workView.initFilter = function() {
    var template = Handlebars.compile($('#field-template').html());
    resumeJobs.allFields().forEach(function(field) {
      $('.field-history').append(template(field));
    });
  };

  workView.init = function () {
    populateHome();
    populateAbout();
    populatePortfolio();
    populateResume();
    workView.indexPage();
    workView.populateFilters();
    workView.handleJobFilter();
    workView.initFilter();
  };
  module.workView = workView;
})(window);
