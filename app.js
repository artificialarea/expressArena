// import express from 'express';
const express = require('express');
const morgan = require('morgan');

const app = express();

// Morgan is middleware that requests pass through
// on their way to the final handler
app.use(morgan('dev'));

// this is the final request handler
app.get('/', (req, res) => {
  res.send('Hello Express!');
});

// TESTING VIA POSTMAN //////////////////////////////////////////

// The Request Object
// per https://expressjs.com/en/4x/api.html#req
app.get('/echo', (req, res) => {
  const responseText = `Here are some details of your request:
    Base URL: ${req.baseUrl} 
    Host: ${req.hostname}
    Path: ${req.path}
    Query: ${req.query} \n ${JSON.stringify(req.query)}
    Route: ${req.route} \n ${JSON.stringify(req.route)}
  `;
  res.send(responseText);
});

// The Query Object
app.get('/queryViewer', (req, res) => {
  console.log(req.query);
  res.end(); // do not send any data back to the client
});                           

//
app.get('/greetings', (req, res) => {
  // 1. get values from the request
  const name = req.query.name;
  const race = req.query.race;

  // 2. validate the values
  if(!name) {
    // 3a. name was not provided
    return res.status(400).send('Please provide a name. Seriously.');
  }
  if(!race) {
    // 3b. race was not provided
    return res.status(400).send('Please provide a race');
  }

  // 4 and 5. both name and race are valid, so do the processing.
  const greeting = `Greetings ${name} the ${race}, welcome to our kingdom.`

  // 6. send(greeting);
  res.send(greeting)
});



app.get('/foo', (req, res) => {
  res.send('We have foo.')
});
app.get('/foo/bar', (req, res) => {
  res.send('We have bar within the foo.')
});
app.get('/foo/bizz', (req, res) => {
  res.send('We have bizz within the foo, too.')
});

app.listen(8000, () => {
  console.log('Express server is listening on port 8000...')
});

// ^^^^^^^^^^^^^
// with just
// const app = express();
// app.listen(port, fn) 
// and a couple of app.get(path, handlers)
// we now have a fully functioning server!!!! (albeit a very simple server)