let mongoose = require('mongoose');

// create a model class
let Survey = mongoose.Schema({
    Name: String,
    Description: String,
    Company: String
    
},
{
  collection: "surveys"
});

module.exports = mongoose.model('Survey', Survey);
