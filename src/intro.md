# DEMO展示
本项目通过`vue-cli`初始化生成，在默认基础上额外添加`stylus` `stylus-loader`进行样式解析
## 项目重难点

#### 组件内部的`background-image`的动态赋值
- 难点：
  + 传入的图片路径是原始路径而不是解析后的路径
  + 直接引用后不会进行解析，无法获取到编译后的图片路径
- 解决方案：
  + 在父级组件中先`import` 图片资源，`url-loader`会自动转化为url路径资源
  + 再将转化后的url路径资源作为参数传入子组件中

#### 图片过大的处理
- 难点：
  + 在读取页面的时候，需要加载的图片体积较大
  + 在鼠标悬浮读取`gif`的时候延迟很大
- 方案：
  + 在每个组件内添加`visibility: hidden; width: 0; height: 0;`的图片元素，用来**读取gif图片**，避免了鼠标悬浮**才读取图片的延迟**
  + 部分gif图片较大，使用`GIMP`图片编辑器选择`滤镜>动画>动画优化`压缩体积后再次导出
  + 使用`imagemin-webpack-plugin`进行图片(`png`与`gif`)的压缩,在已经生成的`webpack.config.prod.conf.js`中添加插件配置如下
    * 对于`gif`有`imagemin-gif2webp`可以转化为webp图片，但是考虑到ie和火狐并不支持这一图片格式所以弃用
    * 对于`png`图片使用自带的`pngquant`与`optipng`选项控制图片体积
    * 对于`gif`图片使用第三方`imagemin-giflossy`控制体积
  ```
  // Minimize the images
    new ImageMinPlugin({
      disable: true,
      //disable: process.env.NODE_ENV === 'development',
      test: /\.(jpg|png)$/,
      pngquant: {
        quality: '50-60'
      },
      optipng: {
        optimizationLevel: 9
      },
      gifsicle: {
        optimizationLevel: 3
      }
    }),
  ```
  + 使用``

#### 轮播图组件的使用尝试
- 难点：
  + 组件内使用`swiper.js`轮播图组件
- 方案：
  + 使用`vue-awesome-swiper`第三方组件
  + 参考[文档样例](https://www.npmjs.com/package/vue-awesome-swiper)即可