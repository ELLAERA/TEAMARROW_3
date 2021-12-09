"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
let Survey = new mongoose_1.default.Schema({
    Title: String,
    Author: String,
    StartDate: String,
    EndDate: String,
    Question1: String,
    Question2: String,
    Question3: String
}, {
    collection: "surveys"
});
const Model = mongoose_1.default.model('survey', Survey);
exports.default = Model;
//# sourceMappingURL=surveys.js.map