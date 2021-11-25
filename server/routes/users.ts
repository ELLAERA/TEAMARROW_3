
//Student Name: Ferdowsi Rumi
//Student Number: 301168815
//Date: OCT 1st, 2021
import { Router } from "express";
import { DisplayLoginPage, DisplayRegisterPage, ProcessLoginPage, ProcessLogout, ProcessRegisterPage } from "../controllers/user";

import passport from '../middlewares/auth';

const router = Router();

router.get('/login', DisplayLoginPage);
router.post('/login', passport.authenticate('login'), ProcessLoginPage);
router.get('/register', DisplayRegisterPage);
router.post('/register', ProcessRegisterPage);
router.get('/logout', ProcessLogout);

export default router;