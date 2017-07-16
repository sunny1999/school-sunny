var EventEmitter = require('events').EventEmitter

var life = new EventEmitter()

life.on('hh',function(who){
	console.log('给'+who+'倒水')
})

life.emit('hh','汉子')


