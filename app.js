// const express = require("express");
// const http = require("http");
// const path = require("path");
// const app = express();
// console.log(process._dirname)
// // app.use(express.static(path.join(process._dirname,"dist")));
//
//
//
// app.get('*',(req,res)=>{
//   res.sendFile(path.join(process._dirname,"dist/index.html"))
// });
//
// const port = process.env.PORT || 3000;
// app.set('port',port);
//
// const server =http.createServer(app);
// server.listen(port,()=>{console.log(`Server is running`)})
const express = require('express');
const app = express();
const path = require('path');
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

const forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
       ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}
// Instruct the app
// to use the forceSSL
// middleware
app.use(forceSSL());


app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
})
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
