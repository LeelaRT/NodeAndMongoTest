var mongoose = require('mongoose');
//TodoApp - DB - Collection: Users
var Users = mongoose.model('Users',
{
  EmployeeCode: {type:String, required:true, trim:true},
  EmployeeName: {type:String, required:true, trim:true}
}
);
module.exports = {Users};
