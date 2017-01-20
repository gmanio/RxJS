/**
 * Created on 2017-01-17.
 * @author: Gman Park
 */
import * as Rx from 'rxjs';

class Main {
    // for SK weather API.
    private static App_key = 'f0c12da8-2ef4-3e24-8815-e2f347909a80';

    constructor() {
        this.attachEvent();
    }

    attachEvent() {
        let input = document.querySelector('.inp');

        Rx.Observable.fromEvent(input, 'keyup')
            .debounceTime(1000);

        this.requestData();
    }

    requestData() {
        Rx.Observable
            .ajax({
                url: 'http://apis.skplanetx.com/11st/v2/common/products?appKey=' + Main.App_key + '&searchKeyword=nike&sortCode=A',
                crossDomain: true,
                headers: {
                    "Content-type": "application/json",
                    "Accept": "application/json"
                }
            })
            .map(e => e.response)
            .map(e => {
                if(e.ProductSearchResponse){
                    return e.ProductSearchResponse.Products.Product
                }
            })
            .subscribe(
                (res) => {
                    console.log(res);
                }
            );
    }
}

const App = new Main();
