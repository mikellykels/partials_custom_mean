var app = angular.module("partialApp", ["ngRoute"]);

// ROUTES
app.config(function($routeProvider){
    $routeProvider
        .when("/users", {
            templateUrl: "partials/customizeUsers.html"
        })
        .when("/list", {
            templateUrl: "partials/userList.html"
        })
        .otherwise({
            redirectTo: "/users"
        });
})

app.factory("userFactory", [function(){
    var factory = {};

    var users = [];

    // User List to controller
    factory.index = function(callback){
        callback(users);
    }
    // Add new user to List
    factory.create = function(user){
        users.push(user);
    }
    // Remove user from List
    factory.delete = function($index){
        users.splice($index,1);
    }
    return factory;
}])

// Inject userFactory into each controller
app.controller("CustomizeUsersController", ['$scope', 'userFactory', function($scope, userFactory){
    function setUsers(data){
        $scope.users = data;
        $scope.newUser = {};
    }

    $scope.users = [];

    userFactory.index(setUsers);

    $scope.create = function(){
        userFactory.create($scope.newUser)
        $scope.newUser = {};
    }

    $scope.delete = function($index){
        userFactory.delete($index);
    }
}])

app.controller("UserListsController", ['$scope', 'userFactory', function($scope, userFactory){
    function setUsers(data){
        $scope.users = data;
    }

    $scope.users = [];

    userFactory.index(setUsers);
}])
