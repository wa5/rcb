interface Myrules{
    name:string
    age:number
    region:string
    dance():string
}

class Humans1  implements Myrules{
     name:string
     age:number
     region:string
    constructor(name:string,age:number){
        this.name=name
        this.age=age
    }
    dance():string{
        return 'hhol'
    }
}
class Humans2 extends Humans1{
    
}

var Dish1=new Humans1('disha',23)
console.log(Dish1)