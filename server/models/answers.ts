import mongoose from 'mongoose';

// create a model class
let Answer = new mongoose.Schema({
    SurveyId: String,
    Answer1: String,
    Answer2: String,
    Answer3: String
},
{
  collection: "answers"
});

const Model = mongoose.model('answer', Answer);

export default Model;