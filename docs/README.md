# easy-code-loader

#### Installation

Loader that makes writing code simpler，Used for web packages, supporting simple language writing such as css, sass, less, js, etc.；
In theory, it supports any programming language, and can customize the code substitution rules.；

However, the current version 1.0.0 supports CSS to the greatest extent by default, and makes the CSS writing concise, suitable for people familiar with the rules of CSS grammar, greatly improving the coding efficiency;

Other editing language abbreviations will be supported in subsequent editions. Please pay attention to subsequent updates.；

[中文文档](https://bolepp.github.io/easy-code-loader/)
<br/>
[English Documents](https://bolepp.github.io/easy-code-loader/docs)



## Usage

npm install easy-code-loader --save-dev


## Configuration
Configuring webpack packaging policy：


## Simple usage：

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

## Other configurations：

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

## Configuration instructions

/**
 * Replacement rule configuration
 * @unit [Optional] is the default unit and the default value is PX Example:css{width:100px;}---width:100[This function currently only supports CSS style, sass and less can be converted to CSS and reused];
 * @mark [Optional] Default value is English] symbol. This wildcard tries to choose a symbol that does not conflict with the CSS style. It is recommended to use $,@etc. 
 * @type [Optional] The default value is css, which specifies what type of file this loader handles
 * @cssreplace [Optional] The default value is false. Note that when set to true and type is a CSS file, the configurable units can be omitted in style writing.
 * @mixins Blending mechanism custom rules [$mra:"margin:0 auto"]
 */



# css Example 1:

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
# Easy-code-loader will be generated after compilation：
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

# css Example 2:

```js
$@reset; //Such a simple line
```

# Easy-code-loader will be generated after compilation：

[Thousands of lines of code are omitted here, and this is nonsense]
Of course, specific code will be generated for this link Reset CSS：https://bolepp.github.io/easy-code-loader/css/reset.css 


# js Example:

```js
$@log
log("hello");
console.log("test");
```
# Easy-code-loader will be generated after compilation：
```js
const log= txt =>{
    console.log(txt);
}
log("hello");
console.log("test");
```

## Tip：

 easy-code-loader 1.0.0 Current versions of built-in rules are basically used for CSS abbreviation, but no other programming language abbreviation rules are built-in yet.

Welcome to pay attention to the update, hope you can participate in the project code, play your rich imagination, and build a good ecology together.；


## Participatory contribution

1. Fork warehouse

2. New Feat_xxx Branch

3. Submit code

4. New Pull Request

## Use precautions

1. When the configuration item cssreplace: true, the unit write-saving function of configuring CSS will be turned on.

2. Configuration item mark should be set as often as possible to unused symbols in css, otherwise unexpected errors will occur

## Built-in rules
 easy-code-loader Built-in a large number of abbreviation matching rules, so that writing code can be greatly simplified, specific rules click the link below to see：


<a href="https://bolepp.github.io/easy-code-loader/tool/rules.html">Click to view the built-in matching rules</a>


## Online Compiler Tool
 Implement online code compilation. Note that online compilation does not support compilation for abbreviated imported files and automatic addition of PX to CSS files.：

<a href="https://bolepp.github.io/easy-code-loader/tool/index.html">Open online compilation immediately</a>




<link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://github.githubassets.com/favicon.ico">



