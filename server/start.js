const path = require('path');
const channels = require('../static/channels.json');
const Koa = require('koa');
const koaStatic = require('koa-static');
const getPort = require('get-port');
const Router = require('@koa/router');

async function runServer() {
  const port = await getPort({ port: 3000 });
  const router = new Router();

  function getChannels(ctx) {
    return (ctx.body = channels);
  }

  router.get('/channels', getChannels);

  const app = new Koa();
  app.use(router.routes());
  app.use(koaStatic(path.join(__dirname, '..', 'static')));
  app.listen(port);

  console.log(`server started at http://localhost:${port}/`);
}

runServer().catch(console.error);
