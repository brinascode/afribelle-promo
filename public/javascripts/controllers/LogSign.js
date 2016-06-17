app.controller("LogSign",
	["$scope","$http","$location","$window",function($scope,$http,$location,$window)
{


$scope.logg 
$scope.sign 
$scope.message

$scope.signup =function(){
$http.post("/signup",$scope.sign).success(function(data){
console.log(data)
if(data){
	$window.location.href="/profile"
}

})
}

$scope.login = function(){
$http.post("/login",$scope.logg).success(function(data){
if(data){
	$window.location.href="/profile"
}
else{
$scope.message = "Something went wrong. Please try again"
}
})
}



}])