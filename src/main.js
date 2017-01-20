"use strict";
/**
 * Created on 2017-01-17.
 * @author: Gman Park
 */
var Rx = require("rxjs");
var Main = (function () {
    function Main() {
        this.attachEvent();
    }
    Main.prototype.attachEvent = function () {
        var input = document.querySelector('.inp');
        Rx.Observable.fromEvent(input, 'keyup')
            .debounceTime(1000);
        this.requestData();
    };
    Main.prototype.requestData = function () {
        Rx.Observable
            .ajax({
            url: 'http://apis.skplanetx.com/11st/v2/common/products?appKey=' + Main.App_key + '&searchKeyword=nike&sortCode=A',
            crossDomain: true,
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            }
        })
            .map(function (e) { return e.response; })
            .map(function (e) {
            if (e.ProductSearchResponse) {
                return e.ProductSearchResponse.Products.Product;
            }
        })
            .subscribe(function (res) {
            console.log(res);
        });
    };
    return Main;
}());
// for SK weather API.
Main.App_key = 'f0c12da8-2ef4-3e24-8815-e2f347909a80';
var App = new Main();
