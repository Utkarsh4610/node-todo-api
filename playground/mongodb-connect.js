//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err)
  {
    return console.log('Unable to connect to MongoDb Server');
  }
  console.log('Connected to MongoDB Server');

//   db.collection('Todos').insertOne({
//     text: 'Something',
//     completed:  false
//   },(err,result)=>{
//     if(err)
//     {
//         return console.log('Unable to insert');
//     }
//     console.log(JSON.stringify(result.ops,undefined,2));
//   });

  db.close();

});