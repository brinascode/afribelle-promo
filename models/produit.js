var mongoose  = require("mongoose")
var Schema = mongoose.Schema

var produit = new Schema({
nom:String,
type:String,
details:String,
prix:Number,
livraison:Boolean,
date:Date,
image:[String],
vendeur:String,
vendeurNom:String,
})


module.exports = mongoose.model("produit",produit)