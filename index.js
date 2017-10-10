var mongo=require('mongodb').MongoClient,express=require('express'),app=express(),
parser=require('body-parser'),port=3000,tree=require('tree'),
url="mongodb://jlbaker361:Password1@ds161483.mlab.com:61483/chat";

mongo.connect(url,function(err,db){
	app.use(express.static('public'));
	app.use( parser.json() );       // to support JSON-encoded bodies
	app.use(parser.urlencoded({     // to support URL-encoded bodies
  		extended: true
	}));

	app.get('/',function(req,res){
		res.sendFile(__dirname+'/index.html');
		console.log(tree);
	});

	app.post('/task',function(req,res){
		console.log(req.body);
		res.send("🐒");
	});



	app.listen(port,function(){
		console.log("🐥");
		console.log("lisenting on port "+port.toString());
	});

});