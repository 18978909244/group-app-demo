const Koa = require('koa2')
const config = require('./server.config')
const Router = require('koa-router')
const app = new Koa()
// const app = Object.assign(new Koa(),{name:'费德勒'})
// const app1 = Object.assign(new Koa(),{name:'纳达尔'})
// const router = require('./router')
// const middleware = require('./middleware')


config.forEach(item=>{
  let router = new Router()

  let app = Object.assign(new Koa(),item)
  router.get('/', async (ctx, next) =>{
    ctx.response.body = item.title
  })
  app.use(router.routes())
  app.listen(item.port, () => {
    console.log(`${item.hostname} is running at http://localhost:${item.port}`)
  })
})