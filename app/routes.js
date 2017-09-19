var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})



// SETUP STUFF
router.use(function (req, res, next)
{
  res.locals.session = req.session;

  // Set up how many events there are
  if(req.session.eventsLiveBoolean == undefined) {
    req.session.eventsLiveBoolean = [false, false, false, false, false, false, false, false, false, false];
  }
  if(req.session.eventsDraftBoolean == undefined) {
    req.session.eventsDraftBoolean = [false, false, false, false, false, false, false, false, false, false];
  }
  if(req.session.eventsTemplatesBoolean == undefined) {
    req.session.eventsTemplatesBoolean = [false, false, false, false, false, false, false, false, false, false];
  }
  if(req.session.eventsPastBoolean == undefined) {
    req.session.eventsPastBoolean = [false, false, false, false, false, false, false, false, false, false];
  }
  if(req.session.eventsLive == undefined) {
    req.session.eventsLive = [];
  }
  if(req.session.eventsDraft == undefined) {
    req.session.eventsDraft = [];
  }
  if(req.session.eventsTemplates == undefined) {
    req.session.eventsTemplates = [];
  }
  if(req.session.eventsPast == undefined) {
    req.session.eventsPast = [];
  }

  // Making a change from summary
  if(req.session.changingFromSummary == undefined) {
    req.session.changingFromSummary = false;
  }


  // The current event being edited
  if(req.session.currentEvent == undefined) {
    req.session.currentEvent = 0;
  }

  if(req.session.currentEventShowing == undefined) {
    req.session.currentEventShowing = 0;
  }


  if(req.session.liveOrNot == undefined) {
  req.session.liveOrNot = false;

  //  THE SAVED PREVIOUS CUSTOM QUESTIONS FROM USERS
  if(req.session.previousQuestions == undefined) {
    req.session.previousQuestions = [];
    req.session.previousQuestionsTEMP = [];
  }

}


  // Setting up the store for the questiosna and answers
// 2D. one item per question.  Second demotion is Question, Answer type, Answer, Answer...Answer
  if(req.session.questionsData == undefined)
  {
    req.session.questionsData = [];
  }

  if(req.session.questionsExist == undefined) {
    req.session.questionsExist = [false, false, false, false, false];
  }

  // ATTENDEE PAGE ONWARDS BUTTON
  // Quantity of questions saved globally
  if(req.session.quantityOfQuestions == undefined) {
    req.session.quantityOfQuestions = 0;
  }

  //console.log("INITIAL CODE RUN ______________");
  req.session.regionName = "DIT Yorkshire and the Humber";

  if(req.session.trackingLinksNames == undefined)
  {
    req.session.trackingLinksNames = ['Email marketing','Twitter'];
  }

  if(req.session.trackingTotalViews == undefined)
  {
    req.session.trackingTotalViews = 0;
  }

  if(req.session.trackingViewsPercentages == undefined)
  {
    req.session.trackingViewsPercentages = [0,0,0,0,0,0,0,0,0,0];
  }

  if(req.session.trackingTotalReg == undefined)
  {
    req.session.trackingTotalReg = 0;
  }

  if(req.session.trackingLinksRegistrationPercentages == undefined)
  {
    req.session.trackingLinksRegistrationPercentages = [0,0,0,0,0,0,0,0,0,0];
  }

  if(req.session.ticketsRemaining == undefined)
  {
    req.session.ticketsRemaining = 0;
  }

  if(req.session.ticketsSoldPercentage == undefined)
  {
    req.session.ticketsSoldPercentage = 0;
  }




  if(req.session.data['reg-close-time'] == undefined)
  {
    req.session.data['reg-close-time'] = "";
  }

  if(req.session.data['reg-is-closed'] == undefined)
  {
    req.session.data['reg-is-closed'] = false;
  }

  if(req.session.data['organiser-name'] == undefined)
  {
    req.session.data['organiser-name'] = "East midlands";
  }

  if(req.session.data['sold-out-message'] == undefined)
  {
    req.session.data['sold-out-message'] = "This event is now full. Places may be freed up subject to cancellations - check back here for availability.";
  }





  next();

});


// SIGNING PAGE
router.get('/homepage-prelude', function (req, res)
{
  req.session.regionName = "DIT Yorkshire and the Humber";
  //console.log("the first event from data is " + req.session.eventsDraftBoolean[0]);
  console.log("event title is saved as HOMEPAGE LENGTH  " + req.session.eventsDraft.length);
  if(1 <  req.session.eventsDraft.length )
  {
    console.log("event title is saved as HOMEPAGE" + req.session.eventsDraft[0][0]);
  }

  res.redirect('account/index');
})










router.get('/scenario-1', function (req, res)
{


  res.redirect('/signin');
})

router.get('/scenario-2', function (req, res)
{
  // empty account
  //req.session.regionName = "DIT Yorkshire and the Humber";

  req.session.ticketsSoldPercentage = 0;
  req.session.ticketsRemaining = 20;

  req.session.trackingTotalViews = 0;
  req.session.trackingViewsPercentages[0] = 0;
  req.session.trackingViewsPercentages[1] = 0;
  req.session.trackingViewsPercentages[2] = 0;
  req.session.trackingViewsPercentages[3] = 0;

  req.session.trackingTotalReg = 0;
  req.session.trackingLinksRegistrationPercentages[0] = 0;
  req.session.trackingLinksRegistrationPercentages[1] = 0;
  req.session.trackingLinksRegistrationPercentages[2] = 0;
  req.session.trackingLinksRegistrationPercentages[3] = 0;


  var eventcCount = 16;

  req.session.eventsLiveBoolean[eventcCount];
  for(var x=0; x< eventcCount; x++)
  {
    req.session.eventsLive[x] = ["empty"];
    req.session.eventsLiveBoolean[x] = true;
  }


  req.session.eventsLive[0][0] = "Six Steps to E-Commerce Success";
  req.session.eventsLive[1][0] = "Managing Agents & Distributors";
  req.session.eventsLive[2][0] = "International Food and Drink Network";
  req.session.eventsLive[3][0] = "Low Carbon Vehicles 2017";
  req.session.eventsLive[4][0] = "Coal Mongolia 2017";
  req.session.eventsLive[5][0] = "Researching Overseas Markets Masterclass";
  req.session.eventsLive[6][0] = "International Market Research";
  req.session.eventsLive[7][0] = "Grow your Business with Social Media";
  req.session.eventsLive[8][0] = "How to Grow your Engineering Business Internationally";
  req.session.eventsLive[9][0] = "Exporter Bootcamp";
  req.session.eventsLive[10][0] = "DIT Masterclass: Food Labelling Workshop";
  req.session.eventsLive[11][0] = "Exporting mining equipment and services to the Middle East";
  req.session.eventsLive[12][0] = "Meet the Rail Experts: Austria and South Africa";
  req.session.eventsLive[13][0] = "Digital Trade Advice Clinic";
  req.session.eventsLive[14][0] = "Indirect Tax & International Trade - Retail and Consumer Products Exporting";
  req.session.eventsLive[15][0] = "Trade Mission to Ireland - Smart Cities";

  req.session.eventsLive[0][3] = "18";
  req.session.eventsLive[1][3] = "23";
  req.session.eventsLive[2][3] = "25";
  req.session.eventsLive[3][3] = "29";
  req.session.eventsLive[4][3] = "2";
  req.session.eventsLive[5][3] = "7";
  req.session.eventsLive[6][3] = "10";
  req.session.eventsLive[7][3] = "11";
  req.session.eventsLive[8][3] = "15";
  req.session.eventsLive[9][3] = "20";
  req.session.eventsLive[10][3] = "22";
  req.session.eventsLive[11][3] = "25";
  req.session.eventsLive[12][3] = "28";
  req.session.eventsLive[13][3] = "4";
  req.session.eventsLive[14][3] = "10";
  req.session.eventsLive[15][3] = "12";

  req.session.eventsLive[0][5] = "September";
  req.session.eventsLive[1][5] = "September";
  req.session.eventsLive[2][5] = "September";
  req.session.eventsLive[3][5] = "September";
  req.session.eventsLive[4][5] = "October";
  req.session.eventsLive[5][5] = "October";
  req.session.eventsLive[6][5] = "October";
  req.session.eventsLive[7][5] = "October";
  req.session.eventsLive[8][5] = "October";
  req.session.eventsLive[9][5] = "October";
  req.session.eventsLive[10][5] = "October";
  req.session.eventsLive[11][5] = "October";
  req.session.eventsLive[12][5] = "October";
  req.session.eventsLive[13][5] = "November";
  req.session.eventsLive[14][5] = "November";
  req.session.eventsLive[15][5] = "November";


  req.session.eventsLive[0][6] = "2017";
  req.session.eventsLive[1][6] = "2017";
  req.session.eventsLive[2][6] = "2017";
  req.session.eventsLive[3][6] = "2017";
  req.session.eventsLive[4][6] = "2017";
  req.session.eventsLive[5][6] = "2017";
  req.session.eventsLive[6][6] = "2017";
  req.session.eventsLive[7][6] = "2017";
  req.session.eventsLive[8][6] = "2017";
  req.session.eventsLive[9][6] = "2017";
  req.session.eventsLive[10][6] = "2017";
  req.session.eventsLive[11][6] = "2017";
  req.session.eventsLive[12][6] = "2017";
  req.session.eventsLive[13][6] = "2017";
  req.session.eventsLive[14][6] = "2017";
  req.session.eventsLive[15][6] = "2017";


  req.session.eventsLive[0][8] = 16;
  req.session.eventsLive[1][8] = 24;
  req.session.eventsLive[2][8] = 50;
  req.session.eventsLive[3][8] = 12;
  req.session.eventsLive[4][8] = 14;
  req.session.eventsLive[5][8] = 14;
  req.session.eventsLive[6][8] = 18;
  req.session.eventsLive[7][8] = 16;
  req.session.eventsLive[8][8] = 12;
  req.session.eventsLive[9][8] = 20;
  req.session.eventsLive[10][8] = 12;
  req.session.eventsLive[11][8] = 20;
  req.session.eventsLive[12][8] = 14;
  req.session.eventsLive[13][8] = 6;
  req.session.eventsLive[14][8] = 18;
  req.session.eventsLive[15][8] = 10;


  req.session.eventsLive[0][20] = 16;
  req.session.eventsLive[1][20] = 8;
  req.session.eventsLive[2][20] = 49;
  req.session.eventsLive[3][20] = 2;
  req.session.eventsLive[4][20] = 7;
  req.session.eventsLive[5][20] = 2;
  req.session.eventsLive[6][20] = 0;
  req.session.eventsLive[7][20] = 3;
  req.session.eventsLive[8][20] = 12;
  req.session.eventsLive[9][20] = 10;
  req.session.eventsLive[10][20] = 0;
  req.session.eventsLive[11][20] = 0;
  req.session.eventsLive[12][20] = 2;
  req.session.eventsLive[13][20] = 4;
  req.session.eventsLive[14][20] = 3;
  req.session.eventsLive[15][20] = 5;

  req.session.eventsLive[0][19] = false;
  req.session.eventsLive[1][19] = false;
  req.session.eventsLive[2][19] = false;
  req.session.eventsLive[3][19] = false;
  req.session.eventsLive[4][19] = false;
  req.session.eventsLive[5][19] = false;
  req.session.eventsLive[6][19] = false;
  req.session.eventsLive[7][19] = false;
  req.session.eventsLive[8][19] = false;
  req.session.eventsLive[9][19] = false;
  req.session.eventsLive[10][19] = false;
  req.session.eventsLive[11][19] = false;
  req.session.eventsLive[12][19] = false;
  req.session.eventsLive[13][19] = false;
  req.session.eventsLive[14][19] = false;
  req.session.eventsLive[15][19] = false;









  res.redirect('/signin');
})

router.get('/scenario-3', function (req, res)
{
  // empty account
  //req.session.regionName = "DIT Yorkshire and the Humber";
  req.session.ticketsSoldPercentage = 10;
  req.session.ticketsRemaining = 18;

  req.session.trackingTotalViews = 65;
  req.session.trackingViewsPercentages[0] = 62;
  req.session.trackingViewsPercentages[1] = 23;
  req.session.trackingViewsPercentages[2] = 6;
  req.session.trackingViewsPercentages[3] = 9;

  req.session.trackingTotalReg = 2;
  req.session.trackingLinksRegistrationPercentages[0] = 100;
  req.session.trackingLinksRegistrationPercentages[1] = 0;
  req.session.trackingLinksRegistrationPercentages[2] = 0;
  req.session.trackingLinksRegistrationPercentages[3] = 0;



  var eventcCount = 16;

  req.session.eventsLiveBoolean[eventcCount];
  for(var x=0; x< eventcCount; x++)
  {
    req.session.eventsLive[x] = ["empty"];
    req.session.eventsLiveBoolean[x] = true;
  }


  req.session.eventsLive[0][0] = "Low Carbon Vehicles 2017";
  req.session.eventsLive[1][0] = "Coal Mongolia 2017";
  req.session.eventsLive[2][0] = "Researching Overseas Markets Masterclass";
  req.session.eventsLive[3][0] = "International Market Research";
  req.session.eventsLive[4][0] = "Grow your Business with Social Media";
  req.session.eventsLive[5][0] = "How to Grow your Engineering Business Internationally";
  req.session.eventsLive[6][0] = "Exporter Bootcamp";
  req.session.eventsLive[7][0] = "DIT Masterclass: Food Labelling Workshop";
  req.session.eventsLive[8][0] = "Exporting mining equipment and services to the Middle East";
  req.session.eventsLive[9][0] = "Meet the Rail Experts: Austria and South Africa";
  req.session.eventsLive[10][0] = "Digital Trade Advice Clinic";
  req.session.eventsLive[11][0] = "Indirect Tax & International Trade - Retail and Consumer Products Exporting";
  req.session.eventsLive[12][0] = "Trade Mission to Ireland - Smart Cities";
  req.session.eventsLive[13][0] = "Six Steps to E-Commerce Success";
  req.session.eventsLive[14][0] = "Managing Agents & Distributors";
  req.session.eventsLive[15][0] = "International Food and Drink Network";



  req.session.eventsLive[0][3] = "29";
  req.session.eventsLive[1][3] = "2";
  req.session.eventsLive[2][3] = "7";
  req.session.eventsLive[3][3] = "10";
  req.session.eventsLive[4][3] = "11";
  req.session.eventsLive[5][3] = "15";
  req.session.eventsLive[6][3] = "20";
  req.session.eventsLive[7][3] = "22";
  req.session.eventsLive[8][3] = "25";
  req.session.eventsLive[9][3] = "28";
  req.session.eventsLive[10][3] = "4";
  req.session.eventsLive[11][3] = "10";
  req.session.eventsLive[12][3] = "12";
  req.session.eventsLive[13][3] = "18";
  req.session.eventsLive[14][3] = "23";
  req.session.eventsLive[15][3] = "25";



  req.session.eventsLive[0][5] = "September";
  req.session.eventsLive[1][5] = "October";
  req.session.eventsLive[2][5] = "October";
  req.session.eventsLive[3][5] = "October";
  req.session.eventsLive[4][5] = "October";
  req.session.eventsLive[5][5] = "October";
  req.session.eventsLive[6][5] = "October";
  req.session.eventsLive[7][5] = "October";
  req.session.eventsLive[8][5] = "October";
  req.session.eventsLive[9][5] = "October";
  req.session.eventsLive[10][5] = "November";
  req.session.eventsLive[11][5] = "November";
  req.session.eventsLive[12][5] = "November";
  req.session.eventsLive[13][5] = "November";
  req.session.eventsLive[14][5] = "November";
  req.session.eventsLive[15][5] = "November";


  req.session.eventsLive[0][6] = "2017";
  req.session.eventsLive[1][6] = "2017";
  req.session.eventsLive[2][6] = "2017";
  req.session.eventsLive[3][6] = "2017";
  req.session.eventsLive[4][6] = "2017";
  req.session.eventsLive[5][6] = "2017";
  req.session.eventsLive[6][6] = "2017";
  req.session.eventsLive[7][6] = "2017";
  req.session.eventsLive[8][6] = "2017";
  req.session.eventsLive[9][6] = "2017";
  req.session.eventsLive[10][6] = "2017";
  req.session.eventsLive[11][6] = "2017";
  req.session.eventsLive[12][6] = "2017";
  req.session.eventsLive[13][6] = "2017";
  req.session.eventsLive[14][6] = "2017";
  req.session.eventsLive[15][6] = "2017";


  req.session.eventsLive[0][8] = 12;
  req.session.eventsLive[1][8] = 14;
  req.session.eventsLive[2][8] = 14;
  req.session.eventsLive[3][8] = 18;
  req.session.eventsLive[4][8] = 16;
  req.session.eventsLive[5][8] = 12;
  req.session.eventsLive[6][8] = 20;
  req.session.eventsLive[7][8] = 12;
  req.session.eventsLive[8][8] = 20;
  req.session.eventsLive[9][8] = 14;
  req.session.eventsLive[10][8] = 6;
  req.session.eventsLive[11][8] = 18;
  req.session.eventsLive[12][8] = 10;
  req.session.eventsLive[13][8] = 16;
  req.session.eventsLive[14][8] = 24;
  req.session.eventsLive[15][8] = 50;


  req.session.eventsLive[0][20] = 8;
  req.session.eventsLive[1][20] = 13;
  req.session.eventsLive[2][20] = 8;
  req.session.eventsLive[3][20] = 3;
  req.session.eventsLive[4][20] = 6;
  req.session.eventsLive[5][20] = 12;
  req.session.eventsLive[6][20] = 16;
  req.session.eventsLive[7][20] = 3;
  req.session.eventsLive[8][20] = 2;
  req.session.eventsLive[9][20] = 7;
  req.session.eventsLive[10][20] = 4;
  req.session.eventsLive[11][20] = 9;
  req.session.eventsLive[12][20] = 5;
  req.session.eventsLive[13][20] = 0;
  req.session.eventsLive[14][20] = 2;
  req.session.eventsLive[15][20] = 5;


  req.session.eventsLive[0][19] = false;
  req.session.eventsLive[1][19] = false;
  req.session.eventsLive[2][19] = false;
  req.session.eventsLive[3][19] = false;
  req.session.eventsLive[4][19] = false;
  req.session.eventsLive[5][19] = false;
  req.session.eventsLive[6][19] = false;
  req.session.eventsLive[7][19] = false;
  req.session.eventsLive[8][19] = false;
  req.session.eventsLive[9][19] = false;
  req.session.eventsLive[10][19] = false;
  req.session.eventsLive[11][19] = false;
  req.session.eventsLive[12][19] = false;
  req.session.eventsLive[13][19] = false;
  req.session.eventsLive[14][19] = false;
  req.session.eventsLive[15][19] = false;



  res.redirect('/signin');
})

router.get('/scenario-4', function (req, res)
{
  // empty account
  //req.session.regionName = "DIT Yorkshire and the Humber";
  req.session.ticketsSoldPercentage = 50;
  req.session.ticketsRemaining = 10;


  req.session.trackingTotalViews = 207;
  req.session.trackingViewsPercentages[0] = 55;
  req.session.trackingViewsPercentages[1] = 19;
  req.session.trackingViewsPercentages[2] = 14;
  req.session.trackingViewsPercentages[3] = 12;

  req.session.trackingTotalReg = 10;
  req.session.trackingLinksRegistrationPercentages[0] = 40;
  req.session.trackingLinksRegistrationPercentages[1] = 0;
  req.session.trackingLinksRegistrationPercentages[2] = 30;
  req.session.trackingLinksRegistrationPercentages[3] = 30;


  var eventcCount = 16;

  req.session.eventsLiveBoolean[eventcCount];
  for(var x=0; x< eventcCount; x++)
  {
    req.session.eventsLive[x] = ["empty"];
    req.session.eventsLiveBoolean[x] = true;
  }


  req.session.eventsLive[0][0] = "Researching Overseas Markets Masterclass";
  req.session.eventsLive[1][0] = "International Market Research";
  req.session.eventsLive[2][0] = "Grow your Business with Social Media";
  req.session.eventsLive[3][0] = "How to Grow your Engineering Business Internationally";
  req.session.eventsLive[4][0] = "Exporter Bootcamp";
  req.session.eventsLive[5][0] = "DIT Masterclass: Food Labelling Workshop";
  req.session.eventsLive[6][0] = "Exporting mining equipment and services to the Middle East";
  req.session.eventsLive[7][0] = "Meet the Rail Experts: Austria and South Africa";
  req.session.eventsLive[8][0] = "Digital Trade Advice Clinic";
  req.session.eventsLive[9][0] = "Indirect Tax & International Trade - Retail and Consumer Products Exporting";
  req.session.eventsLive[10][0] = "Trade Mission to Ireland - Smart Cities";
  req.session.eventsLive[1][0] = "Six Steps to E-Commerce Success";
  req.session.eventsLive[12][0] = "Managing Agents & Distributors";
  req.session.eventsLive[13][0] = "International Food and Drink Network";
  req.session.eventsLive[14][0] = "Low Carbon Vehicles 2017";
  req.session.eventsLive[15][0] = "Coal Mongolia 2017";



  req.session.eventsLive[0][3] = "7";
  req.session.eventsLive[1][3] = "10";
  req.session.eventsLive[2][3] = "11";
  req.session.eventsLive[3][3] = "15";
  req.session.eventsLive[4][3] = "20";
  req.session.eventsLive[5][3] = "22";
  req.session.eventsLive[6][3] = "25";
  req.session.eventsLive[7][3] = "28";
  req.session.eventsLive[8][3] = "4";
  req.session.eventsLive[9][3] = "10";
  req.session.eventsLive[10][3] = "12";
  req.session.eventsLive[11][3] = "18";
  req.session.eventsLive[12][3] = "23";
  req.session.eventsLive[13][3] = "25";
  req.session.eventsLive[14][3] = "29";
  req.session.eventsLive[15][3] = "2";



  req.session.eventsLive[0][5] = "October";
  req.session.eventsLive[1][5] = "October";
  req.session.eventsLive[2][5] = "October";
  req.session.eventsLive[3][5] = "October";
  req.session.eventsLive[4][5] = "October";
  req.session.eventsLive[5][5] = "October";
  req.session.eventsLive[6][5] = "October";
  req.session.eventsLive[7][5] = "October";
  req.session.eventsLive[8][5] = "November";
  req.session.eventsLive[9][5] = "November";
  req.session.eventsLive[10][5] = "November";
  req.session.eventsLive[11][5] = "November";
  req.session.eventsLive[12][5] = "November";
  req.session.eventsLive[13][5] = "November";
  req.session.eventsLive[14][5] = "November";
  req.session.eventsLive[15][5] = "December";


  req.session.eventsLive[0][6] = "2017";
  req.session.eventsLive[1][6] = "2017";
  req.session.eventsLive[2][6] = "2017";
  req.session.eventsLive[3][6] = "2017";
  req.session.eventsLive[4][6] = "2017";
  req.session.eventsLive[5][6] = "2017";
  req.session.eventsLive[6][6] = "2017";
  req.session.eventsLive[7][6] = "2017";
  req.session.eventsLive[8][6] = "2017";
  req.session.eventsLive[9][6] = "2017";
  req.session.eventsLive[10][6] = "2017";
  req.session.eventsLive[11][6] = "2017";
  req.session.eventsLive[12][6] = "2017";
  req.session.eventsLive[13][6] = "2017";
  req.session.eventsLive[14][6] = "2017";
  req.session.eventsLive[15][6] = "2017";



  req.session.eventsLive[0][8] = 14;
  req.session.eventsLive[1][8] = 18;
  req.session.eventsLive[2][8] = 16;
  req.session.eventsLive[3][8] = 12;
  req.session.eventsLive[4][8] = 20;
  req.session.eventsLive[5][8] = 12;
  req.session.eventsLive[6][8] = 20;
  req.session.eventsLive[7][8] = 14;
  req.session.eventsLive[8][8] = 6;
  req.session.eventsLive[9][8] = 18;
  req.session.eventsLive[10][8] = 10;
  req.session.eventsLive[11][8] = 16;
  req.session.eventsLive[12][8] = 24;
  req.session.eventsLive[13][8] = 50;
  req.session.eventsLive[14][8] = 12;
  req.session.eventsLive[15][8] = 14;


  req.session.eventsLive[0][20] = 14;
  req.session.eventsLive[1][20] = 16;
  req.session.eventsLive[2][20] = 15;
  req.session.eventsLive[3][20] = 12;
  req.session.eventsLive[4][20] = 17;
  req.session.eventsLive[5][20] = 5;
  req.session.eventsLive[6][20] = 10;
  req.session.eventsLive[7][20] = 8;
  req.session.eventsLive[8][20] = 6;
  req.session.eventsLive[9][20] = 9;
  req.session.eventsLive[10][20] = 8;
  req.session.eventsLive[11][20] = 9;
  req.session.eventsLive[12][20] = 10;
  req.session.eventsLive[13][20] = 18;
  req.session.eventsLive[14][20] = 1;
  req.session.eventsLive[15][20] = 0;


  req.session.eventsLive[0][19] = false;
  req.session.eventsLive[1][19] = false;
  req.session.eventsLive[2][19] = false;
  req.session.eventsLive[3][19] = false;
  req.session.eventsLive[4][19] = false;
  req.session.eventsLive[5][19] = false;
  req.session.eventsLive[6][19] = false;
  req.session.eventsLive[7][19] = false;
  req.session.eventsLive[8][19] = false;
  req.session.eventsLive[9][19] = false;
  req.session.eventsLive[10][19] = false;
  req.session.eventsLive[11][19] = false;
  req.session.eventsLive[12][19] = false;
  req.session.eventsLive[13][19] = false;
  req.session.eventsLive[14][19] = false;
  req.session.eventsLive[15][19] = false;



  res.redirect('/signin');
})

router.get('/scenario-5', function (req, res)
{
  // empty account
  //req.session.regionName = "DIT Yorkshire and the Humber";
  req.session.ticketsSoldPercentage = 85;
  req.session.ticketsRemaining = 3;

  req.session.trackingTotalViews = 364;
  req.session.trackingViewsPercentages[0] = 41;
  req.session.trackingViewsPercentages[1] = 13;
  req.session.trackingViewsPercentages[2] = 24;
  req.session.trackingViewsPercentages[3] = 22;

  req.session.trackingTotalReg = 17;
  req.session.trackingLinksRegistrationPercentages[0] = 29;
  req.session.trackingLinksRegistrationPercentages[1] = 6;
  req.session.trackingLinksRegistrationPercentages[2] = 35;
  req.session.trackingLinksRegistrationPercentages[3] = 29;


  var eventcCount = 16;

  req.session.eventsLiveBoolean[eventcCount];
  for(var x=0; x< eventcCount; x++)
  {
    req.session.eventsLive[x] = ["empty"];
    req.session.eventsLiveBoolean[x] = true;
  }


  req.session.eventsLive[0][0] = "Grow your Business with Social Media";
  req.session.eventsLive[1][0] = "How to Grow your Engineering Business Internationally";
  req.session.eventsLive[2][0] = "Exporter Bootcamp";
  req.session.eventsLive[3][0] = "DIT Masterclass: Food Labelling Workshop";
  req.session.eventsLive[4][0] = "Exporting mining equipment and services to the Middle East";
  req.session.eventsLive[5][0] = "Meet the Rail Experts: Austria and South Africa";
  req.session.eventsLive[6][0] = "Digital Trade Advice Clinic";
  req.session.eventsLive[7][0] = "Indirect Tax & International Trade - Retail and Consumer Products Exporting";
  req.session.eventsLive[8][0] = "Trade Mission to Ireland - Smart Cities";
  req.session.eventsLive[9][0] = "Six Steps to E-Commerce Success";
  req.session.eventsLive[10][0] = "Managing Agents & Distributors";
  req.session.eventsLive[11][0] = "International Food and Drink Network";
  req.session.eventsLive[12][0] = "Low Carbon Vehicles 2017";
  req.session.eventsLive[13][0] = "Coal Mongolia 2017";
  req.session.eventsLive[14][0] = "Researching Overseas Markets Masterclass";
  req.session.eventsLive[15][0] = "International Market Research";



  req.session.eventsLive[0][3] = "11";
  req.session.eventsLive[1][3] = "15";
  req.session.eventsLive[2][3] = "20";
  req.session.eventsLive[3][3] = "22";
  req.session.eventsLive[4][3] = "25";
  req.session.eventsLive[5][3] = "28";
  req.session.eventsLive[6][3] = "4";
  req.session.eventsLive[7][3] = "10";
  req.session.eventsLive[8][3] = "12";
  req.session.eventsLive[9][3] = "18";
  req.session.eventsLive[10][3] = "23";
  req.session.eventsLive[11][3] = "25";
  req.session.eventsLive[12][3] = "29";
  req.session.eventsLive[13][3] = "2";
  req.session.eventsLive[14][3] = "7";
  req.session.eventsLive[15][3] = "10";




  req.session.eventsLive[0][5] = "October";
  req.session.eventsLive[1][5] = "October";
  req.session.eventsLive[2][5] = "October";
  req.session.eventsLive[3][5] = "October";
  req.session.eventsLive[4][5] = "October";
  req.session.eventsLive[5][5] = "October";
  req.session.eventsLive[6][5] = "November";
  req.session.eventsLive[7][5] = "November";
  req.session.eventsLive[8][5] = "November";
  req.session.eventsLive[9][5] = "November";
  req.session.eventsLive[10][5] = "November";
  req.session.eventsLive[11][5] = "November";
  req.session.eventsLive[12][5] = "November";
  req.session.eventsLive[13][5] = "December";
  req.session.eventsLive[14][5] = "December";
  req.session.eventsLive[15][5] = "December";


  req.session.eventsLive[0][6] = "2017";
  req.session.eventsLive[1][6] = "2017";
  req.session.eventsLive[2][6] = "2017";
  req.session.eventsLive[3][6] = "2017";
  req.session.eventsLive[4][6] = "2017";
  req.session.eventsLive[5][6] = "2017";
  req.session.eventsLive[6][6] = "2017";
  req.session.eventsLive[7][6] = "2017";
  req.session.eventsLive[8][6] = "2017";
  req.session.eventsLive[9][6] = "2017";
  req.session.eventsLive[10][6] = "2017";
  req.session.eventsLive[11][6] = "2017";
  req.session.eventsLive[12][6] = "2017";
  req.session.eventsLive[13][6] = "2017";
  req.session.eventsLive[14][6] = "2017";
  req.session.eventsLive[15][6] = "2017";


  req.session.eventsLive[0][8] = 16;
  req.session.eventsLive[1][8] = 12;
  req.session.eventsLive[2][8] = 20;
  req.session.eventsLive[3][8] = 12;
  req.session.eventsLive[4][8] = 20;
  req.session.eventsLive[5][8] = 14;
  req.session.eventsLive[6][8] = 6;
  req.session.eventsLive[7][8] = 18;
  req.session.eventsLive[8][8] = 10;
  req.session.eventsLive[9][8] = 16;
  req.session.eventsLive[10][8] = 24;
  req.session.eventsLive[11][8] = 50;
  req.session.eventsLive[12][8] = 12;
  req.session.eventsLive[13][8] = 14;
  req.session.eventsLive[14][8] = 14;
  req.session.eventsLive[15][8] = 18;


  req.session.eventsLive[0][20] = 16;
  req.session.eventsLive[1][20] = 12;
  req.session.eventsLive[2][20] = 17;
  req.session.eventsLive[3][20] = 5;
  req.session.eventsLive[4][20] = 17;
  req.session.eventsLive[5][20] = 8;
  req.session.eventsLive[6][20] = 6;
  req.session.eventsLive[7][20] = 9;
  req.session.eventsLive[8][20] = 8;
  req.session.eventsLive[9][20] = 9;
  req.session.eventsLive[10][20] = 16;
  req.session.eventsLive[11][20] = 30;
  req.session.eventsLive[12][20] = 12;
  req.session.eventsLive[13][20] = 14;
  req.session.eventsLive[14][20] = 14;
  req.session.eventsLive[15][20] = 0;


  req.session.eventsLive[0][19] = false;
  req.session.eventsLive[1][19] = false;
  req.session.eventsLive[2][19] = false;
  req.session.eventsLive[3][19] = false;
  req.session.eventsLive[4][19] = false;
  req.session.eventsLive[5][19] = false;
  req.session.eventsLive[6][19] = false;
  req.session.eventsLive[7][19] = false;
  req.session.eventsLive[8][19] = false;
  req.session.eventsLive[9][19] = false;
  req.session.eventsLive[10][19] = false;
  req.session.eventsLive[11][19] = false;
  req.session.eventsLive[12][19] = false;
  req.session.eventsLive[13][19] = false;
  req.session.eventsLive[14][19] = false;
  req.session.eventsLive[15][19] = false;

  res.redirect('/signin');
})
















router.get('/scenario-previous-questions', function (req, res)
{
  req.session.previousQuestions = [['Do you have an ITA?', 'select-one', 'yes', 'no']];
  // empty account
  res.redirect('/signin');
})




// CREATE EVENT SETUP
// VENUE PAGE ONWARDS BUTTON
router.get('/create-event/new', function (req, res)
{
  req.session.data['event-title'] = undefined;
  req.session.data['start-hours'] = undefined;
  req.session.data['start-minutes'] = undefined;
  req.session.data['finish-hours'] = undefined;
  req.session.data['finish-minutes'] = undefined;
  req.session.data['event-start-time'] = undefined;
  req.session.data['event-finish-time'] = undefined;
  req.session.data['event-day'] = undefined;
  req.session.data['event-month'] = undefined;
  req.session.data['event-month-name'] = undefined;
  req.session.data['event-year'] = undefined;
  req.session.data['full-address-holder'] = undefined;
  req.session.data['attendee-quantity'] = undefined;
  req.session.data['sold-out-message'] = undefined;
  req.session.data['event-description'] = undefined;
  req.session.questionsExist = undefined;
  req.session.questionsData = undefined;

  req.session.data['question'] = undefined;
  req.session.data['radio-additional-questions-answers-type'] = undefined;
  for(var x=1; x<11; x++)
  {
    req.session.data['answer-'+x] = "";
  }

  res.redirect('/create-event/');
})




// Clear current event data
router.get('/clear-current-event-data', function (req, res)
{
  req.session.data['event-title'] = undefined;
  req.session.data['start-hours'] = undefined;
  req.session.data['start-minutes'] = undefined;
  req.session.data['finish-hours'] = undefined;
  req.session.data['finish-minutes'] = undefined;
  req.session.data['event-start-time'] = undefined;
  req.session.data['event-finish-time'] = undefined;
  req.session.data['event-day'] = undefined;
  req.session.data['event-month'] = undefined;
  req.session.data['event-month-name'] = undefined;
  req.session.data['event-year'] = undefined;
  req.session.data['full-address-holder'] = undefined;
  req.session.data['attendee-quantity'] = undefined;
  req.session.data['sold-out-message'] = undefined;
  req.session.data['event-description'] = undefined;
  req.session.questionsExist = undefined;
  req.session.questionsData = undefined;

  req.session.data['question'] = undefined;
  req.session.data['radio-additional-questions-answers-type'] = undefined;
  for(var x=1; x<11; x++)
  {
    req.session.data['answer-'+x] = "";
  }

  console.log("STUFF RAN FINE");

  res.redirect('/create-event/summary');

})








// DESCRIPTION PAGE ONWARDS BUTTON
router.get('/create-event/title-onwards', function (req, res)
{
  var errorMissingTitle = false;
  var errorMissingSector = false;
  var errorMissingSectorEntry = false;

  var sectorsSelected = [37];

  for (var i=0; i<=37; i++)
  {
    sectorsSelected[i] = false;
  }



  var sectorNo = false;
  var sectorYes = false;

  var errorMissingExperience = false;
  var experienceNewSelected = false;
  var experienceOldSelected = false;
  var experienceAllSelected = false;

  var errorTargetAudienceTextEmpty = false;



  // EVENT TITLE
  if(req.session.data['event-title'] === "")
  {
    errorMissingTitle = true;
  }

  console.log("sector -------------- " + req.session.data['radio-sector']);
  console.log("sector box -------------- " + req.session.data['sector-box']);




  // RADIO SECTOR
  if(req.session.data['radio-sector'] == undefined)
  {
    errorMissingSector = true;

  }
  else if(req.session.data['radio-sector'] == "yes")
  {
    // CHECKBOX SELECTOR

    sectorYes = true;

    req.session.data['sectors'] = "";

    // go through all the sectors and record if they are checked
    for (var i=1; i<=37; i++)
    {
      if(req.session.data['sectors' + i] != undefined)
      {
        sectorsSelected[i] = true;

        //console.log("\n the value of the radio box is -- " + req.session.data['sectors' + i] + "\n");
        req.session.data['sectors'] = req.session.data['sectors'] + req.session.data['sectors' + i] + "\n";
      }
    }

    // Check if no sectors were selected
    if(req.session.data['sectors'] == "")
    {
      errorMissingSectorEntry = true;
    }

    console.log("\n the SELECTED SECTORS ARE  -- " + req.session.data['sectors'] + "\n");

  }
  else if(req.session.data['radio-sector'] == "no")
  {
    req.session.data['sectors'] = "Relevant to all sectors";
    sectorNo = true;
  }



  //  ELIGIBILITY CRITERIA
  if(req.session.data['summary-target-audience'] === "")
  {
    errorTargetAudienceTextEmpty = true;
  }








  // EXPERIENCE
  req.session.data['audience-experience'] = "";
  if(req.session.data['radio-audience-experience'] == undefined)
  {
    errorMissingExperience = true;
    console.log("there is no experience selected");
  }
  else if(req.session.data['radio-audience-experience'] == "new")
  {
    req.session.data['audience-experience'] = "New to export";
    experienceNewSelected = true;
  }
  else if(req.session.data['radio-audience-experience'] == "experienced")
  {
    req.session.data['audience-experience'] = "Experienced exporters";
    experienceOldSelected = true;
  }
  else if(req.session.data['radio-audience-experience'] == "open")
  {
    req.session.data['audience-experience'] = "Open to all";
    experienceAllSelected = true;
  }





  // ERRORS OR PROCEED
  if((errorMissingTitle || errorMissingSector || errorMissingSectorEntry || errorMissingExperience || errorTargetAudienceTextEmpty) == false)
  {
    if(req.session.changingFromSummary == true)
    {
      res.redirect('/create-event/summary-prelude');
    }
    else
    {
      res.redirect('/create-event/description');
    }
  }
  else
  {
    res.render('create-event/title',
        {
          'errorsExist': true,

          'errorMissingTitle': errorMissingTitle,

          'errorMissingSector': errorMissingSector,
          'sectorIsNo': sectorNo,
          'sectorIsYes': sectorYes,
          'errorMissingSectorBox': errorMissingSectorEntry,

          'sector1Selected': sectorsSelected[1],
          'sector2Selected': sectorsSelected[2],
          'sector3Selected': sectorsSelected[3],
          'sector4Selected': sectorsSelected[4],
          'sector5Selected': sectorsSelected[5],
          'sector6Selected': sectorsSelected[6],
          'sector7Selected': sectorsSelected[7],
          'sector8Selected': sectorsSelected[8],
          'sector9Selected': sectorsSelected[9],

          'sector10Selected': sectorsSelected[10],
          'sector11Selected': sectorsSelected[11],
          'sector12Selected': sectorsSelected[12],
          'sector13Selected': sectorsSelected[13],
          'sector14Selected': sectorsSelected[14],
          'sector15Selected': sectorsSelected[15],
          'sector16Selected': sectorsSelected[16],
          'sector17Selected': sectorsSelected[17],
          'sector18Selected': sectorsSelected[18],
          'sector19Selected': sectorsSelected[19],

          'sector20Selected': sectorsSelected[20],
          'sector21Selected': sectorsSelected[21],
          'sector22Selected': sectorsSelected[22],
          'sector23Selected': sectorsSelected[23],
          'sector24Selected': sectorsSelected[24],
          'sector25Selected': sectorsSelected[25],
          'sector26Selected': sectorsSelected[26],
          'sector27Selected': sectorsSelected[27],
          'sector28Selected': sectorsSelected[28],
          'sector29Selected': sectorsSelected[29],

          'sector30Selected': sectorsSelected[30],
          'sector31Selected': sectorsSelected[31],
          'sector32Selected': sectorsSelected[32],
          'sector33Selected': sectorsSelected[33],
          'sector34Selected': sectorsSelected[34],
          'sector35Selected': sectorsSelected[35],
          'sector36Selected': sectorsSelected[36],
          'sector37Selected': sectorsSelected[37],


          'experienceEmpty': errorMissingExperience,
          'experienceNew': experienceNewSelected,
          'experienceOld': experienceOldSelected,
          'experienceAll': experienceAllSelected,

          'emptyTargetAudienceText': errorTargetAudienceTextEmpty

        }
    );
  }
})


// DESCRIPTION PAGE ONWARDS BUTTON
router.get('/create-event/description-onwards', function (req, res)
{
  var errorMissingmarketAnswer = false;
  var marketsNoSelected = false;
  var marketsYesSelected = false;

  var errorMissingDescription = false;
  var errorMissingBenefit = false;
  var benefitTwo = false;
  var benefitThree = false;
  var benefitFour = false;
  var benefitFive = false;

  var agendaShowIs = false;
  var showAgenda3 = false;
  var showAgenda4 = false;
  var showAgenda5 = false;
  var showAgenda6 = false;

  var errorMissingAgenda1 = false;


  console.log(" the radio for markets is --*/*/*/  " + req.session.data['radio-markets']);


  if(req.session.data['radio-markets'] == undefined)
  {
    errorMissingmarketAnswer = true;
    req.session.data['markets'] = "Relevant to all markets";
  }
  else if(req.session.data['radio-markets'] == "no")
  {
    marketsNoSelected = true;
    req.session.data['markets'] = "Relevant to all markets";
  }
  else if(req.session.data['radio-markets'] == "yes")
  {
    marketsYesSelected = true;

    console.log("The first market is  --**  " + req.session.data['market-box']);

    if(req.session.data['market-box'] != undefined)
    {
      req.session.data['markets'] = req.session.data['market-box'];
    }
    if(req.session.data['market-box-2'] != undefined)
    {
      req.session.data['markets'] = req.session.data['markets'] + "\n" +  req.session.data['market-box-2'];
    }
    if(req.session.data['market-box-3'] != undefined)
    {
      req.session.data['markets'] = req.session.data['markets'] + "\n" + req.session.data['market-box-3'];
    }
  }





  // RECORD BENEFITS
  req.session.data['benefits'] == ""

  if(req.session.data['benefit-input-0'] == "")
  {
    errorMissingBenefit = true;
  }
  else if(req.session.data['benefit-input-0'] != "")
  {
    req.session.data['benefits'] = req.session.data['benefit-input-0'];
  }

  if(req.session.data['benefit-input-1'] != "")
  {
    req.session.data['benefits'] = req.session.data['benefits'] + "\n" + req.session.data['benefit-input-1'];
    benefitTwo = true;
  }
  if(req.session.data['benefit-input-2'] != "")
  {
    req.session.data['benefits'] = req.session.data['benefits'] + "\n" + req.session.data['benefit-input-2'];
    benefitThree = true;
  }
  if(req.session.data['benefit-input-3'] != "")
  {
    req.session.data['benefits'] = req.session.data['benefits'] + "\n" + req.session.data['benefit-input-3'];
    benefitFour = true;
  }
  if(req.session.data['benefit-input-4'] != "")
  {
    req.session.data['benefits'] = req.session.data['benefits'] + "\n" + req.session.data['benefit-input-4'];
    benefitFive = true;
  }




  // SAVE THE AGENDA ON OFF
  // console.log("THE AGENDA RADIO IS **** " + req.session.data['radio-agenda']);

  if(req.session.data['radio-agenda'] == "yes")
  {
    agendaShowIs = true;
  }
  // save agenda data
  req.session.data['agenda'] == ""

  if(req.session.data['agenda-1'] == "")
  {
    errorMissingAgenda1 = true;
  }
  else if(req.session.data['agenda-1'] != "")
  {
    req.session.data['agenda'] = req.session.data['agenda-hour-1'] + ":" + req.session.data['agenda-minutes-1'] + "  " + " " + req.session.data['agenda-1'];
  }

  if(req.session.data['agenda-2'] != "")
  {
    req.session.data['agenda'] = req.session.data['agenda'] + "\n" + req.session.data['agenda-hour-2'] + ":" + req.session.data['agenda-minutes-2'] + "  " + " " + req.session.data['agenda-2'];
  }
  if(req.session.data['agenda-3'] != "")
  {
    showAgenda3 = true;
    req.session.data['agenda'] = req.session.data['agenda'] + "\n" + req.session.data['agenda-hour-3'] + ":" + req.session.data['agenda-minutes-3'] + "  " + " " + req.session.data['agenda-3'];
  }
  if(req.session.data['agenda-4'] != "")
  {
    showAgenda4 = true;
    req.session.data['agenda'] = req.session.data['agenda'] + "\n" + req.session.data['agenda-hour-4'] + ":" + req.session.data['agenda-minutes-4'] + "  " + " " + req.session.data['agenda-4'];
  }
  if(req.session.data['agenda-5'] != "")
  {
    showAgenda5 = true;
    req.session.data['agenda'] = req.session.data['agenda'] + "\n" + req.session.data['agenda-hour-5'] + ":" + req.session.data['agenda-minutes-5'] + "  " + " " + req.session.data['agenda-5'];
  }
  if(req.session.data['agenda-6'] != "")
  {
    showAgenda6 = true;
    req.session.data['agenda'] = req.session.data['agenda'] + "\n" + req.session.data['agenda-hour-6'] + ":" + req.session.data['agenda-minutes-6'] + "  " + " " + req.session.data['agenda-6'];
  }



  //  DESCRIPTION VALIDATION
  if(req.session.data['event-description'] == "")
  {
    errorMissingDescription = true;
  }






  if((errorMissingDescription)  == false)
  {
    if(req.session.changingFromSummary == true)
    {
      res.redirect('/create-event/summary-prelude');
    }
    else
    {
      res.redirect('/create-event/date');
    }
  }
  else
  {
    res.render('create-event/description',
        {
          'errorExists': true,

          'errorMissingMarketSelection': errorMissingmarketAnswer,
          'marketSelectedNo': marketsNoSelected,
          'marketSelectedYes': marketsYesSelected,

          'errorMissingEventBenefit': errorMissingBenefit,
          'showBenefitTwo': benefitTwo,
          'showBenefitThree': benefitThree,
          'showBenefitFour': benefitFour,
          'showBenefitFive': benefitFive,
          'agendaSelected': agendaShowIs,

          'agendaMisssing1': errorMissingAgenda1,
          'agendaShow3':  showAgenda3,
          'agendaShow4':  showAgenda4,
          'agendaShow5':  showAgenda5,
          'agendaShow6':  showAgenda6,

          'errorMissingEventDescription': errorMissingDescription
        }
    );
  }
})


// CREATE EVENT ONWARDS TO NEXT PAGE
router.get('/create-event/date-onwards', function (req, res)
{
  // Save event date
  req.session.data['event-day'];
  req.session.data['event-month'];
  req.session.data['event-year'];

  var errorDayFound = false;
  var errorMonthFound = false;
  var errorYearFound = false;

  var errorStartHour = false;
  var errorStartMinutes = false;

  var errorFinishHour = false;
  var errorFinishMinutes = false;


  // DAY
  if (req.session.data['event-day'] != undefined)
  {
    if(1 <= req.session.data['event-day'] && req.session.data['event-day'] <= 31)
    {    }
    else
    {
      errorDayFound = true;
    }
  }

  //  MONTH
  if (req.session.data['event-month'] != undefined)
  {
    if(1 <= req.session.data['event-month'] && req.session.data['event-month'] <= 12)
    {
      var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      if(req.session.data['event-month'] <= 13)
      { req.session.data['event-month-name'] =  monthNames[req.session.data['event-month']-1]; }
    }
    else
    {
      errorMonthFound = true;
    }
  }


  // YEAR
  if (req.session.data['event-year'] != undefined)
  {
    if(2017 <= req.session.data['event-year'] && req.session.data['event-year'] <= 2020)
    {}
    else
    {
      errorYearFound = true;
    }
  }



  //START TIME
  if (req.session.data['start-hours'] != undefined)
  {
    if (req.session.data['start-hours']  == "")
    {
      req.session.data['start-hours'] = -1;
    }
    // HOURS CHECK
    if (0 <= req.session.data['start-hours'] && req.session.data['start-hours'] <= 23)
    {   }
    else
    {
      errorStartHour = true;
      console.log("start code checker  run  and error");
    }
  }


  if (req.session.data['start-minutes']  == "")
  {
    req.session.data['start-minutes'] = "00";
  }
  if (req.session.data['start-minutes'] != undefined )
  {
    // MINUTES CHECK
    if(0 <= req.session.data['start-minutes'] && req.session.data['start-minutes'] <= 60)
    {}
    else
    {
      errorStartMinutes = true;
    }
  }

  // IF NO ERRORS SAVE THE DATA
  if(errorStartHour == false  &&  errorStartMinutes == false)
  {
    req.session.data['event-start-time'] = req.session.data['start-hours'] + ":" + req.session.data['start-minutes'];
  }


  //FINISH TIME
  if (req.session.data['finish-hours'] != undefined  &&  req.session.data['finish-minutes'] != undefined)
  {
    // HOURS CHECK
    if (req.session.data['finish-hours']  == "")
    {
      req.session.data['finish-hours'] = -1;
    }
    if(0 <= req.session.data['finish-hours'] && req.session.data['finish-hours'] <= 23)
    {}
    else
    {
      errorFinishHour = true;
    }

    // MINUTES CHECK
    if (req.session.data['finish-minutes']  == "")
    {
      req.session.data['finish-minutes'] = "00";
    }
    if(0 <= req.session.data['finish-minutes'] && req.session.data['finish-minutes'] <= 60)
    {}
    else
    {
      errorFinishMinutes = true;
    }

    // IF NO ERRORS SAVE THE DATA
    if(errorFinishHour == false  &&  errorFinishMinutes == false)
    {
      req.session.data['event-finish-time'] =  req.session.data['finish-hours'] + ":" + req.session.data['finish-minutes'];
    }
  }



  // no errors
  if((errorDayFound || errorMonthFound || errorYearFound  || errorStartHour || errorStartMinutes || errorFinishHour || errorFinishMinutes) == false)
  {
    if(req.session.changingFromSummary == true)
    {
      res.redirect('/create-event/summary-prelude');
    }
    else
    {
      res.redirect('/create-event/venue');
    }

  }
  else
  {
    res.render('create-event/date',
        {
          'errorOnDayTime': true,

          'errorOnDate': (errorDayFound || errorMonthFound || errorYearFound),
          'errorDayFound': errorDayFound,
          'errorMonthFound': errorMonthFound,
          'errorYearFound': errorYearFound,

          'errorOnStartTime': (errorStartHour || errorStartMinutes),
          'errorOnFinishTime': (errorFinishHour || errorFinishMinutes),
          'errorOnStartHour': errorStartHour,
          'errorOnStartMinutes': errorStartMinutes,
          'errorOnFinishHour': errorFinishHour,
          'errorOnFinishMinutes': errorFinishMinutes,
        }
    );
  }

})


// VENUE PAGE ONWARDS BUTTON
router.get('/create-event/venue-onwards', function (req, res)
{

  console.log(req.session.data['full-address-holder']);

  var errorOnBuilding = false;
  var errorOnTown = false;
  var errorOnPostcode = false;

  req.session.data['full-address-holder'] = "";

  // If building is empty then throw error;
  if(req.session.data['building'] == "")
  {
    errorOnBuilding = true;
  }
  else
  {
    req.session.data['full-address-holder'] = req.session.data['building'];
  }

  // Add street to output if the field is not empty
  if(req.session.data['street'] != "")
  {
    req.session.data['full-address-holder'] = req.session.data['full-address-holder'] + "\n" + req.session.data['street'];
  }


  // If town is empty then throw error;
  if(req.session.data['town'] == "")
  {
    errorOnTown = true;
  }
  else
  {
    req.session.data['full-address-holder'] = req.session.data['full-address-holder'] + "\n" + req.session.data['town'];
  }


  // If building is empty then throw error;
  if(req.session.data['postcode'] == "")
  {
    errorOnPostcode = true;
  }
  else
  {
    req.session.data['full-address-holder'] = req.session.data['full-address-holder'] + "\n" + req.session.data['postcode'];
  }



  if( req.session.data['full-address-holder'] == "")
  {
    req.session.data['full-address-holder'] = "Not entered"
  }


  // no errors
  if((errorOnBuilding || errorOnTown || errorOnPostcode) == false)
  {
    if(req.session.changingFromSummary == true)
    {
      res.redirect('/create-event/summary-prelude');
    }
    else
    {
      res.redirect('/create-event/organiser');
    }

  }
  else
  {
    res.render('create-event/venue',
        {
          'anError' : true,
          'errorBuilding': errorOnBuilding,
          'errorTown': errorOnTown,
          'errorPostcode': errorOnPostcode
        }
    );
  }
})


router.get('/create-event/organiser-onwards', function (req, res)
{
  var errorMissingNameFound = false;
  var errorInvalidEmailFound = false;
  var errorInvalidPhoneFound = false;


  // EVENT TITLE
  if(req.session.data['event-title'] === "")
  {
    errorMissingName = true;
  }


  // ERRORS OR PROCEED
  if((errorMissingNameFound || errorInvalidEmailFound || errorInvalidPhoneFound) == false)
  {
    if(req.session.changingFromSummary == true)
    {
      res.redirect('/create-event/summary-prelude');
    }
    else
    {
      res.redirect('/create-event/images');
    }
  }
  else
  {
    res.render('create-event/title',
        {
          'errorsExist': true,
          'errorMissingName': errorMissingNameFound,
          'errorInvalidEmail': errorInvalidEmailFound,
          'errorInvalidPhone': errorInvalidPhoneFound
        }
    );
  }
})

router.get('/create-event/organiser-onwards', function (req, res)
{
  var errorMissingNameFound = false;
  var errorInvalidEmailFound = false;
  var errorInvalidPhoneFound = false;


  // EVENT TITLE
  if(req.session.data['event-title'] === "")
  {
    errorMissingName = true;
  }


  // ERRORS OR PROCEED
  if((errorMissingNameFound || errorInvalidEmailFound || errorInvalidPhoneFound) == false)
  {
    if(req.session.changingFromSummary == true)
    {
      res.redirect('/create-event/summary-prelude');
    }
    else
    {
      res.redirect('/create-event/images');
    }
  }
  else
  {
    res.render('create-event/title',
        {
          'errorsExist': true,
          'errorMissingName': errorMissingNameFound,
          'errorInvalidEmail': errorInvalidEmailFound,
          'errorInvalidPhone': errorInvalidPhoneFound
        }
    );
  }
})

// IMAGES PAGE ONWARDS BUTTON
router.get('/create-event/images-onwards', function (req, res)
{
  // check for errors
  if(true)
  {
    if(req.session.changingFromSummary == true)
    {
      res.redirect('/create-event/summary-prelude');
    }
    else
    {
      res.redirect('/create-event/tickets');
    }
  }
  // No errors so carry on
  else
  {
    res.render('create-event/images',
        {
          'errorAttendee': true
        }
    );
  }
})


router.get('/create-event/tickets-onwards', function (req, res)
{

  req.session.data['attendee-quantity'];

  //  message for when tickets are gone and nothing is entered in the box
  if(req.session.data['sold-out-message'] == "")
  {
    req.session.data['sold-out-message'] = "No message will be shown";
  }


  if(req.session.data['close-reg-early-days'] == undefined  ||  req.session.data['close-reg-early-days'] == "" )
  {
    req.session.data['reg-close-time'] = req.session.data['event-start-time'] + " " + req.session.data['event-day'] + " " + req.session.data['event-month-name'] + " " +
                                        req.session.data['event-year'] + " (event start time)" ;
  }
  else
  {
    req.session.data['reg-close-time'] = req.session.data['event-start-time'] + '\xa0\xa0\xa0' + (req.session.data['event-day']-req.session.data['close-reg-early-days']) + " " + req.session.data['event-month-name'] + " " +
                                        req.session.data['event-year'] + '\xa0\xa0\xa0' +  "   (" + req.session.data['close-reg-early-days'] + " days before event)";
  }



  // stuff for setting up a waiting list
  /*
   console.log(req.session.data['radio-group-ticket-gone']);

   if(req.session.data['radio-group-ticket-gone'] == "close-registrations")
   {
   req.session.data['after-tickets-gone'] = "Close registrations";
   }
   else
   {
   req.session.data['after-tickets-gone'] = "Have a waiting list";
   }
   */

  // check for errors
  if(0 < req.session.data['attendee-quantity'])
  {
    if(req.session.changingFromSummary == true)
    {
        res.redirect('/create-event/summary-prelude');
    }
    else
    {
        res.redirect('/create-event/attendees');
    }
  }
  // Errors found so refresh page with errors
  else
  {
    res.render('create-event/attendees',
        {
          'errorAttendee': true
        }
    );
  }
})


router.get('/create-event/attendee-onwards', function (req, res)
{
  req.session.data['attendee-quantity'];

  //  message for when tickets are gone and nothing is entered in the box
  if(req.session.data['sold-out-message'] == "")
  {
    req.session.data['sold-out-message'] = "No message will be shown";
  }

  // stuff for setting up a waiting list
  /*
   console.log(req.session.data['radio-group-ticket-gone']);

   if(req.session.data['radio-group-ticket-gone'] == "close-registrations")
   {
   req.session.data['after-tickets-gone'] = "Close registrations";
   }
   else
   {
   req.session.data['after-tickets-gone'] = "Have a waiting list";
   }
  */

  // Add additional pages if there are additional questions
  console.log("questions out " + req.session.data['radio-additional-questions-boolean']);

  if(req.session.data['radio-additional-questions-boolean'] == "yes")
  {
    req.session.quantityOfQuestions = 1;
    req.session.questionsExist[0] = true;
    req.session.data['additional-questions-incrementer'] = 1
    res.redirect('/create-event/additional-questions');
  }
  else
  {
    if(req.session.changingFromSummary == true)
    {
      res.redirect('/create-event/summary-prelude');
    }
    else
    {
      res.redirect('/create-event/template-reg');
    }
  }
})


router.get('/create-event/add-other-question-submit', function (req, res)
{
  req.session.addOneMoreQuestion = true;

  res.redirect('/create-event/question-onwards');
  console.log("********************** the alternativ thing worked");
})


router.get('/create-event/final-question', function (req, res)
{
  req.session.addOneMoreQuestion = false;


  console.log("********************** the normal save and continue worked worked");

  res.redirect('/create-event/question-onwards');
})


// IMAGES PAGE ONWARDS BUTTON
router.get('/create-event/question-onwards', function (req, res)
{
  var errorNewOrOldQuestionMissing = false;
  var errorQuestionMissing = false;
  var answerTypeEmpty = false;
  var answerError = false;
  var answersTotallyMissing = false;
  var answersMissingOneEntered = false;

  // Selected radio
  var answerTypeOneSelected = false;
  var answerTypeMultipleSelected = false;

  // Selected radio
  var newQuestionSelected = false;
  var oldQuestionOneSelected = false;
  var oldQuestionTwoSelected = false;
  var oldQuestionThreeSelected = false;
  var oldQuestionFourSelected = false;
  var oldQuestionFiveSelected = false;


  //  IF THERE ARE PREVIOUSE QUESTIONS AND NO SELECTION - SAVE THE ERROR
  if( 0 < req.session.previousQuestions.length && req.session.data['radio-additional-new-old-questions'] == undefined)
  {
    errorNewOrOldQuestionMissing = true;
  }
  else
  {
      // IF SELECTION FROM EXISTING QUESTIONS THEN SAVE WHICH ONE WAS SELECTED, FOR RELOADING ERROR STATES
      if(req.session.data['radio-additional-new-old-questions'] == "new-question")
      {
        newQuestionSelected = true;
      }
      else if(req.session.data['radio-additional-new-old-questions'] == "previous-question-one")
      {
        oldQuestionOneSelected = true;
      }
      else if(req.session.data['radio-additional-new-old-questions'] == "previous-question-two")
      {
        oldQuestionTwoSelected = true;
      }
      else if(req.session.data['radio-additional-new-old-questions'] == "previous-question-three")
      {
        oldQuestionThreeSelected = true;
      }
      else if(req.session.data['radio-additional-new-old-questions'] == "previous-question-four")
      {
        oldQuestionFourSelected = true;
      }
      else if(req.session.data['radio-additional-new-old-questions'] == "previous-question-five")
      {
        oldQuestionFiveSelected = true;
      }



      // Check if the question is empty
      if(req.session.data['question'] == "")
      {
        errorQuestionMissing = true;
      }


      // Check if the type of answer has been selected and throw answer if not
      if(req.session.data['radio-additional-questions-answers-type'] === undefined)
      {
        console.log("output of radio selection is TOTALLY UNDEFINED");
        answerTypeEmpty = true;
      }
      else
      {
        // Check that answers have been added if not a free text answer
        if(req.session.data['radio-additional-questions-answers-type'] != "enter-text")
        {
          var numberOfAnswrs = 0;
          for(x=1; x<=2; x++)
          {
            if(req.session.data['answer-'+x] != "")
            {
              numberOfAnswrs = numberOfAnswrs + 1;
            }
          }
          if(numberOfAnswrs == 0)
          {
            answersTotallyMissing = true;
            answerError = true;
          }
          else if(numberOfAnswrs == 1)
          {
            answersMissingOneEntered = true;
            answerError = true;
          }
          console.log("The answer are empty  " + answerError);

          // Save which radio button was selected, Since page is refreshed istead of rerendered
          if(req.session.data['radio-additional-questions-answers-type'] == "select-one")
          {
            answerTypeOneSelected = true;
          }
          else if(req.session.data['radio-additional-questions-answers-type'] == "select-multiple")
          {
            answerTypeMultipleSelected = true;
          }
        }
      }
  }






  // NO ERRORS FOUND
  if((errorQuestionMissing || answerTypeEmpty || answerError || errorNewOrOldQuestionMissing) == false)
  {
      // Save the data for this question to an array
      var thisNewQuestionData = new Array(14);

      // Question
      thisNewQuestionData[0] = req.session.data['question'];
      console.log(thisNewQuestionData[0]);

      // Type of answers
      var answersString = "";
      if(req.session.data['radio-additional-questions-answers-type'] == "enter-text")
      {
        thisNewQuestionData[1] = "Free text";
        answersString="Free text";
      }
      else if(req.session.data['radio-additional-questions-answers-type'] == "select-one")
      {
        thisNewQuestionData[1] = "Select one answer";
      }
      else if(req.session.data['radio-additional-questions-answers-type'] == "select-multiple")
      {
        thisNewQuestionData[1] = "Select multiple answers";
      }
      console.log(thisNewQuestionData[1]);


      if((req.session.data['radio-additional-questions-answers-type'] == "select-one") ||
         (req.session.data['radio-additional-questions-answers-type'] == "select-multiple"))
      {
        // Check through answer boxes ad make a text string of them all
        for(answersIncrementer=1; answersIncrementer<11; answersIncrementer++)
        {
          if(req.session.data['answer-'+answersIncrementer] != "" && req.session.data['answer-'+answersIncrementer] != undefined  )
          {
            answersString = answersString + (req.session.data['answer-'+answersIncrementer]) + "\n";
            console.log("the answers being added - " + req.session.data['answer-'+answersIncrementer]);
          }
        }
      }

      //thisNewQuestionData[2]= answersString;


    console.log("the answers STRING IS - " + thisNewQuestionData[2]  + "\n");


    // SAVE THE DATA TO THE ARRAY   --  FOR SUMMARY PAGE ONLY
    req.session.questionsData[req.session.questionsData.length] = [thisNewQuestionData[0],thisNewQuestionData[1],answersString];



                console.log("the answers STRING IS -" + req.session.questionsData[req.session.questionsData.length-1]  + "------\n");


    console.log("3333333333333333333333the answers STRING IS for the questions before the end " + req.session.questionsData + "\n");

    // If the question is new then save it to a temp list of new questions questions array
    if(true)
    {
      req.session.previousQuestionsTEMP[req.session.previousQuestionsTEMP.length] = thisNewQuestionData

      // Check through answer boxes ad make a text string of them all
      for(z=1; z<11; z++)
      {
        if(req.session.data['answer-'+z] != "")
        {
          req.session.previousQuestionsTEMP[req.session.previousQuestionsTEMP.length-1][1+z] = req.session.data['answer-'+z];
          //console.log(req.session.data['answer-'+z]);
        }
      }
    }
    console.log("444444444444444444444444444the answers STRING IS for the questions before the end " + req.session.questionsData + "\n");

    //  WIPE THE FORM DATA FOR THE NEXT QUESTION OR END OF QUSTIONS
    req.session.data['question'] = "";
    req.session.data['radio-additional-questions-answers-type'] = undefined;
    for(x=1; x<11; x++)
    {
      req.session.data['answer-'+x] = "";
    }

    console.log("the answers STRING IS for the questions before the end " + req.session.questionsData + "\n");

    // Check if ths is not the final question
    if(req.session.addOneMoreQuestion)
    {
      // increase question number
      req.session.questionsExist[req.session.quantityOfQuestions] = true;
      req.session.quantityOfQuestions = req.session.quantityOfQuestions + 1;
      req.session.data['additional-questions-incrementer'] = req.session.data['additional-questions-incrementer'] + 1;

      console.log(" the question we are on now  " + req.session.data['additional-questions-incrementer']);
      console.log(" the total number of questions " + req.session.data['radio-additional-questions-quantity']);

      res.redirect('/create-event/additional-questions');
      //res.render('create-event/additional-questions',{});
    }
    else
    {
      // Save the n w questions to a more perminant list of saved questions
      if(true)
      {
        req.session.previousQuestions = req.session.previousQuestions.concat(req.session.previousQuestionsTEMP);
        req.session.previousQuestionsTEMP = [];
      }

      console.log("the answers STRING IS for the questions at the end of questions pages" + req.session.questionsData + "\n");

      // Final question move on to summary
      res.redirect('/create-event/template-reg');
    }
  }



  // ERRORS FOUND stay on same page
  else
  {
    res.render('create-event/additional-questions',
        {
          'errorQuestions': true,
          'errorNewQuestionEmpty': errorNewOrOldQuestionMissing,
          'errorQuestionEmpty' : errorQuestionMissing,
          'errorAnswersError' : answerError,
          'errorAnswerTypeEmpty' : answerTypeEmpty,
          'errorAnswersEmpty' : answersTotallyMissing,
          'errorAnswersOnlyOneEntered' : answersMissingOneEntered,
          'errorOneSelected' : answerTypeOneSelected,
          'errorMultipleSelected' : answerTypeMultipleSelected,
          'errorNewQuestionSelected' : newQuestionSelected,
          'errorOldQuestionOneSelected' : oldQuestionOneSelected,
          'errorOldQuestionTwoSelected' : oldQuestionTwoSelected,
          'errorOldQuestionThreeSelected' : oldQuestionThreeSelected,
          'errorOldQuestionFourSelected' : oldQuestionFourSelected,
          'errorOldQuestionFiveSelected' : oldQuestionFiveSelected
        }
    );
  }
})


router.get('/create-event/template-reg-onwards', function (req, res)
{
  if(req.session.changingFromSummary == true)
  {
    res.redirect('/create-event/summary-prelude');
  }
  else
  {
    res.redirect('/create-event/template-reminder');
  }
})


router.get('/create-event/template-reminder-onwards', function (req, res)
{
    res.redirect('/create-event/summary-prelude');
})


// VENUE PAGE ONWARDS BUTTON
router.get('/create-event/summary-prelude', function (req, res)
{

  console.log("quantity of questions + 1 is " + (parseInt(req.session.quantityOfQuestions)+1));
  console.log("question one exists " + req.session.questionsExist[0]);

  var eventDataMap = [];
  eventDataMap[0] = req.session.data['event-title'];
  eventDataMap[1] = req.session.data['event-start-time'];
  eventDataMap[2] = req.session.data['event-finish-time'];
  eventDataMap[3] = req.session.data['event-day'];
  eventDataMap[4] = req.session.data['event-month'];
  eventDataMap[5] = req.session.data['event-month-name'];
  eventDataMap[6] = req.session.data['event-year'];
  eventDataMap[7] = req.session.data['full-address-holder'];
  eventDataMap[8] = req.session.data['attendee-quantity'];
  eventDataMap[9] = req.session.data['sold-out-message'];
  eventDataMap[10] = req.session.data['event-description'];
  eventDataMap[11] = req.session.questionsExist;
  eventDataMap[12] = req.session.questionsData;
  eventDataMap[13] = req.session.data['start-hours'];
  eventDataMap[14] = req.session.data['start-minutes'];
  eventDataMap[15] = req.session.data['finish-hours'];
  eventDataMap[16] = req.session.data['finish-minutes'];
  eventDataMap[17] = req.session.data['event-state'];
  eventDataMap[18] = req.session.data['reg-close-time'];
  eventDataMap[19] = req.session.data['reg-is-closed']
  eventDataMap[20] = req.session.data['registered'];
  eventDataMap[21] = req.session.data['organiser-name'];
  eventDataMap[22] = req.session.data['contact-email'];
  eventDataMap[23] = req.session.data['contact-phone'];
  eventDataMap[24] = req.session.data['building'];
  eventDataMap[25] = req.session.data['street'];
  eventDataMap[26] = req.session.data['town'];
  eventDataMap[27] = req.session.data['postcode'];


  //eventDataMap.set('imageURL', req.session.data['event-title']);

  console.log("INSIDE SUMMARY QUETIONS DATA IS: " + req.session.questionsData);

  // FOR NEW EVENTS
  if(req.session.changingFromSummary == false)
  {
    console.log("BRAND NEW EVENT SAVED ----");
    console.log("EVEND DRAFTS NUMBER IS : " + req.session.eventsDraft.length);
    req.session.eventsDraftBoolean[req.session.eventsDraft.length] = true;
    req.session.eventsDraft[req.session.eventsDraft.length] = eventDataMap;
  }
  else   //  FOR CHANGES TO EXISTING EVENTS
  {
    // req.session.eventsDraftBoolean[req.session.eventsDraft.length] = true;
    // NEEDS FIXING - blindly assuming the event being edited is the most recent event created
    req.session.eventsDraft[req.session.eventsDraft.length-1] = eventDataMap;
  }


  // WIPE flag for changes from summary page
  req.session.changingFromSummary = false;

  console.log("event title is saved as " + req.session.eventsDraft[req.session.eventsDraft.length-1][0]);

  console.log("state of boolean draft  " + req.session.eventsDraftBoolean);
  console.log("state of draft data  " + req.session.eventsDraft);


  // Record that this was a newly created event
  req.session.liveOrNot = "false";
  // NEEDS FIXING for the case where a live event is edited

  res.redirect('/create-event/summary');

})














// Vlose registraton for a live event// VIEW SUMMARY PAGE FOR A PARTICULAR EVENT
router.get('/toggle-closed-reg/:liveeventnumber?', function (req, res)
{
  if( req.session.eventsLive[req.params.liveeventnumber][19] == true )
  {
    req.session.eventsLive[req.params.liveeventnumber][19] = false;
  }
  else
  {
    req.session.eventsLive[req.params.liveeventnumber][19] = true;
  }

  res.redirect('/account#live-events');
})


// VIEW SUMMARY PAGE FOR A PARTICULAR EVENT
router.get('/summary-data/:listitem?/:liveevent?', function (req, res)
{
  req.session.liveOrNot = req.params.liveevent;

  req.session.currentEventShowing = req.params.listitem;

  console.log("the event NUMBER for summary  +++++++  "  + req.session.currentEventShowing);

  // Load data into working set
  console.log("LOCAD EVENT DATA INTO WORKING SET");
  console.log("input number is : " + req.params.listitem);

  req.session.data['event-title'] = undefined;
  req.session.data['start-hours'] = undefined;
  req.session.data['start-minutes'] = undefined;
  req.session.data['finish-hours'] = undefined;
  req.session.data['finish-minutes'] = undefined;
  req.session.data['event-start-time'] = undefined;
  req.session.data['event-finish-time'] = undefined;
  req.session.data['event-day'] = undefined;
  req.session.data['event-month'] = undefined;
  req.session.data['event-month-name'] = undefined;
  req.session.data['event-year'] = undefined;
  req.session.data['full-address-holder'] = undefined;
  req.session.data['attendee-quantity'] = undefined;
  req.session.data['sold-out-message'] = undefined;
  req.session.data['event-description'] = undefined;
  req.session.data['event-state'] = undefined;
  req.session.questionsExist = undefined;
  req.session.questionsData = undefined;
  req.session.data['reg-close-time'] = undefined;

  req.session.data['question'] = undefined;
  req.session.data['radio-additional-questions-answers-type'] = undefined;
  for(var x=1; x<11; x++)
  {
    req.session.data['answer-'+x] = "";
  }

  req.session.data['building'] = undefined;
  req.session.data['street'] = undefined;
  req.session.data['town'] = undefined;
  req.session.data['postcode'] = undefined;

  req.session.data['organiser-name'] = undefined;
  req.session.data['contact-email'] = undefined;
  req.session.data['contact-phone'] = undefined;




  // LOAD IN STORED DATA
  var eventDataMapTEMPLoad = [];
  // LOAD IN STORED DATA FROM DRAFT
  if(req.session.liveOrNot == "true")
  {
    eventDataMapTEMPLoad = req.session.eventsLive[req.session.currentEventShowing];
    console.log("this is a LIVE - EVENT BEING PREVIEWED");
  }
  else
  {
    eventDataMapTEMPLoad = req.session.eventsDraft[req.session.currentEventShowing];
    console.log("this is a DRAFT EVENT BEING PREVIEWED");
  }


  req.session.data['event-title'] = eventDataMapTEMPLoad[0];
  req.session.data['event-start-time'] = eventDataMapTEMPLoad[1];
  req.session.data['event-finish-time'] = eventDataMapTEMPLoad[2];
  req.session.data['event-day'] = eventDataMapTEMPLoad[3];
  req.session.data['event-month'] = eventDataMapTEMPLoad[4];
  req.session.data['event-month-name'] = eventDataMapTEMPLoad[5];
  req.session.data['event-year'] = eventDataMapTEMPLoad[6];
  req.session.data['full-address-holder'] = eventDataMapTEMPLoad[7];
  req.session.data['attendee-quantity'] = eventDataMapTEMPLoad[8];
  req.session.data['sold-out-message'] = eventDataMapTEMPLoad[9];
  req.session.data['event-description'] = eventDataMapTEMPLoad[10];
  req.session.questionsExist = eventDataMapTEMPLoad[11];
  req.session.questionsData = eventDataMapTEMPLoad[12];
  req.session.data['start-hours'] = eventDataMapTEMPLoad[13];
  req.session.data['start-minutes'] = eventDataMapTEMPLoad[14];
  req.session.data['finish-hours'] = eventDataMapTEMPLoad[15];
  req.session.data['finish-minutes'] = eventDataMapTEMPLoad[16];
  req.session.data['event-state'] = eventDataMapTEMPLoad[17];
  req.session.data['reg-close-time'] = eventDataMapTEMPLoad[18];
  req.session.data['reg-is-closed'] = eventDataMapTEMPLoad[19];
  req.session.data['registered'] = eventDataMapTEMPLoad[20];
  req.session.data['organiser-name'] = eventDataMapTEMPLoad[21];
  req.session.data['contact-email'] = eventDataMapTEMPLoad[22];
  req.session.data['contact-phone'] = eventDataMapTEMPLoad[23];
  req.session.data['building'] = eventDataMapTEMPLoad[24];
  req.session.data['street'] = eventDataMapTEMPLoad[25];
  req.session.data['town'] = eventDataMapTEMPLoad[26];
  req.session.data['postcode'] = eventDataMapTEMPLoad[27];



  res.redirect('/create-event/summary');
})


// VIEW SUMMARY PAGE FOR A PARTICULAR EVENT
router.get('/preview-data/:listitem?/:liveevent?', function (req, res)
{
  req.session.liveOrNot = req.params.liveevent;

  console.log("the Live event   +++++++  "  + req.session.liveOrNot);

  req.session.currentEventShowing = req.params.listitem;

  console.log("the event NUMBER for preview  +++++++  "  + req.session.currentEventShowing);

  // Load data into working set
  console.log("LOCAD EVENT DATA INTO WORKING SET - PREVIEW");
  console.log("input number is : " + req.params.listitem);

  req.session.data['event-title'] = undefined;
  req.session.data['start-hours'] = undefined;
  req.session.data['start-minutes'] = undefined;
  req.session.data['finish-hours'] = undefined;
  req.session.data['finish-minutes'] = undefined;
  req.session.data['event-start-time'] = undefined;
  req.session.data['event-finish-time'] = undefined;
  req.session.data['event-day'] = undefined;
  req.session.data['event-month'] = undefined;
  req.session.data['event-month-name'] = undefined;
  req.session.data['event-year'] = undefined;
  req.session.data['full-address-holder'] = undefined;
  req.session.data['attendee-quantity'] = undefined;
  req.session.data['sold-out-message'] = undefined;
  req.session.data['event-description'] = undefined;
  req.session.data['event-state'] = undefined;
  req.session.questionsExist = undefined;
  req.session.questionsData = undefined;
  req.session.data['reg-close-time'] = undefined;
  req.session.data['reg-is-closed'] = undefined;

  req.session.data['question'] = undefined;
  req.session.data['radio-additional-questions-answers-type'] = undefined;
  for(var x=1; x<11; x++)
  {
    req.session.data['answer-'+x] = "";
  }

  req.session.data['building'] = undefined;
  req.session.data['street'] = undefined;
  req.session.data['town'] = undefined;
  req.session.data['postcode'] = undefined;

  req.session.data['organiser-name'] = undefined;
  req.session.data['contact-email'] = undefined;
  req.session.data['contact-phone'] = undefined;


  var eventDataMapTEMPLoad = [];
  // LOAD IN STORED DATA FROM DRAFT
  if(req.session.liveOrNot == "true")
  {
    eventDataMapTEMPLoad = req.session.eventsLive[req.session.currentEventShowing];
    console.log("this is a LIVE -  EVENT BEING PREVIEWED");
  }
  else
  {
    eventDataMapTEMPLoad = req.session.eventsDraft[req.session.currentEventShowing];
    console.log("this is a DRAFT EVENT BEING PREVIEWED");
  }


  req.session.data['event-title'] = eventDataMapTEMPLoad[0];
  req.session.data['event-start-time'] = eventDataMapTEMPLoad[1];
  req.session.data['event-finish-time'] = eventDataMapTEMPLoad[2];
  req.session.data['event-day'] = eventDataMapTEMPLoad[3];
  req.session.data['event-month'] = eventDataMapTEMPLoad[4];
  req.session.data['event-month-name'] = eventDataMapTEMPLoad[5];
  req.session.data['event-year'] = eventDataMapTEMPLoad[6];
  req.session.data['full-address-holder'] = eventDataMapTEMPLoad[7];
  req.session.data['attendee-quantity'] = eventDataMapTEMPLoad[8];
  req.session.data['sold-out-message'] = eventDataMapTEMPLoad[9];
  req.session.data['event-description'] = eventDataMapTEMPLoad[10];
  req.session.questionsExist = eventDataMapTEMPLoad[11];
  req.session.questionsData = eventDataMapTEMPLoad[12];
  req.session.data['start-hours'] = eventDataMapTEMPLoad[13];
  req.session.data['start-minutes'] = eventDataMapTEMPLoad[14];
  req.session.data['finish-hours'] = eventDataMapTEMPLoad[15];
  req.session.data['finish-minutes'] = eventDataMapTEMPLoad[16];
  req.session.data['event-state'] = eventDataMapTEMPLoad[17];
  req.session.data['reg-close-time'] = eventDataMapTEMPLoad[18];
  req.session.data['reg-is-closed'] = eventDataMapTEMPLoad[19];
  req.session.data['registered'] = eventDataMapTEMPLoad[20];
  req.session.data['organiser-name'] = eventDataMapTEMPLoad[21];
  req.session.data['contact-email'] = eventDataMapTEMPLoad[22];
  req.session.data['contact-phone'] = eventDataMapTEMPLoad[23];
  req.session.data['building'] = eventDataMapTEMPLoad[24];
  req.session.data['street'] = eventDataMapTEMPLoad[25];
  req.session.data['town'] = eventDataMapTEMPLoad[26];
  req.session.data['postcode'] = eventDataMapTEMPLoad[27];

  res.redirect('/create-event/preview');
})


// ClONE EVENT
router.get('/clone-event/:listitem?/:liveevent?', function (req, res)
{
  req.session.liveOrNot = req.params.liveevent;

  req.session.currentEventShowing = req.params.listitem;

  console.log("EVENT CLONE HAPPENING");
  console.log("input number is : " + req.params.listitem);

  req.session.data['event-title'] = undefined;
  req.session.data['start-hours'] = undefined;
  req.session.data['start-minutes'] = undefined;
  req.session.data['finish-hours'] = undefined;
  req.session.data['finish-minutes'] = undefined;
  req.session.data['event-start-time'] = undefined;
  req.session.data['event-finish-time'] = undefined;
  req.session.data['event-day'] = undefined;
  req.session.data['event-month'] = undefined;
  req.session.data['event-month-name'] = undefined;
  req.session.data['event-year'] = undefined;
  req.session.data['full-address-holder'] = undefined;
  req.session.data['attendee-quantity'] = undefined;
  req.session.data['sold-out-message'] = undefined;
  req.session.data['event-description'] = undefined;
  req.session.data['event-state'] = undefined;
  req.session.questionsExist = undefined;
  req.session.questionsData = undefined;
  req.session.data['reg-close-time'] = undefined;
  req.session.data['reg-is-closed'] = undefined;

  req.session.data['question'] = undefined;
  req.session.data['radio-additional-questions-answers-type'] = undefined;
  for(var x=1; x<11; x++)
  {
    req.session.data['answer-'+x] = "";
  }

  req.session.data['building'] = undefined;
  req.session.data['street'] = undefined;
  req.session.data['town'] = undefined;
  req.session.data['postcode'] = undefined;

  req.session.data['organiser-name'] = undefined;
  req.session.data['contact-email'] = undefined;
  req.session.data['contact-phone'] = undefined;



  // Set which event is being edited
  req.session.currentEvent = req.params.listitem;

  // May temp event
  var eventDataMapTEMP = [];

  // LOAD IN STORED DATA FROM DRAFT
  if(req.session.liveOrNot == "true")
  {
    eventDataMapTEMP = req.session.eventsLive[req.session.currentEventShowing];
    console.log("this is a LIVE - EVENT BEING CLONED");
  }
  else
  {
    eventDataMapTEMP = req.session.eventsDraft[req.session.currentEventShowing];
    console.log("this is a DRAFT EVENT BEING CLONED");
  }

  req.session.data['event-title'] = eventDataMapTEMP[0];
  req.session.data['event-start-time'] = eventDataMapTEMP[1];
  req.session.data['event-finish-time'] = eventDataMapTEMP[2];
  req.session.data['event-day'] = eventDataMapTEMP[3];
  req.session.data['event-month'] = eventDataMapTEMP[4];
  req.session.data['event-month-name'] = eventDataMapTEMP[5];
  req.session.data['event-year'] = eventDataMapTEMP[6];
  req.session.data['full-address-holder'] = eventDataMapTEMP[7];
  req.session.data['attendee-quantity'] = eventDataMapTEMP[8];
  req.session.data['sold-out-message'] = eventDataMapTEMP[9];
  req.session.data['event-description'] = eventDataMapTEMP[10];
  req.session.questionsExist = eventDataMapTEMP[11];
  req.session.questionsData = eventDataMapTEMP[12];
  req.session.data['start-hours'] = eventDataMapTEMP[13];
  req.session.data['start-minutes'] = eventDataMapTEMP[14];
  req.session.data['finish-hours'] = eventDataMapTEMP[15];
  req.session.data['finish-minutes'] = eventDataMapTEMP[16];
  req.session.data['event-state'] = eventDataMapTEMP[17];
  req.session.data['reg-close-time'] = eventDataMapTEMP[18];
  req.session.data['reg-is-closed'] = eventDataMapTEMP[19];
  req.session.data['registered'] = eventDataMapTEMP[20];
  req.session.data['organiser-name'] = eventDataMapTEMP[21];
  req.session.data['contact-email'] = eventDataMapTEMP[22];
  req.session.data['contact-phone'] = eventDataMapTEMP[23];
  req.session.data['building'] = eventDataMapTEMP[24];
  req.session.data['street'] = eventDataMapTEMP[25];
  req.session.data['town'] = eventDataMapTEMP[26];
  req.session.data['postcode'] = eventDataMapTEMP[27];


  req.session.eventsDraftBoolean[req.session.eventsDraft.length] = true;
  req.session.eventsDraft.push(eventDataMapTEMP);

  console.log("NUMEBR of draft events is  " + req.session.eventsDraft.length);
  console.log("Loaded event title is " + req.session.data['event-title']);
  console.log("draft events list after  " + req.session.eventsDraftBoolean);

  req.session.liveOrNot = "false";

  res.redirect('/create-event/summary');
})










// CHANGE DETAILS LINKS
router.get('/create-event/', function (req, res)
{
  res.redirect('/create-event/title');
})


router.get('/create-event/change-title', function (req, res)
{
  req.session.changingFromSummary = true;

  res.redirect('/create-event/title');
})

router.get('/create-event/change-date', function (req, res)
{
  req.session.changingFromSummary = true;

  res.redirect('/create-event/data');
})

router.get('/create-event/change-venue', function (req, res)
{
  req.session.changingFromSummary = true;

  res.redirect('/create-event/venue');
})

router.get('/create-event/change-description', function (req, res)
{
  req.session.changingFromSummary = true;

  res.redirect('/create-event/description');
})

router.get('/create-event/change-images', function (req, res)
{
  req.session.changingFromSummary = true;

  res.redirect('/create-event/images');
})

router.get('/create-event/change-attendees', function (req, res)
{
  req.session.changingFromSummary = true;

  res.redirect('/create-event/tickets');
})

router.get('/create-event/change-questions', function (req, res)
{
  req.session.changingFromSummary = true;

  res.redirect('/create-event/attendees');
})

router.get('/create-event/change-registration-message', function (req, res)
{
  req.session.changingFromSummary = true;

  res.redirect('/create-event/template-reg');
})

router.get('/create-event/change-reminder-message', function (req, res)
{
  req.session.changingFromSummary = true;

  res.redirect('/create-event/template-reminder');
})

router.get('/create-event/change-organiser', function (req, res)
{
  req.session.changingFromSummary = true;

  res.redirect('/create-event/organiser');
})













// STORE EVENT
router.get('/make-draft-live', function (req, res)
{
  console.log("MOVING EVENT FROM DRAFT TO LIVE");
  console.log("input number is : " +  req.session.currentEventShowing );

  //get event from drafts
  var tempEventArray = req.session.eventsDraft[req.session.currentEventShowing];

  console.log("content of event : " + tempEventArray);


  // SET EVENT STATE TO LIVE
  tempEventArray[17] = "live";


  // Copy it into live events
  req.session.eventsLiveBoolean[req.session.eventsLive.length] = true;
  req.session.eventsLive[req.session.eventsLive.length] = tempEventArray;


  // Remove the stuff event from draft list
  req.session.eventsDraft[req.session.currentEventShowing] = undefined;

  for (var i = 0; i < req.session.eventsDraft.length; i++)
  {
    if (req.session.eventsDraft[i] == undefined)
    {
      req.session.eventsDraft.splice(i, 1);
      i--;
    }
  }

  // Update which event exist.
  for(var p=0; p<10; p++)
  {
    if(req.session.eventsDraft[p] == undefined)
    {
      req.session.eventsDraftBoolean[p] = false;
    }
  }

  console.log("the events in draft are: " + req.session.eventsDraftBoolean);
  console.log("the events in draft details are: " + req.session.eventsDraft);

  res.redirect('/account');
})


// STORE EVENT
router.get('/monitor/add-tracking-link', function (req, res)
{
  if(req.session.data['new-link-name'] === "")
  {
    console.log("the new link name is empty");

    errorTrackingNameIs = true;

    res.render('/monitor/live-present',

        {
          tab: 2,
         'errorTrackingName': errorTrackingNameIs,
        }
    );
  }
  else
  {
    req.session.trackingLinksNames[req.session.trackingLinksNames.length] = req.session.data['new-link-name'];

    console.log("the  name added is  " +   req.session.trackingLinksNames[req.session.trackingLinksNames.length-1]);

    console.log("the size of the links list is now " +   req.session.trackingLinksNames.length);

    res.redirect('/monitor/live-present#track-links');
  }
})





router.get('/clear-session', function (req, res) {
  req.session.destroy();
  res.redirect('/');
});






module.exports = router




