/**
 * Created by finance office on 9/21/2015.
 */
var express=require('express');
var app=express();
var port=process.env.PORT || 3000;
var bookRouter=express.Router();
bookRouter.route('/Books')
    .get(function(req,res){
        var responseJson={hello:"This is my API"}
   res.json(responseJson)
    });
app.use('/api',bookRouter);
app.get('/',function(req,res){
    res.send("welcome to my API");
});
app.listen(port,function(){
    console.log('Running in Port '+port)
});