/**
 * * 小贤是一条可爱的小狗(Dog)，它的叫声很好听(wow)，每次看到主人的时候就会乖乖叫一声(yelp)。从这段描述可以得到以下对象。
 */
function Dog() {
  this.wow = function () {
    console.log('Wow')
  }
  this.yelp = function () {
    this.wow()
  }
}
/**
 * * 小芒和小贤一样，原来也是一条可爱的小狗，可是突然有一天疯了(MadDog)，一看到人就会每隔半秒叫一声(wow)地不停叫唤(yelp)。
 *   请根据描述，按示例的形式用代码来实。（继承，原型，setInterval）
 */
function MadDog() {
  this.yelp = function () {
    setInterval(() => {
      this.wow()
    }, 500)
  }
}
MadDog.prototype = new Dog()

var dog = new Dog()
dog.yelp()

var madDog = new MadDog()
madDog.yelp()