app.controller("AcceuilleController",["$scope","$location","$window","$http",
	function($scope,$location,$window,$http){


//Le panier pr les articles ajoutés depuis les "views".
//The content is sent to the child controlle: panier.js
$scope.panier = []

$scope.goProfile= function(){
	$window.location.href="/profile"
}

window.addEventListener("beforeunload",function(){
	alert("Are you sure you want to refresh? Loosing articles")
})







}])