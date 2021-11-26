import express from 'express';
import { HttpError } from 'http-errors';
import { isLoggedIn } from '../middlewares/auth';

import Survey from '../models/surveys';
import { UserDisplayName } from '../utils';

//(R)ead in CRUD
export function DisplayListPage(req: express.Request, res: express.Response, next: express.NextFunction) {

    Survey.find(function (err, surveys) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        // contactCollection.sort((a, b) => a.contactName.toLowerCase().localeCompare(b.contactName.toLowerCase()))
        res.render('surveys/index', { title: 'Surveys', page: 'surveys/index',  surveys: surveys, displayName: UserDisplayName(req) })
    })
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

 

// Display (C)reate page
export function DisplayAddPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    // show the add view
    res.render('surveys/details', { title: 'Add Survey', page: 'surveys/details', surveys: '', displayName: UserDisplayName(req) });
}

// Process (E)dit page
export function ProcessEditPage(req: express.Request, res: express.Response, next: express.NextFunction) {
    let id = req.params.id;
    let updatedSurvey = new Survey({
        "_id": id,
        "Title": req.body.title,
        "Author": req.body.author,
        "StartDate": req.body.startDate,
        "EndDate": req.body.endDate
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
        "Title": req.body.title,
        "Author": req.body.author,
        "StartDate": req.body.startDate,
        "EndDate": req.body.endDate
    });
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
