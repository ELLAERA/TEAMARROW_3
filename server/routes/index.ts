import express from 'express'
import { DisplayHomePage } from '../controllers/index';
var router = express.Router();


// let survey = require('../models/surveys');

// /* GET home page. wildcard */
// router.get('/', (req, res, next) => {
//   res.render('content/index', {
//     title: 'Home',
//     surveys: ''
//    });
// });


router.get('/', DisplayHomePage);
router.get('/home', DisplayHomePage);
router.get('/index', DisplayHomePage);

export default router;