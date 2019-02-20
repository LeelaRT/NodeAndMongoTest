const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
  if(err){
    return console.log('Unable to connect to Mongo DB Server',err);
  }
  console.log('connected to Mongo DB Server');
  const db = client.db('TodoApp');

//  SQL                 MONGODB
//  DATABASE            DATABASE
//  TABLES              COLLECTIONS
//  Records             Documenets
//  Fields              Fields
// MONGODB DATABASE: TodoApp    COLLECTION: Users, Todos   Documenets: Records  Fields

  // db.collection('Todos').insertOne(
  //             {
  //               text: 'Something to do', completed: false
  //             },
  //             (err,result) => {
  //                                 if(err){
  //                                   return console.log('Unable to insert todos',err);
  //                                 }
  //                                 console.log(JSON.stringify(result,undefined,2));
  //                               }
  // );


  db.collection('Users').insertOne(
              {
                EmployeeCode: 4252, EmployeeName: 'LAKSHMI K', Location: 'London'
              },
              (err,result) => {
                                  if(err){
                                    return console.log('Unable to insert todos',err);
                                  }
                                  console.log(JSON.stringify(result.ops,undefined,2));
                                }
  );
  client.close();
});
