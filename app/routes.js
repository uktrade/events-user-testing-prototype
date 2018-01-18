var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
});



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


  if(req.session.liveOrNot == undefined)
  {
    req.session.liveOrNot = "false";
  }

  if(req.session.externalUser == undefined)
  {
    req.session.externalUser = false;
  }

  //  THE SAVED PREVIOUS CUSTOM QUESTIONS FROM USERS
  if(req.session.previousQuestions == undefined) {
    req.session.previousQuestions = [];
    req.session.previousQuestionsTEMP = [];
  }

  if( req.session.addNewQuestionFromSummary == undefined )
  {
    req.session.addNewQuestionFromSummary = false;
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
  //req.session.regionName = "DIT Yorkshire and the Humber";

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

  if(req.session.trackingViewsNumbers == undefined)
  {
    req.session.trackingViewsNumbers = [0,0,0,0,0,0,0,0,0,0];
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
    req.session.data['organiser-name'] = "Department for International Trade";
  }

  if(req.session.data['sold-out-message'] == undefined)
  {
    req.session.data['sold-out-message'] = "This event is now full. Places may be freed up subject to cancellations - check back here for availability.";
  }

  if(req.session.data['contact-email'] == undefined)
  {
    req.session.data['contact-email'] = "events@businesswest.co.uk"
  }
  if(req.session.data['contact-phone'] == undefined)
  {
    req.session.data['contact-phone'] = "0779 235 9716";
  }

  if(req.session.data['days-before-1'] == undefined)
  {
    req.session.data['days-before-1'] = "1 day before"
  }
  if(req.session.data['days-before-2'] == undefined)
  {
    req.session.data['days-before-2'] = "2 days before";
  }
  if(req.session.data['days-before-3'] == undefined)
  {
    req.session.data['days-before-3'] = "3 days before";
  }
  if(req.session.data['days-before-2'] == undefined)
  {
    req.session.data['days-before-4'] = "4 days before";
  }

  if(req.session.eventsLiveURLS == undefined)
  {
    req.session.eventsLiveURLS = [];
  }

  if(req.session.showPublishBlockingPage == undefined)
  {
    req.session.showPublishBlockingPage = false;
  }

  if( req.session.data['radio-link-access'] == undefined)
  {
    req.session.data['radio-link-access'] = "";
  }


  next();

});




router.get('/scenario-empty', function (req, res)
{
  req.session.destroy();

  //req.session.data['organiser-name'] = "Department for International Trade South West";

  res.redirect('/signin');
})



router.get('/scenario-1', function (req, res)
{
  req.session.externalUser = false;

  // empty account
  req.session.regionName = undefined;

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


  var eventcCount = 5;

  req.session.eventsLiveBoolean[eventcCount];
  for(var x=0; x< eventcCount; x++)
  {
    req.session.eventsLive[x] = ["empty"];
    req.session.eventsLiveBoolean[x] = true;
  }

  // name
  req.session.eventsLive[0][0] = "Low Carbon Vehicles 2018";
  req.session.eventsLive[1][0] = "Coal Mongolia 2018";
  req.session.eventsLive[2][0] = "Researching Overseas Markets Masterclass";
  req.session.eventsLive[3][0] = "International Market Research";
  req.session.eventsLive[4][0] = "Grow your Business with Social Media";

  // time
  req.session.eventsLive[1][1] = "11:00";
  req.session.eventsLive[1][2] = "12:00";
  req.session.eventsLive[1][28] = "11:00";
  req.session.eventsLive[1][29] = "12:00";
  req.session.eventsLive[1][30] = "11:00";
  req.session.eventsLive[1][31] = "12:00";

  // date
  req.session.eventsLive[0][3] = "24";
  req.session.eventsLive[1][3] = "28";
  req.session.eventsLive[2][3] = "4";
  req.session.eventsLive[3][3] = "7";
  req.session.eventsLive[4][3] = "14";

  // month
  req.session.eventsLive[0][5] = "February";
  req.session.eventsLive[1][5] = "February";
  req.session.eventsLive[2][5] = "March";
  req.session.eventsLive[3][5] = "March";
  req.session.eventsLive[4][5] = "March";

  // year
  req.session.eventsLive[0][6] = "2018";
  req.session.eventsLive[1][6] = "2018";
  req.session.eventsLive[2][6] = "2018";
  req.session.eventsLive[3][6] = "2018";
  req.session.eventsLive[4][6] = "2018";

  // Capacity
  req.session.eventsLive[0][8] = 20;
  req.session.eventsLive[1][8] = 30;
  req.session.eventsLive[2][8] = 14;
  req.session.eventsLive[3][8] = 18;
  req.session.eventsLive[4][8] = 16;

  // Registered people count
  req.session.eventsLive[0][20] = 17;
  req.session.eventsLive[1][20] = 20;
  req.session.eventsLive[2][20] = 4;
  req.session.eventsLive[3][20] = 3;
  req.session.eventsLive[4][20] = 3;

  // Registration closed
  req.session.eventsLive[0][19] = false;
  req.session.eventsLive[1][19] = false;
  req.session.eventsLive[2][19] = false;
  req.session.eventsLive[3][19] = false;
  req.session.eventsLive[4][19] = false;


  // Page views for each link
  var rawCountsViews = [];
  rawCountsViews[0] = [49, 18, 17, 11, 3];
  rawCountsViews[1] = [56, 40, 10, 3, 3];
  rawCountsViews[2] = [46, 22, 24];
  rawCountsViews[3] = [35, 19, 16];
  rawCountsViews[4] = [24, 17, 7];

  // Work out the percentages for each page view per link
  var rawPercentageViews = [];
  for(var z=0; z<rawCountsViews.length; z++ )
  {
    rawPercentageViews[z] = []
    rawPercentageViews[z][0] = 100;

    for(var w=1; w<rawCountsViews[z].length; w++ )
    {
        rawPercentageViews[z][w] = ((rawCountsViews[z][w])/(rawCountsViews[z][0])) *100;
    }

    console.log("\n\n each percentage is " + rawPercentageViews[z]);
  }

  // REgistration counts for each link
  var rawCountsRegistrations = [];
  rawCountsRegistrations[0] = [req.session.eventsLive[0][20], 8, 3, 4, 2];
  rawCountsRegistrations[1] = [req.session.eventsLive[1][20], 11, 6, 2, 1];
  rawCountsRegistrations[2] = [req.session.eventsLive[2][20], 2, 2];
  rawCountsRegistrations[3] = [req.session.eventsLive[3][20], 2, 1];
  rawCountsRegistrations[4] = [req.session.eventsLive[4][20], 3, 0];


  // Work out the percentages for each page reg per link
  var rawPercentageRegistrations = [];
  for(var z=0; z<rawCountsRegistrations.length; z++ )
  {
    rawPercentageRegistrations[z] = [];
    rawPercentageRegistrations[z][0] = 100;

    for(var w=1; w<rawCountsRegistrations[z].length; w++ )
    {
      // using the total count from the view, not reg, so coloured bars are proportional in length
      rawPercentageRegistrations[z][w] = ((rawCountsRegistrations[z][w])/(rawCountsViews[z][0])) *100;
    }

    console.log("\n\n each percentage REG is " + rawPercentageRegistrations[z]);
  }

  req.session.eventsLiveURLS = [];
  for(var x=0; x<req.session.eventsLive.length; x++)
  {
    var baseURL =  req.session.eventsLive[x][0];

    // Make lower case
    baseURL = baseURL.toLowerCase();

    // remove space an then hyphens
    baseURL = baseURL.replace(" - ", " ");

    // remove spaces
    baseURL = baseURL.replace(/\s/g, '-');

    // remove ampersand
    baseURL = baseURL.replace(/&/g, "");

    // Add on DIT prefix
    baseURL = baseURL;


    var eachURLarrayName = [];
    var eachURLarray = [];

    // Save the name of each link
    // Save the urls of each link being tracked
    if(0 < rawCountsViews[x].length)
    {
      eachURLarrayName[0] = "NULL NAME - YOU SHOULD'T SEE THIS";
      eachURLarray[0] = "NUL URLL - YOU SHOULD'T SEE THIS";
    }
    if(1 < rawCountsViews[x].length)
    {
      eachURLarrayName[1] = req.session.eventsLive[x][0];
      eachURLarray[1] = baseURL;
    }
    if(2 < rawCountsViews[x].length)
    {
      eachURLarrayName[2] = "Email Marketing";
      eachURLarray[2] = baseURL + "-email-marketing";
    }
    if(3 < rawCountsViews[x].length)
    {
      eachURLarrayName[3] = "Twitter";
      eachURLarray[3] = baseURL + "-twitter";
    }
    if(4 < rawCountsViews[x].length)
    {
      eachURLarrayName[4] = "Export for Growth";
      eachURLarray[4] = baseURL + "-export-for-growth";
    }
    if(5 < rawCountsViews[x].length)
    {
      eachURLarrayName[5] = "Enterprise M3";
      eachURLarray[5] = baseURL + "-enterprise-m3";
    }


    var arrayOfNameAndUrls = [];
    arrayOfNameAndUrls[0] = eachURLarrayName;
    arrayOfNameAndUrls[1] = eachURLarray;
    arrayOfNameAndUrls[2] = rawCountsViews[x];
    arrayOfNameAndUrls[3] = rawPercentageViews[x];
    arrayOfNameAndUrls[4] = rawCountsRegistrations[x];
    arrayOfNameAndUrls[5] = rawPercentageRegistrations[x];

    req.session.eventsLiveURLS[x] = arrayOfNameAndUrls;

    //console.log("  --- THE OUTPUT URL IS *+* " + req.session.eventsLiveURLS[x]);
  }



  // REGISTERED PEOPLES DATA
  // Registration date, Registration time, Full Name, Company, Job Title, Phone number,
  /* Email, Consent for marketing, Address: Building & street, Address: Town or City, Postcode,
     Primary Sector, Company website, Are you currently exporting?, What is your company turnover?,
     Do you have any food allergies?
  */
  req.session.registeredPeopleData1 = [];

  req.session.registeredPeopleData1[0] =
  ["25 September 2017","16:47","Henry", "Brown","Crane Electronics Ltd.","CEO","07933465544","henry@crane.co.uk","Yes","3 Waterhouse Square","Bristol","BS8 4JY","Electronics & IT hardware","www.crane.co.uk","Yes","£500,000","No","DIT record"];

  req.session.registeredPeopleData1[1] =
  ["25 September 2017","15:25","Geoff", "Clooney","Crystalclear Aspects Ltd","International Sales Director","07986366723","geoff@crystalclear.co.uk","Yes","5 Innovation House, Exeter Business Park","Exeter","EX4 7PJ","Chemicals","www.crystalclear.co.uk","Yes","£1,500,000","No","DIT record"];

  req.session.registeredPeopleData1[2] =
  ["22 September 2017","20:45","Katie", "Howard","CWSEC Ltd","Finance Manager","07974652277","katie@cwsec.com","Yes","3 Stamford Street","Bristol","BS3 6QD","Automotive","www.cwsec.com","No","£2,000,000","No","DIT record"];

  req.session.registeredPeopleData1[3] =
  ["19 September 2017","18:08","Robert", "McKinley","David Jerome Ltd","Sales Executive","07933465544","robert@jerome.co.uk","No","58 Bloomsbury Street","Bristol","BS3 8NP","Automotive","www.jerome.co.uk","No","£1,000,000","No","DIT record"];

  req.session.registeredPeopleData1[4] =
  ["15 September 2017","09:23","Charlotte", "Walsh","Dianne Illsley","Sales Executive","07986366723","charlotte@diannecreative.com","No","3 Stamford Street","Bristol","BS14 9WG","Automotive","We do not currently have a website","No","£100,000","Yes","New to DIT"];

  req.session.registeredPeopleData1[5] =
  ["15 September 2017","08:56","Gavin", "Bell","Direct Trade Bags Company Ltd","Sales Manager","07974652277","gavin@tradebags.co.uk","Yes","45 Pierrepoint Road","Cardiff","CF15 4BP","Technology","www.tradebags.co.uk","Yes","£500,000","No","New to DIT"];

  req.session.registeredPeopleData1[6] =
  ["9 September 2017","14:37","Deepak", "Patel","Dy-Pack UK Ltd","Head of Engineering","07933465544","deepak@dypack.com","Yes","4 Wayferry Street","Poole","BH13 5LD","Mining","www.dypack.com","No","£1,500,000","No","DIT record"];

  req.session.registeredPeopleData1[7] =
  ["2 September 2017","22:55","Mohammed", "Akram","Elat3d Ltd","International Sales Manager","07986366723","moh@elat3d.com	","Yes","6 Cavendish Tower, Portcullis Street","Newport","NP20 2ED","Mining","www.elat3d.com","Yes","£2,000,000","Yes","New to DIT"];

  req.session.registeredPeopleData1[8] =
  ["1 September 2017","19:04","Jane", "Green","Empirical Science Education CIC","Director","07974652277","jane@science.co.uk","No","7 Stamford Street","Bristol","BS3 6QD","Technology","www.science.co.uk","Yes","£1,000,000","No","DIT record"];

  req.session.registeredPeopleData1[9] =
  ["31 August 2017","12:31","Nadia", "Panucci","Jet Pumps UK Ltd","Sales Executive","07933465544","nadia@jetpumps.com","Yes","14 Bloomsbury Street","Bristol","BS3 8NP","Environment & Water","www.jetpumps.co.uk","Yes","£5,000,000","No","DIT record"];

  req.session.registeredPeopleData1[10] =
      ["28 August 2017","12:31","Jane", "Smith","JS Consulting","Sales Executive","07935565544","jane@js.co.uk","Yes","14 Bloomsbury Street","Bristol","BS3 8NP","Legal services","www.js.co.uk","Yes","£5,000,000","No","DIT record"];

  req.session.registeredPeopleData1[11] =
      ["10 September 2017","14:31","Philip", "Agassi","Nanotech computing","Sales Executive","07935565544","philip@nanotech.com","Yes","14 Bloomsbury Street","Bristol","BS3 8NP","Electronics & IT hardware","www.nanotech.com","Yes","£5,000,000","No","DIT record"];

  req.session.registeredPeopleData1[12] =
      ["12 September 2017","15:31","Robert", "Johnson","Desiato International","Sales Executive","07935565544","robert@desiato.co.uk","Yes","14 Bloomsbury Street","Bristol","BS3 8NP","Oil & Gas","www.desiato.co.uk","Yes","£5,000,000","No","DIT record"];

  req.session.registeredPeopleData1[13] =
      ["15 September 2017","09:31","Pietro", "Beardsley","Eagle Ltd.","Sales Executive","07935565544","pietro@eagle.com","Yes","14 Bloomsbury Street","Bristol","BS3 8NP","Power","www.eagle.com","Yes","£5,000,000","No","DIT record"];

  req.session.registeredPeopleData1[14] =
      ["18 September 2017","14:31","Guy", "Berlin","Sound Investments Ltd.","Sales Executive","07935565544","guy@sound.com","Yes","14 Bloomsbury Street","Bristol","BS3 8NP","Financial & professional services","www.sound.com","Yes","£5,000,000","No","DIT record"];

  req.session.registeredPeopleData1[15] =
      ["18 September 2017","14:51","Joseph", "Parrot","Harlequin Products","Sales Executive","07935565544","joseph@harlequin.com","Yes","14 Bloomsbury Street","Birmingham","B12 8NP","Metals, minerals and materials","www.harlequin.com","Yes","£5,000,000","lactose intolerant","DIT record"];

  req.session.registeredPeopleData1[16] =
      ["15 September 2017","10:51","Vanessa", "Healy","Whirlwind Industries","CEO","07935565544","vanessa@whirlwind.com","Yes","14 Bloomsbury Street","Birmingham","B12 8NP","Power","www.whirlwind.com","Yes","£5,000,000","Seafood","DIT record"];



  // Checkin - Alphabetical order of name of reg.
  req.session.registeredPeopleCheckinNames1 = [];

  for(var j=0; j<req.session.registeredPeopleData1.length; j++)
  {
    req.session.registeredPeopleCheckinNames1[j] = [ req.session.registeredPeopleData1[j][2] , req.session.registeredPeopleData1[j][3] ];

    console.log("asefccnlsruhnicgnksd3lpuvhklu   " + req.session.registeredPeopleCheckinNames1[j]);
  }

  req.session.registeredPeopleCheckinNames1.sort(sortByLastName);

  function sortByLastName(a, b) {
    if (a[1] === b[1]) {
      return 0;
    }
    else {
      return (a[1] < b[1]) ? -1 : 1;
    }
  }


  // SECOND LIST OF REGISTERED PEOPLE

  req.session.registeredPeopleData2 = [];

  req.session.registeredPeopleData2[0] =
      ["25 September 2017","16:47","Connor", "Shaw","Equiture Limited","CEO","07986366723","connor@equiture.co.uk","Yes","3 Stamford Street","Bristol","BS3 6QD","Manufacturing","Don't have website","No","£500,000","No","New to DIT"];

  req.session.registeredPeopleData2[1] =
      ["25 September 2017","15:25","Victoria", "O' Leary","Fi Burke Contemporary Art","International Sales Director","07974652277","victoria@burke.com","No","58 Bloomsbury Street","Bristol","BS3 8NP","Mining","www.burke.com","No","£1,500,000","No","DIT record"];

  req.session.registeredPeopleData2[2] =
      ["22 September 2017","20:45","Solomon", "Yakubu","Illuminow Ltd","Finance Manager","07933465544","solomon@illuminow.co.uk","Yes","3 Stamford Street","Bristol","BS14 9WG","Manufacturing","Don't have website","Yes","£2,000,000","No","DIT record"];

  req.session.registeredPeopleData2[3] =
      ["19 September 2017","18:08","Joseph", "Goldberg","IMS Risk Solutions Ltd","Sales Executive","07986366723","joseph@ims.co.uk","No","5 Strategy House, Kings Innovation Park","Leicester","LE1 1AD","Transport","www.ims.co.uk","Yes","£1,000,000","No","DIT record"];

  req.session.registeredPeopleData2[4] =
      ["15 September 2017","09:23","Magda", "Michalenko","India Impex (UK) Ltd","Director","07974652277","magda@impex.com","No","5 Innovation House, Exeter Business Park","Exeter","EX4 7PJ","Technology","www.impex.com","Yes","£100,000","Yes","DIT record"];

  req.session.registeredPeopleData2[5] =
      ["15 September 2017","08:56","Gavin", "Bell","Direct Trade Bags Company Ltd","Sales Manager","07974652277","gavin@tradebags.co.uk","Yes","45 Pierrepoint Road","Cardiff","CF15 4BP","Technology","www.tradebags.co.uk","Yes","£500,000","No","New to DIT"];

  req.session.registeredPeopleData2[6] =
      ["09 September 2017","14:37","Deepak", "Patel","Dy-Pack UK Ltd","Head of Engineering","07933465544","deepak@dypack.com","Yes","4 Wayferry Street","Poole","BH13","Mining","www.dypack.com","No","£1,500,000","No","New to DIT"];



  // Checkin - Alphabetical order of name of reg.
  req.session.registeredPeopleCheckinNames2 = [];

  for(var k=0; k<req.session.registeredPeopleData2.length; k++)
  {
    req.session.registeredPeopleCheckinNames2[k] = [ req.session.registeredPeopleData2[k][2] , req.session.registeredPeopleData2[k][3] ];
  }
  req.session.registeredPeopleCheckinNames2.sort(sortByLastName);


  if(req.session.previousQuestions.length == 0)
  {
    req.session.previousQuestions[0] = ["Do you have any food allergies?", "Select one answer", "Yes - request details \nNo", "\nNot mandatory"];
    req.session.previousQuestions[1] = ["Do you currently have an international trade advisor?", "Select one answer", "Yes - request details \nNo", "\nNot mandatory"];
    req.session.previousQuestions[2] = ["How many employees work for your business?", "Free text", "Free text", "\nMandatory"];
  }


  res.redirect('/signin/select-team');
})



router.get('/scenario-2', function (req, res)
{
  req.session.externalUser = true;

  req.session.data['event-title'] = "Introduction to exporting workshop";

  req.session.data['hero-image'] = "exporting-generic.jpg"

  req.session.data['event-day-of-the-week'] = "Wednesday";
  req.session.data['event-day'] = "1"
  req.session.data['event-month-name'] = "November";
  req.session.data['event-year'] = "2017"

  req.session.data['event-start-time'] = "10am";
  req.session.data['event-finish-time'] = "1pm";

  req.session.data['full-address-holder'] = "Innovation Centre" + "\n" + "University of Exeter" + "\n" + "Rennes Drive" + "\n" + "Exeter" + "\n" + "EX4 4RN";

  req.session.data['building'] = "Innovation Centre";
  req.session.data['street'] = "University of Exeter, Rennes Drive";
  req.session.data['town'] = "Exeter";
  req.session.data['postcode'] = "EX4 4RN";

  req.session.data['venue-additional-notes'] = "Free onsite parking";
  req.session.data['venue-additional-notes-entered'] == true;


  req.session.data['sectors'] = "All sectors";
  req.session.data['markets'] = "All markets";
  req.session.data['audience-experience'] = "Not yet exporting";

  req.session.data['summary-target-audience'] = "Anyone with a registered business in the South West region who is new to exporting or thinking about it. Open to all industries, and levels of experience - no previous knowledge of exporting is assumed.";
  req.session.data['benefit-input-0'] = "Hear from expert speaker Guy Desiato on what it takes to win new business overseas"; 
  req.session.data['benefit-input-1'] = "Roundtable discussion and workshop on key steps to begin exporting ";
  req.session.data['benefit-input-2'] = "Create your own export growth action plan to take away "; 
  req.session.data['benefit-input-3'] = "Free lunch and refreshments provided";



  req.session.data['event-description'] = `Take your first practical steps towards exporting your products or services with this interactive workshop.

<span style="font-weight:700;">About the speaker: Guy Desiato</span>
Expert speaker Guy Desiato, CEO of Nociar Ltd, has a wealth of exporting experience across a range of sectors and international markets. He'll present some practical first steps that anyone new to or thinking about exporting can take right away to start selling products or services internationally.' +
<a href="#">View speaker's Linkedin profile</a>

Following our expert International Trade Advisers will facilitate a roundtable discussion and interactive workshop, designed to help you produce an outline 6 to 12 month action plan for international export.

<span style="font-weight:700;">What past attendees have said</span>

‘Such an incredible wealth of knowledge and resources tailored to our requirements.‘
- Angela Hall, Barefaced Bee

‘Even as an experienced business person, I learned loads and everything was explained clearly. Very motivational!‘
- Barbara Cox, Mr. Lee's Noodles
`;




  req.session.data['agenda'] = `10am to 10:30am
Welcome and refreshments

10:30am to 11:30am
Expert talk and Q&A with Guy Desiato

11:30am to 1pm
Roundtable discussion and workshop: creating an export growth action plan

1pm to 3pm
Lunch and networking`;


  req.session.data['organiser-name'] = "Department for International Trade South West";
  req.session.data['contact-email'] = "events@businesswest.co.uk";

  req.session.data['eu-logo-selected'] = true;
  req.session.data['dit-logo-selected'] = true; 
  req.session.data['growth-logo-selected'] = true;
  req.session.data['bw-logo-selected'] = true;

  res.redirect('/create-event/preview');
 
})



router.get('/scenario-3', function (req, res)
{
  // External users
  req.session.externalUser = true;

  req.session.data['event-title'] = "Sweden food and drink seminar";

  req.session.data['event-day-of-the-week'] = "Wednesday";
  req.session.data['event-summary'] = "  An excellent opportunity for UK businesses to learn how to take their first steps into one of Europe's most attractive markets.";
  req.session.data['event-day'] = "1"
  req.session.data['event-month-name'] = "November";
  req.session.data['event-year'] = "2017"
  req.session.data['hero-image'] = "food-drink.png"
  req.session.data['event-start-time'] = "10am";
  req.session.data['event-finish-time'] = "1pm";

  req.session.data['full-address-holder'] = "Innovation Centre" + "\n" + "University of Exeter" + "\n" + "Rennes Drive" + "\n" + "Exeter" + "\n" + "EX4 4RN";

  req.session.data['building'] = "Innovation Centre";
  req.session.data['street'] = "University of Exeter, Rennes Drive";
  req.session.data['town'] = "Exeter";
  req.session.data['postcode'] = "EX4 4RN";

  req.session.data['venue-additional-notes'] = "";
  req.session.data['venue-additional-notes-entered'] = false;

  req.session.data['sectors'] = "Food and drink";
  req.session.data['markets'] = "Sweden";
  req.session.data['audience-experience'] = "Not yet exporting" + "\n" + "Occasionally exporting" + "\n" + "Regularly exporting";

  req.session.data['summary-target-audience'] = `Anyone working in the food and drink industry who is interested in exporting products or services to Sweden.

Businesses need to be based in the South West region to register.`;
  req.session.data['benefit-input-0'] = "Hear from DIT speaker Sandra Ideskär, trade expert at the British Embassy in Stockholm"; 
  req.session.data['benefit-input-1'] = "Learn about latest export trends and opportunities in the Swedish food and drink market";
  req.session.data['benefit-input-2'] = "Understand key principles and considerations for exporting to Sweden"; 

  req.session.data['event-description'] = `With its rich cultural heritage and reputation for high quality products and services, Sweden is an excellent target market for UK food and drink companies.

According to the 2017 World Banking Report in 2017, Sweden is the ninth easiest country to do business in and is often cited as one of the most receptive markets to new products and concepts.

<span style="font-weight:700;">About the speaker: Sandra Ideskär</span>
Our expert speaker Sandra Ideskär works for Department for International Trade at the British Embassy in Stockholm, assisting UK companies to export to Sweden. Sandra has a wealth of experience, including posts with the Swedish government in education and international development - as well as time spent working at the charity ActionAid Sweden.
<a href="#">View speaker's Linkedin profile</a>`;

req.session.data['agenda'] = `10am to 10:15am
Welcome and refreshments

10:15am to 11am
Expert talk and Q&A with Sandra Ideskär

11am to 11:30am
Q&A with International Trade Advisers

11:30am to 1pm
Refreshments and networking`;


  req.session.data['organiser-name'] = "Department for International Trade South West";
  req.session.data['contact-email'] = "events@businesswest.co.uk";


  req.session.data['eu-logo-selected'] = true;
  req.session.data['dit-logo-selected'] = true; 
  req.session.data['growth-logo-selected'] = true;
  req.session.data['bw-logo-selected'] = true;

  res.redirect('/register/event-page');
 
})



// GERMANY
router.get('/scenario-4', function (req, res)
{
  req.session.externalUser = true;

  req.session.data['event-title'] = "Doing business in Germany - retail";
  req.session.data['event-summary'] = "Join us for this informative seminar, perfect for UK companies looking to take first steps into the German retail market.";


  req.session.data['hero-image'] = "berlin-bridge.jpg"

  req.session.data['event-day-of-the-week'] = "Friday";
  req.session.data['event-day'] = "20"
  req.session.data['event-month-name'] = "October ";
  req.session.data['event-year'] = "2017"

  req.session.data['event-start-time'] = "10am";
  req.session.data['event-finish-time'] = "12 noon";

  req.session.data['full-address-holder'] = "Northern Design Centre" + "\n" + "Abbott's Hill" + "\n" + "Gateshead" + "\n" + "NE8 3DF";

  req.session.data['building'] = "Northern Design Centre";
  req.session.data['street'] = "Abbott's Hill";
  req.session.data['town'] = "Gateshead";
  req.session.data['postcode'] = "NE8 3DF";

  req.session.data['sectors'] = `Clothing, footwear and fashion
  Giftware, jewellery and tableware
  Retail and luxury
  Textiles, interior textiles, and carpets`;

  req.session.data['venue-additional-notes'] = "Free onsite parking";
  req.session.data['venue-additional-notes-entered'] = true;

  req.session.data['markets'] = "Germany";
  req.session.data['audience-experience'] = "Not yet exporting" + "\n" + "Occasionally exporting" + "\n" + "Regularly exporting";

  req.session.data['summary-target-audience'] = `This event is for retail related small businesses based in the North East with an interest in doing business in Germany.`;


  req.session.data['benefit-input-0'] = "Hear from Miriam Ducke, Senior DIT Trade Adviser for Retail, Fashion and Luxury";
  req.session.data['benefit-input-1'] = "Understand how to take first steps into the German retail market";
  req.session.data['benefit-input-2'] = "Learn about key retail opportunities currently open to UK businesses";
  req.session.data['benefit-input-3'] = "Networking sessions with market representatives and experts";

  req.session.data['event-description'] = `Germany’s resilient economy and central position in the continent has seen it continue to be one of Europe’s most attractive business hubs.

UK businesses are taking full advantage of higher than average consumer confidence, fuelled by consistently low German unemployment and interest rates. With healthy price competition, a variety of purchasing platforms and a wide range of products on offer, Germany represents an ideal business opportunity for UK retailers.

<span style="font-weight:700;">About the speaker: Miriam Ducke</span>

Miriam Ducke is Senior Trade Adviser for DIT Berlin, specialising in Retail and Consumer Goods.

Miriam brings a wealth of experience and expertise across the fields of digital media, TV, and research, spanning multiple international markets.
<a href="#">Visit Miriam’s LinkedIn profile</a>.`;
;

  req.session.data['agenda'] = `10am
Registration

10:25am
Welcome from Sue Beverley, e-Commerce Adviser at Department for International Trade North East

10:30am
Presentation from Miriam Ducke, Senior Trade Adviser for Retail, Fashion and Luxury, DIT Berlin

11:30am
Networking and close`;


  req.session.data['organiser-name'] = "Department for International Trade North East";
  req.session.data['contact-email'] = "northeast@mobile.trade.gov.uk";

  req.session.data['eu-logo-selected'] = true;
  req.session.data['dit-logo-selected'] = true;
  req.session.data['growth-logo-selected'] = true;
  req.session.data['bw-logo-selected'] = false;

  res.redirect('/create-event/preview');

})



/////////// Sports technology in France
router.get('/scenario-5', function (req, res)
{
  req.session.externalUser = true;

  req.session.data['event-title'] = "Sports technology in France";
  req.session.data['event-summary'] = "Join us for a full day of presentations and networking opportunities with a carefully selected group of French sports technology companies.";
  req.session.data['hero-image'] = "france-sport.jpg";

  req.session.data['event-day-of-the-week'] = "Thursday";
  req.session.data['event-day'] = "16"
  req.session.data['event-month-name'] = "November";
  req.session.data['event-year'] = "2017"

  req.session.data['event-start-time'] = "9am";
  req.session.data['event-finish-time'] = "5:30pm";

  req.session.data['full-address-holder'] = "Plexal" + "\n" + "14 East Bay Lane" + "\n" + "London" + "\n" + "E9 5NY";

  req.session.data['building'] = "Plexal";
  req.session.data['street'] = "14 East Bay Lane";
  req.session.data['town'] = "London";
  req.session.data['postcode'] = "E9 5NY";

  req.session.data['venue-additional-notes'] = "Plexal is a sports tech innovation hub near the Queen Elizabeth Olympic Park. There will be an opportunity to visit the Olympic park for those who are interested.";
  req.session.data['venue-additional-notes-entered'] = true;


  req.session.data['sectors'] = `Global sports infrastructure
Software and computer services`;

  req.session.data['markets'] = "France";
  req.session.data['audience-experience'] = "Not yet exporting" + "\n" + "Occasionally exporting" + "\n" + "Regularly exporting";

  req.session.data['summary-target-audience'] = `This event is open to London-based companies that are “new to export” (who have not traded internationally in last 12 months). You must also fit into the category of a  small and medium enterprise.`;


  req.session.data['benefit-input-0'] = "Philipe Baudin, CEO of Sport-Tech France, explains how to pitch to French sports tech companies";
  req.session.data['benefit-input-1'] = "Opportunity to network and hear from specially selected French sports tech companies";
  req.session.data['benefit-input-2'] = "Get practical export advice from DIT sports business experts and partners ";
  req.session.data['benefit-input-3'] = "";


  req.session.data['event-description'] = `Sport is big business in France. Revenue in the French "Sports & Outdoor" segment has totalled £1bn in 2017 alone - and is expected to grow by 8.5 % to a market volume of £1.5bn by 2022.

Technology has impacted every corner of society and every industry - not least, the world of sport. The use of technology in sports has grown rapidly in recent years. From athlete performance enhancement, injury prevention and recovery, to tech that can accurately gather data about every second of competitive team sports. 

Over the past five years, the business of sport has become a £20bn-a-year industry in the UK, supporting some 450,000 jobs. There's never been a better time to invest in this thriving global industry, with one of its key players: France.`;
  ;

  req.session.data['agenda'] = `Tbc`;


  req.session.data['organiser-name'] = "Department for International Trade London";
  req.session.data['contact-email'] = "events@tradelondon.org.uk";

  req.session.data['eu-logo-selected'] = true;
  req.session.data['dit-logo-selected'] = true;
  req.session.data['growth-logo-selected'] = true;
  req.session.data['bw-logo-selected'] = false;

  res.redirect('/create-event/preview');

})



/////////////   Sell your products and services overseas
router.get('/scenario-6', function (req, res)
{
  req.session.externalUser = true;

  req.session.data['event-title'] = "Sell your products and services overseas";
  req.session.data['event-summary'] = "In support of Global Entrepreneurship Week, an afternoon of educational talks designed to help UK small businesses to begin exporting overseas.";

  req.session.data['hero-image'] = "city-photo.jpg"

  req.session.data['event-day-of-the-week'] = "Tuesday";
  req.session.data['event-day'] = "14"
  req.session.data['event-month-name'] = "November";
  req.session.data['event-year'] = "2017"

  req.session.data['event-start-time'] = "2pm";
  req.session.data['event-finish-time'] = "3:30pm";

  req.session.data['full-address-holder'] = "Entrepreneurial Spark Manchester" + "\n" + "1st Floor" + "\n" + "RBS Building, 1 Hardman Boulevard" + "\n" + "Manchester" + "\n" + "M3 3AQ";

  req.session.data['building'] = "Entrepreneurial Spark Manchester";
  req.session.data['street'] = "1st Floor" + "\n" + "RBS Building, 1 Hardman Boulevard";
  req.session.data['town'] = "Manchester";
  req.session.data['postcode'] = "M3 3AQ";

  req.session.data['venue-additional-notes'] = "";
  req.session.data['venue-additional-notes-entered'] = false;

  req.session.data['sectors'] = "All sectors";

  req.session.data['markets'] = "France";
  req.session.data['audience-experience'] = "Not yet exporting" + "\n" + "Occasionally exporting" + "\n" + "Regularly exporting";

  req.session.data['summary-target-audience'] = `This event is open to any companies in the North West that are interested in selling their services or products internationally.`;


  req.session.data['benefit-input-0'] = "Find out how to develop your international sales, access overseas opportunities and get funding with the support of DIT North West";
  req.session.data['benefit-input-1'] = "Get guidance from expert industry professionals on things like international IP protection, banking, tax and legal issues";
  req.session.data['benefit-input-2'] = "Hear from local success stories of businesses that have successfully sold services or products overseas";
  req.session.data['benefit-input-3'] = "";


  req.session.data['event-description'] = `With industry experts claiming that exporting goods abroad makes small businesses more competitive, innovative and raises productivity, winning trade overseas is a key way for companies to kickstart growth and prosper.

But how can small businesses crack international markets? Given the various demands companies need to satisfy to ship their products abroad, expansion can often be a complex and time-consuming process.

This event could provide the initial knowledge and inspiration you need to kick-start your business exporting journey.`;
  ;

  req.session.data['agenda'] = `2pm
Welcome

2:15pm
Overview of DIT North West services and Q&A with Jenny Mooney

3pm
Networking and refreshments
`;


  req.session.data['organiser-name'] = "Department for International Trade North West";
  req.session.data['contact-email'] = "events@tradenw.org";

  req.session.data['eu-logo-selected'] = true;
  req.session.data['dit-logo-selected'] = true;
  req.session.data['growth-logo-selected'] = true;
  req.session.data['bw-logo-selected'] = false;

  res.redirect('/create-event/preview');

})



/////////// Engineering
router.get('/scenario-7', function (req, res)
{
  req.session.externalUser = true;

  req.session.data['event-title'] = "Seminar series: exporting trends and opportunities for manufacturing and engineering companies";
  req.session.data['event-summary'] = "A day of inspiring talks and discussions for manufacturing and engineering companies in the East Midlands interested in exporting their products and services";

  req.session.data['hero-image'] = "manufacturing-photo.jpg"

  req.session.data['event-day-of-the-week'] = "Thursday ";
  req.session.data['event-day'] = "16"
  req.session.data['event-month-name'] = "November";
  req.session.data['event-year'] = "2017"

  req.session.data['event-start-time'] = "9am ";
  req.session.data['event-finish-time'] = "3pm";

  req.session.data['full-address-holder'] = "DIT East Midlands" + "\n" + "The International Trade Centre" + "\n" + "5 Merus Court" + "\n" + "Leicester" + "\n" + "LE19 1RJ";

  req.session.data['building'] = "DIT East Midlands";
  req.session.data['street'] = "The International Trade Centre" + "\n" + "5 Merus Court";
  req.session.data['town'] = "Leicester";
  req.session.data['postcode'] = "LE19 1RJ";

  req.session.data['venue-additional-notes'] = "Limited visitor parking is available at Merus Court. If full, a large pay and display car park is located around the corner, on Meridian Way.";
  req.session.data['venue-additional-notes-entered'] = true;

  req.session.data['sectors'] = `Mechanical electrical process engineering
Metallurgical process plant`;

  req.session.data['markets'] = "Brazil" + "\n" + "China" + "\n" + "Dubai" + "\n" + "Mexico"  + "\n" + "United Arab Emirates";
  req.session.data['audience-experience'] = "Not yet exporting" + "\n" + "Occasionally exporting" + "\n" + "Regularly exporting";

  req.session.data['summary-target-audience'] = `This event is for manufacturing and engineering companies based in the East Midlands that have an interest in doing business overseas - particularly in Central and South America, and the Middle East.`;


  req.session.data['benefit-input-0'] = "Get expert advice, direct from some of the most successful manufacturing and engineering firms in the East Midlands";
  req.session.data['benefit-input-1'] = "Discuss latest manufacturing trends and hear companies explain exactly how they successfully sell to attractive markets such as South America, China and Middle East.";
  req.session.data['benefit-input-2'] = "Attend roundtable discussions dedicated to technical aspects of selling overseas - led by representatives from Intellectual Property Office and DIT’s Trade Policy team";
  req.session.data['benefit-input-3'] = "Free lunch and refreshments provided";


  req.session.data['event-description'] = `The UK is the 10th largest goods exporter in the world and the vast majority of engineers surveyed (78%) believe that it is the quality of UK products that holds the most value for overseas customers.

For UK manufacturing and engineering firms, capitalising on global export opportunities, particularly in South America and China, is more important than ever.

UK based engineering companies that export are becoming increasingly dependent on overseas trade for their continued survival - with more than a third generating more than 80% of their turnover from these foreign markets.

This series of seminars are designed to guide and inspire East Midlands-based companies to take steps towards exporting their products overseas.
`;



  req.session.data['agenda'] = `9am
Welcome, Scott Knowles, Chief Executive, East Midlands Chamber

9:15am
How to deliver value and grow your business in Mexico and Brazil

11:00am
Creating competitive supply chains for Middle East markets

12:30pm
Lunch and networking

1:30pm
Roundtables: technical and legal considerations for selling overseas with DIT experts

2:15pm
China's trend-shaping technologies - Philip Skipper, Head of Business Development, Vodafone Internet of Things (IoT)
`;


  req.session.data['organiser-name'] = "Department for International Trade East Midlands";
  req.session.data['contact-email'] = "events@tradenw.org";

  req.session.data['eu-logo-selected'] = true;
  req.session.data['dit-logo-selected'] = true;
  req.session.data['growth-logo-selected'] = true;
  req.session.data['bw-logo-selected'] = false;

  res.redirect('/create-event/preview');

})



router.get('/scenario-previous-questions', function (req, res)
{
  if(req.session.previousQuestions.length == 0)
  {
    req.session.previousQuestions[0] = ["Do you have any food allergies?", "Select one answer", "Yes - request details \nNo", "\nNot mandatory"];
  }

  res.redirect('/scenario-1');
})







///////////////////   ATTENDEE USER  /////////////////////////////////////////


router.get('/register-for-event-attendee', function (req, res)
{
  req.session.externalUser = true;

  res.redirect('/scenario-3');
})



router.get('/register-for-event', function (req, res)
{
  res.redirect('/register/sign-in-or-create-account');
})











////////////////////////  ORGANISER USER  /////////////////////////////////////////



//  SELETC TEAMS
router.get('/signin/select-team-onwards', function (req, res)
{
  var errorMissingTeamSelection = false;

  console.log("THE TEAM IS ---**-*-   " + req.session.data['radio-region']);


  if (req.session.data['radio-region'] == undefined || req.session.data['radio-region'] == "")
  {
    errorMissingTeamSelection = true;
  }
  else
  {
    req.session.regionName = req.session.data['radio-region'];
  }

  if ( errorMissingTeamSelection == false )
  {
    res.redirect('/homepage-prelude');
  }
  else
  {
    res.render('signin/select-team',
        {
          'errorsExist' : true,
          'errorTeamMissing': errorMissingTeamSelection
        }
    );
  }

})





// SIGNING PAGE
router.get('/homepage-prelude', function (req, res)
{
  if(req.session.data['radio-region'] == undefined   ||  req.session.data['radio-region'] == ""  )
  {
    req.session.regionName = req.session.data['radio-region'];
    req.session.data['organiser-name'] = "Department for International Trade " + req.session.regionName;
  }
  else //if(req.session.data['radio-region'] == "East of England")
  {
    req.session.regionName = req.session.data['radio-region'];
    req.session.data['organiser-name'] = "Department for International Trade " + req.session.regionName;
  }


  // DECEMBER 2017 - guy is not sure what these few lines are for
  //console.log("the first event from data is " + req.session.eventsDraftBoolean[0]);
  console.log("event title is saved as HOMEPAGE LENGTH  " + req.session.eventsDraft.length);
  if(1 <  req.session.eventsDraft.length )
  {
    console.log("event title is saved as HOMEPAGE" + req.session.eventsDraft[0][0]);
  }

  res.redirect('account/index');
})





// CREATE EVENT SETUP
// VENUE PAGE ONWARDS BUTTON

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



router.get('/create-event/new', function (req, res)
{
  req.session.showPublishBlockingPage = false;
  req.session.data['radio-link-access'] = "";

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

  for(var y=0; y<5; y++)
  {
    req.session.data['benefit-input-'+y] = "";
  }

  req.session.liveOrNot = false;

  res.redirect('/create-event/organiser');
})


router.get('/create-event/', function (req, res)
{

  res.redirect('/create-event/organiser');
})




router.get('/create-event/organiser-onwards', function (req, res)
{
  var errorMissingOrganiser = false;

  var errorCheckboxEmailSelected = false;
  var errorMissingEmail = false;
  var errorInvalidEmail = false;

  var errorCheckboxPhoneSelected = false;
  var errorMissingPhone = false;
  var errorInvalidPhone = false;

  var errorMissingInternalContact = false;



  if(req.session.data['organiser-name'] != undefined)
  {
    if(req.session.data['organiser-name'] == "")
    {
      errorMissingOrganiser = true;
      req.session.data['organiser-name-error'] = true;
    }
  }


  if(req.session.data['contact-email'] != undefined)
  {
    // Check if the email checkbos is selected
    if(req.session.data['checkbox-contact-email'] != undefined )
    {
      errorCheckboxEmailSelected = true;

      // Check if the emil is empty
      if(req.session.data['contact-email'] == "")
      {
        errorMissingEmail = true;
        req.session.data['contact-email-error'] = true;
      }
      else // Check if the email has valid characters
      {
        if( (req.session.data['contact-email'].indexOf("@") == -1)  ||  (req.session.data['contact-email'].indexOf(".") == -1)  )
        {
          errorInvalidEmail = true;
          req.session.data['contact-email-error'] = true;
        }
      }
    }
    else // save that they didn't want an email recording
    {
      req.session.data['contact-email'] = "Not entered"
    }
  }


  if(req.session.data['contact-phone'] != undefined)
  {
    // Check if the email checkbos is selected
    if(req.session.data['checkbox-contact-phone'] != undefined )
    {
      errorCheckboxPhoneSelected = true;

      // Check if phone field is empty
      if (req.session.data['contact-phone'] == "")
      {
        errorMissingPhone = true;
        req.session.data['contact-phone-error'] = true;
      }
      else // Check if the phone number is invalid
      {
        var tempString = req.session.data['contact-phone'].replace(/\s/g, '');
        if ( isNaN(tempString) == true )
        {
          errorInvalidPhone = true;
          req.session.data['contact-phone-error'] = true;
        }
      }
    }
    else // save that they didn't want a phone number recording
    {
      req.session.data['contact-phone'] = "Not entered"
    }
  }

  if(req.session.data['owner-name'] != undefined)
  {
    if(req.session.data['owner-name'] == "")
    {
      errorMissingInternalContact = true;
      req.session.data['owner-name-error'] = true;
    }
  }


  // ERRORS OR PROCEED
  if( (errorMissingOrganiser || errorMissingEmail || errorInvalidEmail  || errorMissingPhone || errorInvalidPhone || errorMissingInternalContact) == false)
  {
    req.session.data['organiser-name-error'] = false;
    req.session.data['contact-email-error'] = false;
    req.session.data['contact-phone-error'] = false;
    req.session.data['owner-name-error'] = false;

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
    res.render('create-event/organiser',
        {
          'errorsExist': true,
          'errorOrganiserMissing': errorMissingOrganiser,

          'errorEmailSelected': errorCheckboxEmailSelected,
          'errorEmailMissing': errorMissingEmail,
          'errorInvalidEmail': errorInvalidEmail,

          'errorPhoneSelected': errorCheckboxPhoneSelected,
          'errorPhoneMissing': errorMissingPhone,
          'errorPhoneInvalid': errorInvalidPhone,

          'errorInternalContactMissing': errorMissingInternalContact
        }
    );
  }
})


router.get('/create-event/organiser-skip', function (req, res)
{

  if(req.session.data['organiser-name'] != undefined)
  {
    if(req.session.data['organiser-name'] == "")
    {
      req.session.data['organiser-name-error'] = true;
    }
    else
    {
      req.session.data['organiser-name-error'] = false;
    }
  }

  if(req.session.data['contact-email'] != undefined)
  {
    // Check if the email checkbos is selected
    if(req.session.data['checkbox-contact-email'] != undefined )
    {
      errorCheckboxEmailSelected = true;

      // Check if the emil is empty
      if(req.session.data['contact-email'] == "")
      {
        req.session.data['contact-email-error'] = true;
      }
      else // Check if the email has valid characters
      {
        if( (req.session.data['contact-email'].indexOf("@") == -1)  ||  (req.session.data['contact-email'].indexOf(".") == -1)  )
        {
          req.session.data['contact-email-error'] = true;
        }
        else
        {
          req.session.data['contact-email-error'] = false;
        }
      }
    }
    else // save that they didn't want an email recording
    {
      req.session.data['contact-email-error'] = false;
      req.session.data['contact-email'] = "Not entered"
    }
  }


  if(req.session.data['contact-phone'] != undefined)
  {
    // Check if the email checkbos is selected
    if(req.session.data['checkbox-contact-phone'] != undefined )
    {
      errorCheckboxPhoneSelected = true;

      // Check if phone field is empty
      if (req.session.data['contact-phone'] == "")
      {
        req.session.data['contact-phone-error'] = true;
      }
      else // Check if the phone number is invalid
      {
        var tempString = req.session.data['contact-phone'].replace(/\s/g, '');
        if ( isNaN(tempString) == true )
        {
          req.session.data['contact-phone-error']  = true;
        }
        else
        {
          req.session.data['contact-phone-error'] = false;
        }
      }
    }
    else // save that they didn't want a phone number recording
    {
      req.session.data['contact-phone-error'] = false;
      req.session.data['contact-phone'] = "Not entered"
    }
  }

  if(req.session.data['owner-name'] != undefined)
  {
    if(req.session.data['owner-name'] == "")
    {
      req.session.data['owner-name-error'] = true;
    }
    else
    {
      req.session.data['owner-name-error'] = false;
    }
  }

  // Continue on regardless of errors
  res.redirect('/create-event/date');

})







// DATE
router.get('/create-event/date-onwards', function (req, res)
{
  // Save event date
  req.session.data['event-day'];
  req.session.data['event-month'];
  req.session.data['event-year'];

  //DATE ERRROR STATES
  var errorDayMissing= false
  var errorDayInvalid = false

  var errorMonthMissing = false;
  var errorMonthInvalid = false;

  var errorYearMissing = false;
  var errorYearInvalid = false;

  var errorMissingDate = false;
  var errorInvalidDate = false;

  var dateInThePast = false;


  // TIME RROR STATES
  var errorStartHourMissing = false;
  var errorStartHourInvalid = false;
  var errorStartMinsInvalid = false;

  var errorMissingStartTime = false;
  var errorInvalidStartTime = false;


  var errorFinishHourMissing = false;
  var errorFinishHourInvalid = false;
  var errorFinishMinsInvalid = false;

  var errorMissingFinishTime = false;
  var errorInvalidFinishTime = false;

  var errorFinishTimeBeforeStartTime = false;



  // DAY
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  if (req.session.data['event-day'] != undefined)
  {
    if(req.session.data['event-day'] == "")
    {
      errorDayMissing = true;
      errorMissingDate = true;
    }
    else if(1 <= req.session.data['event-day'] && req.session.data['event-day'] <= 31)
    {}
    else
    {
      errorDayInvalid = true;
      errorInvalidDate = true;
    }
  }



  //  MONTH
  var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  //console.log("**************" + req.session.data['event-month'] + "*****************");

  if (req.session.data['event-month'] != undefined)
  {
    if(req.session.data['event-month'] == "")
    {
      errorMonthMissing = true;
      errorMissingDate = true;
      //console.log("*************MISSING MONTH**************");
    }
    else if(1 <= req.session.data['event-month'] && req.session.data['event-month'] <= 12)
    {
      req.session.data['event-month-name'] =  monthNames[req.session.data['event-month']-1];
    }
    else
    {
      errorMonthInvalid = true;
      errorInvalidDate = true;
    }
  }
  else
  {
    console.log("*************UNEFINED**************");
  }


  // YEAR
  if (req.session.data['event-year'] != undefined)
  {
    if(req.session.data['event-year'] == "")
    {
      errorYearMissing = true;
      errorMissingDate = true;
    }
    if(2017 <= req.session.data['event-year']  &&  req.session.data['event-year'] <= 2025)
    {}
    else
    {
      errorYearInvalid = true;
      errorInvalidDate = true;
    }
  }



  // CHECK IF DATE IS IN THE PAST
  if((errorMissingDate || errorInvalidDate) == false)
  {
    var currentDate = new Date();
    var enteredDate = new Date();
    enteredDate.setFullYear(req.session.data['event-year'], req.session.data['event-month']-1, req.session.data['event-day']);

    req.session.data['event-day-of-the-week'] = days[enteredDate.getDay()];

    //console.log("THE CURRENT DTE TIME IS " + currentDate);
    //console.log("THE ENTERED DATE TIME IS " + enteredDate);

    if(enteredDate < currentDate)
    {
      dateInThePast = true;
    }
    else
    {
      // SAVE THE DATEs FOR CLOSING REG TIME
      var oneDayBefore = new Date(enteredDate.getTime());
      oneDayBefore.setDate(enteredDate.getDate() - 1 );

      var twoDaysBefore = new Date(enteredDate.getTime());
      twoDaysBefore.setDate(enteredDate.getDate() - 2 );

      var threeDaysBefore = new Date(enteredDate.getTime());
      threeDaysBefore.setDate(enteredDate.getDate() - 3 );

      var fourDaysBefore = new Date(enteredDate.getTime());
      fourDaysBefore.setDate(enteredDate.getDate() - 4 );

      req.session.data['days-before-1'] = "1 day before - " + days[oneDayBefore.getDay()] + "  " + oneDayBefore.getDate() + "  " +  monthNames[oneDayBefore.getMonth()] + "  " +  oneDayBefore.getFullYear();
      req.session.data['days-before-2'] = "2 days before - " + days[twoDaysBefore.getDay()] + "  " + twoDaysBefore.getDate() + "  " +  monthNames[twoDaysBefore.getMonth()] + "  " +  twoDaysBefore.getFullYear();
      req.session.data['days-before-3'] = "3 days before - " + days[threeDaysBefore.getDay()] + "  " + threeDaysBefore.getDate() + "  " +  monthNames[threeDaysBefore.getMonth()] + "  " +  threeDaysBefore.getFullYear();
      req.session.data['days-before-4'] = "4 days before - " + days[fourDaysBefore.getDay()] + "  " + fourDaysBefore.getDate() + "  " +  monthNames[fourDaysBefore.getMonth()] + "  " +  fourDaysBefore.getFullYear();
    }

    //console.log("THE YEAR BEFORE IS +++++++++++ " + oneDayBefore.getFullYear());
    //console.log("THE DAY BEFORE IS +++++++++++ " + days[oneDayBefore.getDay()] + "  " + oneDayBefore.getDate() + "  " +  monthNames[oneDayBefore.getMonth()] + "  " +  oneDayBefore.getFullYear());
  }





  //START TIME
  if (req.session.data['start-hours'] != undefined)
  {
    if (req.session.data['start-hours']  == "")
    {
      errorStartHourMissing = true;
      errorMissingStartTime = true;
    }
    // HOURS CHECK
    else if (0 <= req.session.data['start-hours'] && req.session.data['start-hours'] <= 23)
    {   }
    else
    {
      errorStartHourInvalid = true;
      errorInvalidStartTime = true;
      //console.log("start code checker  run  and error");
    }
  }

  if (req.session.data['start-minutes'] != undefined )
  {
    // Mins can be empty, assume 00
    if (req.session.data['start-minutes']  == "")
    {
      if((errorStartHourMissing  || errorStartHourInvalid) == false)
      {
        req.session.data['start-minutes'] = "00";
      }
    }
    if(0 <= req.session.data['start-minutes'] && req.session.data['start-minutes'] <= 59)
    { }
    else
    {
      errorStartMinsInvalid = true;
      errorInvalidStartTime = true;
    }
  }

  // IF NO ERRORS SAVE THE DATA
  if(errorInvalidStartTime == false  &&  errorMissingStartTime == false)
  {
    req.session.data['event-start-time'] = req.session.data['start-hours'] + ":" + req.session.data['start-minutes'];
  }




  //FINISH TIME
  if (req.session.data['finish-hours'] != undefined )
  {
    // HOURS CHECK
    if (req.session.data['finish-hours'] == "")
    {
      errorFinishHourMissing = true;
      errorMissingFinishTime = true;
    }
    if (0 <= req.session.data['finish-hours'] && req.session.data['finish-hours'] <= 23)
    { }
    else
    {
      errorFinishHourInvalid = true;
      errorInvalidFinishTime = true;
    }
  }

  if (req.session.data['finish-minutes'] != undefined)
  {
    // MINUTES CHECK
    if (req.session.data['finish-minutes']  == "")
    {
      // min can be empty if the hours are valid, assume 00
      if((errorStartHourMissing  || errorStartHourInvalid) == false)
      {
        req.session.data['finish-minutes'] = "00";
      }
    }
    if(0 <= req.session.data['finish-minutes'] && req.session.data['finish-minutes'] <= 59)
    { }
    else
    {
      errorFinishMinsInvalid = true;
      errorInvalidFinishTime = true;
    }

    // IF NO ERRORS SAVE THE DATA
    if(errorFinishTimeBeforeStartTime == false)
    {
      req.session.data['event-finish-time'] =  req.session.data['finish-hours'] + ":" + req.session.data['finish-minutes'];
    }
  }


  // CHECK if the finish time is before the start time.
  if( (errorMissingStartTime || errorInvalidStartTime  || errorMissingFinishTime  || errorInvalidFinishTime ) == false)
  {
    console.log("the finish --" + req.session.data['finish-hours'] + "-- start --" + req.session.data['start-hours'] + "--");

    if( parseInt(req.session.data['finish-hours']) < parseInt( req.session.data['start-hours']) )
    {
      errorFinishTimeBeforeStartTime = true;
      console.log("the finish smaller than the start time");
    }
    else if( parseInt(req.session.data['finish-hours']) == parseInt(req.session.data['start-hours']))
    {
      if( parseInt(req.session.data['finish-minutes']) < parseInt(req.session.data['start-minutes']) )
      {
        errorFinishTimeBeforeStartTime = true;
      }
    }
  }


  console.log("errorDayMissing " + errorDayMissing );
  console.log("errorDayInvalid " + errorDayInvalid);
  console.log("errorMonthMissing " + errorMonthMissing);
  console.log("errorMonthInvalid " + errorMonthInvalid);
  console.log("errorYearMissing " + errorYearMissing);
  console.log("errorYearInvalid " + errorYearInvalid);


  // no errors
  if( (errorMissingDate || errorInvalidDate || dateInThePast || errorMissingStartTime || errorInvalidStartTime ||
      errorMissingFinishTime || errorInvalidFinishTime || errorFinishTimeBeforeStartTime ) == false)
  {
    req.session.data['date-error'] = false;
    req.session.data['time-error'] = false;

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


          //DATE ERRROR STATES
          'errorMissingDay': errorDayMissing,
          'errorInvalidDay': errorDayInvalid,

          'errorMissingMonth': errorMonthMissing,
          'errorInvalidMonth': errorMonthInvalid,

          'errorMissingYear': errorYearMissing,
          'errorInvalidYear': errorYearInvalid,

          'errorDateMissing': errorMissingDate,
          'errorDateInvalid': errorInvalidDate,

          'errorDateInPast': dateInThePast,


          // TIME ERROR STATES
          'errorMissingStartHour': errorStartHourMissing,
          'errorInvalidStartHour': errorStartHourInvalid,
          'errorInvalidStartMins': errorStartMinsInvalid,

          'errorStartTimeMissing': errorMissingStartTime,
          'errorStartTimeInvalid': errorInvalidStartTime,

          'errorMissingFinishHour': errorFinishHourMissing,
          'errorInvalidFinishHour': errorFinishHourInvalid,
          'errorInvalidFinishMins': errorFinishMinsInvalid,

          'errorFinishTimeMissing': errorMissingFinishTime,
          'errorFinishTimeInvalid': errorInvalidFinishTime,

          'errorStartTimeAfterFinishTime': errorFinishTimeBeforeStartTime

        }
    );
  }

})


// CREATE EVENT ONWARDS TO NEXT PAGE
router.get('/create-event/date-skip', function (req, res)
{
  // Save event date
  req.session.data['event-day'];
  req.session.data['event-month'];
  req.session.data['event-year'];

  //DATE ERRROR STATES
  var errorDayMissing= false
  var errorDayInvalid = false

  var errorMonthMissing = false;
  var errorMonthInvalid = false;

  var errorYearMissing = false;
  var errorYearInvalid = false;

  var errorMissingDate = false;
  var errorInvalidDate = false;

  var dateInThePast = false;


  // TIME RROR STATES
  var errorStartHourMissing = false;
  var errorStartHourInvalid = false;
  var errorStartMinsInvalid = false;

  var errorMissingStartTime = false;
  var errorInvalidStartTime = false;


  var errorFinishHourMissing = false;
  var errorFinishHourInvalid = false;
  var errorFinishMinsInvalid = false;

  var errorMissingFinishTime = false;
  var errorInvalidFinishTime = false;

  var errorFinishTimeBeforeStartTime = false;



  // DAY
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  if (req.session.data['event-day'] != undefined)
  {
    if(req.session.data['event-day'] == "")
    {
      errorDayMissing = true;
      errorMissingDate = true;
    }
    else if(1 <= req.session.data['event-day'] && req.session.data['event-day'] <= 31)
    {}
    else
    {
      errorDayInvalid = true;
      errorInvalidDate = true;
    }
  }



  //  MONTH
  var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  //console.log("**************" + req.session.data['event-month'] + "*****************");

  if (req.session.data['event-month'] != undefined)
  {
    if(req.session.data['event-month'] == "")
    {
      errorMonthMissing = true;
      errorMissingDate = true;
      //console.log("*************MISSING MONTH**************");
    }
    else if(1 <= req.session.data['event-month'] && req.session.data['event-month'] <= 12)
    {
      req.session.data['event-month-name'] =  monthNames[req.session.data['event-month']-1];
    }
    else
    {
      errorMonthInvalid = true;
      errorInvalidDate = true;
    }
  }
  else
  {
    console.log("*************UNEFINED**************");
  }


  // YEAR
  if (req.session.data['event-year'] != undefined)
  {
    if(req.session.data['event-year'] == "")
    {
      errorYearMissing = true;
      errorMissingDate = true;
    }
    if(0 <= req.session.data['event-year']  &&  req.session.data['event-year'] <= 3000)
    {}
    else
    {
      errorYearInvalid = true;
      errorInvalidDate = true;
    }
  }



  // CHECK IF DATE IS IN THE PAST
  if((errorMissingDate || errorInvalidDate) == false)
  {
    var currentDate = new Date();
    var enteredDate = new Date();
    enteredDate.setFullYear(req.session.data['event-year'], req.session.data['event-month']-1, req.session.data['event-day']);

    req.session.data['event-day-of-the-week'] = days[enteredDate.getDay()];

    //console.log("THE CURRENT DTE TIME IS " + currentDate);
    //console.log("THE ENTERED DATE TIME IS " + enteredDate);

    if(enteredDate < currentDate)
    {
      dateInThePast = true;
    }
    else
    {
      // SAVE THE DATEs FOR CLOSING REG TIME
      var oneDayBefore = new Date(enteredDate.getTime());
      oneDayBefore.setDate(enteredDate.getDate() - 1 );

      var twoDaysBefore = new Date(enteredDate.getTime());
      twoDaysBefore.setDate(enteredDate.getDate() - 2 );

      var threeDaysBefore = new Date(enteredDate.getTime());
      threeDaysBefore.setDate(enteredDate.getDate() - 3 );

      var fourDaysBefore = new Date(enteredDate.getTime());
      fourDaysBefore.setDate(enteredDate.getDate() - 4 );

      req.session.data['days-before-1'] = "1 day before - " + days[oneDayBefore.getDay()] + "  " + oneDayBefore.getDate() + "  " +  monthNames[oneDayBefore.getMonth()] + "  " +  oneDayBefore.getFullYear();
      req.session.data['days-before-2'] = "2 days before - " + days[twoDaysBefore.getDay()] + "  " + twoDaysBefore.getDate() + "  " +  monthNames[twoDaysBefore.getMonth()] + "  " +  twoDaysBefore.getFullYear();
      req.session.data['days-before-3'] = "3 days before - " + days[threeDaysBefore.getDay()] + "  " + threeDaysBefore.getDate() + "  " +  monthNames[threeDaysBefore.getMonth()] + "  " +  threeDaysBefore.getFullYear();
      req.session.data['days-before-4'] = "4 days before - " + days[fourDaysBefore.getDay()] + "  " + fourDaysBefore.getDate() + "  " +  monthNames[fourDaysBefore.getMonth()] + "  " +  fourDaysBefore.getFullYear();
    }

    //console.log("THE YEAR BEFORE IS +++++++++++ " + oneDayBefore.getFullYear());
    //console.log("THE DAY BEFORE IS +++++++++++ " + days[oneDayBefore.getDay()] + "  " + oneDayBefore.getDate() + "  " +  monthNames[oneDayBefore.getMonth()] + "  " +  oneDayBefore.getFullYear());
  }





  //START TIME
  if (req.session.data['start-hours'] != undefined)
  {
    if (req.session.data['start-hours']  == "")
    {
      errorStartHourMissing = true;
      errorMissingStartTime = true;
    }
    // HOURS CHECK
    else if (0 <= req.session.data['start-hours'] && req.session.data['start-hours'] <= 23)
    {   }
    else
    {
      errorStartHourInvalid = true;
      errorInvalidStartTime = true;
      //console.log("start code checker  run  and error");
    }
  }

  if (req.session.data['start-minutes'] != undefined )
  {
    // Mins can be empty, assume 00
    if (req.session.data['start-minutes']  == "")
    {
      if((errorStartHourMissing  || errorStartHourInvalid) == false)
      {
        req.session.data['start-minutes'] = "00";
      }
    }
    if(0 <= req.session.data['start-minutes'] && req.session.data['start-minutes'] <= 59)
    { }
    else
    {
      errorStartMinsInvalid = true;
      errorInvalidStartTime = true;
    }
  }

  // IF NO ERRORS SAVE THE DATA
  if(errorInvalidStartTime == false  &&  errorMissingStartTime == false)
  {
    req.session.data['event-start-time'] = req.session.data['start-hours'] + ":" + req.session.data['start-minutes'];
  }




  //FINISH TIME
  if (req.session.data['finish-hours'] != undefined )
  {
    // HOURS CHECK
    if (req.session.data['finish-hours'] == "")
    {
      errorFinishHourMissing = true;
      errorMissingFinishTime = true;
    }
    if (0 <= req.session.data['finish-hours'] && req.session.data['finish-hours'] <= 23)
    { }
    else
    {
      errorFinishHourInvalid = true;
      errorInvalidFinishTime = true;
    }
  }

  if (req.session.data['finish-minutes'] != undefined)
  {
    // MINUTES CHECK
    if (req.session.data['finish-minutes']  == "")
    {
      // min can be empty if the hours are valid, assume 00
      if((errorStartHourMissing  || errorStartHourInvalid) == false)
      {
        req.session.data['finish-minutes'] = "00";
      }
    }
    if(0 <= req.session.data['finish-minutes'] && req.session.data['finish-minutes'] <= 59)
    { }
    else
    {
      errorFinishMinsInvalid = true;
      errorInvalidFinishTime = true;
    }

    // IF NO ERRORS SAVE THE DATA
    if(errorFinishTimeBeforeStartTime == false)
    {
      req.session.data['event-finish-time'] =  req.session.data['finish-hours'] + ":" + req.session.data['finish-minutes'];
    }
  }


  // CHECK if the finish time is before the start time.
  if( (errorMissingStartTime || errorInvalidStartTime  || errorMissingFinishTime  || errorInvalidFinishTime ) == false)
  {
    console.log("the finish --" + req.session.data['finish-hours'] + "-- start --" + req.session.data['start-hours'] + "--");

    if( parseInt(req.session.data['finish-hours']) < parseInt( req.session.data['start-hours']) )
    {
      errorFinishTimeBeforeStartTime = true;
      console.log("the finish smaller than the start time");
    }
    else if( parseInt(req.session.data['finish-hours']) == parseInt(req.session.data['start-hours']))
    {
      if( parseInt(req.session.data['finish-minutes']) < parseInt(req.session.data['start-minutes']) )
      {
        errorFinishTimeBeforeStartTime = true;
      }
    }
  }


  console.log("errorDayMissing " + errorDayMissing );
  console.log("errorDayInvalid " + errorDayInvalid);
  console.log("errorMonthMissing " + errorMonthMissing);
  console.log("errorMonthInvalid " + errorMonthInvalid);
  console.log("errorYearMissing " + errorYearMissing);
  console.log("errorYearInvalid " + errorYearInvalid);


  // Save that filds were not completed
  if( (errorMissingDate || errorInvalidDate || dateInThePast) == true)
  {
    req.session.data['date-error'] = true;
  }
  else
  {
    req.session.data['date-error'] = false;
  }

  if( (errorMissingStartTime || errorInvalidStartTime || errorMissingFinishTime || errorInvalidFinishTime || errorFinishTimeBeforeStartTime ) == true)
  {
    req.session.data['time-error'] = true;
  }
  else
  {
    req.session.data['time-error'] = false;
  }

  res.redirect('/create-event/venue');


})





// VENUE PAGE ONWARDS BUTTON
router.get('/create-event/venue-onwards', function (req, res)
{
  console.log(req.session.data['full-address-holder']);

  var errorOnVenueName = false;
  var errorOnBuilding = false;
  var errorOnTown = false;
  var errorOnPostcode = false;
  var errorOnPostcodeMissing = false;

  req.session.data['full-address-holder'] = "";



  // Check the venue name isn't empty
  if(req.session.data['venue'] == "")
  {
    errorOnVenueName = true;
  }
  else
  {
    errorOnVenueName = false;
    req.session.data['full-address-holder'] = req.session.data['venue'];
  }


  // If building is empty then throw error;
  if(req.session.data['building'] == ""  || req.session.data['building'] == undefined )
  {
    errorOnBuilding = true;
  }
  else
  {
    errorOnBuilding = false;
    req.session.data['full-address-holder'] = req.session.data['full-address-holder'] + "\n" + req.session.data['building'];
  }

  // Add street to output if the field is not empty
  if(req.session.data['street'] != "")
  {
    req.session.data['full-address-holder'] = req.session.data['full-address-holder'] + "\n" + req.session.data['street'];
  }


  // If town is empty then throw error;
  if(req.session.data['town'] == ""  || req.session.data['town'] == undefined )
  {
    errorOnTown = true;
  }
  else
  {
    errorOnTown = false;
    req.session.data['full-address-holder'] = req.session.data['full-address-holder'] + "\n" + req.session.data['town'];
  }


  // If building is empty then throw error;
  if(req.session.data['postcode'] == "" || req.session.data['postcode'] == undefined )
  {
    errorOnPostcodeMissing = true;
  }
  else if(req.session.data['postcode'].length < 6 )
  {
    errorOnPostcode = true;
  }
  else
  {
    req.session.data['full-address-holder'] = req.session.data['full-address-holder'] + "\n" + req.session.data['postcode'];
  }


  console.log("-----=-=-=  THE VENUE IS \n" + req.session.data['full-address-holder']);


  req.session.data['map-url'] = "https://www.google.co.uk/maps/place/The+Innovation+Centre/@50.7369133,-3.5307244,16.25z/data=!4m5!3m4!1s0x0:0x9a5f61816c99672c!8m2!3d50.7381353!4d-3.5306391";


  if( req.session.data['venue-additional-notes'] == "")
  {
    req.session.data['venue-additional-notes-entered'] = false;
  }
  else
  {
    req.session.data['venue-additional-notes-entered'] = true;
  }



  // no errors
  if( (errorOnVenueName || errorOnBuilding || errorOnTown || errorOnPostcode || errorOnPostcodeMissing) == false)
  {
    req.session.data['full-address-holder-error'] = false;

    if(req.session.changingFromSummary == true)
    {
      res.redirect('/create-event/summary-prelude');
    }
    else
    {
      res.redirect('/create-event/title');
    }
  }
  else
  {
    res.render('create-event/venue',
        {
          'anError' : true,
          'errorVenueName': errorOnVenueName,
          'errorBuilding': errorOnBuilding,
          'errorTown': errorOnTown,
          'errorPostcodeMissing': errorOnPostcodeMissing,
          'errorPostcode': errorOnPostcode
        }
    );
  }
})

router.get('/create-event/venue-check-map', function (req, res)
{
  console.log(req.session.data['full-address-holder']);

  var errorOnVenueName = false;
  var errorOnBuilding = false;
  var errorOnTown = false;
  var errorOnPostcode = false;
  var errorOnPostcodeMissing = false;

  req.session.data['full-address-holder'] = "";



  // Check the venue name isn't empty
  if(req.session.data['venue'] == "")
  {
    errorOnVenueName = true;
  }
  else
  {
    req.session.data['full-address-holder'] = req.session.data['venue'];
  }


  // If building is empty then throw error;
  if(req.session.data['building'] == "")
  {
    errorOnBuilding = true;
  }
  else
  {
    req.session.data['full-address-holder'] = req.session.data['full-address-holder'] + "\n" + req.session.data['building'];
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
    errorOnPostcodeMissing = true;
  }
  else if(req.session.data['postcode'].length < 6)
  {
    errorOnPostcode = true;
  }
  else
  {
    req.session.data['full-address-holder'] = req.session.data['full-address-holder'] + "\n" + req.session.data['postcode'];
  }


  console.log("-----=-=-=  THE VENUE IS \n" + req.session.data['full-address-holder']);



  if( req.session.data['venue-additional-notes'] == "")
  {
    req.session.data['venue-additional-notes-entered'] = false;
  }
  else
  {
    req.session.data['venue-additional-notes-entered'] = true;
  }



  // no errors
  if( (errorOnVenueName || errorOnBuilding || errorOnTown || errorOnPostcode || errorOnPostcodeMissing) == false)
  {
    res.redirect('/create-event/venue-map-redirect');
  }
  else
  {
    res.render('create-event/venue',
        {
          'anError' : true,
          'errorVenueName': errorOnVenueName,
          'errorBuilding': errorOnBuilding,
          'errorTown': errorOnTown,
          'errorPostcodeMissing': errorOnPostcodeMissing,
          'errorPostcode': errorOnPostcode
        }
    );
  }
})


router.get('/create-event/venue-skip', function (req, res)
{
  var errorOnVenueName = false;
  var errorOnBuilding = false;
  var errorOnTown = false;
  var errorOnPostcode = false;
  var errorOnPostcodeMissing = false;



  console.log(req.session.data['full-address-holder']);

  req.session.data['full-address-holder'] = "";

  // Check the venue name isn't empty
  if(req.session.data['venue'] == "")
  {
    errorOnVenueName = true;
  }
  else
  {
    req.session.data['full-address-holder'] = req.session.data['venue'];
  }


  // If building is empty then throw error;
  if(req.session.data['building'] == "")
  {
    errorOnBuilding = true;
  }
  else
  {
    req.session.data['full-address-holder'] = req.session.data['full-address-holder'] + "\n" + req.session.data['building'];
  }

  // Add street to output if the field is not empty
  if(req.session.data['street'] != "")
  {
    req.session.data['full-address-holder'] = req.session.data['street'];
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
    errorOnPostcodeMissing = true;
  }
  else if(req.session.data['postcode'].length < 6)
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

  if( req.session.data['venue-additional-notes'] == "")
  {
    req.session.data['venue-additional-notes-entered'] = false;
  }
  else
  {
    req.session.data['venue-additional-notes-entered'] = true;
  }


  // Find out if address is completed
  if( (errorOnVenueName || errorOnBuilding || errorOnTown || errorOnPostcode || errorOnPostcodeMissing) == true)
  {
    req.session.data['full-address-holder-error'] = true;
  }
  else
  {
    req.session.data['full-address-holder-error'] = false;
  }

  res.redirect('/create-event/title');
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
  var experienceOccasionalSelected = false;
  var experienceRegularSelected = false;

  var errorTargetAudienceTextEmpty = false;



  // EVENT TITLE
  if(req.session.data['event-title'] === "")
  {
    errorMissingTitle = true;
    req.session.data['event-email-reg-subject'] = "Your event booking";
  }
  else
  {
    // Create email subejct line for confirmation which includes the title
    req.session.data['event-email-reg-subject'] = "Your event booking - " + req.session.data['event-title'];
  }

  console.log("sector -------------- " + req.session.data['radio-sector']);
  console.log("sector box -------------- " + req.session.data['sector-box']);




  // SUMMARY
  if(req.session.data['summary-title'] === "")
  {
    req.session.data['summary-title-empty'] = true;
  }
  else
  {
    req.session.data['summary-title-empty'] = false;
    // Summary is saved as dada automatically
  }




  // SECTORS
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





  // EXPERIENCE
  req.session.data['audience-experience'] = "";
  if(req.session.data['checkbox-never'] != undefined)
  {
    req.session.data['audience-experience'] =  req.session.data['audience-experience'] + req.session.data['checkbox-never'] + "\n";
    experienceNewSelected = true;
  }

  if(req.session.data['checkbox-occasional'] != undefined)
  {
    req.session.data['audience-experience'] =  req.session.data['audience-experience'] + req.session.data['checkbox-occasional'] + "\n";
    experienceOccasionalSelected = true;
  }

  if(req.session.data['checkbox-regular'] != undefined)
  {
    req.session.data['audience-experience'] =  req.session.data['audience-experience'] + req.session.data['checkbox-regular'];
    experienceRegularSelected = true;
  }

  // Check if no experience levels were selected
  if(req.session.data['audience-experience'] == "")
  {
    errorMissingExperience = true;
    console.log("there is no experience selected");
  }






  //  ELIGIBILITY CRITERIA
  if(req.session.data['summary-target-audience'] === "")
  {
    errorTargetAudienceTextEmpty = true;
  }






  // ERRORS OR PROCEED
  if((errorMissingTitle || errorMissingSector || errorMissingSectorEntry || errorMissingExperience || errorTargetAudienceTextEmpty) == false)
  {
    req.session.data['event-title-error'] = false;
    req.session.data['sectors-error'] = false;
    req.session.data['audience-experience-error'] = false;
    req.session.data['summary-target-audience-error'] = false;

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
          'experienceOld': experienceOccasionalSelected,
          'experienceAll': experienceRegularSelected,

          'emptyTargetAudienceText': errorTargetAudienceTextEmpty

        }
    );
  }
})


// DESCRIPTION PAGE ONWARDS BUTTON
router.get('/create-event/title-skip', function (req, res)
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
  var experienceOccasionalSelected = false;
  var experienceRegularSelected = false;

  var errorTargetAudienceTextEmpty = false;

  // EVENT TITLE
  if(req.session.data['event-title'] === "")
  {
    errorMissingTitle = true;
    req.session.data['event-email-reg-subject'] = "Your event booking";
  }
  else
  {
    // Create email subejct line for confirmation which includes the title
    req.session.data['event-email-reg-subject'] = "Your event booking - " + req.session.data['event-title'];
  }

  console.log("sector -------------- " + req.session.data['radio-sector']);
  console.log("sector box -------------- " + req.session.data['sector-box']);



  // SUMMARY
  if(req.session.data['summary-title'] === "")
  {
    req.session.data['summary-title-empty'] = true;
  }
  else
  {
    req.session.data['summary-title-empty'] = false;
    // Summary is saved as dada automatically
  }





  // SECTORS
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





  // EXPERIENCE
  req.session.data['audience-experience'] = "";
  if(req.session.data['checkbox-never'] != undefined)
  {
    req.session.data['audience-experience'] =  req.session.data['audience-experience'] + req.session.data['checkbox-never'] + "\n";
    experienceNewSelected = true;
  }

  if(req.session.data['checkbox-occasional'] != undefined)
  {
    req.session.data['audience-experience'] =  req.session.data['audience-experience'] + req.session.data['checkbox-occasional'] + "\n";
    experienceOccasionalSelected = true;
  }

  if(req.session.data['checkbox-regular'] != undefined)
  {
    req.session.data['audience-experience'] =  req.session.data['audience-experience'] + req.session.data['checkbox-regular'];
    experienceRegularSelected = true;
  }

  // Check if no experience levels were selected
  if(req.session.data['audience-experience'] == "")
  {
    errorMissingExperience = true;
    console.log("there is no experience selected");
  }




  //  ELIGIBILITY CRITERIA
  if(req.session.data['summary-target-audience'] === "")
  {
    errorTargetAudienceTextEmpty = true;
  }




  // ERRORS OR PROCEED
  if( errorMissingTitle == true)
  {
    req.session.data['event-title-error'] = true;
  }
  else
  {
    req.session.data['event-title-error'] = false;
  }

  if( (errorMissingSector || errorMissingSectorEntry ) == true)
  {
    req.session.data['sectors-error'] = true;
  }
  else
  {
    req.session.data['sectors-error'] = false;
  }

  if( errorMissingExperience == true)
  {
    req.session.data['audience-experience-error'] = true;
  }
  else
  {
    req.session.data['audience-experience-error'] = false;
  }

  if( errorTargetAudienceTextEmpty == true)
  {
    req.session.data['summary-target-audience-error'] = true;
  }
  else
  {
    req.session.data['summary-target-audience-error'] = false;
  }

  res.redirect('/create-event/description');
})






// DESCRIPTION PAGE ONWARDS BUTTON

router.get('/create-event/description-onwards', function (req, res)
{
  var errorMissingmarketAnswer = false;
  var marketsNoSelected = false;
  var marketsYesSelected = false;
  var marketEntryMissing = false;
  var market2 = false;
  var market3 = false;
  var market4 = false;
  var market5 = false;
  var market6 = false;
  var market7 = false;
  var market8 = false;
  var market9 = false;
  var market10 = false;

  var errorMissingDescription = false;
  var errorMissingBenefit = false;
  var benefitTwo = false;
  var benefitThree = false;
  var benefitFour = false;
  var benefitFive = false;

  var agendYesNoMissing = false;
  var agendaShowIs = false;
  var agendaShowNo = false;
  var agendaShowLater = false;
  var showAgenda7 = false;
  var showAgenda8 = false;
  var showAgenda9 = false;
  var showAgenda10 = false;
  var showAgenda11 = false;
  var showAgenda12 = false;
  var showAgenda13 = false;
  var showAgenda14 = false;
  var showAgenda15 = false;

  var errorAgenda1 = false;
  var errorMissingAgenda1 = false;
  var errorMissingHourAgenda1 = false;
  var errorInvalidHourAgenda1 = false;
  var errorInvalidMinutesAgenda1 = false;

  req.session.data['agenda-error'] = false;


  console.log(" the radio for markets is --*/*/*/  " + req.session.data['radio-markets']);

  if(req.session.data['radio-markets'] == undefined)
  {
    errorMissingmarketAnswer = true;
    req.session.data['markets-error'] = true;
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

    if(req.session.data['market-box-1'] != undefined)
    {
      req.session.data['markets'] = req.session.data['market-box-1'];
    }
    else
    {
      marketEntryMissing = true;
      req.session.data['markets-error'] = true;
    }
    if(req.session.data['market-box-2'] != undefined  &&  req.session.data['market-box-2'] != "")
    {
      market2 = true;
      req.session.data['markets'] = req.session.data['markets'] + "\n" + req.session.data['market-box-2'];
    }
    if(req.session.data['market-box-3'] != undefined  &&  req.session.data['market-box-3'] != "")
    {
      market3 = true;
      req.session.data['markets'] = req.session.data['markets'] + "\n" + req.session.data['market-box-3'];
    }
    if(req.session.data['market-box-4'] != undefined  &&  req.session.data['market-box-4'] != "")
    {
      market4 = true;
      req.session.data['markets'] = req.session.data['markets'] + "\n" + req.session.data['market-box-4'];
    }
    if(req.session.data['market-box-5'] != undefined  &&  req.session.data['market-box-5'] != "")
    {
      market5 = true;
      req.session.data['markets'] = req.session.data['markets'] + "\n" + req.session.data['market-box-5'];
    }
    if(req.session.data['market-box-6'] != undefined  &&  req.session.data['market-box-6'] != "")
    {
      market6 = true;
      req.session.data['markets'] = req.session.data['markets'] + "\n" + req.session.data['market-box-6'];
    }
    if(req.session.data['market-box-7'] != undefined  &&  req.session.data['market-box-7'] != "")
    {
      market7 = true;
      req.session.data['markets'] = req.session.data['markets'] + "\n" + req.session.data['market-box-7'];
    }
    if(req.session.data['market-box-8'] != undefined  &&  req.session.data['market-box-8'] != "")
    {
      market8 = true;
      req.session.data['markets'] = req.session.data['markets'] + "\n" + req.session.data['market-box-8'];
    }
    if(req.session.data['market-box-9'] != undefined  &&  req.session.data['market-box-9'] != "")
    {
      market9 = true;
      req.session.data['markets'] = req.session.data['markets'] + "\n" + req.session.data['market-box-9'];
    }
    if(req.session.data['market-box-10'] != undefined  &&  req.session.data['market-box-10'] != "")
    {
      market10 = true;
      req.session.data['markets'] = req.session.data['markets'] + "\n" + req.session.data['market-box-10'];
    }
  }





  // RECORD BENEFITS
  req.session.data['benefits'] == ""

  if(req.session.data['benefit-input-0'] == "")
  {
    errorMissingBenefit = true;
    req.session.data['benefits-error'] = true;
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
  console.log("THE AGENDA IS ---**-*-   " + req.session.data['radio-agenda']);
  req.session.data['agenda'] == ""

  if(req.session.data['radio-agenda'] == undefined   ||  req.session.data['radio-agenda'] == ""  )
  {
    agendYesNoMissing = true;
  }
  else if(req.session.data['radio-agenda'] == "later")
  {
    req.session.data['agenda-error-later'] = true;
  }
  else if(req.session.data['radio-agenda'] == "no")
  {
    agendaShowNo = true;
    console.log("THE AGENDA IS NO");
    req.session.data['agenda'] = "No agenda will be shown";
  }
  else if(req.session.data['radio-agenda'] == "yes")
  {
    agendaShowIs = true;
    // save agenda data


    if(req.session.data['agenda-hour-1'] == "")
    {
      errorMissingHourAgenda1 = true;
      errorAgenda1 = true;
      req.session.data['agenda-error'] = true;
    }
    else if( (0 <= req.session.data['agenda-hour-1'] && req.session.data['agenda-hour-1'] <= 23) == false )
    {
      errorInvalidHourAgenda1 = true;
      errorAgenda1 = true;
      req.session.data['agenda-error'] = true;
    }

    if( (0 <= req.session.data['agenda-minutes-1'] && req.session.data['agenda-minutes-1'] <= 59) == false )
    {
      errorInvalidMinutesAgenda1 = true;
      errorAgenda1 = true;
      req.session.data['agenda-error'] = true;
    }
    else
    {

    }

    if(req.session.data['agenda-1'] == "")
    {
      errorMissingAgenda1 = true;
      errorAgenda1 = true;
      req.session.data['agenda-error'] = true;
    }
    else
    {
      req.session.data['agenda'] = req.session.data['agenda-hour-1'] + ":" + req.session.data['agenda-minutes-1'] + " to " + req.session.data['agenda-hour-1-finish'] + ":" + req.session.data['agenda-minutes-1-finish']  + "  " + " " + req.session.data['agenda-1'];
    }

    if(req.session.data['agenda-2'] != "")
    {
      req.session.data['agenda'] = req.session.data['agenda'] + "\n" + req.session.data['agenda-hour-2'] + ":" + req.session.data['agenda-minutes-2'] + " to " + req.session.data['agenda-hour-2-finish'] + ":" + req.session.data['agenda-minutes-2-finish']  + "  " + " " + req.session.data['agenda-2'];
    }
    if(req.session.data['agenda-3'] != "")
    {
      showAgenda3 = true;
      req.session.data['agenda'] = req.session.data['agenda'] + "\n" + req.session.data['agenda-hour-3'] + ":" + req.session.data['agenda-minutes-3'] + " to " + req.session.data['agenda-hour-3-finish'] + ":" + req.session.data['agenda-minutes-3-finish']  + "  " + " " + req.session.data['agenda-3'];
    }
    if(req.session.data['agenda-4'] != "")
    {
      showAgenda4 = true;
      req.session.data['agenda'] = req.session.data['agenda'] + "\n" + req.session.data['agenda-hour-4'] + ":" + req.session.data['agenda-minutes-4'] + " to " + req.session.data['agenda-hour-4-finish'] + ":" + req.session.data['agenda-minutes-4-finish']  + "  " + " " + req.session.data['agenda-4'];
    }
    if(req.session.data['agenda-5'] != "")
    {
      showAgenda5 = true;
      req.session.data['agenda'] = req.session.data['agenda'] + "\n" + req.session.data['agenda-hour-5'] + ":" + req.session.data['agenda-minutes-5'] + " to " + req.session.data['agenda-hour-5-finish'] + ":" + req.session.data['agenda-minutes-5-finish']  + "  " + " " + req.session.data['agenda-5'];
    }
    if(req.session.data['agenda-6'] != "")
    {
      showAgenda6 = true;
      req.session.data['agenda'] = req.session.data['agenda'] + "\n" + req.session.data['agenda-hour-6'] + ":" + req.session.data['agenda-minutes-6'] + " to " + req.session.data['agenda-hour-6-finish'] + ":" + req.session.data['agenda-minutes-6-finish']  + "  " + " " + req.session.data['agenda-6'];
    }
    if(req.session.data['agenda-7'] != "")
    {
      showAgenda7 = true;
      req.session.data['agenda'] = req.session.data['agenda'] + "\n" + req.session.data['agenda-hour-7'] + ":" + req.session.data['agenda-minutes-7'] + " to " + req.session.data['agenda-hour-7-finish'] + ":" + req.session.data['agenda-minutes-7-finish']  + "  " + " " + req.session.data['agenda-7'];
    }
    if(req.session.data['agenda-8'] != "")
    {
      showAgenda8 = true;
      req.session.data['agenda'] = req.session.data['agenda'] + "\n" + req.session.data['agenda-hour-8'] + ":" + req.session.data['agenda-minutes-8'] + " to " + req.session.data['agenda-hour-8-finish'] + ":" + req.session.data['agenda-minutes-9-finish']  + "  " + " " + req.session.data['agenda-8'];
    }
    if(req.session.data['agenda-9'] != "")
    {
      showAgenda9 = true;
      req.session.data['agenda'] = req.session.data['agenda'] + "\n" + req.session.data['agenda-hour-9'] + ":" + req.session.data['agenda-minutes-9'] + " to " + req.session.data['agenda-hour-9-finish'] + ":" + req.session.data['agenda-minutes-9-finish']  + "  " + " " + req.session.data['agenda-9'];
    }
    if(req.session.data['agenda-10'] != "")
    {
      showAgenda10 = true;
      req.session.data['agenda'] = req.session.data['agenda'] + "\n" + req.session.data['agenda-hour-10'] + ":" + req.session.data['agenda-minutes-10'] + " to " + req.session.data['agenda-hour-10-finish'] + ":" + req.session.data['agenda-minutes-10-finish']  + "  " + " " + req.session.data['agenda-10'];
    }
    if(req.session.data['agenda-11'] != "")
    {
      showAgenda11 = true;
      req.session.data['agenda'] = req.session.data['agenda'] + "\n" + req.session.data['agenda-hour-11'] + ":" + req.session.data['agenda-minutes-11'] + " to " + req.session.data['agenda-hour-11-finish'] + ":" + req.session.data['agenda-minutes-11-finish']  + "  " + " " + req.session.data['agenda-11'];
    }
    if(req.session.data['agenda-12'] != "")
    {
      showAgenda12 = true;
      req.session.data['agenda'] = req.session.data['agenda'] + "\n" + req.session.data['agenda-hour-12'] + ":" + req.session.data['agenda-minutes-12'] + " to " + req.session.data['agenda-hour-12-finish'] + ":" + req.session.data['agenda-minutes-12-finish']  + "  " + " " + req.session.data['agenda-12'];
    }
    if(req.session.data['agenda-13'] != "")
    {
      showAgenda13 = true;
      req.session.data['agenda'] = req.session.data['agenda'] + "\n" + req.session.data['agenda-hour-6'] + ":" + req.session.data['agenda-minutes-13'] + " to " + req.session.data['agenda-hour-13-finish'] + ":" + req.session.data['agenda-minutes-13-finish']  + "  " + " " + req.session.data['agenda-13'];
    }
    if(req.session.data['agenda-14'] != "")
    {
      showAgenda14 = true;
      req.session.data['agenda'] = req.session.data['agenda'] + "\n" + req.session.data['agenda-hour-14'] + ":" + req.session.data['agenda-minutes-14'] + " to " + req.session.data['agenda-hour-14-finish'] + ":" + req.session.data['agenda-minutes-14-finish']  + "  " + " " + req.session.data['agenda-14'];
    }
    if(req.session.data['agenda-15'] != "")
    {
      showAgenda15 = true;
      req.session.data['agenda'] = req.session.data['agenda'] + "\n" + req.session.data['agenda-hour-15'] + ":" + req.session.data['agenda-minutes-15'] + " to " + req.session.data['agenda-hour-15-finish'] + ":" + req.session.data['agenda-minutes-15-finish']  + "  " + " " + req.session.data['agenda-15'];
    }
  }






  //  DESCRIPTION VALIDATION
  if(req.session.data['event-description'] == "")
  {
    //errorMissingDescription = true;
    req.session.data['event-description-error'] = true;
  }






  if(( errorMissingmarketAnswer || marketEntryMissing  || errorMissingBenefit  || agendYesNoMissing  || errorAgenda1 || errorMissingDescription)  == false)
  {
    // Set summary page errors as negative
    req.session.data['markets-error'] = false;
    req.session.data['benefits-error'] = false;
    req.session.data['event-description-error'] = false;
    req.session.data['agenda-error'] = false;


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
    res.render('create-event/description',
        {
          'errorExists': true,

          'errorMissingMarketSelection': errorMissingmarketAnswer,
          'marketSelectedNo': marketsNoSelected,
          'marketSelectedYes': marketsYesSelected,
          'marketNotEntered': marketEntryMissing,
          'marketEntered2':  market2,
          'marketEntered3':  market3,
          'marketEntered4':  market4,
          'marketEntered5':  market5,
          'marketEntered6':  market6,
          'marketEntered7':  market7,
          'marketEntered8':  market8,
          'marketEntered9':  market9,
          'marketEntered10':  market10,

          'errorMissingEventBenefit': errorMissingBenefit,
          'showBenefitTwo': benefitTwo,
          'showBenefitThree': benefitThree,
          'showBenefitFour': benefitFour,
          'showBenefitFive': benefitFive,

          'agendaMissingYesNo': agendYesNoMissing,
          'agendaNoSelected': agendaShowNo,
          'agendaSelected': agendaShowIs,
          'agendaLaterSelected': agendaShowLater,

          'errorMissingHour': errorMissingHourAgenda1,
          'errorInvalidHour': errorInvalidHourAgenda1,
          'errorInvalidMinutes': errorInvalidMinutesAgenda1,
          'agendaMisssing1': errorMissingAgenda1,

          'agendaShow7':  showAgenda7,
          'agendaShow8':  showAgenda8,
          'agendaShow9':  showAgenda9,
          'agendaShow10':  showAgenda10,
          'agendaShow11':  showAgenda11,
          'agendaShow12':  showAgenda12,
          'agendaShow13':  showAgenda13,
          'agendaShow14':  showAgenda14,
          'agendaShow15':  showAgenda15,


          'errorMissingEventDescription': errorMissingDescription
        }
    );
  }
})


router.get('/create-event/description-skip', function (req, res)
{
  var errorMissingmarketAnswer = false;
  var marketsNoSelected = false;
  var marketsYesSelected = false;
  var marketEntryMissing = false;
  var market2 = false;
  var market3 = false;
  var market4 = false;
  var market5 = false;
  var market6 = false;
  var market7 = false;
  var market8 = false;
  var market9 = false;
  var market10 = false;

  var errorMissingDescription = false;
  var errorMissingBenefit = false;
  var benefitTwo = false;
  var benefitThree = false;
  var benefitFour = false;
  var benefitFive = false;

  var agendYesNoMissing = false;
  var agendaShowIs = false;
  var agendaShowNo = false;
  var agendaShowLater = false;
  var showAgenda7 = false;
  var showAgenda8 = false;
  var showAgenda9 = false;
  var showAgenda10 = false;
  var showAgenda11 = false;
  var showAgenda12 = false;
  var showAgenda13 = false;
  var showAgenda14 = false;
  var showAgenda15 = false;

  var errorAgenda1 = false;
  var errorMissingAgenda1 = false;
  var errorMissingHourAgenda1 = false;
  var errorInvalidHourAgenda1 = false;
  var errorInvalidMinutesAgenda1 = false;


  console.log(" the radio for markets is --*/*/*/  " + req.session.data['radio-markets']);

  if(req.session.data['radio-markets'] == undefined)
  {
    errorMissingmarketAnswer = true;
    req.session.data['markets-error'] = true;
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

    if(req.session.data['market-box-1'] != undefined)
    {
      req.session.data['markets'] = req.session.data['market-box-1'];
    }
    else
    {
      marketEntryMissing = true;
      req.session.data['markets-error'] = true;
    }
    if(req.session.data['market-box-2'] != undefined  &&  req.session.data['market-box-2'] != "")
    {
      market2 = true;
      req.session.data['markets'] = req.session.data['markets'] + "\n" + req.session.data['market-box-2'];
    }
    if(req.session.data['market-box-3'] != undefined  &&  req.session.data['market-box-3'] != "")
    {
      market3 = true;
      req.session.data['markets'] = req.session.data['markets'] + "\n" + req.session.data['market-box-3'];
    }
    if(req.session.data['market-box-4'] != undefined  &&  req.session.data['market-box-4'] != "")
    {
      market4 = true;
      req.session.data['markets'] = req.session.data['markets'] + "\n" + req.session.data['market-box-4'];
    }
    if(req.session.data['market-box-5'] != undefined  &&  req.session.data['market-box-5'] != "")
    {
      market5 = true;
      req.session.data['markets'] = req.session.data['markets'] + "\n" + req.session.data['market-box-5'];
    }
    if(req.session.data['market-box-6'] != undefined  &&  req.session.data['market-box-6'] != "")
    {
      market6 = true;
      req.session.data['markets'] = req.session.data['markets'] + "\n" + req.session.data['market-box-6'];
    }
    if(req.session.data['market-box-7'] != undefined  &&  req.session.data['market-box-7'] != "")
    {
      market7 = true;
      req.session.data['markets'] = req.session.data['markets'] + "\n" + req.session.data['market-box-7'];
    }
    if(req.session.data['market-box-8'] != undefined  &&  req.session.data['market-box-8'] != "")
    {
      market8 = true;
      req.session.data['markets'] = req.session.data['markets'] + "\n" + req.session.data['market-box-8'];
    }
    if(req.session.data['market-box-9'] != undefined  &&  req.session.data['market-box-9'] != "")
    {
      market9 = true;
      req.session.data['markets'] = req.session.data['markets'] + "\n" + req.session.data['market-box-9'];
    }
    if(req.session.data['market-box-10'] != undefined  &&  req.session.data['market-box-10'] != "")
    {
      market10 = true;
      req.session.data['markets'] = req.session.data['markets'] + "\n" + req.session.data['market-box-10'];
    }
  }





  // RECORD BENEFITS
  req.session.data['benefits'] == ""

  if(req.session.data['benefit-input-0'] == "")
  {
    errorMissingBenefit = true;
    req.session.data['benefits-error'] = true;
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
  console.log("THE AGENDA IS ---**-*-   " + req.session.data['radio-agenda']);
  req.session.data['agenda'] == ""

  if(req.session.data['radio-agenda'] == undefined   ||  req.session.data['radio-agenda'] == ""  )
  {
    agendYesNoMissing = true;
  }
  else if(req.session.data['radio-agenda'] == "no")
  {
    agendaShowNo = true;
    console.log("THE AGENDA IS NO");
    req.session.data['agenda'] = "No agenda will be shown";
  }
  else if(req.session.data['radio-agenda'] == "yes")
  {
    agendaShowIs = true;
    // save agenda data


    if(req.session.data['agenda-hour-1'] == "")
    {
      errorMissingHourAgenda1 = true;
      errorAgenda1 = true;
      req.session.data['agenda-error'] = true;
    }
    else if( (0 <= req.session.data['agenda-hour-1'] && req.session.data['agenda-hour-1'] <= 23) == false )
    {
      errorInvalidHourAgenda1 = true;
      errorAgenda1 = true;
      req.session.data['agenda-error'] = true;
    }

    if( (0 <= req.session.data['agenda-minutes-1'] && req.session.data['agenda-minutes-1'] <= 59) == false )
    {
      errorInvalidMinutesAgenda1 = true;
      errorAgenda1 = true;
      req.session.data['agenda-error'] = true;
    }

    if(req.session.data['agenda-1'] == "")
    {
      errorMissingAgenda1 = true;
      errorAgenda1 = true;
      req.session.data['agenda-error'] = true;
    }
    else
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
    if(req.session.data['agenda-7'] != "")
    {
      showAgenda7 = true;
      req.session.data['agenda'] = req.session.data['agenda'] + "\n" + req.session.data['agenda-hour-7'] + ":" + req.session.data['agenda-minutes-7'] + "  " + " " + req.session.data['agenda-7'];
    }
    if(req.session.data['agenda-8'] != "")
    {
      showAgenda8 = true;
      req.session.data['agenda'] = req.session.data['agenda'] + "\n" + req.session.data['agenda-hour-8'] + ":" + req.session.data['agenda-minutes-8'] + "  " + " " + req.session.data['agenda-8'];
    }
    if(req.session.data['agenda-9'] != "")
    {
      showAgenda9 = true;
      req.session.data['agenda'] = req.session.data['agenda'] + "\n" + req.session.data['agenda-hour-9'] + ":" + req.session.data['agenda-minutes-9'] + "  " + " " + req.session.data['agenda-9'];
    }
    if(req.session.data['agenda-10'] != "")
    {
      showAgenda10 = true;
      req.session.data['agenda'] = req.session.data['agenda'] + "\n" + req.session.data['agenda-hour-10'] + ":" + req.session.data['agenda-minutes-10'] + "  " + " " + req.session.data['agenda-10'];
    }
    if(req.session.data['agenda-11'] != "")
    {
      showAgenda11 = true;
      req.session.data['agenda'] = req.session.data['agenda'] + "\n" + req.session.data['agenda-hour-11'] + ":" + req.session.data['agenda-minutes-11'] + "  " + " " + req.session.data['agenda-11'];
    }
    if(req.session.data['agenda-12'] != "")
    {
      showAgenda12 = true;
      req.session.data['agenda'] = req.session.data['agenda'] + "\n" + req.session.data['agenda-hour-12'] + ":" + req.session.data['agenda-minutes-12'] + "  " + " " + req.session.data['agenda-12'];
    }
    if(req.session.data['agenda-13'] != "")
    {
      showAgenda13 = true;
      req.session.data['agenda'] = req.session.data['agenda'] + "\n" + req.session.data['agenda-hour-6'] + ":" + req.session.data['agenda-minutes-13'] + "  " + " " + req.session.data['agenda-13'];
    }
    if(req.session.data['agenda-14'] != "")
    {
      showAgenda14 = true;
      req.session.data['agenda'] = req.session.data['agenda'] + "\n" + req.session.data['agenda-hour-14'] + ":" + req.session.data['agenda-minutes-14'] + "  " + " " + req.session.data['agenda-14'];
    }
    if(req.session.data['agenda-15'] != "")
    {
      showAgenda15 = true;
      req.session.data['agenda'] = req.session.data['agenda'] + "\n" + req.session.data['agenda-hour-15'] + ":" + req.session.data['agenda-minutes-15'] + "  " + " " + req.session.data['agenda-15'];
    }
  }





  //  DESCRIPTION VALIDATION
  if(req.session.data['event-description'] == "")
  {
    //errorMissingDescription = true;
    req.session.data['event-description-error'] = true;
  }






  if(( errorMissingmarketAnswer || marketEntryMissing  || errorMissingBenefit  || agendYesNoMissing  || errorAgenda1 || errorMissingDescription)  == false)
  {
    // Set summary page errors as negative
    req.session.data['markets-error'] = false;
    req.session.data['benefits-error'] = false;
    req.session.data['event-description-error'] = false;
    req.session.data['agenda-error'] = false;
  }

  res.redirect('/create-event/images');

})





// IMAGES PAGE ONWARDS BUTTON
router.get('/create-event/images-onwards', function (req, res)
{
  req.session.data['image-error'] = false;
  // Always an error in the prototype because the main
    res.render('create-event/images',
        {
          'missingImage': true
        }
    );
})


router.get('/create-event/images-preview-onwards', function (req, res)
{
  req.session.data['image-error'] = false;

  req.session.data['hero-image'] = "oil.png";

  if(req.session.changingFromSummary == true)
  {
    res.redirect('/create-event/summary-prelude');
  }
  else
  {
    res.redirect('/create-event/partner-logos');
  }
})

// IMAGES PAGE ONWARDS BUTTON
router.get('/create-event/images-skip', function (req, res)
{
  req.session.data['image-error'] = true;

  res.redirect('/create-event/partner-logos');
})




// IMAGES PAGE ONWARDS BUTTON
router.get('/create-event/partner-logos-onwards', function (req, res)
{
  //console.log("\nreq.session.data['eu-logo'] \n\n")

  if(req.session.data['logo-1'] != undefined)
  {
    req.session.data['logo-1-selected'] = true;
    console.log("\n the logo for the eu worked \n\n")
  }
  else
  {
    req.session.data['logo-1-selected'] = false;
  }


  if(req.session.data['logo-2'] != undefined)
  {
    req.session.data['logo-2-selected'] = true;
  }
  else
  {
    req.session.data['dit-logo-selected'] = false;
  }


  if(req.session.data['logo-3'] != undefined)
  {
    req.session.data['logo-3-selected'] = true;
  }
  else
  {
    req.session.data['logo-3-selected'] = false;
  }


  if(req.session.data['logo-4'] != undefined)
  {
    req.session.data['logo-4-selected'] = true;
  }
  else
  {
    req.session.data['logo-4-selected'] = false;
  }


  if(req.session.data['logo-5'] != undefined)
  {
    req.session.data['logo-5-selected'] = true;
  }
  else
  {
    req.session.data['logo-5-selected'] = false;
  }



  if(req.session.data['logo-6'] != undefined)
  {
    req.session.data['logo-6-selected'] = true;
  }
  else
  {
    req.session.data['logo-6-selected'] = false;
  }




  // check for errors- never any
  if(req.session.changingFromSummary == true)
  {
    res.redirect('/create-event/summary-prelude');
  }
  else
  {
    res.redirect('/create-event/tickets');
  }

})

router.get('/create-event/partner-logos-skip', function (req, res)
{
  //console.log("\nreq.session.data['eu-logo'] \n\n")

  if(req.session.data['logo-1'] != undefined)
  {
    req.session.data['logo-1-selected'] = true;
    console.log("\n the logo for the eu worked \n\n")
  }
  else
  {
    req.session.data['logo-1-selected'] = false;
  }


  if(req.session.data['logo-2'] != undefined)
  {
    req.session.data['logo-2-selected'] = true;
  }
  else
  {
    req.session.data['dit-logo-selected'] = false;
  }


  if(req.session.data['logo-3'] != undefined)
  {
    req.session.data['logo-3-selected'] = true;
  }
  else
  {
    req.session.data['logo-3-selected'] = false;
  }


  if(req.session.data['logo-4'] != undefined)
  {
    req.session.data['logo-4-selected'] = true;
  }
  else
  {
    req.session.data['logo-4-selected'] = false;
  }


  if(req.session.data['logo-5'] != undefined)
  {
    req.session.data['logo-5-selected'] = true;
  }
  else
  {
    req.session.data['logo-5-selected'] = false;
  }



  if(req.session.data['logo-6'] != undefined)
  {
    req.session.data['logo-6-selected'] = true;
  }
  else
  {
    req.session.data['logo-6-selected'] = false;
  }




  if(req.session.changingFromSummary == true)
  {
    res.redirect('/create-event/summary-prelude');
  }
  else
  {
    res.redirect('/create-event/tickets');
  }
})





router.get('/create-event/tickets-onwards', function (req, res)
{
  var missingCapacity = false;
  var invalidCapacity = false;
  var missingCapacityMessage = false;

  var customCloseSelected = false;
  var missingCloseDate = false;

  var invalidDay = false
  var missingDay = false;
  var invalidMonth = false
  var missingMonth = false;
  var invalidYear = false
  var missingYear = false;

  var customCloseDateSelected = false;
  var missingCustomCloseDate = false;
  var invalidCustomCloseDate = false;

  // TIME
  var missingCloseTime = false;
  var invalidCloseTime = false;

  console.log("the entry of the attendee stuff is " + req.session.data['attendee-quantity']);


  // PLACESS
  if(req.session.data['attendee-quantity'] == "")
  {
    missingCapacity = true;
  }
  else if ( isNaN(req.session.data['attendee-quantity']) == true )
  {
    invalidCapacity = true;
  }



  // WAITING LIST
  if(req.session.data['waiting-list'] == "no")
  {
    req.session.data['waiting-list-summary-text'] = "No waiting list";
  }
  else if(req.session.data['waiting-list'] == "yes")
  {
    if(req.session.data['waiting-list-free-up'] == "automatic")
    {
      req.session.data['waiting-list-summary-text'] = "Waiting list opened when capacity is reached" +
                                                      "\n" + "Places will be automatically offered to whoever is at the top of waiting list";
    }
    else if(req.session.data['waiting-list-free-up'] == "manual")
    {
      req.session.data['waiting-list-summary-text'] = "Waiting list opened when capacity is reached" +
                                                      "\n" + "You will manually select who you want to offer the place to";
    }
  }



  //  SOLD OUT MESSAGE
  if(req.session.data['sold-out-message'] == "")
  {
    missingCapacityMessage = true;
  }




  //  message for when tickets are gone and nothing is entered in the box

  console.log("the event thing close 999  " + req.session.data['radio-close-early-yes-no']);


  if(req.session.data['radio-close-early-yes-no'] == "no")
  {
    req.session.data['reg-close-time'] = "12:00 " + req.session.data['event-day-of-the-week'] + " " + req.session.data['event-day'] + " " +  req.session.data['event-month-name'] + " " + req.session.data['event-year'];
  }
  else if(req.session.data['radio-close-early-yes-no'] == "yes")
  {
    // SAVE THAT EARLY REG WAS SELECTED
    customCloseSelected = true;


    if(req.session.data['radio-days-before'] == undefined)
    {
      missingCloseDate = true;
    }
    if(req.session.data['radio-days-before'] == "oneday")
    {
      req.session.data['reg-close-time'] = " 1 day before - " + req.session.data['close-hours'] + ":" + req.session.data['close-minutes'] + " " + req.session.data['days-before-1'].substr(14);
    }
    else if(req.session.data['radio-days-before'] == "twoday")
    {
      req.session.data['reg-close-time'] = " 2 days before - " + req.session.data['close-hours'] + ":" + req.session.data['close-minutes'] + " " + req.session.data['days-before-2'].substr(14);
    }
    else if(req.session.data['radio-days-before'] == "threeday")
    {
      req.session.data['reg-close-time'] = " 3 days before - " + req.session.data['close-hours'] + ":" + req.session.data['close-minutes'] + " " + req.session.data['days-before-3'].substr(14);
    }
    else if(req.session.data['radio-days-before'] == "differentdate")
    {
      // SAVE THAT DIFFERENT DATE WAS SELECTED
      customCloseDateSelected = true;

      // DAY
      var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

      //  MONTH
      var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];


      console.log(" the day in   " + req.session.data['event-day-close']);
      console.log(" the month in " + req.session.data['event-month-close']);
      console.log(" the year in  " + req.session.data['event-year-close']);


      // DAY - ANOTHER DATE
      if (req.session.data['event-day-close'] != undefined)
      {
        if(req.session.data['event-day-close'] == "")
        {
          missingDay = true;
          missingCustomCloseDate = true;
          console.log("The day is missing!!!!!!!!!!!!!!!!!!!!!!");
        }
        else if(1 <= req.session.data['event-day-close'] && req.session.data['event-day-close'] <= 31)
        {}
        else
        {
          invalidDay = true;
          invalidCustomCloseDate = true;
        }
      }


      // MONTH - ANOTHER DATE
      if (req.session.data['event-month-close'] != undefined)
      {
        if(req.session.data['event-month-close'] == "")
        {
          missingMonth = true;
          missingCustomCloseDate = true;
          //console.log("*************MISSING MONTH**************");
        }
        else if(1 <= req.session.data['event-month-close'] && req.session.data['event-month-close'] <= 12)
        {
        }
        else
        {
          invalidMonth = true;
          invalidCustomCloseDate = true;
        }
      }
      else
      {
        console.log("*************UNEFINED**************");
      }


      // YEAR - ANOTHER DATE
      if (req.session.data['event-year-close'] != undefined)
      {
        if(req.session.data['event-year-close'] == "")
        {
          missingYear = true;
          missingCustomCloseDate = true;
        }
        else if(2017 <= req.session.data['event-year-close']  &&  req.session.data['event-year-close'] <= 2025)
        {}
        else
        {
          invalidYear = true;
          invalidCustomCloseDate = true;
        }
      }


      if( ( missingCustomCloseDate  ||  invalidCustomCloseDate ) == false )
      {
        var enteredCloseDate = new Date();
        enteredCloseDate.setFullYear(req.session.data['event-year-close'], req.session.data['event-month-close']-1, req.session.data['event-day-close']);
      }



      // TIME
      if( (invalidCustomCloseDate || missingCustomCloseDate || missingCloseTime || invalidCloseTime) == false)
      {
        req.session.data['reg-close-time'] = req.session.data['close-hours'] + ":" + req.session.data['close-minutes'] + "  " + days[enteredCloseDate.getDay()] + "  " + enteredCloseDate.getDate() + "  " +  monthNames[enteredCloseDate.getMonth()] + "  " +  enteredCloseDate.getFullYear();

        console.log(" the day is - " + enteredCloseDate.getDay());
        console.log(" the date is - " + enteredCloseDate.getDate());
        console.log(" the month is - " + enteredCloseDate.getMonth());
        console.log(" the year is - " + enteredCloseDate.getFullYear());
      }

    }
    else
    {
      missingCloseDate = true;
    }
  }

  console.log(" the missing close date variable is " + missingCustomCloseDate);


  // check for errors
  if( (missingCapacity || invalidCapacity || missingCapacityMessage || missingCloseDate || invalidCustomCloseDate || missingCustomCloseDate || missingCloseTime || invalidCloseTime) == false )
  {


    if(req.session.changingFromSummary == true)
    {
        res.redirect('/create-event/summary-prelude');
    }
    else if(req.session.changingFromMonitoring == true)
    {
        req.session.changingFromMonitoring = false;
        res.redirect('/monitor/live-present');
    }
    else
    {
        res.redirect('/create-event/attendees');
    }
  }
  // Errors found so refresh page with errors
  else
  {
    res.render('create-event/tickets',
        {
          'errorAttendee': true,
          'errorMissingCapacity': missingCapacity,
          'errorInvalidCapacity': invalidCapacity,
          'errorMissingCapacityMessage': missingCapacityMessage,
          'errorMissingCloseDate': missingCloseDate,

          'errorCustomCloseSelected': customCloseSelected,
          'errorCustomCloseDateSelected': customCloseDateSelected,

          'errorInvalidDay': invalidDay,
          'errorMissingDay': missingDay,
          'errorInvalidMonth': invalidMonth,
          'errorMissingMonth': missingMonth,
          'errorInvalidYear': invalidYear,
          'errorMissingYear': missingYear,
          'errorMissingCustomCloseDate': missingCustomCloseDate,
          'errorInvalidCustomCloseDate': invalidCustomCloseDate,

          'errorMissingCloseTime': missingCloseTime,
          'errorInvalidCloseTime': invalidCloseTime


        }
    );
  }
})

router.get('/create-event/tickets-skip', function (req, res)
{
  var missingCapacity = false;
  var invalidCapacity = false;
  var missingCapacityMessage = false;

  var customCloseSelected = false;
  var missingCloseDate = false;

  var invalidDay = false
  var missingDay = false;
  var invalidMonth = false
  var missingMonth = false;
  var invalidYear = false
  var missingYear = false;

  var customCloseDateSelected = false;
  var missingCustomCloseDate = false;
  var invalidCustomCloseDate = false;

  // TIME
  var missingCloseTime = false;
  var invalidCloseTime = false;

  console.log("the entry of the attendee stuff is " + req.session.data['attendee-quantity']);


  // PLACESS
  if(req.session.data['attendee-quantity'] == "")
  {
    missingCapacity = true;
    req.session.data['attendee-quantity-error'] = true;
  }
  else if ( isNaN(req.session.data['attendee-quantity']) == true )
  {
    invalidCapacity = true;
    req.session.data['attendee-quantity-error'] = true;
  }
  else
  {
    req.session.data['attendee-quantity-error'] = false;
  }



  // WAITING LIST
  if(req.session.data['waiting-list'] == "no")
  {
    req.session.data['waiting-list-summary-text'] = "No waiting list";
  }
  else if(req.session.data['waiting-list'] == "yes")
  {
    if(req.session.data['waiting-list-free-up'] == "automatic")
    {
      req.session.data['waiting-list-summary-text'] = "Waiting list opened when capacity is reached" +
          "\n" + "Places will be automatically offered to whoever is at the top of waiting list";
    }
    else if(req.session.data['waiting-list-free-up'] == "manual")
    {
      req.session.data['waiting-list-summary-text'] = "Waiting list opened when capacity is reached" +
          "\n" + "You will manually select who you want to offer the place to";
    }
  }



  //  SOLD OUT MESSAGE
  if(req.session.data['sold-out-message'] == "")
  {
    missingCapacityMessage = true;
    req.session.data['sold-out-message-error'] = true;
  }
  else
  {
    req.session.data['sold-out-message-error'] = false;
  }




  //  message for when tickets are gone and nothing is entered in the box

  console.log("the event thing close 999  " + req.session.data['radio-close-early-yes-no']);


  if(req.session.data['radio-close-early-yes-no'] == "no")
  {
    req.session.data['reg-close-time'] = "12:00 " + req.session.data['event-day-of-the-week'] + " " + req.session.data['event-day'] + " " +  req.session.data['event-month-name'] + " " + req.session.data['event-year'];
  }
  else if(req.session.data['radio-close-early-yes-no'] == "yes")
  {
    // SAVE THAT EARLY REG WAS SELECTED
    customCloseSelected = true;


    if(req.session.data['radio-days-before'] == undefined)
    {
      missingCloseDate = true;
    }
    if(req.session.data['radio-days-before'] == "oneday")
    {
      req.session.data['reg-close-time'] = " 1 day before - " + req.session.data['close-hours'] + ":" + req.session.data['close-minutes'] + " " + req.session.data['days-before-1'].substr(14);
    }
    else if(req.session.data['radio-days-before'] == "twoday")
    {
      req.session.data['reg-close-time'] = " 2 days before - " + req.session.data['close-hours'] + ":" + req.session.data['close-minutes'] + " " + req.session.data['days-before-2'].substr(14);
    }
    else if(req.session.data['radio-days-before'] == "threeday")
    {
      req.session.data['reg-close-time'] = " 3 days before - " + req.session.data['close-hours'] + ":" + req.session.data['close-minutes'] + " " + req.session.data['days-before-3'].substr(14);
    }
    else if(req.session.data['radio-days-before'] == "differentdate")
    {
      // SAVE THAT DIFFERENT DATE WAS SELECTED
      customCloseDateSelected = true;

      // DAY
      var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

      //  MONTH
      var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];


      console.log(" the day in   " + req.session.data['event-day-close']);
      console.log(" the month in " + req.session.data['event-month-close']);
      console.log(" the year in  " + req.session.data['event-year-close']);


      // DAY - ANOTHER DATE
      if (req.session.data['event-day-close'] != undefined)
      {
        if(req.session.data['event-day-close'] == "")
        {
          missingDay = true;
          missingCustomCloseDate = true;
          console.log("The day is missing!!!!!!!!!!!!!!!!!!!!!!");
        }
        else if(1 <= req.session.data['event-day-close'] && req.session.data['event-day-close'] <= 31)
        {}
        else
        {
          invalidDay = true;
          invalidCustomCloseDate = true;
        }
      }


      // MONTH - ANOTHER DATE
      if (req.session.data['event-month-close'] != undefined)
      {
        if(req.session.data['event-month-close'] == "")
        {
          missingMonth = true;
          missingCustomCloseDate = true;
          //console.log("*************MISSING MONTH**************");
        }
        else if(1 <= req.session.data['event-month-close'] && req.session.data['event-month-close'] <= 12)
        {
        }
        else
        {
          invalidMonth = true;
          invalidCustomCloseDate = true;
        }
      }
      else
      {
        console.log("*************UNEFINED**************");
      }


      // YEAR - ANOTHER DATE
      if (req.session.data['event-year-close'] != undefined)
      {
        if(req.session.data['event-year-close'] == "")
        {
          missingYear = true;
          missingCustomCloseDate = true;
        }
        else if(2017 <= req.session.data['event-year-close']  &&  req.session.data['event-year-close'] <= 2025)
        {}
        else
        {
          invalidYear = true;
          invalidCustomCloseDate = true;
        }
      }


      if( ( missingCustomCloseDate  ||  invalidCustomCloseDate ) == false )
      {
        var enteredCloseDate = new Date();
        enteredCloseDate.setFullYear(req.session.data['event-year-close'], req.session.data['event-month-close']-1, req.session.data['event-day-close']);
      }


      // TIME
      if( (invalidCustomCloseDate || missingCustomCloseDate || missingCloseTime || invalidCloseTime) == false)
      {
        req.session.data['reg-close-time'] = req.session.data['close-hours'] + ":" + req.session.data['close-minutes'] + "  " + days[enteredCloseDate.getDay()] + "  " + enteredCloseDate.getDate() + "  " +  monthNames[enteredCloseDate.getMonth()] + "  " +  enteredCloseDate.getFullYear();

        console.log(" the day is - " + enteredCloseDate.getDay());
        console.log(" the date is - " + enteredCloseDate.getDate());
        console.log(" the month is - " + enteredCloseDate.getMonth());
        console.log(" the year is - " + enteredCloseDate.getFullYear());
      }

    }
    else
    {
      missingCloseDate = true;
    }
  }

  console.log(" the missing close date variable is " + missingCustomCloseDate);


  res.redirect('/create-event/attendees');
})




router.get('/create-event/attendee-onwards', function (req, res)
{
  // Add additional pages if there are additional questions
  console.log("questions out " + req.session.data['radio-additional-questions-boolean']);

  if(req.session.data['radio-additional-questions-boolean'] == "yes")
  {

    //req.session.questionsExist[0] = true;

    if
    (0 < req.session.previousQuestions.length)
    {
      res.redirect('/create-event/load-previous-additional-questions');
    } 
    else
    {
      req.session.data['additional-questions-incrementer'] = 1;
      res.redirect('/create-event/additional-questions');
    } 
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



router.get('/create-event/load-saved-questions-onwards-enter-questions', function (req, res)
{
  if(req.session.data['radio-saved-question-1'] != undefined)
  {
    req.session.questionsData[req.session.questionsData.length] = req.session.previousQuestions[0];
  }
  if(req.session.data['radio-saved-question-2'] != undefined)
  {
    req.session.questionsData[req.session.questionsData.length] = req.session.previousQuestions[1];
  }
  if(req.session.data['radio-saved-question-3'] != undefined)
  {
    req.session.questionsData[req.session.questionsData.length] = req.session.previousQuestions[2];
  }
  if(req.session.data['radio-saved-question-4'] != undefined)
  {
    req.session.questionsData[req.session.questionsData.length] = req.session.previousQuestions[3];
  }
  if(req.session.data['radio-saved-question-5'] != undefined)
  {
    req.session.questionsData[req.session.questionsData.length] = req.session.previousQuestions[4];
  }



  req.session.data['additional-questions-incrementer'] = 1;
  res.redirect('/create-event/additional-questions');
});

router.get('/create-event/load-saved-questions-onwards-all-done', function (req, res)
{
  if(req.session.data['radio-saved-question-1'] != undefined)
  {
    req.session.questionsData[req.session.questionsData.length] = req.session.previousQuestions[0];
  }
  if(req.session.data['radio-saved-question-2'] != undefined)
  {
    req.session.questionsData[req.session.questionsData.length] = req.session.previousQuestions[1];
  }
  if(req.session.data['radio-saved-question-3'] != undefined)
  {
    req.session.questionsData[req.session.questionsData.length] = req.session.previousQuestions[2];
  }
  if(req.session.data['radio-saved-question-4'] != undefined)
  {
    req.session.questionsData[req.session.questionsData.length] = req.session.previousQuestions[3];
  }
  if(req.session.data['radio-saved-question-5'] != undefined)
  {
    req.session.questionsData[req.session.questionsData.length] = req.session.previousQuestions[4];
  }

  res.redirect('/create-event/template-reg');
});




router.get('/create-event/add-other-question-submit', function (req, res)
{
  req.session.addOneMoreQuestion = true;

  res.redirect('/create-event/question-onwards');
  console.log("********************** the alternative thing worked");
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

      // Save which radio button was selected, Since page is refreshed instead of rerendered
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


  //  MANDATORY OR NOT
  var menditoryMessage = ""
  var manditorySelected = false;
  if(req.session.data['radio-additional-question-mandatory'] == "no")
  {
    menditoryMessage = "\nNot mandatory"
  }
  else if(req.session.data['radio-additional-question-mandatory'] == "yes")
  {
    menditoryMessage = "\nMandatory"
    manditorySelected = true;
  }

  console.log("the manditory message is *+*+*  -  " + menditoryMessage);



  // NO ERRORS FOUND
  if((errorQuestionMissing || answerTypeEmpty || answerError || errorNewOrOldQuestionMissing) == false)
  {
      // Save the data for this question to an array
      var thisNewQuestionData = new Array(14);

      // QUESTION -  INDEX 0
      thisNewQuestionData[0] = req.session.data['question'];
      console.log(thisNewQuestionData[0]);



      // RTYPE OF ANSWER - INDEX 1
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



      var tempAnswers = [];
      //  ANSWERS AT ONE STRING OF TEXT  -  INDEX 2
      if((req.session.data['radio-additional-questions-answers-type'] == "select-one") ||
         (req.session.data['radio-additional-questions-answers-type'] == "select-multiple"))
      {

        // Check through answer boxes ad make a text string of them all
        for(answersIncrementer=1; answersIncrementer<11; answersIncrementer++)
        {
          if(req.session.data['answer-'+answersIncrementer] != "" && req.session.data['answer-'+answersIncrementer] != undefined  )
          {
            // IF SELECT ONE THEN ALSO CHECK IF MORE DEAILS ARE REQUIRED FROM ANSWER
            if(req.session.data['radio-additional-questions-answers-type'] == "select-one")
            {
              if(req.session.data['answer-'+answersIncrementer+'-checkbox'] != undefined)
              {
                answersString = answersString + (req.session.data['answer-'+answersIncrementer]) + " - request details" + "\n";
              }
              else
              {
                answersString = answersString + (req.session.data['answer-'+answersIncrementer]) + "\n";
              }
            }
            else
            {
              answersString = answersString + (req.session.data['answer-'+answersIncrementer]) + "\n";
            }


            tempAnswers[tempAnswers.length] = req.session.data['answer-'+answersIncrementer];

            console.log("the answers being added - " + req.session.data['answer-'+answersIncrementer]);
          }
        }
      }
      console.log("the answers STRING IS - " + thisNewQuestionData[2]  + "\n");




      // SAVE TO QUESTION LIST AND 'PREVIOUS QUESTION'
      if( req.session.changingFromSummary == true )
      {
          if(req.session.addNewQuestionFromSummary == true)
          {
            // NEW QUESTION ADDED FRO SUMMARY
            req.session.questionsData[req.session.questionsData.length] = [thisNewQuestionData[0],thisNewQuestionData[1],answersString,menditoryMessage];
            // Save the new questions to a more permanent list of saved questions
            req.session.previousQuestions[req.session.previousQuestions.length] = [thisNewQuestionData[0],thisNewQuestionData[1],tempAnswers,menditoryMessage];
          }
          else  // CHANGE TO QUESTION
          {
            console.log("the question index being chnaged is " + req.session.changeQuestionNumber);
            req.session.questionsData[req.session.changeQuestionNumber] = [thisNewQuestionData[0], thisNewQuestionData[1], answersString, menditoryMessage];
            // SHOULD BE UPDATING THE PREVIOUS QUESTIONS BUT HAVE'T IMPLMENTED IT
          }
      }
      else
      {
          // SAVE NEW QUESTION DURING CREATE JOURNEY
          req.session.questionsData[req.session.questionsData.length] = [thisNewQuestionData[0],thisNewQuestionData[1],answersString,menditoryMessage];
          // Save the new questions to a more permanent list of saved questions
          req.session.previousQuestions[req.session.previousQuestions.length] = [thisNewQuestionData[0],thisNewQuestionData[1],tempAnswers,menditoryMessage];
      }







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
      else if(req.session.changingFromSummary == true)
      {
        req.session.changingFromSummary = false;
        req.session.addNewQuestionFromSummary = false;
        // Go back to summary
        res.redirect('/create-event/summary');
      }
      else
      {

        console.log("the answers STRING IS for the questions at the end of questions pages" + req.session.questionsData + "\n");

        // Final question move on to email registration confirmation
        res.redirect('/create-event/template-reg');
      }
  }



  // ERRORS FOUND stay on same page
  else
  {
    res.render('create-event/additional-questions',
        {
          'errorQuestions': true,

          'errorQuestionEmpty' : errorQuestionMissing,
          'errorAnswersError' : answerError,
          'errorAnswerTypeEmpty' : answerTypeEmpty,
          'errorAnswersEmpty' : answersTotallyMissing,
          'errorAnswersOnlyOneEntered' : answersMissingOneEntered,
          'errorOneSelected' : answerTypeOneSelected,
          'errorMultipleSelected' : answerTypeMultipleSelected,
          'errorNewQuestionSelected' : newQuestionSelected,
          'errorManditorySelected' : manditorySelected,

          // not used any more
          'errorNewQuestionEmpty': errorNewOrOldQuestionMissing,
          'errorOldQuestionOneSelected' : oldQuestionOneSelected,
          'errorOldQuestionTwoSelected' : oldQuestionTwoSelected,
          'errorOldQuestionThreeSelected' : oldQuestionThreeSelected,
          'errorOldQuestionFourSelected' : oldQuestionFourSelected,
          'errorOldQuestionFiveSelected' : oldQuestionFiveSelected
        }
    );
  }
})



router.get('/create-event/change-question/:number?', function (req, res)
{
  req.session.changingFromSummary = true;
  req.session.changeQuestionNumber = req.params.number;

  // Set question number
  req.session.data['additional-questions-incrementer'] = parseInt(req.params.number) + 1;


  // Set question
  req.session.data['question'] = req.session.questionsData[req.params.number][0];

  // Set answer type
  var answerFree = false;
  var answerSingle = false;
  var answerMultiple = false;
  if(req.session.questionsData[req.params.number][1] == "Free text")
  {
    answerFree = true;
  }
  else if(req.session.questionsData[req.params.number][1] == "Select one answer")
  {
    answerSingle = true;

    console.log("saved previous questions length is " + req.session.previousQuestions.length);


    // DISPLAY THE PREVIOUSELY SAVED ANSWERS
    for(var x=0; x<req.session.previousQuestions.length; x++)
    {
      console.log("checking through saved questions " + x);

      console.log("saved value is " + req.session.previousQuestions[x][0] + "and the question value is" + req.session.questionsData[req.params.number][0]);

      if(req.session.previousQuestions[x][0] === req.session.questionsData[req.params.number][0])
      {
        for(var z=0; z<req.session.previousQuestions[x][2].length; z++)
        {
          req.session.data['answer-' + (z+1)] = req.session.previousQuestions[x][2][z];
        }
      }
    }
  }
  else if(req.session.questionsData[req.params.number][1] == "Select multiple answers")
  {
    answerMultiple = true;

    // DISPLAY THE PREVIOUSELY SAVED ANSWERS
    for(var x=0; x<req.session.previousQuestions.length; x++)
    {
      console.log("checking through saved questions " + x);

      console.log("saved value is " + req.session.previousQuestions[x][0] + "and the question value is" + req.session.questionsData[req.params.number][0]);

      if(req.session.previousQuestions[x][0] === req.session.questionsData[req.params.number][0])
      {
        for(var z=0; z<req.session.previousQuestions[x][2].length; z++)
        {
          req.session.data['answer-' + (z+1)] = req.session.previousQuestions[x][2][z];
        }
      }
    }
  }


  // SET MANDIROTY
  var manditorySelected = false;
  if(req.session.questionsData[req.params.number][3] == "Mandatory")
  {
    manditorySelected = true;
  }

  //res.redirect('/create-event/additional-questions');

  console.log("-----------" + req.session.data['question']);

  res.render('create-event/additional-questions',
      {
        'errorFreeTextSelected' : answerFree,
        'errorOneSelected' : answerSingle,
        'errorMultipleSelected' : answerMultiple,
        'errorManditorySelected' : manditorySelected
      }
  );
})

router.get('/create-event/add-another-question', function (req, res)
{
  // Clear fields
  req.session.data['question'] = "";
  req.session.data['radio-additional-questions-answers-type'] = undefined;
  for(x=1; x<11; x++)
  {
    req.session.data['answer-'+x] = "";
  }

  req.session.changingFromSummary = true;
  req.session.addNewQuestionFromSummary = true;



  req.session.data['additional-questions-incrementer'] = req.session.questionsData.length + 1;

  res.redirect('/create-event/additional-questions');
})

router.get('/create-event/cancel-current-question', function (req, res)
{
  //  IF CHANGING THEN REMOVE SAVED QUESTION
  if(req.session.changingFromSummary)
  {
    req.session.data['question'] = "";
    req.session.data['radio-additional-questions-answers-type'] = undefined;
    for(x=1; x<11; x++)
    {
      req.session.data['answer-'+x] = "";
    }
    console.log("the answers STRING IS for the questions before the end " + req.session.questionsData + "\n");

    // NEW QUESTION BEING ADDED SO NOTHING TO REMOVE
    if(req.session.addNewQuestionFromSummary == true)
    {
      req.session.changingFromSummary = false;
      req.session.addNewQuestionFromSummary = false;
      res.redirect('/create-event/summary');
    }
    else // SAVED QUESTION SO REMOVE FROM SAVED DATA
    {
      req.session.changeQuestionNumber =

      req.session.questionsData.splice(req.session.changeQuestionNumber, 1);
      req.session.previousQuestions.splice(req.session.changeQuestionNumber, 1);

      req.session.changingFromSummary = false;
      req.session.addNewQuestionFromSummary = false;
      res.redirect('/create-event/summary');
    }
  }
  else
  {
    req.session.changingFromSummary = false;
    req.session.addNewQuestionFromSummary = false;
    res.redirect('/create-event/template-reg');
  }



});



router.get('/create-event/template-reg-onwards', function (req, res)
{
  var missingSubject = false;

  if(req.session.data['event-email-reg-subject'] === "")
  {
    missingSubject = true;
  }
  else
  {
    req.session.data['email-reg-subject-error'] = false;
  }

  if( (missingSubject) == false )
  {
    if(req.session.changingFromSummary == true)
    {
      res.redirect('/create-event/summary-prelude');
    }
    else
    {
      // set the default reminder days before it it hasn't been set
      if( req.session.data['email-reminder-1'] == undefined  ||  req.session.data['email-reminder-1'] == "" )
      {
        req.session.data['email-reminder-1'] = "2";
      }
      // IF no subject in email then make one
      if( req.session.data['event-email-subject-reminder'] == undefined  ||  req.session.data['event-email-subject-reminder'] == "" )
      {
        req.session.data['event-email-subject-reminder'] = "Reminder of your upcoming event ";
      }


      res.redirect('/create-event/template-reminder');
    }
  }
  else
  {
    res.render('create-event/template-reg',
        {
          'errorMissingSubject': missingSubject
        }
    );
  }
})

router.get('/create-event/template-reg-skip', function (req, res)
{
  var missingSubject = false;

  if(req.session.data['event-email-reg-subject'] === "")
  {
    missingSubject = true;
    req.session.data['email-reg-subject-error'] = true;
  }
  else
  {
    req.session.data['email-reg-subject-error'] = false;
  }


  // set the default reminder days before it it hasn't been set
  if( req.session.data['email-reminder-1'] == undefined  ||  req.session.data['email-reminder-1'] == "" )
  {
    req.session.data['email-reminder-1'] = "2";
  }
  // IF no subject in email then make one
  if( req.session.data['event-email-subject-reminder'] == undefined  ||  req.session.data['event-email-subject-reminder'] == "" )
  {
    req.session.data['event-email-subject-reminder'] = "Reminder of your upcoming event ";
  }

  res.redirect('/create-event/template-reminder');

})



router.get('/create-event/template-reminder-onwards', function (req, res)
{
  var reminderInvalid = false;
  var reminderMissing = false;
  var secondReminderInvalid = false;
  var errorMissingEmailSubject = false;

  req.session.data['email-reminder-1-error'] = false;
  req.session.data['email-reminder-2-error'] = false;

  // REMINDER 1
  if (req.session.data['email-reminder-1'] == undefined || req.session.data['email-reminder-1'] == "")
  {
    reminderMissing = true;
  }
  else if( isNaN(req.session.data['email-reminder-1']) == true )
  {
    reminderInvalid = true;
  }
  else
  {
    req.session.data['email-reminder-subject-error'] = false;
  }


  // REMINDER 2
  if (req.session.data['email-reminder-2'] == undefined || req.session.data['email-reminder-2'] == "")
  {
    // Fine just ignore this second reminder
  }
  else if( isNaN(req.session.data['email-reminder-2']) == true )
  {
    secondReminderInvalid = true;
  }


  //  CHECK IS SUBJECT LINE IS EMPTY
  if(req.session.data['event-email-subject-reminder'] === "")
  {
    errorMissingEmailSubject = true;
  }


  if( (reminderInvalid || reminderMissing || secondReminderInvalid || errorMissingEmailSubject) == false )
  {
    res.redirect('/create-event/summary-prelude');
  }
  else
  {
    res.render('create-event/template-reminder',
        {
          'errorReminderInvalid': reminderInvalid,
          'errorReminderMissing': reminderMissing,
          'errorSecondReminderInvalid': secondReminderInvalid,
          'errorEmailSubjectMissing': errorMissingEmailSubject
        }
    );
  }
})

router.get('/create-event/template-reminder-skip', function (req, res)
{
  // MISSING SUBJECT LINE
  if(req.session.data['event-email-subject-reminder'] === "")
  {
    req.session.data['email-reminder-subject-error'] = true;
  }
  else
  {
    req.session.data['email-reminder-subject-error'] = false;
  }


  // REMINDER 1
  if (req.session.data['email-reminder-1'] == undefined || req.session.data['email-reminder-1'] == "")
  {
    req.session.data['email-reminder-1-error'] = true;
  }
  else if( isNaN(req.session.data['email-reminder-1']) == true )
  {
    req.session.data['email-reminder-1-error'] = true;
  }
  else
  {
    req.session.data['email-reminder-1-error'] = false;
  }

  // REMINDER 2
  if (req.session.data['email-reminder-2'] == undefined || req.session.data['email-reminder-2'] == "")
  {
    req.session.data['email-reminder-2-error'] = false;
  }
  else if( isNaN(req.session.data['email-reminder-2']) == true )
  {
    req.session.data['email-reminder-2-error'] = true;
  }

  res.redirect('/create-event/summary-prelude');

})



//
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




router.get('/create-event/go-live-now', function (req, res)
{
  // Block publishing of event for internal user
  if(req.session.liveOrNot == true)
  {
    res.redirect('/create-event/go-live');
  }
  if(req.session.showPublishBlockingPage == true)
  {
      req.session.showPublishBlockingPage  = false;
      res.redirect('/create-event/go-live-incomplete');
  }
  else
  {
      // Set for the go live publishing option page

      // Make the list of tracking links, assuming it will go live in a moment
      var x = req.session.eventsLive.length;

      req.session.currentEventShowing = req.session.eventsLive.length;

      var baseURL = req.session.data['event-title'];

      // Make lower case
      baseURL = baseURL.toLowerCase();

      // remove space an then hyphens
      baseURL = baseURL.replace(" - ", " ");

      // remove spaces
      baseURL = baseURL.replace(/\s/g, '-');

      // remove ampersand
      baseURL = baseURL.replace(/&/g, "");

      // Add on DIT prefix
      baseURL = baseURL;

      var eachURLarrayName = [];
      var eachURLarray = [];

      // Save the name of each link
      eachURLarrayName[0] = "NULL NAME - YOU SHOULD'T SEE THIS";
      eachURLarrayName[1] = "Default event link";
      //eachURLarrayName[2] = "Twitter";

      // Save the urls of each link being tracked
      eachURLarray[0] = "NUL URLL - YOU SHOULD'T SEE THIS";;
      eachURLarray[1] = baseURL;
      //eachURLarray[2] = baseURL + "-twitter";

      var arrayOfNameAndUrls = [];
      arrayOfNameAndUrls[0] = eachURLarrayName;
      arrayOfNameAndUrls[1] = eachURLarray;
      // add empty percentages
      arrayOfNameAndUrls[2] = [0,0];
      arrayOfNameAndUrls[3] = [100,0];
      arrayOfNameAndUrls[4] = [0,0];
      arrayOfNameAndUrls[5] = [100,0];


      req.session.eventsLiveURLS[x] = arrayOfNameAndUrls;

      console.log("  --- THE OUTPUT URL IS *+* " + req.session.eventsLiveURLS[x]);

      // load in the default URLs
      req.session.data['new-main-url'] = req.session.eventsLiveURLS[req.session.currentEventShowing][1][1];

      req.session.showPublishBlockingPage = false;

      res.redirect('/create-event/go-live');
  }

});


router.get('/create-event/go-live-incomplete-onwards', function (req, res)
{
    // Block publishing of event for internal user


    res.redirect('/create-event/summary');
});







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

  if( req.session.liveOrNot == "true" )
  {
    console.log("zdifhsdfhlsdlf  zdad   \n" + req.session.showPublishBlockingPage + "\n\n");
    req.session.showPublishBlockingPage = false;
  }

  console.log("zdifhsdfhlsdlf   \n" + req.session.showPublishBlockingPage );

  console.log("\n  ACCESS LEVEL IS ss" + req.session.data['radio-link-access'] + "ss\n" );

  if( req.session.data['radio-link-access'] != "Anyone on the web" && req.session.data['radio-link-access'] != "Only people we share the link with" )
  {
    if( req.session.liveOrNot == "true" )
    {
      req.session.data['radio-link-access'] = "Anyone on the web";
    }
  }


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
    // this variable is saved as quoted text
  req.session.liveOrNot = req.params.liveevent;

    console.log("live or now is   \n" + req.session.liveOrNot + "\n\n");

  if( req.session.liveOrNot == "true" )
  {
      console.log("zdifhsdfhlsdlf  zdad   \n" + req.session.showPublishBlockingPage + "\n\n");
    req.session.showPublishBlockingPage = false;
  }

  console.log("zdifhsdfhlsdlf   \n" + req.session.showPublishBlockingPage );

  console.log("\n  ACCESS LEVEL IS ss" + req.session.data['radio-link-access'] + "ss\n" );

  if( req.session.data['radio-link-access'] != "Anyone on the web" && req.session.data['radio-link-access'] != "Only people we share the link with" )
  {
    if( req.session.liveOrNot == "true" )
    {
      req.session.data['radio-link-access'] = "Anyone on the web";
    }
  }

  console.log("\n  ACCESS LEVEL IS ss" + req.session.data['radio-access-level'] + "ss222\n" );


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
router.get('/create-event/change-title', function (req, res)
{
  req.session.changingFromSummary = true;

  res.redirect('/create-event/title');
})

router.get('/create-event/change-date', function (req, res)
{
  req.session.changingFromSummary = true;

  res.redirect('/create-event/date');
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


// MONITORING
router.get('/create-event/change-attendees-monitoring', function (req, res)
{
  req.session.changingFromMonitoring = true;

  res.redirect('/create-event/tickets');
})










// STORE EVENT
router.get('/make-draft-live', function (req, res)
{
  var accessLeveMissing = false;

  // If the event is already lie then go back to live page
  if( req.session.liveOrNot == "true" )
  {
    res.redirect('/create-event/preview');
  }



  // Check access level selected
  if(req.session.data['radio-link-access'] == undefined   ||  req.session.data['radio-link-access'] == ""  )
  {
    accessLeveMissing = true;
  }
  else if(req.session.data['radio-link-access'] == "Anyone on the web")
  {

  }
  else if(req.session.data['radio-link-access'] == "Only people we share the link with")
  {

  }


  if( accessLeveMissing == false )
  {
    console.log("MOVING EVENT FROM DRAFT TO LIVE");
    console.log("input number is : " +  req.session.currentEventShowing );

    //get event from drafts
    var tempEventArray = req.session.eventsDraft[req.session.eventsDraft.length -1];

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
  }
  else
  {
    res.render('create-event/go-live',
        {
          'errorLinkAccessLevel': accessLeveMissing
        }
    );
  }
})





// STORE NEW MONITOR LINK
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
    console.log("  number of names  " + req.session.eventsLiveURLS[req.session.currentEventShowing][0].length );

    // Add the new tracking name to the end of the list of tracking link names
    req.session.eventsLiveURLS[req.session.currentEventShowing][0][req.session.eventsLiveURLS[req.session.currentEventShowing][0].length] = req.session.data['new-link-name'];


    // Make and save new URL for this new tracking link name
    req.session.eventsLiveURLS[req.session.currentEventShowing][1][req.session.eventsLiveURLS[req.session.currentEventShowing][1].length]
        = req.session.data['new-url'];


    // Save 0 numbers for the useaue of the links
    //  Percentage of page views
    req.session.eventsLiveURLS[req.session.currentEventShowing][2]
        [req.session.eventsLiveURLS[req.session.currentEventShowing][2].length]= 0;

    // qunatity of page views
    req.session.eventsLiveURLS[req.session.currentEventShowing][3]
        [req.session.eventsLiveURLS[req.session.currentEventShowing][3].length]= 0;

    console.log("  --- THE REG PERCENATGES SHOULD BE BEFORE    " + req.session.eventsLiveURLS[req.session.currentEventShowing][4] +"\n");

    //  Percentage of regs
    req.session.eventsLiveURLS[req.session.currentEventShowing][4]
        [req.session.eventsLiveURLS[req.session.currentEventShowing][4].length] = 0;


    console.log("  --- THE REG PERCENATGES SHOULD BE   " + req.session.eventsLiveURLS[req.session.currentEventShowing][4] +"\n");

    //  Quanity of regs
    req.session.eventsLiveURLS[req.session.currentEventShowing][5]
        [req.session.eventsLiveURLS[req.session.currentEventShowing][5].length]= 0;


    console.log("the  name added is  " +   req.session.trackingLinksNames[req.session.trackingLinksNames.length-1]);

    console.log("the size of the links list is now " +   req.session.trackingLinksNames.length);

    res.redirect('/monitor/live-present#track-links');
  }
})




// STORE NEW MONITOR LINK - FROM GO LIVE ONLY
router.get('/add-tracking-link-go-live', function (req, res)
{
  if(req.session.data['new-url'] === "")
  {
    console.log("the new link name is empty");

    res.render('create-event/go-live',
        {
          'errorTrackingUrlEmpty': true
        }
    );
  }
  else if(req.session.data['new-url'].indexOf(' ') >= 0)
  {
    console.log("the new link name is empty");

    res.render('create-event/go-live',
        {
          'errorTrackingUrlInvalid': true
        }
    );
  }
  else
  {
    // Add the new tracking name to the end of the list of tracking link names
    req.session.eventsLiveURLS[req.session.currentEventShowing][0][req.session.eventsLiveURLS[req.session.currentEventShowing][0].length] = req.session.data['new-link-name'];


    // Make and save new URL for this new tracking link name
    req.session.eventsLiveURLS[req.session.currentEventShowing][1][req.session.eventsLiveURLS[req.session.currentEventShowing][1].length]
        = req.session.data['new-url'];


    // Save 0 numbers for the use of the links
    //  Percentage of page views
    req.session.eventsLiveURLS[req.session.currentEventShowing][2]
        [req.session.eventsLiveURLS[req.session.currentEventShowing][2].length]= 0;

    // quantity of page views
    req.session.eventsLiveURLS[req.session.currentEventShowing][3]
        [req.session.eventsLiveURLS[req.session.currentEventShowing][3].length]= 0;

    console.log("  --- THE REG PERCENATGES SHOULD BE BEFORE    " + req.session.eventsLiveURLS[req.session.currentEventShowing][4] +"\n");

    //  Percentage of regs
    req.session.eventsLiveURLS[req.session.currentEventShowing][4]
        [req.session.eventsLiveURLS[req.session.currentEventShowing][4].length] = 0;


    console.log("  --- THE REG PERCENATGES SHOULD BE   " + req.session.eventsLiveURLS[req.session.currentEventShowing][4] +"\n");

    //  Quantity of regs
    req.session.eventsLiveURLS[req.session.currentEventShowing][5]
        [req.session.eventsLiveURLS[req.session.currentEventShowing][5].length]= 0;


    console.log("the  name added is " +   req.session.trackingLinksNames[req.session.trackingLinksNames.length-1]);

    console.log("the size of the links list is now " +   req.session.trackingLinksNames.length);

    res.redirect('/create-event/go-live');
  }
})




router.get('/update-main-event-link-go-live', function (req, res)
{
  // EMPTY MAIN URL
  if(req.session.data['new-main-url'] === "")
  {
    console.log("the new link name is empty");

    res.render('create-event/go-live',
        {
          'errorMainLinkEmpty': true
        }
    );
  }
  // MAIN URL HAS SPACES OR INVALID CHARACTERS
  else if(req.session.data['new-main-url'].indexOf(' ') >= 0)
  {
    res.render('create-event/go-live',
        {
          'errorMainLinkInvalid': true
        }
    );
  }
  else
  {
    // Add the new tracking name to the end of the list of tracking link names
    req.session.eventsLiveURLS[req.session.currentEventShowing][1][1] = req.session.data['new-main-url'];

    res.redirect('/create-event/go-live');
  }
})



// WHEN SOMEONE CLICKS MONITOR, LOAD THE CORRESPONDING EVENT DETAILS
router.get('/monitor-event/:listitem?/:liveevent?', function (req, res)
{
  req.session.liveOrNot = req.params.liveevent;

  console.log("the Live event   +++++++  "  + req.session.liveOrNot);

  req.session.currentEventShowing = req.params.listitem;

  req.session.showPublishBlockingPage = false;

  if( req.session.data['radio-link-access'] != "Anyone on the web" && req.session.data['radio-link-access'] != "Only people we share the link with" )
  {
    req.session.data['radio-link-access'] = "Anyone on the web";
  }

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


  var eventDataMapTEMPLoad = [30];
  // LOAD IN STORED DATA FROM DRAFT
  if(req.session.liveOrNot == "true")
  {
    eventDataMapTEMPLoad = req.session.eventsLive[req.session.currentEventShowing];
    console.log("this is a LIVE -  EVENT BEING PREVIEWED");
    console.log("this is a LIVE -  THE NAME OF THE EVENT IS " + eventDataMapTEMPLoad[0]);
  }
  else
  {
    // THIS IS DRAFT BUT NEEDS TO BE CHNAGED TO PASSED EVENTS EVENTUALLY
    eventDataMapTEMPLoad = req.session.eventsDraft[req.session.currentEventShowing];
    console.log("this is a DRAFT EVENT BEING PREVIEWED");
  }

  req.session.data['event-title'] = eventDataMapTEMPLoad[0];
  req.session.data['attendee-quantity'] = eventDataMapTEMPLoad[8];
  req.session.data['attendee-reg-count'] = eventDataMapTEMPLoad[20];
  req.session.ticketsSoldPercentage = Math.round(eventDataMapTEMPLoad[20] / eventDataMapTEMPLoad[8]*100);

  res.redirect('/monitor/live-present');

})





router.post('/register/sign-in', function (req, res) {
  req.session.data['first-name'] = "Leslie";
  req.session.data['last-name'] = "Smith";
  req.session.data['job-title'] = "Director of International Sales";
  req.session.data['phone-number'] = "020 1234567890";
  req.session.data['mobile-number'] = "07965491256";
  req.session.data['business-name'] = "Fashion Retail Ltd";
  req.session.data['sectors'] = "Clothing, footwear fashion";
  req.session.data['website'] = "www.fashion.co.uk ";
  
  req.session.data['building'] = "Unit 10";
  req.session.data['street'] = "Westworld Industrial Park";
  req.session.data['town'] = "Bristol";
  req.session.data['postcode'] = "BS4 6JY";

  req.session.data['email-address'] = "leslie.smith@fashion.co.uk";
  req.session.data['question--1'] = ['Do you have any food allergies we should be aware of?', "yes-or-no", "Yes"];
  req.session.loggedIn = true;
  res.redirect('/register/additional-questions');
});

router.get('/register/business-sector', function (req, res)
{
  res.render('register/business-sector',
        {
          errorMissingTitle: false
        });
  //res.redirect('/register/ticket-details');
  
  
});

router.post('/register/business-sector', function (req, res) {
  errorMissingTitle = false;
  console.log(req.session.data['sectors']);
  if ( req.session.data['sectors'] == undefined) {
    res.render('register/business-sector',
        {
          errorMissingTitle: true
        });
              

  }
  else if (req.session.data['sectors'].length > 0) 
  {
  res.redirect('/register/ticket-details');
  }
});

router.post('/register/business-name', function (req, res) {

  req.session.loggedIn = false;
  res.redirect('/register/business-address');
  
});





router.get('/clear-session', function (req, res) {
  req.session.destroy();
  res.redirect('/');
});






module.exports = router




