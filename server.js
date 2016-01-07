var serve = require('koa-static');
var koa = require('koa');
var app = koa();

app.use(serve('.'));
app.listen(3000);
console.log('[Koa] Listening on port 3000');
