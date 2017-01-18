"use strict";
/**
 * Created on 2017-01-17.
 * @author: Gman Park
 */
// import * as Rx from 'rxjs';
var Rx = require("rx-dom/dist/rx.dom");
var Main = (function () {
    function Main() {
        this.attachEvent();
    }
    //http://finance.daum.net/xml/xmlallpanel.daum?stype=P&type=s
    Main.prototype.attachEvent = function () {
        var input = document.querySelector('.inp');
        console.log(Rx.DOM);
        Rx.DOM.ajax({ url: 'http://finance.daum.net/xml/xmlallpanel.daum?stype=P&type=s', responseType: 'json' })
            .subscribe(function (data) {
            data.response.forEach(function (product) {
                console.log(product);
            });
        }, function (error) {
            // Log the error
        });
        // Rx.Observable.fromEvent(input, 'keyup')
        //     .debounceTime(1000)
        //     .subscribe((e) => {
        //         // TODO: search API data binding.
        //         console.log(e.target.value);
        //     })
    };
    return Main;
}());
var App = new Main();
