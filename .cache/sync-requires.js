const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/a/Documents/code/projects/webdev/info.covhack.org/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/a/Documents/code/projects/webdev/info.covhack.org/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/a/Documents/code/projects/webdev/info.covhack.org/src/pages/index.js")))
}

