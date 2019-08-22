const path = require('path');
const fs = require('fs');
const loaderUtils = require('loader-utils');
const cssTool = require('css');
const  ruleOptions = require('./rules/options');
const  importSet = require('./rules/importSet');
const  warning = require('./errors');

const escapeArray = ['\'','"', '/', '[', ']', '-', '.', '(', ')', '$', '^', '*', '+', '?', '|', '{', '}'];

// 字符串转义
const stringEscape = str =>{
    let stringArray = str.toString().split('');  
    for (let j = 0; j < stringArray.length; j++) {
      for (let i = 0; i < escapeArray.length; i++) {  
        if (stringArray[j] === escapeArray[i]) {
          stringArray[j] = '\\' + escapeArray[i];        
        }  
      }
    }  
    return stringArray.join('');
  }

// 替换处理方法
const handleReplace =(configArray, source,type) => {  
    for (let i = 0; i < configArray.length; i++) {   
      source = source.replace(new RegExp(stringEscape(configArray[i].pattern), 'g'), configArray[i].replace);     
    }    
    // 处理导入文件   
      for (let i=0;i<importSet.config.length;i++){
        let filePath=importSet.config[i].path;     
        filePath=path.resolve(__dirname,filePath);    
        const content = fs.readFileSync(filePath,'utf-8');    
        source=source.replace(importSet.config[i].pattern,content);
      }
    return source;
  }

const unitArr=['px','rem','em','vm','vh','vmin','vmax','%','in','cm','mm','ex','pc','pt','chm'];
const attributeArr=['font','font-size','padding','padding-top',
'padding-right','padding-left','padding-bottom','padding-left','margin','margin-top',
'margin-right','margin-left','margin-bottom','margin-left'
,'height','max-height','max-width','min-height','min-width','width','line-height',
'top','right','bottom','left','border-width','border-top-width','border-right-width','border-bottom-width','border-left-width']
// 处理css文件,添加单位
const handleCss = (source,unit) =>{
  if(unitArr.indexOf(unit)==='-1'){
    warning(1);
    return false;
  };
  const cssObj = cssTool.parse(source);
  const cssRules=cssObj.stylesheet.rules;
  if(cssRules.length>0){
    cssRules.forEach(item=>{
      const declarations=item.declarations;
      if(declarations.length>0){
        for(let i=0;i<declarations.length;i++){
          if(attributeArr.indexOf(declarations[i].property)>0 && Number(declarations[i].value)>0){
            declarations[i].value=declarations[i].value+''+unit;
          }
        }
      }
    })
  }
  return cssTool.stringify(cssObj);
  
}

// 排序规则，先按字母长度再按字母顺序表
const compare = (obj1, obj2) =>{
  const val1 = obj1.abridge;
  const val2 = obj2.abridge;
  if (val1.length > val2.length) {
      return -1;
  } else if (val1.length < val2.length) {
      return 1;
  } else {
      if (val1 < val2) {
      return -1;
      } else if (val1 > val2) {
          return 1;
      } else {
          return 0;
      } 
  }            
} 
module.exports = function(source,map) {   
    const options = loaderUtils.getOptions(this);
    const callback = this.async(); 
    const myoptions = Object.assign({}, ruleOptions, options);
    let mixins=[];
    if(options.hasOwnProperty('mixins')){
      if (Array.isArray(options.mixins)) {      
        mixins=[...ruleOptions.mixins,...options.mixins]
      }else{
         warning(0);
      }
    }
    myoptions.mixins= mixins; 
   
    const configArray = [];   
    if(myoptions.type==='css'){
      const styleRules=myoptions.styleRules;
      styleRules.sort(compare);
            styleRules.forEach(item =>{        
                let temp={};
                if(item.value && item.value.length>0){
                    item.value.forEach(val =>{
                      temp[`${myoptions.mark}${item.abridge}${val.letter}`]=`${item.property}:${val.name}`;
                      mixins.push(temp);                     
                      temp={};
                      temp[`${item.abridge}.${val.letter}`]=`${item.property}:${val.name}`;
                      mixins.push(temp);
                      temp={};
                  })
                }else{
                  temp[`${myoptions.mark}${item.abridge}`]=`${item.property}`;
                  mixins.push(temp);
                }        
                        
            })
    }
    else if(myoptions.type==='js'){
      mixins=[...mixins,...myoptions.jsRules]
    }
    for(let i=0;i<mixins.length;i++){
        const temp={};
        temp.pattern=Object.keys(mixins[i])[0];
        temp.replace=mixins[i][temp.pattern];
        configArray.push(temp);
    }    
    source = handleReplace(configArray, source,myoptions.type);
    if(myoptions.type === 'css' && myoptions.unit && myoptions.cssreplace){
      source=handleCss(source,myoptions.unit);
    }   
    this.callback(null, source, map);
    return source;

}