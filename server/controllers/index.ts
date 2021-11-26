import express from 'express';
import { UserDisplayName } from '../utils';

export function DisplayHomePage(req: express.Request, res: express.Response, next: express.NextFunction) {
    console.log("hello");
    res.render('content/index', { title: 'TeamArrow | Home', page: 'content/index', displayName: UserDisplayName(req) });
    console.log("done view")
}
