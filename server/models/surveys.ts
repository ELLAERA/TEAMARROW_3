import mongoose from 'mongoose';

// create a model class
let Survey = new mongoose.Schema({
    Title: String,
    Author: String,
    StartDate: String,
    EndDate: String
},
{
  collection: "surveys"
});

const Model = mongoose.model('survey', Survey);

export default Model;