module.exports=function () {
    var config={
        title:'Build Test',
        content:'Hello world!',
        paths:{
            dist:'./dist',
            html:'./src/*.html',
            js:'./src/**/*.js'
        }
    };
    
    return config;
}