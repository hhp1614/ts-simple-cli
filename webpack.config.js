module.exports = {
    entry:  __dirname + '/src/main.ts', //已多次提及的唯一入口文件
    output: {
        path: __dirname + '/public', //打包后的文件存放的地方
        filename: 'bundle.js' //打包后输出文件的文件名
    },
    devServer: {
        contentBase: './public'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/, loader: 'ts-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    // options: {
                    //     attrs: [':data-src']
                    // }
                }
            }
        ]
    }
}