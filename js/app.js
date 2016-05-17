function resumeJobs(ele) {
  for (key in ele) this[key] = ele[key];
}

resumeJobs.all = [];

resumeJobs.prototype.toHtml = function() {
  var $workTemplateScript = $('#resume-template').html();
  var workTemplate = Handlebars.compile($workTemplateScript);
  var compiledTemplate = workTemplate(this);
  return compiledTemplate;
};

// adds work history into an array
resumeJobs.loadAll = function(dataPassedIn) {
  dataPassedIn.forEach(function(ele) {
    resumeJobs.all.push(new resumeJobs(ele));
  });
};

resumeJobs.fetchAll = function () {
  if(localStorage.resumeData) {
    $.ajax({
      type: 'HEAD',
      url: 'data/resumeData.json',
      success: function (data, message, xhr) {
        var currentTag = xhr.getResponseHeader('eTag');
        if (currentTag === JSON.parse(localStorage.eTag)) {
          parsedLocal = JSON.parse(localStorage.resumeData);
          resumeJobs.loadAll(parsedLocal);
          workView.indexPage();
        }
      }
    });
  } else {
    renderFromJSON();
  }
};

var renderFromJSON = function() {
  $.getJSON('data/resumeData.json', function(data) {
    console.log('hello');
    resumeJobs.loadAll(data);
    localStorage.resumeData = JSON.stringify(data);
    workView.indexPage();
    $.ajax({
      type: 'GET',
      url: 'data/resume.json',
      success: function (data,message, xhr) {
        var eTag = xhr.getResponseHeader('eTag');
        localStorage.eTag = JSON.stringify(eTag);
      }
    });
  });
};

// var work = [];
//
// function addWorkHistory(ele) {
//   for (key in ele) this[key] = ele[key];
// }
//
// addWorkHistory.prototype.toHtml = function() {
//   var $workTemplateScript = $('#resume-template').html();
//   var workTemplate = Handlebars.compile($workTemplateScript);
//   var compiledTemplate = workTemplate(this);
//   return compiledTemplate;
// };
//
// // adds work history into an array
// workHistory.forEach(function(ele) {
//   work.push(new addWorkHistory(ele));
// });
//
// work.forEach(function(a) {
//   $('#work').append(a.toHtml());
// });
//
// var workView = {};
//
// workView.populateFilters = function() {
//   $('.resume').each(function() {
//     var val = $(this).find('.work-company').text();
//     var optionTag = '<option value="' + val + '">' + val + '</option>';
//     $('#work-filter').append(optionTag);
//   });
// };
//
// workView.handleJobFilter = function() {
//   $('#work-filter').on('change', function() {
//     if($(this).val()) {
//       $('#work section').hide();
//       var filterValue = $(this).val();
//       $("[data-work = '" + filterValue + "']").fadeIn();
//     } else {
//       $('#work section').fadeIn();
//     }
//   });
// };
//
// function populateHome() {
//   $('.navigation-options').on('click', '.home', function(e) {
//     e.preventDefault();
//     $('article').hide();
//     $('.profile').fadeIn();
//   });
// }
//
// function populateAbout() {
//   $('.navigation-options').on('click', '.about', function(e) {
//     e.preventDefault();
//     $('article').hide();
//     $('.about-me').fadeIn();
//   });
// }
//
// function populateResume() {
//   $('.navigation-options').on('click', '.resume-tab', function(e) {
//     e.preventDefault();
//     $('article').hide();
//     $('.work-history').fadeIn();
//     $('#work').fadeIn();
//   });
// }
//
// $(document).ready(function() {
//   populateHome();
//   populateAbout();
//   populateResume();
//   workView.populateFilters();
//   workView.handleJobFilter();
// });
