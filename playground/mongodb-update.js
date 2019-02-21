const {MongoClient, ObjectID} = require('mongodb') ;


MongoClient.connect('mongodb://localhost:27017/', (err, client) => {
  if(err){
    return console.log('Cannot connect to Server');
  }

  const db = client.db('TodoApp');

  db.collection('Users').findOneAndUpdate(
    {_id:new ObjectID('5c6d734545b0ab092f925242')},
    {
      $set: { EmployeeName: 'SumaLata K'}
    },
    {
      returnOriginal: false
    }
  ).then(
      (res) => { console.log(JSON.stringify(res,undefined,2 )); }
    );

    db.collection('Users').findOneAndUpdate(
      {_id:new ObjectID('5c6d5c9e45b0ab092f924f4b')},
      {
        $inc: {EmployeeCode: 1}, $set: {Location:'Pune'}
      },
      { returnOriginal:false }
    ).then(
      (res) => {console.log(JSON.stringify(res,undefined,2));}
    );
} );
