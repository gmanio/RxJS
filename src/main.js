"use strict";
/**
 * Created on 2017-01-17.
 * @author: Gman Park
 */
var Rx = require("rxjs");
var Main = (function () {
    function Main() {
        this.searchKeyword = "nike";
        this.attachEvent();
        //Init load datas.
        this.requestData();
    }
    Main.prototype.attachEvent = function () {
        var _this = this;
        var input = document.querySelector('.inp');
        Rx.Observable.fromEvent(input, 'keyup')
            .debounceTime(1000)
            .map(function (e) {
            return e.target.value;
        })
            .distinctUntilChanged()
            .filter(function (text) {
            // searchText null validation.
            return text != null;
        })
            .subscribe(function (text) {
            _this.searchKeyword = text;
            if (text != null) {
                _this.requestData();
            }
        }, function (err) {
            console.log(err);
        });
    };
    Main.prototype.requestData = function () {
        console.log(this.searchKeyword);
        Rx.Observable
            .ajax({
            url: 'http://apis.skplanetx.com/11st/v2/common/products?appKey=' + Main.App_key + '&searchKeyword=' + this.searchKeyword + '&sortCode=A',
            crossDomain: true,
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            }
        })
            .retry(3)
            .map(function (e) { return e.response; })
            .map(function (e) {
            if (e.ProductSearchResponse) {
                return e.ProductSearchResponse.Products.Product;
            }
        })
            .subscribe(function (res) {
            var wrapper = document.querySelector('.item_list');
            wrapper.innerHTML = "";
            for (var i = 0; i < res.length; i++) {
                // Html5 <template> import
                var template = document.querySelector('#tmpl_item');
                var elImg = template.content.querySelector('img');
                elImg.src = res[i].ProductImage;
                var clone = document.importNode(template.content, true);
                wrapper.appendChild(clone);
            }
        }, function (err) {
            console.log(err);
        });
    };
    return Main;
}());
// for SK OpenAPI devKey.
Main.App_key = 'f0c12da8-2ef4-3e24-8815-e2f347909a80';
var App = new Main();
