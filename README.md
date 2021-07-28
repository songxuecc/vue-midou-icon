# vue-midou-icon

## 项目安装
```
npm install vue-midou-icon --save
```

### 本地启动查看
```
npm run serve
```

### 组件打包
```
npm run lib
```

### 源代码
See [Configuration Reference](https://github.com/songxuecc/vue-midou-icon).

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
### your-iconfont-symbbol-url的获取方式如图


![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a596f12b57574bf69f81e0af2a5990da~tplv-k3u1fbpfcp-watermark.image)