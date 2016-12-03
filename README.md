# React Rails

This is an example Rails application demonstrating how to use client-rendered React components with a typical Rails stack.

## How It Works

In the root of the application a `package.json` installs the required JavaScript modules from NPM; Webpack, Babel, React etc. Within the webpack directory components are imported into the index and exposed to the window via the expose loader. Webpack watches for file changes and compiles a bundle into the app/assets/javascripts.

On the Rails side a `react_component` helper accepts the name of the component to be rendered and it's props. The helper renders a div with the component name and props bound to data attributes. Next is the `mount.js` file which queries the page after load for `react_component` divs. It loops over them, mounting and rendering each component.

Huzzah, React components done The Railsy Way...
