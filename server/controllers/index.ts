import express from 'express';
import { UserDisplayName } from '../utils';

export function DisplayHomePage(req: express.Request, res: express.Response, next: express.NextFunction) {
    console.log("hello");
    res.render('content/index', { title: 'TeamArrow | Home', page: 'content/index', displayName: UserDisplayName(req) });
    console.log("done view")
}

// export function DisplayAboutPage(req: express.Request, res: express.Response, next: express.NextFunction) {
//     res.render('aboutme', { title: 'About Me', page: 'aboutme', displayName: UserDisplayName(req) });
// }

// export function DisplayProjectsPage(req: express.Request, res: express.Response, next: express.NextFunction) {
//     res.render('projects', { title: 'Projects', page: 'projects', displayName: UserDisplayName(req) });
// }

// export function DisplayServicesPage(req: express.Request, res: express.Response, next: express.NextFunction) {
//     res.render('service', { title: 'Services', page: 'service', displayName: UserDisplayName(req) });
// }

// export function DisplayContactPage(req: express.Request, res: express.Response, next: express.NextFunction) {
//     res.render('contact', { title: 'Contact', page: 'contact', displayName: UserDisplayName(req) });
// }