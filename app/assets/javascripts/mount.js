function mountComponents() {
  var nodes = document.querySelectorAll('[data-react]')

  nodes.forEach(function(node) {
    var Component = window[node.getAttribute('data-react-component')]
    var props = JSON.parse(node.getAttribute('data-react-props'))
    console.log(props)
    ReactDOM.render(React.createElement(Component, props), node)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  mountComponents()
})
