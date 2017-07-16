var kclass = require('./kclass')

kclass.add('Scott',['白富美','高富帅'])

exports.add = function(kclass) {
	kclass.forEach(function(item,index){
		var _kclass= item
		var teacherName = item.teacherName
		var students = item.students

		kclass.add(teacherName,students)
	})
}