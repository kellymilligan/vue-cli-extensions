module.exports = {
  chainWebpack: config => {

    // Remove HMR (auto-reload still works)
    config.module.rule( 'vue' ).use( 'vue-loader' ).loader( 'vue-loader' ).tap( options => {
      options.hotReload = false; return options
    } )

    // Add GLSL loaders
    // dependencies: `yarn add raw-loader glslify-loader`
    config.module.rule('glsl').test( /\.(glsl|frag|vert)$/ ).use( 'raw-loader' ).loader( 'raw-loader' ).end()
    config.module.rule('glsl').test( /\.(glsl|frag|vert)$/ ).use( 'glslify-loader' ).loader( 'glslify-loader' ).end()

  }
}
