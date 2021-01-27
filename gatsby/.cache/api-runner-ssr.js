var plugins = [{
      plugin: require('C:/Users/natha/Desktop/Current Projects/NatesTacoShack/gatsby/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/Users/natha/Desktop/Current Projects/NatesTacoShack/gatsby/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/Users/natha/Desktop/Current Projects/NatesTacoShack/gatsby/node_modules/gatsby-source-sanity/gatsby-ssr'),
      options: {"plugins":[],"projectId":"8ero7t3w","dataset":"production","watch":true,"token":"sk8IzLBzAOjmoy6hlV5yTLv7iC6HHElYY4pYQcI4Q6Q49Dg1KJoFBrj4gbyowpKl7mZ9PjrRdErkwXBBfbkf9xSMfZ7JmVdZdZi5xstpDn5G9aXgTMY857dzeZRn2aPmwfSDaYuptD4z1N6B04iC5DtwIAA0O8iLBZb7RZNVEAYwfrlXsNVy"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
