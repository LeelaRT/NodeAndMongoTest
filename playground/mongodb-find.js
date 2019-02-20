// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect(
                    'mongodb://localhost:27017/',
                    (err,client) =>{
                        if(err){ return console.log('Unable to connect to Server',err); }
                        const db = client.db('TodoApp');
                        // db.collection('Users').find().toArray().then(
                        //       (docs) => {
                        //                   console.log('Users');
                        //                   console.log(JSON.stringify(docs,undefined,2));
                        //                 },
                        //       (err) => { console.log('Unable to fetch todos',err);  }
                        //  );

                        db.collection('Users').find().count().then(
                          (count) => {
                            console.log(`Users count: ${count}`);
                          },
                          (err) => {
                            console.log('Unable to fetch Users',err);
                          }
                        );

                         db.collection('Users').find({EmployeeName: 'Leela RT'}).toArray().then(
                           (docs) => {
                             console.log('\nEmployees:');
                             console.log('==========================================');
                                      console.log(JSON.stringify(docs,undefined,2));
                                      },
                           (err) => {
                                      console.log('Unable to fetch docs',err);
                                    }
                         );
                     }
                  );
