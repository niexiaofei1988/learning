const Koa = require('koa');
const path = require('path');
const static = require('koa-static');
const app = new Koa();
const statciPath = './static';

app.use(static(
  path.join(__dirname, statciPath)
));

app.use(async (ctx) => {
  ctx.body = 'hello world';
})



app.listen(3000, () => {
  console.log('http://localhost:3000');
});
