import express from 'express';
import { DisplayListPage, DisplayAddPage, ProcessAnswerPage, DisplayAnswerPage, DisplayEditPage, ProcessAddPage, ProcessEditPage, ProcessDeletePage } from '../controllers/surveys';


const router = express.Router();

router.get('/', DisplayListPage);

router.get('/add', DisplayAddPage);

router.get('/edit/:id', DisplayEditPage);

router.post('/add', ProcessAddPage);

router.post('/edit/:id', ProcessEditPage);

router.get('/delete/:id', ProcessDeletePage);

router.get('/answer/:id', DisplayAnswerPage); 

router.post('/answer/:id', ProcessAnswerPage); 

export default router;