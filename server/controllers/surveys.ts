import express from 'express';
import { HttpError } from 'http-errors';

import Survey from '../models/surveys';
import Answer from '../models/answers';
import { UserDisplayName } from '../utils';
import mongoose from 'mongoose';


//(R)ead in CRUD
export function DisplayListPage(req: express.Request, res: express.Response, next: express.NextFunction) {

  let surveys =  Survey.find(function (err, surveys) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        // let answers =  Answer.find(function (err, answers) {
        //     if (err) {
        //         console.error(err);
        //         res.end(err);
        //     }  
        //           console.log('Answers', answers);

        // });

        // contactCollection.sort((a, b) => a.contactName.toLowerCase().localeCompare(b.contactName.toLowerCase()))
        res.render('surveys/index', { title: 'Surveys', page: 'surveys/index', surveys: surveys, displayName: UserDisplayName(req) })
    });
}


// Display (C)reate page
export function DisplayAddPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    // show the add view
    res.render('surveys/details', { title: 'Add Survey', page: 'surveys/details', item: '', displayName: UserDisplayName(req) });
}


// Display (E)dit page
export function DisplayEditPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    let id = req.params.id;

    Survey.findById(id, {}, {}, (err, surveysToEdit) => {
        if (err) {
            console.error(err);
            res.end(err);
        };

        console.log(surveysToEdit);
        res.render('surveys/details', { title: "Edit Survey", page: "surveys/details", item: surveysToEdit, displayName: UserDisplayName(req) })
    })
}



// Process (E)dit page
export function ProcessEditPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    let id = req.params.id;
    let updatedSurvey = new Survey({
        "_id": id,
        "Title": req.body.Title,
        "Author": req.body.Author,
        "StartDate": req.body.StartDate,
        "EndDate": req.body.EndDate,
        "Question1": req.body.Question1,
        "Question2": req.body.Question2,
        "Question3": req.body.Question3
    });

    Survey.updateOne({ _id: id }, updatedSurvey, {}, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }

        res.redirect('/surveys');
    })
}

// Process (C)reate page
export function ProcessAddPage(req: express.Request, res: express.Response, next: express.NextFunction): void {


    let newSurvey = new Survey({
        "Title": req.body.Title,
        "Author": req.body.Author,
        "StartDate": req.body.StartDate,
        "EndDate": req.body.EndDate,
        "Question1": req.body.Question1,
        "Question2": req.body.Question2,
        "Question3": req.body.Question3
    });
    console.log("New Survey", newSurvey);
    Survey.create(newSurvey, (err: HttpError) => {
        if (err) {
            console.error(err);
            res.end(err);
        };

        res.redirect('/surveys');
    })
}

// Process (D)elete page
export function ProcessDeletePage(req: express.Request, res: express.Response, next: express.NextFunction) {
    let id = req.params.id;

    Survey.remove({ _id: id }, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }

        res.redirect('/surveys');
    })
}



//
export function DisplayAnswerPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    let id = req.params.id;

    Survey.findById(id, {}, {}, (err, surveysToTake) => {
        if (err) {
            console.error(err);
            res.end(err);
        };

        console.log(surveysToTake);
        res.render('surveys/answer', { title: "Take Survey", page: "surveys/answer", item: surveysToTake, displayName: UserDisplayName(req) })
    })
}

export function ProcessAnswerPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    let id = req.params.id;
    console.log("survey id obj", new mongoose.Types.ObjectId(id));

    let newAnswer = new Answer({
        "SurveyId": mongoose.Types.ObjectId.createFromHexString(id),
        "Answer1": req.body.answer1,
        "Answer2": req.body.answer2,
        "Answer3": req.body.answer3
    });
    console.log("answer to send", newAnswer);
    Answer.create(newAnswer, (err: HttpError) => {
        if (err) {
            console.error(err);
            res.end(err);
        };
        res.redirect('/surveys');
    })
}
 

export function DisplayStatsPage(req: express.Request, res: express.Response, next: express.NextFunction) {
  let id = req.params.id;

  Answer.findById(id, {}, {}, (err, surveysToGetStats) => {
      if (err) {
          console.error(err);
          res.end(err);
      }; 
      console.log(surveysToGetStats);
      res.render('surveys/stats', { title: "Survey Statistics", page: "surveys/stats", item: surveysToGetStats, displayName: UserDisplayName(req) })
  })
}