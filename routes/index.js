
module.exports = function(app){

//Contact model
var Contact = require("../models/contact")


app.post("/landingCustomer",function(req,res){

var contact = new Contact()
contact.nom = req.body.nom
contact.telephone = req.body.telephone
contact.message = req.body.message
contact.date = new Date()
contact.type = "Customer"

contact.save(function(err,data){
	res.redirect("/")
})


})

app.post("/landingSeller",function(req,res){

var contact = new Contact()
contact.nom = req.body.nom
contact.telephone = req.body.telephone
contact.message = req.body.message
contact.date = new Date()
contact.type = "Seller"

contact.save(function(err,data){
	res.redirect("/")
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
