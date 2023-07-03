'use strict'

import axios from 'axios'
import querystring from 'querystring'
import Vue from 'vue'
// import { Notification, Message, MessageBox } from 'element-ui'
var qs = require('qs')
var base = '/'
var http = axios.create({
    baseURL: base,
    timeout: 5000000,
    withCredentials: true,
    headers: { 'X-Requested-With': 'XMLHttpRequest' },
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    headers: { 'Access-Control-Allow-Methods': 'GET,POST' },
    headers: { 'Access-Control-Allow-Origin': '*' },
    header: { 'Access-Control-Allow-Headers:x-requested-with': 'content-type' },
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    transformRequest: [data => {
        return querystring.stringify(data)
    }]
})
export default http
Vue.prototype.$http = axios