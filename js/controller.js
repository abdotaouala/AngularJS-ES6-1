/**
 * Created by MUSSAT on 22/02/2017.
 */
angular.module('Myapp',[]).controller('personCtrl',function ($scope) {
    $scope.persons=['taouala','abdo','khaouarizmi']

    $scope.ajouter=function () {


            $scope.persons.push($scope.newPerson)
            $scope.newPerson=''

    }

});