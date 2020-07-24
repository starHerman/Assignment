var app=angular.module("app",[]);


app.controller("emp",['$scope',function($scope){
    let emps = [
      {
        name: "Web Development",
        val: "300.00",
        selected: false,
      },
      {
        name: "Design",
        val: "400.00",
        selected: false,
      },
      {
        name: "Integration",
        val: "250.00",
        selected: false,
      },
      {
        name: "Training",
        val: "220.00",
        selected: false,
      },
    ];
    $scope.emps=emps;
    $scope.total=0;
    $scope.select=function(emp){
        if(emp.selected){
            $scope.total -= emp.val - 0;
            console.log($scope.total);
            emp.selected=false;
        }
        else{
            $scope.total += emp.val - 0;
            console.log($scope.total);
            emp.selected=true;
        }
       
    }
}])