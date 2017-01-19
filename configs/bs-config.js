/**
 * Created on 2016-12-27.
 * @author: Gman Park
 */

var compression = require('compression');
var proxyMiddleware = require('http-proxy-middleware');

var baseDir = process.cwd() + '/dist';
module.exports = {
    server: {
        port: 3000,
        baseDir: baseDir,
        files: [
            // "./dist/*.{html,htm,css,js,ts}",
            // "./dist/**/*.{html,htm,css,js,ts}",
            "*.html"
        ],
        middleware: {
            // overrides the second middleware default with new settings
            1: compression(), //gzip configure,
            2: proxyMiddleware('/api', {
                target: 'http://finance.daum.net/xml/xmlallpanel.daum?stype=P&type=s',
                // changeOrigin: true   // for vhosted sites, changes host header to match to target's host
            }),
            3: require('connect-history-api-fallback')({index: '/index.html', verbose: true})
        }
    }
}
