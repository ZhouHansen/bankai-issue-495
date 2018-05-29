var Component = require('choo/component')
var html = require('choo/html')

module.exports = class Nav extends Component {
  update () {
    return false
  }

  createElement () {
    return html`<nav class="dt w-50-l w-90-m mlp25-ns mlp5-m pa3 bg-transparent fixed">
      <a class="dtc v-mid white link dim h2 h3-ns fw5 ttu" href="#" title ="Home">My Logo</a>
      <div class="dtc-ns dn v-mid tr">
        <a class="link dim white f6 f5-ns dib mr3 mr4-ns" href="#" title="About">Services</a>
        <a class="link dim white f6 f5-ns dib mr3 mr4-ns" href="#" title="Store">Blog</a>
        <a class="link dim white f6 f5-ns dib" href="#" title="Contact">Join Us</a>
      </div>
    </nav>`
  }
}
