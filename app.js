const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody! This is coming from inside my container!");
});
 
module.exports.app = app;
