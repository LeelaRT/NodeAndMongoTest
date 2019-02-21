var mongoose = require('mongoose');
const {Course} = require('./Course') ;

// console.log(`Course Schema: ${Course}`);
// console.log(JSON.stringify(Course, undefined,2));

var Student = mongoose.model('Student', {
_id:          {type:Number, required: true},
StudentName:  {type: String, required:true, trim:true},
Courses:      new Course,
ContactNo:    {type: Number, required:true, minlength:5}
});

module.exports = {Student};
