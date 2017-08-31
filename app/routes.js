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
  req.session.regionName = "DIT Yorkshire and the Humber";
  res.redirect('/signin');
})

router.get('/scenario-2', function (req, res)
{
  // empty account
  res.redirect('/signin');
})

router.get('/scenario-3', function (req, res)
{
  // empty account
  res.redirect('/signin');
})

router.get('/scenario-4', function (req, res)
{
  // empty account
  res.redirect('/signin');
})

router.get('/scenario-5', function (req, res)
{
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





// CREATE EVENT ONWARDS TO NEXT PAGE
router.get('/create-event/create-event-onwards', function (req, res)
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
    res.render('create-event/index',
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

  if(req.session.data['full-address-holder'] == "")
  {
    req.session.data['full-address-holder'] = "Not entered"
  }

  res.redirect('/create-event/description');
})



// DESCRIPTION PAGE ONWARDS BUTTON
router.get('/create-event/description-onwards', function (req, res)
{
  var errorMissingTitle = false;

  if(req.session.data['event-title'] === "")
  {
    errorMissingTitle = true;
  }

  if((errorMissingTitle) == false)
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
    res.render('create-event/description',
        {
          'errorMissingTitle': errorMissingTitle,
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




router.get('/create-event/tickets-onwards', function (req, res) {

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
    res.redirect('/create-event/summary-prelude');
  }



})





// IMAGES PAGE ONWARDS BUTTON
router.get('/create-event/question-onwards', function (req, res)
{
  var errorQuestionMissing = false;
  var answerTypeEmpty = false;
  var answerError = false;
  var answersTotallyMissing = false;
  var answersMissingOneEntered = false;

  // Selected radio
  var answerTypeOneSelected = false;
  var answerTypeMultipleSelected = false;

  // Check if the answer has been entered and throw error if not
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
      for(x=1; x<11; x++)
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


  // check for errors - No errors found
  if((errorQuestionMissing || answerTypeEmpty || answerError) == false)
  {
      // Save the data for this question to an array
      var thisNewQuestionData = [];

      // Question
      thisNewQuestionData[0] = req.session.data['question'];
      console.log(thisNewQuestionData[0]);

      // Type of answers
      var answersString = "";
      if(req.session.data['radio-additional-questions-answers-type'] == "enter-text")
      {
        thisNewQuestionData[1] = "Free text";
        answersString="Free text"
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
          if(req.session.data['answer-'+answersIncrementer] != "")
          {
            answersString = answersString + (req.session.data['answer-'+answersIncrementer]) + "\n";
            console.log(req.session.data['answer-'+answersIncrementer]);
          }
        }
      }

      thisNewQuestionData[2]= answersString;


    // SAVE THE DATA TO THE ARRAY
    req.session.questionsData.push(thisNewQuestionData);



    // Check if ths is not the final question
    if(req.session.data['additional-questions-incrementer'] < req.session.data['radio-additional-questions-quantity'])
    {
      req.session.data['question'] = "";
      req.session.data['radio-additional-questions-answers-type'] = "";
      for(x=1; x<11; x++)
      {
        req.session.data['answer-'+x] = "";
      }

      // increase question number
      req.session.data['additional-questions-incrementer'] = req.session.data['additional-questions-incrementer'] + 1;

      console.log(" the question we are on now  " + req.session.data['additional-questions-incrementer']);
      console.log(" the total number of questions " + req.session.data['radio-additional-questions-quantity']);

      res.redirect('/create-event/additional-questions');
      //res.render('create-event/additional-questions',{});
    }
    else
    {
      // Final question move on to summary
      res.redirect('/create-event/summary-prelude');
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
          'errorMultipleSelected' : answerTypeMultipleSelected
        }
    );
  }
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

  //eventDataMap.set('imageURL', req.session.data['event-title']);


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
  req.session.questionsExist = undefined;
  req.session.questionsData = undefined;

  req.session.data['question'] = undefined;
  req.session.data['radio-additional-questions-answers-type'] = undefined;
  for(var x=1; x<11; x++)
  {
    req.session.data['answer-'+x] = "";
  }

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
  req.session.questionsExist = undefined;
  req.session.questionsData = undefined;

  req.session.data['question'] = undefined;
  req.session.data['radio-additional-questions-answers-type'] = undefined;
  for(var x=1; x<11; x++)
  {
    req.session.data['answer-'+x] = "";
  }


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

  res.redirect('/create-event/preview');
})







// CHANGE DETAILS LINKS
router.get('/create-event/change-date', function (req, res)
{
  req.session.changingFromSummary = true;

  res.redirect('/create-event');
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

  res.redirect('/create-event/attendees');
})







// STORE EVENT
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
  req.session.questionsExist = undefined;
  req.session.questionsData = undefined;

  req.session.data['question'] = undefined;
  req.session.data['radio-additional-questions-answers-type'] = undefined;
  for(var x=1; x<11; x++)
  {
    req.session.data['answer-'+x] = "";
  }


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

  //console.log("draft events list before  " + req.session.eventsDraftBoolean);

  req.session.eventsDraftBoolean[req.session.eventsDraft.length] = true;
  req.session.eventsDraft.push(eventDataMapTEMP);

  console.log("NUMEBR of draft events is  " + req.session.eventsDraft.length);
  console.log("Loaded event title is " + req.session.data['event-title']);
  console.log("draft events list after  " + req.session.eventsDraftBoolean);

  req.session.liveOrNot = "false";

  res.redirect('/create-event/summary');
})





// STORE EVENT
router.get('/make-draft-live', function (req, res)
{
  console.log("MOVING EVENT FROM DRAFT TO LIVE");
  console.log("input number is : " +  req.session.currentEventShowing );

  //get event from drafts
  var tempEventArray = req.session.eventsDraft[req.session.currentEventShowing];

  console.log("content of event : " + tempEventArray);

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





router.get('/clear-session', function (req, res) {
  req.session.destroy();
  res.redirect('/');
});






module.exports = router




