const path = require('path')
module.exports = {
    mode:"development",
    entry:'./src/app.js',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'output.js'
    },

    // loader
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },  
    //loader
    devServer:{
        static:{
            directory:path.join(__dirname,'dist')
        },
        compress:true,
        port:3500
    }

                                                                                                                      
}