// function component () {
//   var element = document.createElement ('div');

//   // element.innerHTML="hello webpack";
//   element.innerHTML = _.join (['hello', 'webpack'], '');

//   return element;
// }

// document.body.appendChild (component ());
import '../css/index.less';
import {showToast} from './common';
import Vue from 'vue/dist/vue.js';

new Vue ({
  el: '#app',
  data: {
    title: '哈哈哈',
  },
  created () {
    showToast ('成功');
  },
});
