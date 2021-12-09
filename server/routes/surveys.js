"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const surveys_1 = require("../controllers/surveys");
const router = express_1.default.Router();
router.get('/', surveys_1.DisplayListPage);
router.get('/add', surveys_1.DisplayAddPage);
router.get('/edit/:id', surveys_1.DisplayEditPage);
router.post('/add', surveys_1.ProcessAddPage);
router.post('/edit/:id', surveys_1.ProcessEditPage);
router.get('/delete/:id', surveys_1.ProcessDeletePage);
router.get('/answer/:id', surveys_1.DisplayAnswerPage);
router.post('/answer/:id', surveys_1.ProcessAnswerPage);
exports.default = router;
//# sourceMappingURL=surveys.js.map