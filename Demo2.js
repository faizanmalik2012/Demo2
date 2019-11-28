var express=require('express');
var app=express.Router();

app.get('/',function(req,res){
res.end('my frist response');
console.log("Demo2");
  console.log("Demo2_1");
});


app.listen(3000);
