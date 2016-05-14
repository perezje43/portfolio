var work = [];

function addWorkHistory(ele) {
  for (key in ele) this[key] = ele[key];
}

addWorkHistory.prototype.toHtml = function() {
  var $workTemplateScript = $('#resume-template').html();
  var workTemplate = Handlebars.compile($workTemplateScript);
  var compiledTemplate = workTemplate(this);
  return compiledTemplate;
};

// adds work history into an array
workHistory.forEach(function(ele) {
  work.push(new addWorkHistory(ele));
});

work.forEach(function(a) {
  $('#work').append(a.toHtml());
});

var workView = {};

workView.populateFilters = function() {
  $('.resume').each(function() {
    var val = $(this).find('.work-company').text();
    var optionTag = '<option value="' + val + '">' + val + '</option>';
    $('#work-filter').append(optionTag);
  });
};

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

function populateAbout() {
  $('.navigation-options').on('click', '.about', function(e) {
    e.preventDefault();
    $('article').hide();
    $('.about-me').fadeIn();
    console.log('hello');
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
  populateAbout();
  populateResume();
  workView.populateFilters();
  workView.handleJobFilter();
});
