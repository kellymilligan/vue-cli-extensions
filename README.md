# vue-cli-extensions
Additional configuration info and files to set up a Vue CLI project as per my tastes

--- 

## ESLint

Custom rules:
```
'brace-style': 0,
'comma-dangle': 0,
'no-multi-spaces': 0,
'no-multiple-empty-lines': 0,
'padded-blocks': 0,
'space-in-parens': 0,
'space-before-function-paren': 0,
'template-curly-spacing': 0
```

Paste into `.eslintrc`

---

## Normalize

1. Normalize `yarn add normalize.css`

2. import in `main.js`:
```
import 'normalize.css'
```

---

## SCSS foundation

1. copy `src/styles` into new project scaffold
2. Add foundation imports in `App.vue`:
```
@import '@/styles/reset.scss';
@import '@/styles/fontface.scss';
@import '@/styles/scrollbar.scss';
```
3. Import core in any component that requires scss tooling
```
@import '@/styles/core.scss';
```

--- 

## WebGL

- If using Three.js: `yarn add three`
- If using GLSL files: `yarn add raw-loader glslify-loader` and add these loader tests in `/vue.config.js`:
```
module.exports = {
  chainWebpack: config => {
    config.module.rule('glsl').test( /\.(glsl|frag|vert)$/ ).use( 'raw-loader' ).loader( 'raw-loader' ).end()
    config.module.rule('glsl').test( /\.(glsl|frag|vert)$/ ).use( 'glslify-loader' ).loader( 'glslify-loader' ).end()
  }
}
```

---

## Misc

- Lodash.defaultsDeep `yarn add lodash.defaultsdeep` 

- To remove hot reloading, add to `vue.config.js`:
```
module.exports = {
  chainWebpack: config => {
    config.module.rule( 'vue' ).use( 'vue-loader' ).loader( 'vue-loader' ).tap( options => {
      options.hotReload = false; return options
    } )
  }
}
```
