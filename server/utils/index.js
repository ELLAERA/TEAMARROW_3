"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDisplayName = void 0;
function UserDisplayName(req) {
    console.log("Arisha");
    if (req.user) {
        let user = req.user;
        return user.displayName.toString();
    }
    return;
}
exports.UserDisplayName = UserDisplayName;
//# sourceMappingURL=index.js.map