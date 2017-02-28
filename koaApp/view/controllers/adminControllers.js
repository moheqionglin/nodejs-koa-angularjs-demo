/**
 * Created by zhouwanli on 24/02/2017.
 */
angular.module("sportsStoreAdmin")
.constant("authUrl", "../resources/login")
.constant("ordersUrl", "../resources/orders")
.controller("authCtrl", function ($scope, $http, $location, authUrl) {

    $scope.authenticate = function (user, pass) {
        $http.post(authUrl, {
            username: user,
            password: pass
        }).success(function (data) {
            $location.path("/main");
        }).error(function (error) {
            $scope.authenticationError = error;
        });
    }
})
.controller("mainCtrl", function ($scope) {

    $scope.screens = ["Products", "Orders"];
    $scope.current = $scope.screens[0];

    $scope.setScreen = function (index) {
        $scope.current = $scope.screens[index];
    };

    $scope.getScreen = function () {
        return $scope.current == "Products"
            ? "/p/views/adminProducts.html" : "/p/views/adminOrders.html";
    };
})
.controller("ordersCtrl", function ($scope, $http, ordersUrl) {

    $http.get(ordersUrl, { withCredentials: true })
        .success(function (data) {
            $scope.orders = data;
            for(var data in $scope.orders){
                $scope.orders[data].products =  JSON.parse($scope.orders[data].products);
            }
        })
        .error(function (error) {
            $scope.error = error;
        });

    $scope.selectedOrder;

    $scope.selectOrder = function (order) {
        $scope.selectedOrder = order;
        // $scope.selectedOrder.products =  JSON.parse($scope.selectedOrder.products);
        // if(!($scope.selectedOrder.products instanceof  Array)){
        //     $scope.selectedOrder.products = [$scope.selectedOrder.products];
        // }
    };

    $scope.calcTotal = function (order) {
        var total = 0;
        for (var i = 0; i < order.products.length; i++) {
            total +=
                order.products[i].count * order.products[i].price;
        }
        return total;
    }
});
