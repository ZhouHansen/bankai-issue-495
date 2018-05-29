import Component from 'choo/component'
import Nav from './nav'

var html = require('choo/html')

var NavView = new Nav()

module.exports = class Header extends Component {
  update () {
    return false
  }

  createElement () {
    return html`
      <header>
        ${NavView.render()}
      </header>
    `
  }
}
