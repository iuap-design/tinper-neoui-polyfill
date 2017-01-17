# Tinper Neoui Polyfill
Neoui针对ie8的Polyfill

## 目录结构

```
.
├── README.md
├── dist
├── gulpfile.js
├── js
├── lib
├── node_modules
├── package.json
├── vendor
└── webpack.config.js

```

## 源文件目录

```

├── js
│   └── core.js

├── vendor
│   ├── JsExtensions.js
│   ├── ModuleBase.js
│   └── respond.js

```


## 执行编译命令

```
npm run product
```

## 使用说明
将下列示例代码添加到您的代码中即可
```
<!--[if lt IE 9]>
<script src="//cdn.bootcss.com/html5shiv/r29/html5.min.js"></script>
<script src="//cdn.bootcss.com/es5-shim/4.5.9/es5-shim.min.js"></script>
<script src="http://design.yyuap.com/static/uui/latest/js/u-polyfill.min.js"></script>
<script src="//cdn.bootcss.com/es5-shim/4.5.9/es5-sham.min.js"></script>
<![endif]-->
```
