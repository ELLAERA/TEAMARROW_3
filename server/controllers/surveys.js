"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessDeletePage = exports.ProcessAddPage = exports.ProcessEditPage = exports.DisplayAddPage = exports.DisplayEditPage = exports.DisplayListPage = void 0;
const surveys_1 = __importDefault(require("../models/surveys"));
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
function DisplayAddPage(req, res, next) {
    res.render('surveys/details', { title: 'Add Survey', page: 'surveys/details', item: '', displayName: (0, utils_1.UserDisplayName)(req) });
}
exports.DisplayAddPage = DisplayAddPage;
function ProcessEditPage(req, res, next) {
    let id = req.params.id;
    let updatedSurvey = new surveys_1.default({
        "_id": id,
        "Title": req.body.Title,
        "Author": req.body.Author,
        "StartDate": req.body.StartDate,
        "EndDate": req.body.EndDate
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
        "EndDate": req.body.EndDate
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
//# sourceMappingURL=surveys.js.map