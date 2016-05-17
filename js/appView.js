var workView = {};

workView.handleJobFilter = function() {
  $('#work-filter').on('change', function() {
    if($(this).val()) {
      $('#work section').hide();
      var filterValue = $(this).val();
      $("[data-work = '" + filterValue + "']").fadeIn();
    } else {
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

function populateHome() {
  $('.navigation-options').on('click', '.home', function(e) {
    e.preventDefault();
    $('article').hide();
    $('.profile').fadeIn();
  });
}

function populateAbout() {
  $('.navigation-options').on('click', '.about', function(e) {
    e.preventDefault();
    $('article').hide();
    $('.about-me').fadeIn();
  });
}

function populateResume() {
  $('.navigation-options').on('click', '.resume-tab', function(e) {
    e.preventDefault();
    $('article').hide();
    $('.work-history').fadeIn();
    $('#work').fadeIn();
  });
}

$(document).ready(function() {
  populateHome();
  populateAbout();
  populateResume();
  workView.populateFilters();
  workView.handleJobFilter();
});
