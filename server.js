
var express    = require('express');
var app = module.exports = express();
app.use(express.static(__dirname ));

app.listen(3000
  , function(){
  console.log("LISTENING ON PORT 3000")
});
