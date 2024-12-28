var app = angular.module('myApp',[]);
app.controller("MyController", function($scope){
    $scope.getInputName;
    $scope.message;
    $scope.alert="text-info"
    $scope.checkLunch=function(){
        if($scope.getInputName){
            var dishesCount = $scope.getInputName.split(",").length;
            if($scope.getInputName.split(",").every(str => str==="")){
                $scope.message='';
                alert("Empty string not allowed");
              
            }
            else {
                if(dishesCount>3){
                    $scope.message ="Too much!";
                    $scope.alert = "text-info";
                }
                else if(dishesCount <=3 && dishesCount){
                    $scope.message="Enjoy!";
                    $scope.alert = "text-info";
                }
            }
        }
        else {
            $scope.message =" Please enter data first";
            $scope.alert = "text-danger";
        }
    }
});