import express from 'express';
import { DisplayListPage, DisplayAddPage, DisplayEditPage, ProcessAddPage, ProcessEditPage, ProcessDeletePage } from '../controllers/surveys';
import { isLoggedIn } from '../middlewares/auth';

const router = express.Router();

router.get('/list', DisplayListPage);

router.get('/add', DisplayAddPage);

router.get('/edit/:id', DisplayEditPage);

router.post('/add', ProcessAddPage);

router.post('/edit/:id', ProcessEditPage);

router.get('/delete/:id', ProcessDeletePage);

export default router;