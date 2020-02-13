if(precess.env.NODE_ENV=='production'){
    //estamos no ambiente de producao, retorne keys do ambiente de producao
    module.exports=require('./prod');
}else{
    //estamos no ambiente de desenvolvimento, retorne keys do ambiente de desenvolvimento
    module.exports=require('./dev');
}