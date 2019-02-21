var mongoose = require('mongoose');
//DB:CoachingInst  - Collection: Courses
var Course = mongoose.model('Course',
{
    _id:          {type:Number, required: true},
    CourseName:   {type:String, required: true, trim: true}
}
);

module.exports = {Course};
