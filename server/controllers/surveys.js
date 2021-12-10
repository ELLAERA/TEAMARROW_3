"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayStatsPage = exports.ProcessAnswerPage = exports.DisplayAnswerPage = exports.ProcessDeletePage = exports.ProcessAddPage = exports.ProcessEditPage = exports.DisplayEditPage = exports.DisplayAddPage = exports.DisplayListPage = void 0;
const surveys_1 = __importDefault(require("../models/surveys"));
const answers_1 = __importDefault(require("../models/answers"));
const utils_1 = require("../utils");
const mongoose_1 = __importDefault(require("mongoose"));
function DisplayListPage(req, res, next) {
    let surveys = surveys_1.default.find(function (err, surveys) {
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
    let id = req.params.id;
    console.log("survey id obj", new mongoose_1.default.Types.ObjectId(id));
    let newAnswer = new answers_1.default({
        "SurveyId": mongoose_1.default.Types.ObjectId.createFromHexString(id),
        "Answer1": req.body.answer1,
        "Answer2": req.body.answer2,
        "Answer3": req.body.answer3
    });
    console.log("answer to send", newAnswer);
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
function DisplayStatsPage(req, res, next) {
    let id = req.params.id;
    answers_1.default.findById(id, {}, {}, (err, surveysToGetStats) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        ;
        console.log(surveysToGetStats);
        res.render('surveys/stats', { title: "Survey Statistics", page: "surveys/stats", item: surveysToGetStats, displayName: (0, utils_1.UserDisplayName)(req) });
    });
}
exports.DisplayStatsPage = DisplayStatsPage;
//# sourceMappingURL=surveys.js.map