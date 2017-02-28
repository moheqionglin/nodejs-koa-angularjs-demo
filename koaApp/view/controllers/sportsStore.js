﻿/**
 * Created by zhouwanli on 24/02/2017.
 */
angular.module("sportsStore")
    .constant("dataUrl", "../resources/products")
    .constant("orderUrl", "../resources/orders")
    .controller("sportsStoreCtrl", function ($scope, $http, $location,
        dataUrl, orderUrl, cart) {

        $scope.data = {
        };

        $http.get(dataUrl)
            .success(function (data) {
                $scope.data.products = data;
            })
            .error(function (error) {
                $scope.data.error = error;
            });

        $scope.sendOrder = function (shippingDetails) {
            var order = angular.copy(shippingDetails);
            order.products = cart.getProducts();
            $http.post(orderUrl, order)
                .success(function (data) {
                    $scope.data.orderId = data.id;
                    cart.getProducts().length = 0;
                })
                .error(function (error) {
                    $scope.data.orderError = error;
                }).finally(function () {
                    $location.path("/complete");
                });
        }
    });
