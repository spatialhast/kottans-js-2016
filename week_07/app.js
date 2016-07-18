'use strict';

const http = require('http');
const url = require('url');

module.exports = class App {
    constructor() {
        this.fnList = [];
    };
    use(fn) {
        this.fnList.push(fn);
    };
    start(host, port, fn) {
        http.createServer((req, res) => {
            for (const fn of this.fnList) {
                fn(req, res);
            };
        }).listen(port, host);
        fn();
        console.log(`listening on ${host}:${port}`);
    };
};