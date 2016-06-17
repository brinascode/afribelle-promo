app.controller("sellerProduits",
	["$scope","$http","$location","$window",function($scope,$http,$location,$window)
{
//Fix all this inside a service! (the user stuff)
$scope.user = $scope.$parent.user



//************Gets the produits the user has online already.
$scope.mesProduits=[]
$http.get("/mesproduits").success(function(data){
	$scope.mesProduits = data
	console.log(data)
})


//*****************Pour ajouter un nouveau produit (updates the product list)
$scope.nouveauProduit = {}
$scope.nouveauProduit.vendeur=""+$scope.user._id+""
//Later fix the validation, and make them confirm. 
//If they have already 15 prods,they cant sell more!

$scope.completedInfo = $scope.$parent.completedInfo

$scope.ajouterProduit = function(nouveauProduit)
{

      if($scope.$parent.completedInfo){
			$http.post("/ajouterProduit",nouveauProduit).success(function(data){
			$scope.mesProduits = data
			})
      }
      else{
      	$scope.message = "Tu dois dabords remplir tes informations personnelles avant de commencer à vendre"
      }
} 

}])