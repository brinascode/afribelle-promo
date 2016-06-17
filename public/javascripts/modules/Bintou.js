var app = angular.module("Bintou",["ngRoute"])

app.config(function($routeProvider,$locationProvider){

$routeProvider
.when("/",{
controller:"AcceuilleController", //This controller is at the same time the page controller
templateUrl:"templates/acceuille.html"
})
.when("/authen",{
	controller:"LogSign",
	templateUrl:"templates/authen.html"
})
.when("/signup",{
	controller:"LogSign",
	templateUrl:"templates/signup.html"
})
.when("/login",{
	controller:"LogSign",
	templateUrl:"templates/login.html"
})
.when("/sellerProduits",{
	controller:"sellerProduits",
	templateUrl:"templates/sellerProduits.html"
})
.when("/vitrinesoinsducorps",{
	controller:"vitrinesoinsducorps",
	templateUrl:"templates/vitrinesoinsducorps.html"
})
.when("/panier",{
	controller:"Panier",
	templateUrl:"templates/panier.html"
}).
when("/produit",{
	controller:"Produit",
	templateUrl:"templates/produit.html"
})
.when("/userInfo",{
	controller:"Opened", //This controller is at the same time the template's page controller
	templateUrl:"templates/userInfo.html"
})


/*
Profile pageis served by the server.
So brings up some little complications:
refreshing

*/
$locationProvider.html5Mode(true)
})