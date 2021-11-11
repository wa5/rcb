
var path=require('path')
var HT=require('html-webpack-plugin')
module.exports={
    mode:'development',

    //single enty
    // entry:'./src/dancing.js',

    entry:{
        dance:'./src/dancing.js',
        drisha:'./src/pages/drisha.js',
        mohan:'./src/pages/mohan.js',
        murli:'./src/pages/murli.js',
    },

    output:{
        path:path.resolve(__dirname,'mycode'),
        filename:'[name].[chunkhash].js'
    },
   devServer:{
       port:1234,
       static:path.resolve(__dirname,'mycode'),
       compress:true
   },
//loaders
module:{
    rules:[
        {
            test:/\.css$/,
            use:[
                'style-loader',
                'css-loader'
            ]
        },
        {
            test:/\.(svg|ico|png|jpg|gif|jpeg)$/,
            type:'asset/resource'
        }
    ]
},




//plugins
plugins:[
    new HT({
        template:'./src/templesHtml/home.html',
        filename:'index.html',
        title:'my website',
        inject:'body'
    })
]
}