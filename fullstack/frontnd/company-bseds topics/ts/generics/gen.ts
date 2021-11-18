 var aporva=<T extends object>(reason:T)=>{

    let bkn=Math.floor(Math.random()*6)
    let dosa='dosa'
return {...reason,dosa ,bkn}
}

var dishh=aporva({name:'disha',friend:true})
console.log(dishh.name)