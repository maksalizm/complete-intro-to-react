/**
 * Created by maksalizm on 2016. 11. 22..
 */
require('babel-register')
require('babel-polyfill')

global.document = require('jsdom').jsdom('<body><div id="app"></div></body>')
global.window = document.defaultView
global.navigator = window.navigator
