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
            .debounceTime(1000)
            .subscribe(function (e) {
            // TODO: search API data binding.
            console.log(e.target.value);
        });
    };
    return Main;
}());
var App = new Main();
