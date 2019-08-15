const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-single-episod-js": hot(preferDefault(require("/Users/kingrayhan/projects/react/gatsby/radio/src/templates/SingleEpisod.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/kingrayhan/projects/react/gatsby/radio/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/kingrayhan/projects/react/gatsby/radio/src/pages/index.js")))
}

