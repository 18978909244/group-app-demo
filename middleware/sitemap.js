
const fs = require('fs')
const path = require('path')

module.exports = async (ctx,next)=>{
  const {
    app
  } = ctx
  // console.log(ctx.request.url)
  let reg = /\/sitemap.(xml|txt)/
  if(reg.test(ctx.request.url)){
    let type = ctx.request.url.split('.').reverse()[0]
    ctx.response.type = type
    ctx.response.body = await fs.readFileSync(path.resolve(__dirname, `../public/${app.hostname}_sitemap.${type}`))
  }
  await next()
}