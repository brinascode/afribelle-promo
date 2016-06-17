app.controller("Opened",
	["$scope","$http","$location","$window",
	function($scope,$http,$location,$window){

//User info

$scope.user
$scope.completedInfo 
$scope.moreInfo = {}


			$http.get("/userinfo_serv").success(function(data){
				$scope.user = data
				console.log(data)
			//Make sure user extra info is complete
			if(data.moreInfo.prenom === undefined)
			{
				$scope.completedInfo = false
				$scope.message1  = "Tu dois remplir ces informations avant de commencer à vendre et faire des achats"
			}	
			else
			{
				$scope.completedInfo =true
			}
			})



$scope.updateMoreInfo = function(){
//Validate before sending!

$http.post("/addMoreInfo",$scope.moreInfo).success(function(data){
	$scope.user.moreInfo = data.moreInfo
})
$window.location.href = "/profile"
}





//To logout
$scope.logout = function(){
	$window.location.href= "/logout"
}


}])