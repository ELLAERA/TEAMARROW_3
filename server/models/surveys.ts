import mongoose from 'mongoose';

// create a model class
let Survey = new mongoose.Schema({
    Title: String,
    Author: String,
    StartDate: String,
    EndDate: String,
    Question1: String,
    Question2: String,
    Question3: String,
    Responses: Number
},
{
  collection: "surveys"
});

const Model = mongoose.model('survey', Survey);

export default Model;