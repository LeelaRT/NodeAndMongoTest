const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp'); -- for Todo DB
mongoose.connect('mongodb://localhost:27017/CoachingInst'); //for Coaching DB

module.exports = {mongoose:mongoose};
