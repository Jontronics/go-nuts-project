// we are going to create a brand new express application
// add some logic to create the first rout handler
// we are going to import the express library. 


const express = require('express'); 

// we will use the above to create our first express application

const app = express();

// we are gonna create a rout handler and associate it with a given rout. 

app.get('/', (req, res) => {
  
  res.send({ hi: 'there'});
  
});

app.listen(5000);

// lets test the project.. run node index.js in the terminal
// run http://localhost:5000/ in the browser. 



/* Analise da code */


// app.get('/', (req, res) => {
//   res.send({ hi: 'there'});
// });

// line 30 

// app = "Express App to register this route handler with".

// get = "Watch for incoming requests with this method".

// '/' = "Watch for requests trying to access '/' ".

// req = "Object representing the incoming request". 

// res = "Object representing the outgoing response".

// line 31

// res.send({ hi: 'there'}) = "Immediatly send some JSON back to who ever made this request". 

