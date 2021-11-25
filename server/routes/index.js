"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = require("../controllers/index");
var router = express_1.default.Router();
router.get('/', index_1.DisplayHomePage);
router.get('/home', index_1.DisplayHomePage);
router.get('/index', index_1.DisplayHomePage);
exports.default = router;
//# sourceMappingURL=index.js.map