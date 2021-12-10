"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
let Answer = new mongoose_1.default.Schema({
    SurveyId: mongoose_1.default.Types.ObjectId,
    Answer1: String,
    Answer2: String,
    Answer3: String
}, {
    collection: "answers"
});
const Model = mongoose_1.default.model('answer', Answer);
exports.default = Model;
//# sourceMappingURL=answers.js.map