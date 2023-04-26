//使用node.js的内置模块
const fs = require('fs') //引入内置模块
fs.readFile('./1.txt',function(err,data){
    //err 表示读取文件错误的结果
    const res = data.toString()
    fs.writeFile('./2.txt',res,function(err){
    console.log(err);
    //data表示读取文件的内容 默认是buffer格式存储的 可以通过toString方法转为字符串
})
console.log(444);

})