const express = require('express');
const app = express()
const path = require('path');

const port = process.env.PORT || 5656; // use defined port or port 5656 if not defined
const ViewFiles = path.join(__dirname, '/View/');

app.get('/',function(req,res){
  res.sendFile(ViewFiles + 'home.html'); // home page
});

app.get('/Prof_Marcus',function(req,res){
  res.sendFile(ViewFiles + 'Prof_Marcus.html'); // html page initially displayed on the chatbot iframe
});

app.get('/sleeping_img',function(req,res){
  res.sendFile(ViewFiles + 'sleeping.jpg'); // image to be initially displayed on the chatbot iframe
});

app.listen(port, () => {
    console.log('http://localhost: ' + port)
});