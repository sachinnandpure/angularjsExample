var app = angualr.module('myApp',[]);
app.controller("MyController", function($scope){
    $scope.getInputName;
    $scope.message;
    $scope.checkName=function(){
        if($scope.getInputName){
            var dishesCount = $scope.getInputName.split(",").length;
            if($scope.getInputName.split(",").every(str => str==="")){
                alert("Empty string not allowed");
            }
            else {
                if(dishesCount>3){
                    $scope.message ="Too much!";
                }
                else if(dishesCount <=3 && dishesCount){
                    $scope.message="Enjoy!";
                }
            }
        }
        else {
            $scope.message =" Please enter data first";
        }
    }
});