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
	});

	app.post('/tasks',function(req,res){
		//console.log("esketit");
		//finds all the tasks that are for today and have not been done and sends them back to the client
		db.collection("tasks").find({done:false,today:true}).toArray(function(err,out){
			res.send(out);
		})
	});

	app.patch('/task',function(req,res){
		console.log("🙉");
		var tasks=req.body._root.children;
		for(var k=0;k<tasks.length;k++){
			db.collection("tasks").insertOne(tasks[k]);
		}
		res.send("🙉");
		//for(var y=0;y<req.body)
		//db.collection("tasks")
	});

	app.listen(port,function(){
		console.log("🐥");
		console.log("lisenting on port "+port.toString());
	});

});