
class person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    // person原型上的方法
    add() {
        console.log('add')
    }
    // person的实例方法
    bdd = () => {
        console.log('bdd')
    }
}
class male extends person {
    constructor(name, age) {
        super(name, age)
        this.sex = 'male'
    }
    eat() {
        console.log(this.name + ' eating!')
    }
}
//
let wo = new person('jam', 22)
let me = new male('look', 12)
wo.add()
wo.bdd()
me.bdd()
me.add()
me.eat()