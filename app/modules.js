exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
	var MODULE = (function () {
		var my = {};
		my.name = str2;
		my.greeting=str1;
		my.sayIt = function () {
			return my.greeting + ', ' + my.name;
		};

		return my;
	}());
	return MODULE;
  }
};
