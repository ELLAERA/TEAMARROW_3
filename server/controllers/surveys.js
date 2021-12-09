"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessAnswerPage = exports.DisplayAnswerPage = exports.ProcessDeletePage = exports.ProcessAddPage = exports.ProcessEditPage = exports.DisplayEditPage = exports.DisplayAddPage = exports.DisplayListPage = void 0;
const surveys_1 = __importDefault(require("../models/surveys"));
const answers_1 = __importDefault(require("../models/answers"));
const utils_1 = require("../utils");
function DisplayListPage(req, res, next) {
    surveys_1.default.find(function (err, surveys) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('surveys/index', { title: 'Surveys', page: 'surveys/index', surveys: surveys, displayName: (0, utils_1.UserDisplayName)(req) });
    });
}
exports.DisplayListPage = DisplayListPage;
function DisplayAddPage(req, res, next) {
    res.render('surveys/details', { title: 'Add Survey', page: 'surveys/details', item: '', displayName: (0, utils_1.UserDisplayName)(req) });
}
exports.DisplayAddPage = DisplayAddPage;
function DisplayEditPage(req, res, next) {
    let id = req.params.id;
    surveys_1.default.findById(id, {}, {}, (err, surveysToEdit) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        ;
        console.log(surveysToEdit);
        res.render('surveys/details', { title: "Edit Survey", page: "surveys/details", item: surveysToEdit, displayName: (0, utils_1.UserDisplayName)(req) });
    });
}
exports.DisplayEditPage = DisplayEditPage;
function ProcessEditPage(req, res, next) {
    let id = req.params.id;
    let updatedSurvey = new surveys_1.default({
        "_id": id,
        "Title": req.body.Title,
        "Author": req.body.Author,
        "StartDate": req.body.StartDate,
        "EndDate": req.body.EndDate,
        "Question1": req.body.Question1,
        "Question2": req.body.Question2,
        "Question3": req.body.Question3
    });
    surveys_1.default.updateOne({ _id: id }, updatedSurvey, {}, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/surveys');
    });
}
exports.ProcessEditPage = ProcessEditPage;
function ProcessAddPage(req, res, next) {
    let newSurvey = new surveys_1.default({
        "Title": req.body.Title,
        "Author": req.body.Author,
        "StartDate": req.body.StartDate,
        "EndDate": req.body.EndDate,
        "Question1": req.body.Question1,
        "Question2": req.body.Question2,
        "Question3": req.body.Question3
    });
    console.log("New Survey", newSurvey);
    surveys_1.default.create(newSurvey, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        ;
        res.redirect('/surveys');
    });
}
exports.ProcessAddPage = ProcessAddPage;
function ProcessDeletePage(req, res, next) {
    let id = req.params.id;
    surveys_1.default.remove({ _id: id }, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/surveys');
    });
}
exports.ProcessDeletePage = ProcessDeletePage;
function DisplayAnswerPage(req, res, next) {
    let id = req.params.id;
    surveys_1.default.findById(id, {}, {}, (err, surveysToTake) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        ;
        console.log(surveysToTake);
        res.render('surveys/answer', { title: "Take Survey", page: "surveys/answer", item: surveysToTake, displayName: (0, utils_1.UserDisplayName)(req) });
    });
}
exports.DisplayAnswerPage = DisplayAnswerPage;
function ProcessAnswerPage(req, res, next) {
    let newAnswer = new answers_1.default({
        "Answer1": req.body.Answer1,
        "Answer2": req.body.Answer2,
        "Answer3": req.body.Answer3
    });
    console.log("New Survey", newAnswer);
    answers_1.default.create(newAnswer, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        ;
        res.redirect('/surveys');
    });
}
exports.ProcessAnswerPage = ProcessAnswerPage;
//# sourceMappingURL=surveys.js.map