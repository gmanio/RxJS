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
        Rx.Observable
            .ajax({
            url: 'http://apis.skplanetx.com/weather/current/minutely?appKey=f0c12da8-2ef4-3e24-8815-e2f347909a80&lon=126.9658000000&village=&county=&stnid=&lat=37.5714000000&city=&version=1',
            crossDomain: true
        })
            .subscribe(function (res) {
            console.log(res.response);
        });
    };
    return Main;
}());
// for SK weather API.
Main.App_key = 'f0c12da8-2ef4-3e24-8815-e2f347909a80';
var App = new Main();
