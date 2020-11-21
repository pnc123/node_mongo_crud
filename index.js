var express=require("express");

const mon=require("mongoose");

mon.connect("mongodb://localhost:27017/nodemongo",(err)=>{
	if(err){
		console.log("error");
	}else{
		console.log("Success connection");
	}
});


var app=express();

//--------------------------Home Page--------------------------
app.get('/',function(req,res){

	res.send("Hello");

});


//----------------------------Insert Page------------------------------

app.get('/insert',function(req,resp){

var db=mon.connection;

var obj={name:"Praveen",location:"Indore"};

db.collection("mynode").insertOne(obj,function(err,res){
	if(err){
		console.log("INSERT ERROR");
	}else{
		console.log("INSERT SUCCESS");
		resp.send("Insert Success");
	}
});

});

//------------------------------Select Page----------------------------

app.get('/select',function(req,resp){

var db=mon.connection;

//var obj={name:"Rohit",location:"Ujjain"};

db.collection("mynode").findOne({},function(err,res){
	if(err){
		console.log("FIND ERROR");
	}else{
		console.log("FIND SUCCESS");
		console.log(res);
		resp.send("Find Success");
		//resp.send("Find Success");
	}
});

});

//----------------------------Update Page-------------------------------

app.get('/update',function(req,resp){

var db=mon.connection;
var qry={name:"Praveen"};

var upd={$set:{location:"Jaipur"}};

db.collection("mynode").updateOne(qry,upd,function(err,res){
	if(err){
		console.log("UPDATE ERROR");
	}else{
		console.log("UPDATE SUCCESS");
		resp.send("Update Success");
		//console.log(res);
		//resp.send("Find Success");
	}
});


});

//----------------------------Delete Page-------------------------------

app.get('/delete',function(req,resp){

var db=mon.connection;
var qry={name:"Rohit"};

db.collection("mynode").deleteOne(qry,function(err,res){
	if(err){
		console.log("DELETE ERROR");
	}else{
		console.log("DELETE SUCCESS");
		resp.send("Delete Success");
		//console.log(res);
		//resp.send("Find Success");
	}
});

});





app.listen(8081);