var configArray = [];
var mixins = ruleOptions.mixins;
var styleRules = ruleOptions.styleRules;
// 排序
var compare = (obj1, obj2) => {
    var val1 = obj1.abridge;
    var val2 = obj2.abridge;
    if (val1.length > val2.length) {
        return 1;
    } else if (val1.length < val2.length) {
        return -1;
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
styleRules.sort(compare);
// 遍历生成规则
styleRules.forEach(function(item){
    var temp = {};
    if (item.value && item.value.length > 0) {
        item.value.forEach(function(val) {
            temp[`${ruleOptions.mark}${item.abridge}${val.letter}`] = `${item.property}:${val.name}`;
            mixins.push(temp);
            temp = {};
            temp[`${item.abridge}.${val.letter}`] = `${item.property}:${val.name}`;
            mixins.push(temp);
            temp = {};
        })
    } else {
        temp[`${ruleOptions.mark}${item.abridge}`] = `${item.property}`;
        mixins.push(temp);
    }
})
// 混合规则
for (var i = 0; i < mixins.length; i++) {
    var temp = {};
    temp.pattern = Object.keys(mixins[i])[0];
    temp.replace = mixins[i][temp.pattern];
    configArray.push(temp);
}
// 渲染匹配规则
function renderList(data){
  var dom=document.getElementById("list");
  var html="<li class='title'><i>序号</i><span class='pattern-title'>匹配简写符</span><span class='replace-title'>对应匹配属性值</span></li>";
 
  data.forEach(function(item,index){
    html+="<li><i class='num'>"+(index+1)+"</i><span class='pattern'>"+item.pattern+"</span>"
    html+="<span class='replace'>"+item.replace+"</span></li>";
   
  });
  dom.innerHTML=html;
}

// 渲染导入文件
function renderImport(data,url){
  var importBox=document.getElementById("importBox");  
  var html="<li class='title'><i>序号</i><span class='pattern-title'>导入文件匹配简写符</span><span class='replace-title'>匹配文件内容</span></li>";
 
  data.forEach(function(item,index){
    var myurl=url+item.path;
    html+="<li><i class='num'>"+(index+1)+"</i><span class='pattern'>"+item.pattern+"</span>"
    html+="<span class='replace'><a href="+myurl+" target='_blank'>查看导入文件内容</a></span></li>";
   
  });
  importBox.innerHTML=html;
}