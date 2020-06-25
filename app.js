// import express from 'express';
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express!');
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
// now we have a fully functioning server albeit a very simple server.