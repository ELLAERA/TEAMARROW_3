"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayHomePage = void 0;
const utils_1 = require("../utils");
function DisplayHomePage(req, res, next) {
    console.log("hello");
    res.render('content/index', { title: 'TeamArrow | Home', page: 'content/index', displayName: (0, utils_1.UserDisplayName)(req) });
    console.log("done view");
}
exports.DisplayHomePage = DisplayHomePage;
//# sourceMappingURL=index.js.map