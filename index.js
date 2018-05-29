var choo = require('choo')
var css = require('sheetify')

var MainView = require('./views/main')

css('tachyons')
css('./tachyons.extend.css')
css('./fonts.css')

const app = choo()
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} else {
  app.use(require('choo-service-worker/clear')())
  app.use(require('choo-service-worker')())
}
app.route('/', MainView)
app.mount('body')
