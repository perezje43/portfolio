var work = [];

var workHistory = [
  {
    company: 'Zipwhip, Inc',
    title:  'Accounts Receivable Manager',
    companyUrl: 'www.google.com',
    startDate: 'March 2015',
    endDate: 'April 2015',
    duties:
    '<li>Develop a strategy for reconciliation and delinquent accounts.</li>' +
    '<li>Gather new sales and generate monthly revenue to determine monthly commissions for Account Executives.</li>' +
    '<li>Review new contracts and cooperate with the Executive team to solidify work processes. </li>'
  },
  {
    company: 'Zulily, Inc',
    companyUrl: 'www.google.com',
    title:  'Accounts Payable',
    startDate: 'December 2014',
    endDate: 'March 2015',
    duties: '<li>Communicate with vendors and employees in the reconciliation process during the major Christmas season.</li>' +
    '<li>Understand expenditure cycle and participate in process improvement projects.</li>' +
    '<li>Utilize programs such as SAP, Tableau, and Microsoft Excel to efficiently process payables transactions.</li>'
  },
  {
    company: 'The Boeing Company',
    companyUrl: 'www.google.com',
    title:  'Design Engineer Intern',
    startDate: 'June 2011',
    endDate: 'September 2011',
    duties:
    '<li>Communicate and manage multiple tasks for WOWEC (Water Oxygen Waste Escape Cargo) Team.</li>' +
    '<li>Generate Value Stream and develop lean current work processes utilizing Excel.</li>' +
    '<li>Identify and present technical solutions for CARS (Corrective Action Reports).</li>'
  },
  {
    company: 'Starbucks Coffee Company',
    companyUrl: 'www.google.com',
    title:  'Barista',
    startDate: 'March 2014',
    endDate: 'December 2015',
    duties:
    '<li>Act with integrity, honesty and knowledge that drive the culture, values and mission of Starbucks.</li>' +
    '<li>Meet business policies and standards, including providing quality product and cash handling.</li>'
  }
];

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
