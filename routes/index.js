
module.exports = function(app){

//Contact model
var Contact = require("../models/contact")


app.post("/landingCustomer",function(req,res){

	var contact = new Contact
	({
	nom:req.body.nom,
	telephone:req.body.telephone,
	message:req.body.message,
	date:new Date(),
	type : "Customer"
	})

	contact.save(function(err,data){
		if (err) throw err
		res.redirect("*")
	})

})

app.post("/landingSeller",function(req,res){

	var contact = new Contact
	({
	nom:req.body.nom,
	telephone:req.body.telephone,
	message:req.body.message,
	date:new Date(),
	type : "Seller"
	})


	contact.save(function(err,data){
		res.redirect("*")
	})

})

app.get("/contacts",function(req,res){

	Contact.find({},function(err,data){
		res.json(data)
	})
})



/* GET home page. */
app.get('*', function(req, res, next) {
  res.sendFile("landingPage.html",{root:"views"});
});


}
