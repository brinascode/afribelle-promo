
module.exports = function(app){

//Contact model
var Contact = require("../models/contact")


app.post("/landingCustomer",function(req,res){

	var contact = new Contact(req.body)

	contact.save(function(err,data){
		if (err) throw err
		res.redirect("/")
	})

})

app.post("/landingSeller",function(req,res){

	var contact = new Contact(req.body)

	contact.save(function(err,data){
		if (err) throw err
		res.redirect("/")
	})

})

app.get("/contacts",function(req,res){

	Contact.find({},function(err,data){
		if (err) throw err
		//Doesnt work res.json(data) ok
		console.log(data)
	})
})



/* GET home page. */
app.get('*', function(req, res, next) {
  res.sendFile("landingPage.html",{root:"views"});
});


}
