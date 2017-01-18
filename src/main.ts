/**
 * Created on 2017-01-17.
 * @author: Gman Park
 */
// import * as Rx from 'rxjs';
import * as Rx from 'rx-dom/dist/rx.dom';

class Main {
    constructor() {
        this.attachEvent();
    }

    //http://finance.daum.net/xml/xmlallpanel.daum?stype=P&type=s
    attachEvent() {
        let input = document.querySelector('.inp');
        console.log(Rx.DOM);
        Rx.DOM.ajax({url: 'http://finance.daum.net/xml/xmlallpanel.daum?stype=P&type=s', responseType: 'json'})
            .subscribe(
                function (data) {
                    data.response.forEach(function (product) {
                        console.log(product);
                    });
                },
                function (error) {
                    // Log the error
                }
            );

        // Rx.Observable.fromEvent(input, 'keyup')
        //     .debounceTime(1000)
        //     .subscribe((e) => {
        //         // TODO: search API data binding.
        //         console.log(e.target.value);
        //     })
    }
}

const App = new Main();
