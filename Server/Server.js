var express = require('express');
var bodyparser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Course} = require('./models/Course');
// var {Student} = require('./models/Student');


var app=express();
app.use(bodyparser.json());
//CoachingInst-Courses
app.post('/Courses', (req,res) => {
  console.log(`Req for : ${req.body.CourseName}`);
  var nodejsCourse = new Course({_id:3, CourseName: req.body.CourseName});

  nodejsCourse.save().then(
    (result) => { res.send(result); },
    (err) => { res.status(400).send(err); }
  );
}
);

app.listen(3200, ()=>{ console.log('Started on port:3200'); });
