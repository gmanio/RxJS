/**
 * Created on 2017-01-17.
 * @author: Gman Park
 */
import * as Rx from 'rxjs';

class Main {
    constructor() {
        this.attachEvent();
    }

    attachEvent() {
        let input = document.querySelector('.inp');

        Rx.Observable.fromEvent(input, 'keyup')
            .debounceTime(1000)
            .subscribe((e) => {
                // TODO: search API data binding.
                console.log(e.target.value);
            })
    }
}

const App = new Main();
