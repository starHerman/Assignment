var app=angular.module('app',[]);


app.controller('search',['$scope','$http',function($scope,$http){
    $http.get('data.json').success(function(data){
        $scope.emps=data;
    })
}])