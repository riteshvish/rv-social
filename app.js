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

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
