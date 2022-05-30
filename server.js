//importing express
var bodyParser = require('body-parser');
const express = require('express');
//creating object
const app = express();
//port number
const port = 3300;

const members = require("./Member");
//API for message
app.get('/message', function (req, res) {
     res.send('This is the message');
});

//API for media
app.get('/media', function (req, res) {
var response = {
podcasts: [{
"description": "some text",
"id": 574,
"title": "Why long-term value is a winning bet",
"media": "podcast",
"publishedDate": "2018-12-19T18:00:00.000Z",
"isLive": true,
"isDeleted": false,
"link": "https://podcasts.com/574",
"createdAt": "2018-12-20T06:30:00.618Z",
"updatedAt": "2019-01-31T06:30:00.864Z"
}],
total: 1
 
}
if (response.podcasts.length > 0) {
     res.send(response);
} else {
var errorObj = {
     httpCode: 404,
     message: 'NOT_FOUND',
     description: 'The resource referenced by request does not exists.',
     details: 'Podcast is not available'
}
res.status(404);
res.send(errorObj)
}
});

app.get('/', function (req, res) {
     // res.send('404 NOT FOUND');
     // message : "Mandatory params are missing!"
     res.status(404).json({
          message : "404 NOT FOUND!"
        })
});

//post
// app.post('/submit-data', (req,res)=>{
//      if(!req.body.name || !req.body.email){
//        res.status(401).json({
//          message : "Mandatory params are missing!"
//        })
//      }
//      else{
//        res.status(200).json({
//          message : "data saved successfully"
//        })
//      }
//    })
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/',(req,res)=>{
     //   res.send(req.body);
     const newMember = {
     //     id:uuid.v4(),
         name:req.body.name,
         email:req.body.email,
         status:'active'
     // name:'a',
     //     email:'a@gmail.com',
     //     status:'active'
     }
 
     // console.log("Using Body-parser - Name: ", req.body.name)
     // console.log("Using Body-parser - Email: ", req.body.email)
     // // console.log("Using Body-parser: ", req.body.status)
 
     // if(!newMember.name || !newMember.email){
     //     res.status(400).json({msg:'Please include a name n email'})
     // }
 
     members.push(newMember);
     res.json(newMember);//displays all members
     console.log(newMember)
     // res.redirect('/');
   });

//to run the server
app.listen(port, function () {
   console.log("\nServer is running on port " + port);
});

module.exports = app; // for testing