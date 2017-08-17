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

  var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  if(req.session.data['event-month'] <= 13)
  { req.session.data['event-month'] =  monthNames[req.session.data['event-month']-1]; }


  //SAVE THE TIMES
  req.session.data['event-start-time'] = req.session.data['start-hours'] + ":" + req.session.data['start-minutes'];
  req.session.data['event-finish-time'] =  req.session.data['finish-hours'] + ":" + req.session.data['finish-minutes'];

  res.redirect('/create-event/venue');
})


// VENUE PAGE ONWARDS BUTTON
router.get('/create-event/venue-onwards', function (req, res) {

  req.session.data['address-venue-name'];
  req.session.data['address-street'];
  req.session.data['event-town'];
  req.session.data['event-postcode'];

  res.redirect('/create-event/description');

})


// DESCRIPTION PAGE ONWARDS BUTTON
router.get('/create-event/description-onwards', function (req, res) {

  req.session.data['event-title'];
  req.session.data['event-description'];

  res.redirect('/create-event/attendees');
})




// ATENDEE PAGE ONWARDS BUTTON
router.get('/create-event/attendee-onwards', function (req, res) {

  req.session.data['attendee-quantity'];

  res.redirect('/create-event/summary');
})


module.exports = router
