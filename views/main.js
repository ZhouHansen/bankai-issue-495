// import fontawesome from '@fortawesome/fontawesome'
// import solid from '@fortawesome/fontawesome-free-solid'

import Header from '../components/header'

var html = require('choo/html')

var HeaderView = new Header()

// fontawesome.library.add(solid.faUser)

module.exports = mainView

function mainView (state, emit) {
  return html`
    <body class="work-sans w-100 bg-black">
      <main>
        ${HeaderView.render()}
      </main>
    </header>
  `
}
