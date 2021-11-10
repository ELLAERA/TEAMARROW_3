// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the survey model
let book = require('../models/surveys');

/* GET survey List page. READ */
router.get('/', (req, res, next) => {
  // find all sueveys in the surveys collection
  survey.find( (err, surveys) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('surveys/index', {
        title: 'Surveys',
        surveys: surveys
      });
    }
  });

});

//  GET the Surveys Details page in order to add a new Survey
router.get('/add', (req, res, next) => {

  res.render('surveys/details', {
    title: 'Add Survey', 
    surveys:'' });
});

// POST process the Survey Details page and create a new Survey - CREATE
router.post('/add', (req, res, next) => {

  let newSurvey = survey({
    "Name": req.body.name,
    "Description":req.body.description,
     "Company": req.body.company,
     
    });


survey.create(newSurvey, (err, survey) =>{
    if(err)
    {
        console.log(err);
        res.end(err);
    }
    else
    {
        // refresh the surveys  
        res.redirect('/surveys');
    }
   });
});

// GET the Surveys Details page in order to edit an existing surveys
router.get('/:id', (req, res, next) => {

  let id = req.params.id;

  




});

// POST - process the information passed from the details form and update the document
router.post('/:id', (req, res, next) => {

 












});

// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {

  let id = req.params.id;

  survey.remove({_id: id}, (err) => {
      if(err)
      {
          console.log(err);
          res.end(err);
      }
      else
      {
           // refresh the survey list
           res.redirect('/surveys');
      }
  });
});


module.exports = router;
