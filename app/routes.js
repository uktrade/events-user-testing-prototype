var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})


// SIGNING PAGE
router.get('/signin-output', function (req, res) {
  res.redirect('/account');
})



// CREATE EVENT ONWARDS TO NEXT PAGE
router.get('/create-event/create-event-onwards', function (req, res) {

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
    req.session.data['start-minutes'] = -1;
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
      req.session.data['finish-minutes'] = -1;
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







  if((errorDayFound || errorMonthFound || errorYearFound  || errorStartHour || errorStartMinutes || errorFinishHour || errorFinishMinutes) == false)
  {
    res.redirect('/create-event/venue');
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
    res.redirect('/create-event/images');
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
    res.redirect('/create-event/attendees');
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






// ATTENDEE PAGE ONWARDS BUTTON
// Quantity of questions saved globally
var quantityOfQuestions = 0;

router.get('/create-event/attendee-onwards', function (req, res) {

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
  console.log(req.session.data['radio-additional-questions-quantity']);

  quantityOfQuestions = req.session.data['radio-additional-questions-quantity'];



  // check for errors
  if(0 < req.session.data['attendee-quantity'])
  {
    if(0 < req.session.data['radio-additional-questions-quantity'])
    {
      req.session.data['additional-questions-incrementer'] = 1;
      res.redirect('/create-event/additional-questions');
    }
    else
    {
      res.redirect('/create-event/summary');
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



// Setting up the store for the questiosna and answers
// 2D. one item per question.  Second demotion is Question, Answer type, Answer, Answer...Answer
var questionsData = [];



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
        thisNewQuestionData[1] = "Enter text";
        answersString="Enter text"
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
    questionsData.push(thisNewQuestionData);



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
router.get('/create-event/summary-prelude', function (req, res) {

  req.session.data['question-1'] = false;
  req.session.data['question-2'] = false;
  req.session.data['question-3'] = false;
  req.session.data['question-4'] = false;
  req.session.data['question-5'] = false;

  for(var k=1; k<(parseInt(quantityOfQuestions)+1); k++)
  {
    req.session.data['question-'+k] = true;
  }

  console.log("quantity of questions + 1 is " + (parseInt(quantityOfQuestions)+1));
  console.log("what is question one " + req.session.data['question-1']);
  console.log("what is question two " + req.session.data['question-2']);
  console.log("what is question three " + req.session.data['question-3']);
  console.log("what is question four " + req.session.data['question-4']);
  console.log("what is question five " + req.session.data['question-5']);

  res.render('create-event/summary',
      {
        'questionsOne': req.session.data['question-1'],
        'questionsTwo': req.session.data['question-2'],
        'questionsThree': req.session.data['question-3'],
        'questionsFour': req.session.data['question-4'],
        'questionsFive': req.session.data['question-5'],
        'questionsDataForSummary' : questionsData
      }
  );
})









module.exports = router
