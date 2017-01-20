/**
 * Created on 2017-01-17.
 * @author: Gman Park
 */
import * as Rx from 'rxjs';

class Main {
    // for SK OpenAPI devKey.
    private static App_key = 'f0c12da8-2ef4-3e24-8815-e2f347909a80';
    private searchKeyword = "nike";

    constructor() {
        this.attachEvent();

        //Init load datas.
        this.requestData();
    }

    attachEvent() {
        let input = <Element>document.querySelector('.inp');

        Rx.Observable.fromEvent(input, 'keyup')
            .debounceTime(1000)
            .map(function (e) {
                return e.target.value;
            })
            .distinctUntilChanged()
            // .scan(function (prev, current) {
            //     if (prev == null) {
            //         return null;
            //     }
            //     return current;
            // }, null)
            .filter(function (text) {
                // searchText null validation.
                return text != null
            })
            .subscribe(
                text => {
                    this.searchKeyword = text;
                    if (text != null) {
                        this.requestData();
                    }
                },
                (err) => {
                    console.log(err);
                }
            );
    }

    requestData() {
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
            .map(e => e.response)
            .map(e => {
                if (e.ProductSearchResponse) {
                    return e.ProductSearchResponse.Products.Product
                }
            })
            .subscribe(
                (res) => {
                    let wrapper = <Element>document.querySelector('.item_list');

                    wrapper.innerHTML = "";

                    for (var i = 0; i < res.length; i++) {

                        // Html5 <template> import
                        let template = <Element>document.querySelector('#tmpl_item');
                        let elImg = template.content.querySelector('img');
                        elImg.src = res[i].ProductImage;

                        let clone = document.importNode(template.content, true);
                        wrapper.appendChild(clone);
                    }
                },
                (err) => {
                    console.log(err);
                }
            );
    }
}

const App = new Main();
