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
  var $newWork = $('.work-history').clone();

  $newWork.find('h1').text(this.company);
  $newWork.find('a').attr('href', this.companyUrl);
  $newWork.find('.work-title').text(this.title);
  $newWork.find('.start-date').text(this.startDate);
  $newWork.find('.end-date').text(this.endDate);
  $newWork.find('.work-duties').append(this.duties);

  $newWork.append('<br>');
  $newWork.removeClass('work-history');
  return $newWork;
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
    $('.about-me').show();
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
      // var filterValue = $(this).val();
      // $('article').each(function() {
      //   var currentArticle = $(this);
        // console.log(currentArticle);
    //     if (filterValue === currentArticle.attr()){
    //       currentArticle.fadeIn();
    //     }
    //   });
    // } else {
      // $('article').fadeIn();
    }
  });
};

$(document).ready(function() {
  work.populateFilters();
  work.handleJobFilter();
  populateAbout();
});
