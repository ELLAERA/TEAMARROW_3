import { Request } from 'express';

export function UserDisplayName(req: Request) {
    console.log("Arisha");
    if (req.user) {
        let user = req.user as UserDocument;
        return user.displayName.toString();
    }
    return;
}