# easy-code-loader

#### 介绍

使得编写代码更简单的loader，用于webpack打包使用，支持css、sass、less、js等等语言简单写法；
理论上支持任何编程语言，可自定义编码替换规则；
但目前1.0.0版本默认最大程度上支持css，并使得css写法简洁化，适合熟悉css语法规则的人群,极大提高编码效率；
其它编辑语言简写将在后续版本中支持，敬请关注后续更新；

[中文文档](https://github.com/bolepp/easy-code-loader)
[英文文档](https://github.com/bolepp/easy-code-loader/tree/master/docs)



## 安装教程

npm install easy-code-loader --save-dev


## 配置使用
配置webpack.config.js打包策略：


## 简单用法：

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['css-loader','sass-loader','easy-code-loader'],
      },
    ],
  },
};
```

## 其他配置：

```js
module.exports = {
  module: {
    rules: [
        {
            test: /\.(sa|sc|c)ss$/,
            use: [{loader: "css-loader", options: {sourceMap: true}},{loader: "sass-loader"},
                    {
                        loader: "easy-code-loader",
                        options:{
                            unit: 'px',
                            type: 'css',
                            mark: ']',
                            cssreplace:true,
                            mixins:[ 
                                { $bgf: "background-color:#fff" },
                                { $mra: "margin:0 auto" },
                                { $bse: "border:1px solid #eee" },
                                { $bsd: "border:1px solid #ddd" },
                                ]
                        }
                    }            
                ]
        },
        {
            test: /\.js$/,
            use: [{
            loader: "easy-code-loader",//应用于js中
            options:{
                type:'js'               
                }
            }]
        }
    ],
  },
};
```

## 配置说明

/**
 * 替换规则配置
 * @unit 【可选】为默认单位，默认值为px 例css样式width:100px;---可省略px写成width:100[此功能目前暂仅支持css样式，sass和less可先转成css再用这功能];
 * @mark 【可选】默认值为英文]符号，此通配符尽量选跟css样式中的不冲突的符号，推荐使用$,@等  
 * @type 【可选】默认值为css,用来指定此loader处理什么类型文件
 * @cssreplace 【可选】默认值为false,注意设置为true并且type为css文件时，在样式编写中可省略配置的单位，[如font-size:16px;可省略写成font-size:16,而最终是可以写成"]fs:16"];
 * @mixins 混入机制自定义规则 [例$mra:"margin:0 auto"]
 */



# css示例一:

```js
.box{
    p.a;
    d.b;
    ]r:60;
    ]l:100;
    ]z:99;
    ]w:600;
    ]h:300;
    ]pdt:15;
    ]pdr:15;
    ]pdb:15;
    ]pdl:15;
    ]m:20;
    $bse;
    ]btc:#f00;
    o.s;
    ox.h;
    ]fs:16;
    ]lh:24;
    t.c;       
    ft.l;
    ]c:#fff;
    ]bg:blue;
    ls.n;
    wb.n;
    ]tt:0.3s all ease; 
    ]tf: rotateY(180deg);
}
```
# 见证奇迹的一刻即将诞生，easy-code-loader编辑后将生成：
```css
.box {
  position: absolute;
  display: block;
  right: 60px;
  left: 100px;
  z-index: 99;
  width: 600px;
  height: 300px;
  padding-top: 15px;
  padding-right: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
  margin: 20px;
  border: 1px solid #eee;
  border-top-color: #f00;
  overflow: scroll;
  overflow-x: hidden;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  float: left;
  color: #fff;
  background: blue;
  list-style: none;
  word-break: normal;
  transition: 0.3s all ease;
  transform: rotateY(180deg); 
}
```

# css示例二:

```js
$@reset; //这么简单的一行
```

#再次见证奇迹，easy-code-loader编辑后将生成：

[此处省略上千行代码，此处为废话]
当然具体将生成此链接Reset CSS相关代码：https://meyerweb.com/eric/tools/css/reset/  


# js示例:

```js
$@log
log("hello");
console.log("test");
```
# easy-code-loader编辑后将生成：
```js
const log= txt =>{
    console.log(txt);
}
log("hello");
console.log("test");
```

## 提示：

 easy-code-loader 1.0.0 目前的版本内置规则基本都用于css简写，暂未内置其它编程语言简写规则；
 欢迎关注更新，希望大家能一起参与项献代码，发挥您丰富的想像，共建良好生态；


## 参与贡献

1. Fork 本仓库
2. 新建 Feat_xxx 分支
3. 提交代码
4. 新建 Pull Request  

## 使用注意事项
1.配置项cssreplace：true时，才会开启配置css单位unit省写功能
2.配置项mark尽量设置成css中不常用会未使用的符号，否则会出现难预料的错误

## 内置规则
 easy-code-loader内置大量简写匹配规则，从而使得编写代码能大量简化，具体规则点击下方链接查看：

 ```html
<a href="https://github.com/bolepp/easy-code-loader/tree/master/tool/rules.html">点击查看内置匹配规则</a>
```


