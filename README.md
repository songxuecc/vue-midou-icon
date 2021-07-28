# vue-midou-icon

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 使用方法
```javaecript
import MdUi from 'vue-midou-icon'
const IconFont = MdUi.createFromIconfontCN({
  scriptUrl:[
    'your-iconfont-symbbol-url'
  ],
  // name可以不写 默认为 md-icon
  name: 'your-iconfont-component-name',
})
Vue.use(IconFont)
```
