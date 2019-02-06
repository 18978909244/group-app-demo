const Koa = require('koa2')
const config = require('./server.config')
const Router = require('koa-router')
const staticFiles = require('koa-static')
const path = require('path')
const sitemap = require('./middleware/sitemap')
const app = new Koa()


config.forEach(item=>{
  let router = new Router()

  let app = Object.assign(new Koa(),item)
  router.get('/', async (ctx, next) =>{
    console.log(ctx.request.url)
    ctx.response.body = item.title
  })
  app.use(sitemap)
  app.use(staticFiles(path.resolve(__dirname, "./public")))
  app.use(router.routes())
  app.listen(item.port, () => {
    console.log(`${item.hostname} is running at http://localhost:${item.port}`)
  })
})