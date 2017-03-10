exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
  	var re = new RegExp("(.)(?=\\1{" + amount + "})","g");
    return str.replace(re, "");
  },

  wordWrap: function(str, cols) {
  	var str2 = '',
    words = [];
    words = str.split(' ');
    str2 = words[0];
    for (var i = 1; i < words.length; i++) {
        if (words[i].length > cols) {
            str2 += '\n' + words[i];
        } else {
            if (str2.length + words[i].length > cols) {
                str2 += '\n' + words[i];
            } else {
                str2 += ' ' + words[i];
            }
        }
    }
    return str2;
  },

  reverseString: function(str) {
  	var str2='';
  	for(var i=1; i<=str.length; i++)
  	{
  		str2+=str[str.length-i];
  	}
  	return str2;
  }
};
