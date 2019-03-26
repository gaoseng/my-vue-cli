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

  
  var handler = {
    has (target, key) {
      console.log('sss'[0]);
      if (key[0] === '_') {
        return false;
      }
      return key in target;
    }
  };
  var target = { _prop: 'foo', prop: 'foo' };
  var proxy = new Proxy(target, handler);
  '_prop' in proxy // false
  


