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
    req.session.data['organiser-name'] = "South West ";
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


  var eventcCount = 5;

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

  req.session.eventsLive[1][1] = "11:00";
  req.session.eventsLive[1][2] = "12:00";
  req.session.eventsLive[1][28] = "11:00";
  req.session.eventsLive[1][29] = "12:00";
  req.session.eventsLive[1][30] = "11:00";
  req.session.eventsLive[1][31] = "12:00";

  req.session.eventsLive[0][3] = "29";
  req.session.eventsLive[1][3] = "2";
  req.session.eventsLive[2][3] = "7";
  req.session.eventsLive[3][3] = "10";
  req.session.eventsLive[4][3] = "11";

  req.session.eventsLive[0][5] = "September";
  req.session.eventsLive[1][5] = "October";
  req.session.eventsLive[2][5] = "October";
  req.session.eventsLive[3][5] = "October";
  req.session.eventsLive[4][5] = "October";

  req.session.eventsLive[0][6] = "2017";
  req.session.eventsLive[1][6] = "2017";
  req.session.eventsLive[2][6] = "2017";
  req.session.eventsLive[3][6] = "2017";
  req.session.eventsLive[4][6] = "2017";

  req.session.eventsLive[0][8] = 12;
  req.session.eventsLive[1][8] = 14;
  req.session.eventsLive[2][8] = 14;
  req.session.eventsLive[3][8] = 18;
  req.session.eventsLive[4][8] = 16;

  req.session.eventsLive[0][20] = 10;
  req.session.eventsLive[1][20] = 7;
  req.session.eventsLive[2][20] = 4;
  req.session.eventsLive[3][20] = 3;
  req.session.eventsLive[4][20] = 3;

  req.session.eventsLive[0][19] = false;
  req.session.eventsLive[1][19] = false;
  req.session.eventsLive[2][19] = false;
  req.session.eventsLive[3][19] = false;
  req.session.eventsLive[4][19] = false;


  var rawCountsViews = [];
  rawCountsViews[0] = [32, 18, 8, 4, 2];
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


  var rawCountsRegistrations = [];
  rawCountsRegistrations[0] = [req.session.eventsLive[0][20], 6, 0, 2, 2];
  rawCountsRegistrations[1] = [req.session.eventsLive[1][20], 4, 1, 1, 1];
  rawCountsRegistrations[2] = [req.session.eventsLive[2][20], 5, 2];
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
      rawPercentageRegistrations[z][w] = ((rawCountsRegistrations[z][w])/(rawCountsRegistrations[z][0])) *100;
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
    baseURL = "www.events.great.gov.uk/" + baseURL;


    var eachURLarrayName = [];
    var eachURLarray = [];

    // Save the name of each link
    eachURLarrayName[0] = "BLANK NULL";
    eachURLarrayName[1] = "Email Marketing";
    eachURLarrayName[2] = "Twitter";
    eachURLarrayName[3] = "Export for Growth";
    eachURLarrayName[4] = "Enterprise M3";

    // Save the urls of each link being tracked
    eachURLarray[0] = baseURL;
    eachURLarray[1] = baseURL + "-email-marketing";
    eachURLarray[2] = baseURL + "-twitter";
    eachURLarray[3] = baseURL + "-export-for-Growth";
    eachURLarray[4] = baseURL + "-enterprise-m3";

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
  ["25 September 2017","16.47","Henry Brown","Crane Electronics Ltd.","CEO","07933465544","henry@crane.co.uk","Yes","3 Waterhouse Square","Bristol","BS8 4JY","Electronics & IT hardware","www.crane.co.uk","Yes","£500,000","No","DIT record"];

  req.session.registeredPeopleData1[1] =
  ["25 September 2017","15.25","Geoff Clooney","Crystalclear Aspects Ltd","International Sales Director","07986366723","geoff@crystalclear.co.uk","Yes","5 Innovation House, Exeter Business Park","Exeter","EX4 7PJ","Chemicals","www.crystalclear.co.uk","Yes","£1,500,000","No","DIT record"];

  req.session.registeredPeopleData1[2] =
  ["22 September 2017","20.45","Katie Howard","CWSEC Ltd","Finance Manager","07974652277","katie@cwsec.com","Yes","3 Stamford Street","Bristol","BS3 6QD","Automotive","www.cwsec.com","No","£2,000,000","No","DIT record"];

  req.session.registeredPeopleData1[3] =
  ["19 September 2017","18.08","Robert McKinley","David Jerome Ltd","Sales Executive","07933465544","robert@jerome.co.uk","No","58 Bloomsbury Street","Bristol","BS3 8NP","Automotive","www.jerome.co.uk","No","£1,000,000","No","DIT record"];

  req.session.registeredPeopleData1[4] =
  ["15 September 2017","09.23","Charlotte Walsh","Dianne Illsley","Sales Executive","07986366723","charlotte@diannecreative.com","No","3 Stamford Street","Bristol","BS14 9WG","Automotive","We do not currently have a website","No","£100,000","Yes","New to DIT"];

  req.session.registeredPeopleData1[5] =
  ["15 September 2017","08.56","Gavin Bell","Direct Trade Bags Company Ltd","Sales Manager","07974652277","gavin@tradebags.co.uk","Yes","45 Pierrepoint Road","Cardiff","CF15 4BP","Technology","www.tradebags.co.uk","Yes","£500,000","No","New to DIT"];

  req.session.registeredPeopleData1[6] =
  ["9 September 2017","14.37","Deepak Patel","Dy-Pack UK Ltd","Head of Engineering","07933465544","deepak@dypack.com","Yes","4 Wayferry Street","Poole","BH13 5LD","Mining","www.dypack.com","No","£1,500,000","No","DIT record"];

  req.session.registeredPeopleData1[7] =
  ["2 September 2017","22.55","Mohammed Akram","Elat3d Ltd","International Sales Manager","07986366723","moh@elat3d.com	","Yes","6 Cavendish Tower","Portcullis Street, Newport","NP20 2ED","Mining","www.elat3d.com","Yes","£2,000,000","Yes","New to DIT"];

  req.session.registeredPeopleData1[8] =
  ["1 September 2017","19.04","Jane Green","Empirical Science Education CIC","Director","07974652277","jane@science.co.uk","No","7 Stamford Street","Bristol","BS3 6QD","Technology","www.science.co.uk","Yes","£1,000,000","No","DIT record"];

  req.session.registeredPeopleData1[9] =
  ["31 August 2017","12.31","Nadia Panucci","Jet Pumps UK Ltd","Sales Executive","07933465544","nadia@jetpumps.com","Yes","14 Bloomsbury Street","Bristol","BS3 8NP","Environment & Water","www.jetpumps.co.uk","Yes","£5,000,000","No","DIT record"];







  // Checkin - Alphabetical order of name of reg.
  req.session.registeredPeopleCheckinNames1 = [];

  for(var j=0; j<req.session.registeredPeopleData1.length; j++)
  {
    req.session.registeredPeopleCheckinNames1[j] = req.session.registeredPeopleData1[j][2];
  }
  req.session.registeredPeopleCheckinNames1.sort();




  // SECOND LIST OF REGISTERED PEOPLE

  req.session.registeredPeopleData2 = [];

  req.session.registeredPeopleData2[0] =
      ["25 September 2017","16:47","Connor Shaw","Equiture Limited","CEO","07986366723","connor@equiture.co.uk","Yes","3 Stamford Street","Bristol","BS3 6QD","Manufacturing","Don't have website","No","£500,000","No","New to DIT"];

  req.session.registeredPeopleData2[1] =
      ["25 September 2017","15:25","Victoria O' Leary","Fi Burke Contemporary Art","International","Sales Director","07974652277","victoria@burke.com","No	58 Bloomsbury Street","Bristol","BS3 8NP","Mining","www.burke.com","No","£1,500,000","No","DIT record"];

  req.session.registeredPeopleData2[2] =
      ["22 September 2017","20:45","Solomon Yakubu","Illuminow Ltd","Finance Manager","07933465544","solomon@illuminow.co.uk","Yes","3 Stamford Street","Bristol","BS14 9WG","Manufacturing","Don't have website","Yes","£2,000,000","No","DIT record"];

  req.session.registeredPeopleData2[3] =
      ["19 September 2017","18:08","Joseph Goldberg","IMS Risk Solutions Ltd","Sales Executive","07986366723","joseph@ims.co.uk","No","5 Strategy House, Kings Innovation Park","Leicester","LE1 1AD","Transport","www.ims.co.uk","Yes","£1,000,000","No","DIT record"];

  req.session.registeredPeopleData2[4] =
      ["15 September 2017","09:23","Magda Michalenko","India Impex (UK) Ltd","Director","07974652277","magda@impex.com","No","5 Innovation House, Exeter Business Park","Exeter","EX4 7PJ","Technology","www.impex.com","Yes","£100,000","Yes","DIT record"];

  req.session.registeredPeopleData2[5] =
      ["15 September 2017","08:56","Gavin Bell","Direct Trade Bags Company Ltd","Sales Manager","07974652277","gavin@tradebags.co.uk","Yes","45 Pierrepoint Road","Cardiff","CF15 4BP","Technology","www.tradebags.co.uk","Yes","£500,000","No","New to DIT"];

  req.session.registeredPeopleData2[6] =
      ["09 September 2017","14:37","Deepak Patel","Dy-Pack UK Ltd","Head of Engineering","07933465544","deepak@dypack.com","Yes","4 Wayferry Street","Poole","BH13","Mining","www.dypack.com","No","£1,500,000","No","New to DIT"];



  // Checkin - Alphabetical order of name of reg.
  req.session.registeredPeopleCheckinNames2 = [];

  for(var k=0; k<req.session.registeredPeopleData2.length; k++)
  {
    req.session.registeredPeopleCheckinNames2[k] = req.session.registeredPeopleData2[k][2];
  }
  req.session.registeredPeopleCheckinNames2.sort();



  res.redirect('/signin');
})



router.get('/scenario-2', function (req, res)
{
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
  req.session.data['audience-experience'] = "New to export";

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
  req.session.data['event-title'] = "Sweden food and drink seminar";

  req.session.data['event-day-of-the-week'] = "Wednesday";
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
  req.session.data['audience-experience'] = "Open to all";

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

  res.redirect('/create-event/preview');
 
})






// GERMANY
router.get('/scenario-4', function (req, res)
{
  req.session.data['event-title'] = "Doing business in Germany - retail";

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

  req.session.data['sectors'] = "Clothing, footwear and fashion"
  + "\n" + "\n" + "Giftware, jewellery and tableware"
  + "\n" + "\n" + "Retail and luxury"
  + "\n" + "\n" + "Textiles, interior textiles, and carpets";

  req.session.data['venue-additional-notes'] = "Free onsite parking";
  req.session.data['venue-additional-notes-entered'] = true;

  req.session.data['markets'] = "Germany";
  req.session.data['audience-experience'] = "New" + "\n" + "Occasional" + "\n" + "Experienced";

  req.session.data['summary-target-audience'] = `This event is for retail related small businesses based in the North East with an interest in doing business in Germany.`;


  req.session.data['benefit-input-0'] = "Hear from Miriam Ducke, Senior DIT Trade Adviser for Retail, Fashion and Luxury";
  req.session.data['benefit-input-1'] = "Understand how to take first steps into the German retail market";
  req.session.data['benefit-input-2'] = "Learn about key retail opportunities currently open to UK businesses";
  req.session.data['benefit-input-3'] = "Networking sessions with market representatives and experts";

  req.session.data['event-description'] = `A seminar about doing business in Germany for UK retail companies.
Germany’s strong economy and central position in the continent, make it one of Europe’s most attractive business hubs.

Join us for an informative seminar that can help you to take your first steps into the German retail market.

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
  req.session.data['event-title'] = "Sports technology in France";

  req.session.data['hero-image'] = "france-sport.jpg"

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


  req.session.data['sectors'] = "Global sports infrastructure"
      + "\n" + "\n" + "Software and computer services";

  req.session.data['markets'] = "France";
  req.session.data['audience-experience'] = "New" + "\n" + "Occasional" + "\n" + "Experienced";

  req.session.data['summary-target-audience'] = `This event is open to London-based companies that are “new to export” (who have not traded internationally in last 12 months). You must also fit into the category of a  small and medium enterprise.`;


  req.session.data['benefit-input-0'] = "Philipe Baudin, CEO of Sport-Tech France, explains how to pitch to French sports tech companies";
  req.session.data['benefit-input-1'] = "Opportunity to network and hear from specially selected French sports tech companies";
  req.session.data['benefit-input-2'] = "Get practical export advice from DIT sports business experts and partners ";
  req.session.data['benefit-input-3'] = "";


  req.session.data['event-description'] = `Sports technology is a growing area of business in France.

Join us for a full day of presentations and networking opportunities with a carefully selected group of French sports technology companies.

<span style="font-weight:700;">About the speaker: Philipe Baudin</span>

Philipe founded Sport-Tech in 2006, with a mission to take data-led competitive sports analysis to the next level.

Sport-Tech’s unique SportVU cameras have been used to record, track and analyse competitive sport by global sports giants such as the NBA and UEFA.

Drawing on his own experience and inspiring success story, Philipe will offer up key tips on how to successfully do business in the world of sport tech in France.
<a href="#">Visit Philipe’s LinkedIn profile</a>.`;
  ;

  req.session.data['agenda'] = `Tbc`;


  req.session.data['organiser-name'] = "Department for International Trade North East";
  req.session.data['contact-email'] = "events@tradelondon.org.uk";

  req.session.data['eu-logo-selected'] = true;
  req.session.data['dit-logo-selected'] = true;
  req.session.data['growth-logo-selected'] = true;
  req.session.data['bw-logo-selected'] = false;

  res.redirect('/create-event/preview');

})





/////////////   Sell your products and services overseas
/////////// Sports technology in France
router.get('/scenario-6', function (req, res)
{
  req.session.data['event-title'] = "Sell your products and services overseas";

  req.session.data['hero-image'] = "city-photo.jpg"

  req.session.data['event-day-of-the-week'] = "Tuesday";
  req.session.data['event-day'] = "14"
  req.session.data['event-month-name'] = "November";
  req.session.data['event-year'] = "2017"

  req.session.data['event-start-time'] = "2pm";
  req.session.data['event-finish-time'] = "3:30pm";

  req.session.data['full-address-holder'] = "Plexal" + "\n" + "14 East Bay Lane" + "\n" + "London" + "\n" + "E9 5NY";

  req.session.data['building'] = "Entrepreneurial Spark Manchester";
  req.session.data['street'] = "1st Floor" + "\n" + "RBS Building, 1 Hardman Boulevard";
  req.session.data['town'] = "Manchester";
  req.session.data['postcode'] = "M3 3AQ";

  req.session.data['venue-additional-notes'] = "";
  req.session.data['venue-additional-notes-entered'] = false;

  req.session.data['sectors'] = "All sectors";

  req.session.data['markets'] = "France";
  req.session.data['audience-experience'] = "New" + "\n" + "Occasional" + "\n" + "Experienced";

  req.session.data['summary-target-audience'] = `This event is open to any companies in the North West that are interested in selling their services or products internationally.`;


  req.session.data['benefit-input-0'] = "Find out how to develop your international sales, access overseas opportunities and get funding with the support of DIT North West";
  req.session.data['benefit-input-1'] = "Get guidance from expert industry professionals on things like international IP protection, banking, tax and legal issues";
  req.session.data['benefit-input-2'] = "Hear from local success stories of businesses that have successfully sold services of products overseas";
  req.session.data['benefit-input-3'] = "";


  req.session.data['event-description'] = `As part of global Entrepreneurship Week, join us for this educational talk and networking session, to help local businesses to take their first steps towards trading internationally.

Find out how the North West international trade team, with the support of the European Regional Development Fund, could help you develop your international sales, access overseas opportunities and apply for funding.

<span style="font-weight:700;">About the host: Jenny Mooney</span>

Jenny Mooney works for the DIT North West team as an International Trade Advisor, providing export support to UK companies to grow their international sales.

She’s previously worked for the Department for International Trade London and has a range of experience in business advice and consultancy for ACC10 Catalan Trade, Business Monitor International, and AstraZeneca.

<a href="#">Read Jenny’s LinkedIn profile</a>.`;
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









router.get('/scenario-previous-questions', function (req, res)
{
  //req.session.previousQuestions = [['Do you have an ITA?', 'select-one', 'yes', 'no']];
  // empty account
  req.session.previousQuestionsPage = true;
  res.redirect('/scenario-1');
})







///////////////////   EXTERNAL USER  /////////////////////////////////////////

  router.get('/register-for-event', function (req, res)
  {
    res.redirect('/register/sign-in');
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

router.get('/create-event/', function (req, res)
{
  res.redirect('/create-event/organiser');
})




router.get('/create-event/organiser-onwards', function (req, res)
{
  var errorMissingNameFound = false;
  var errorInvalidEmailFound = false;
  var errorInvalidPhoneFound = false;
  var errorInvalidOrganiser = false;


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
      res.redirect('/create-event/title');
    }
  }
  else
  {
    res.render('create-event/organiser',
        {
          'errorsExist': true,
          'errorMissingName': errorMissingNameFound,
          'errorInvalidEmail': errorInvalidEmailFound,
          'errorInvalidPhone': errorInvalidPhoneFound
        }
    );
  }
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

    if(req.session.data['market-box-1'] != undefined)
    {
      req.session.data['markets'] = req.session.data['market-box-1'];
    }
    else
    {
      marketEntryMissing = true;
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



  }






  //  DESCRIPTION VALIDATION
  if(req.session.data['event-description'] == "")
  {
    errorMissingDescription = true;
  }






  if(( errorMissingmarketAnswer || marketEntryMissing  || errorMissingBenefit  || agendYesNoMissing  || errorMissingAgenda1 || errorMissingDescription)  == false)
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
  var dateInThePast = false;

  var errorStartHour = false;
  var errorStartMinutes = false;

  var errorFinishHour = false;
  var errorFinishMinutes = false;


  // DAY
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

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
  var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];


  if (req.session.data['event-month'] != undefined)
  {
    if(1 <= req.session.data['event-month'] && req.session.data['event-month'] <= 12)
    {

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



  // CHECK IF DATE IS IN THE PAST
  var currentDate = new Date();
  var enteredDate = new Date();
  enteredDate.setFullYear(req.session.data['event-year'], req.session.data['event-month']-1, req.session.data['event-day']);


  req.session.data['event-day-of-the-week'] = days[enteredDate.getDay()];

  console.log("THE CURRENT DTE TIME IS " + currentDate);
  console.log("THE ENTERED DATE TIME IS " + enteredDate);

  if(enteredDate < currentDate)
  {
    dateInThePast = true;
  }


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


  console.log("THE YEAR BEFORE IS +++++++++++ " + oneDayBefore.getFullYear());

  console.log("THE DAY BEFORE IS +++++++++++ " + days[oneDayBefore.getDay()] + "  " + oneDayBefore.getDate() + "  " +  monthNames[oneDayBefore.getMonth()] + "  " +  oneDayBefore.getFullYear());




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
  if((errorDayFound || errorMonthFound || errorYearFound  || errorStartHour || errorStartMinutes || errorFinishHour || errorFinishMinutes || dateInThePast) == false)
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
          'errorDateInThePast': dateInThePast,

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



  if( req.session.data['venue-additional-notes'] == "")
  {
    req.session.data['venue-additional-notes-entered'] = false;
  }
  else
  {
    req.session.data['venue-additional-notes-entered'] = true;
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
      res.redirect('/create-event/images');
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



// IMAGES PAGE ONWARDS BUTTON
router.get('/create-event/images-onwards', function (req, res)
{
  //console.log("\nreq.session.data['eu-logo'] \n\n")

  if(req.session.data['eu-logo'] != undefined)
  {
    req.session.data['eu-logo-selected'] = true;
    console.log("\n the logo for the eu worked \n\n")
  }
  else
  {
    req.session.data['eu-logo-selected'] = false;
  }

  if(req.session.data['dit-logo'] != undefined)
  {
    req.session.data['dit-logo-selected'] = true;
  }
  else
  {
    req.session.data['dit-logo-selected'] = false;
  }

  if(req.session.data['growth-logo'] != undefined)
  {
    req.session.data['growth-logo-selected'] = true;
  }
  else
  {
    req.session.data['growth-logo-selected'] = false;
  }

  if(req.session.data['bw-logo'] != undefined)
  {
    req.session.data['bw-logo-selected'] = true;
  }
  else
  {
    req.session.data['bw-logo-selected'] = false;
  }


  // check for errors- never any
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

  console.log("the event thing close 999  " + req.session.data['radio-close-early-yes-no']);


  if(req.session.data['radio-close-early-yes-no'] == "no")
  {
    req.session.data['reg-close-time'] = "12:00 " + req.session.data['event-day-of-the-week'] + " " + req.session.data['event-day'] + " " +  req.session.data['event-month-name'] + " " + req.session.data['event-year'];
  }
  else if(req.session.data['radio-close-early-yes-no'] == "yes")
  {
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
      /*
      if (req.session.data['event-day-close'] != undefined)
      {
        if(1 <= req.session.data['event-day-close'] && req.session.data['event-day-close'] <= 31)
        {    }
        else
        {
          errorDayFound = true;
        }
      }

      //  MONTH
      var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];


      if (req.session.data['event-month-close'] != undefined)
      {
        if(1 <= req.session.data['event-month-close'] && req.session.data['event-month-close'] <= 12)
        {

          if(req.session.data['event-month-close'] <= 13)
          { req.session.data['event-month-name'] =  monthNames[req.session.data['event-month-close']-1]; }
        }
        else
        {
          errorMonthFound = true;
        }
      }

      // YEAR
      if (req.session.data['event-year-close'] != undefined)
      {
        if(2017 <= req.session.data['event-year-close'] && req.session.data['event-year-close'] <= 2020)
        {}
        else
        {
          errorYearFound = true;
        }
      }
      */


      // DAY
      var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


      //  MONTH
      var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];


      console.log(" the day in  " + req.session.data['event-day-close']);
      console.log(" the month in " + req.session.data['event-month-close']);
      console.log(" the year in   " + req.session.data['event-year-close']);

      var enteredCloseDate = new Date();
      enteredCloseDate.setFullYear(req.session.data['event-year-close'], req.session.data['event-month-close']-1, req.session.data['event-day-close']);

      req.session.data['reg-close-time'] = req.session.data['close-hours'] + ":" + req.session.data['close-minutes'] + "  " + days[enteredCloseDate.getDay()] + "  " + enteredCloseDate.getDate() + "  " +  monthNames[enteredCloseDate.getMonth()] + "  " +  enteredCloseDate.getFullYear();


      console.log(" the day is - " + enteredCloseDate.getDay());
      console.log(" the date is - " + enteredCloseDate.getDate());
      console.log(" the month is - " + enteredCloseDate.getMonth());
      console.log(" the year is - " + enteredCloseDate.getFullYear());

    }
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
    if (req.session.previousQuestionsPage == true) {
      res.redirect('/create-event/load-previous-additional-questions');
    } 
    else {
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


  //  MANDATORY OR NOT
  var menditoryMessage = ""
  if(req.session.data['radio-additional-question-mandatory'] == "no")
  {
    menditoryMessage = "Not mandatory"
  }
  else if(req.session.data['radio-additional-question-mandatory'] == "yes")
  {
    menditoryMessage = "Mandatory"
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


      //  ANSWERS AT ONE STRING OF TEXT  -  INDEX 2
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
      console.log("the answers STRING IS - " + thisNewQuestionData[2]  + "\n");


      // MANDATORY OR NOT
      //thisNewQuestionData[3] = menditoryMessage;



    // SAVE THE DATA TO THE ARRAY   --  FOR SUMMARY PAGE ONLY
    req.session.questionsData[req.session.questionsData.length] = [thisNewQuestionData[0],thisNewQuestionData[1],answersString,menditoryMessage];



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



router.get('/create-event/go-live-now', function (req, res)
{
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
  baseURL = "www.events.great.gov.uk/" + baseURL;

  var eachURLarrayName = [];
  var eachURLarray = [];

  // Save the name of each link
  eachURLarrayName[0] = "BLANK NULL";
  eachURLarrayName[1] = "Email Marketing";
  eachURLarrayName[2] = "Twitter";

  // Save the urls of each link being tracked
  eachURLarray[0] = baseURL;
  eachURLarray[1] = baseURL + "-email-marketing";
  eachURLarray[2] = baseURL + "-twitter";

  var arrayOfNameAndUrls = [];
  arrayOfNameAndUrls[0] = eachURLarrayName;
  arrayOfNameAndUrls[1] = eachURLarray;


  req.session.eventsLiveURLS[x] = arrayOfNameAndUrls;

  console.log("  --- THE OUTPUT URL IS *+* " + req.session.eventsLiveURLS[x]);

  res.redirect('/create-event/go-live');
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













// STORE EVENT
router.get('/make-draft-live', function (req, res)
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
    // Add the new tracking name to the end of the list of tracking link names
    req.session.eventsLiveURLS[req.session.currentEventShowing][0][req.session.eventsLiveURLS[req.session.currentEventShowing][0].length] = req.session.data['new-link-name'];


    // Make and save new URL for this new tracking link name

    req.session.eventsLiveURLS[req.session.currentEventShowing][1][req.session.eventsLiveURLS[req.session.currentEventShowing][1].length]
        = req.session.data['new-url'];


    console.log("the  name added is  " +   req.session.trackingLinksNames[req.session.trackingLinksNames.length-1]);

    console.log("the size of the links list is now " +   req.session.trackingLinksNames.length);

    res.redirect('/monitor/live-present#track-links');
  }
})


// STORE NEW MONITOR LINK - FROM GO LIVE ONLY
router.get('/add-tracking-link-go-live', function (req, res)
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
    // Add the new tracking name to the end of the list of tracking link names
    req.session.eventsLiveURLS[req.session.eventsLiveURLS.length -1][0][req.session.eventsLiveURLS[req.session.eventsLiveURLS.length -1][0].length] = req.session.data['new-link-name'];


    // Make and save new URL for this new tracking link name

    req.session.eventsLiveURLS[req.session.eventsLiveURLS.length -1][1][req.session.eventsLiveURLS[req.session.eventsLiveURLS.length -1][1].length]
        = req.session.data['new-url'];


    console.log("the  name added is " +   req.session.trackingLinksNames[req.session.trackingLinksNames.length-1]);

    console.log("the size of the links list is now " +   req.session.trackingLinksNames.length);

    res.redirect('/create-event/go-live');
  }
})





// WHEN SOMEONE CLICKS MONITOR, LOAD THE CORRESPONDING EVENT DETAILS
router.get('/monitor-event/:listitem?/:liveevent?', function (req, res)
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



router.get('/register/business-sector', function (req, res) {
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







router.get('/clear-session', function (req, res) {
  req.session.destroy();
  res.redirect('/');
});






module.exports = router




