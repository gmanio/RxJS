/**
 * Created on 2016-12-27.
 * @author: Gman Park
 */

var compression = require('compression');

module.exports = {
    "port": 3000,
    "server": { "baseDir": "./dist" },
    "files": ["./dist/**/*.{html,htm,css,js}"],
    // "files": [
    //     "./dist/*.{html,htm,css,js,ts}",
    //     "./dist/**/*.{html,htm,css,js,ts}",
    //     "*.html"
    // ],
    // server: {
    //     "baseDir": "../dist",
    //     middleware: {
    //         // overrides the second middleware default with new settings
    //         1: compression(), //gzip configure,
    //
    //         /**
    //          * Only for develop environment.
    //          */
    //         2: require('connect-history-api-fallback')({
    //             index: 'index.html',
    //             verbose: true
    //         })
    //     }
    // }
}
