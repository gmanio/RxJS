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

        Rx.Observable
            .ajax({
                url: 'http://apis.skplanetx.com/weather/current/minutely?appKey=' + Main.App_key + '&lon=126.9658000000&village=&county=&stnid=&lat=37.5714000000&city=&version=1',
                crossDomain: true
            })
            .map(e => console.log(e.response))
            .subscribe(
                (res) => {
                    console.log(res);
                }
            );
    }
}

const App = new Main();
