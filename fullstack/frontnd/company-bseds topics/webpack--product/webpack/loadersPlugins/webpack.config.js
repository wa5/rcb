var path=require('path')
var Htmlp=require('html-webpack-plugin')

module.exports={
    mode:'development',
    entry:{
        eating:'./src/eating.js',
        about:'./src/pages/about.js',
        contact:'./src/pages/contact.js'
    },
    output:{
       filename: '[name].[chunkhash].js',
       path:path.resolve(__dirname,'output')
    },

//loaders

module:{
    rules:[{
        test:/\.css$/,
        use:['style-loader','css-loader']
    },{
        test:/\.(jpg|png|jpeg|gif|svg|)$/,
        type:'asset/resource'
    }]
},


    plugins:[new Htmlp({
        template:'./src/public/html/dri.html',
        filename:'drisha.html',
        title:'Drishas life Story',
        inject:'body'
    })]

}