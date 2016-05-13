var work = [];

function addWorkHistory(opts){
  this.company = opts.company;
  this.companyUrl = opts.companyUrl;
  this.title = opts.title;
  this.startDate = opts.startDate;
  this.endDate = opts.endDate;
  this.duties = opts.duties;
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

function populateAbout() {
  $('.navigation-options').on('click', '.about', function(e) {
    e.preventDefault();
    $('article').hide();
    $('.about-me').fadeIn();
    console.log('hello');
  });
}

function populateResume() {
  $('.navigation-options').on('click', '.resume', function(e) {
    e.preventDefault();
    $('article').hide();
    $('.work-history').fadeIn();
    $('#work').fadeIn();
  });
}

work.populateFilters = function() {
  $('article').each(function() {
    if(!$(this).hasClass('work-history')) {
      var val = $(this).find('.work-company').text();
      var optionTag = '<option value="' + val + '">' + val + '</option>';
      $('#work-filter').append(optionTag);
    }
  });
};

work.handleJobFilter = function() {
  $('#work-filter').on('change', function() {
    if($(this).val()) {
      $('article').hide();
      var filterValue = $(this).val();
      $("[data-work = '" + filterValue + "']").fadeIn();
    } else {
      $('article').fadeIn();
    }
  });
};

$(document).ready(function() {
  work.populateFilters();
  work.handleJobFilter();
  populateAbout();
  populateResume();
});
