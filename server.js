const express = require('express');
const app = express()
const path = require('path');

const port = process.env.PORT || 5656;
const ViewFiles = path.join(__dirname, '/View/');

app.get('/',function(req,res){
  res.sendFile(ViewFiles + 'Demo.html');
});

app.get('/Prof_Marcus',function(req,res){
  res.sendFile(ViewFiles + 'Prof_Marcus.html');
});

app.get('/sleeping_img',function(req,res){
  res.sendFile(ViewFiles + 'sleeping.jpg');
});

app.listen(port, () => {
    console.log('http://localhost: ' + port)
})