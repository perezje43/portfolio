(function (module) {
  function resumeJobs(ele) {
    for (keys in ele) this[keys] = ele[keys];
  }

  resumeJobs.all = [];

  resumeJobs.prototype.toHtml = function() {
    var $workTemplateScript = $('#resume-template').html();
    var workTemplate = Handlebars.compile($workTemplateScript);
    var compiledTemplate = workTemplate(this);
    return compiledTemplate;
  };

  // adds work history into an array
  resumeJobs.loadAll = function(dataForJob) {
    resumeJobs.all = dataForJob.map(function(objectInstanceInArray) {
      return new resumeJobs (objectInstanceInArray);
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
            workView.init();
          }
        }
      });
    } else {
      renderFromJSON();
    }
  };

  resumeJobs.allFields = function() {
    return resumeJobs.all.map(function(differentJobs) {
      return differentJobs.field;
    })
    .reduce(function(fields, field) {
      if(fields.indexOf(field) === -1) {
        fields.push(field);
      }
      return fields;
    }, []);
  };

  var renderFromJSON = function() {
    $.getJSON('data/resumeData.json', function(data, message, xhr) {
      resumeJobs.loadAll(data);
      localStorage.resumeData = JSON.stringify(data);
      var eTag = xhr.getResponseHeader('eTag');
      localStorage.eTag = JSON.stringify(eTag);
      workView.init();
    });
  };
  module.resumeJobs = resumeJobs;
})(window);
