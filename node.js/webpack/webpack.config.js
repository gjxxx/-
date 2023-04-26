//webpack的配置工作
const path = require('path')//这个path是用来拼接路径的
module.exports = {
    mode:'production',
    //打包入口 相对路径
    entry:'./src/index.js',
    //打包出口 对象 出口必须使用绝对路径
    output:{
        //path表示打包后的路径
        path:path.resolve(__dirname,'output'),
        filename:'my-webpack.js'
    },
    //配置loader处理其他类型的文件
    module:{
        rules:[
            {
                test:/\.css$/, //用来配置.css结尾的文件
                use:['style-loader','css-loader']
            }
        ]
    }
}