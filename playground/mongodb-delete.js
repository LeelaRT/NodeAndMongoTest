const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/', (err,client) =>{
  if(err){
    console.log('Unable to connect to Server');
  }

  const db = client.db('TodoApp');

  //findOneAndDelete
  db.collection('Users').findOneAndDelete({EmployeeName:'Leela RT'}).then(
      (res)=>{
          console.log(JSON.stringify(res,undefined,2));
      }
    );
  //deleteOne
  db.collection('Users').findOneAndDelete({_id:new ObjectID('5c6d46638cdc372414325b75')}  ).then(
    (res)=>{
        console.log(JSON.stringify(res,undefined,2));
    }
  );
  //deleteOne

} );
