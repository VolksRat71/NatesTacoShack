// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-beers-js": () => import("./../../../src/pages/beers.js" /* webpackChunkName: "component---src-pages-beers-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-order-js": () => import("./../../../src/pages/order.js" /* webpackChunkName: "component---src-pages-order-js" */),
  "component---src-pages-taco-masters-js": () => import("./../../../src/pages/tacoMasters.js" /* webpackChunkName: "component---src-pages-taco-masters-js" */),
  "component---src-pages-tacomasters-js": () => import("./../../../src/pages/tacomasters.js" /* webpackChunkName: "component---src-pages-tacomasters-js" */)
}
