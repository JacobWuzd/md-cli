/*
 * @Author: your name
 * @Date: 2020-12-10 19:20:07
 * @LastEditTime: 2020-12-10 19:40:55
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \cli\md-cli\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
