'use strict';

const App = require('./app');
const config = require('config').get('server');

const app = new App();

app.use((req, res) => {
    console.log('url', req.url);
    console.log('method', req.method);
});

app.use((req, res) => {
    console.log(req.headers);
    res.end('Hello World!');
});

app.start(config.host, config.port, () => console.log(`listening on ${config.port}`));