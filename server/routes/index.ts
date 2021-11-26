import express from 'express'
import { DisplayHomePage } from '../controllers/index';
var router = express.Router();


router.get('/', DisplayHomePage);
router.get('/home', DisplayHomePage);
router.get('/index', DisplayHomePage);

export default router;