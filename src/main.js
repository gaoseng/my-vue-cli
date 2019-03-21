import Vue from 'vue';
import App from './App'

console.log('main');
new Vue({
    el: '#app',
    // render: h => h(App),
    // router,
    components: { App },
    template: '<App/>'
  });

  


  function Obj() {
    this.name = name;
    this.test = () => {
      console.log(this)
    }
  }
  Obj.prototype.output = () => {
    console.log(this);
  }
  const obj = new Obj();

  console.log(obj);
  console.log(obj.output());

  var myObject = {
    foo: 1,
    bar: 2,
    get baz() {
      return this.foo + this.bar;
    },
    get ba() {
      return this.foo + this.bar;
    },
  }
  
  Reflect.get(myObject, 'foo') // 1
  Reflect.get(myObject, 'bar') // 2
  Reflect.get(myObject, 'baz') // 3
  Reflect.get(myObject, 'ba') // 3
  console.log(Reflect.get(myObject, 'foo'), // 1
  Reflect.get(myObject, 'bar'), // 2
  Reflect.get(myObject, 'baz'), // 3
  Reflect.get(myObject, 'ba')); // 3)