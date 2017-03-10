exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
  	var result=[];
  	function list(data, dirName)
  	{
  		var files=data.files;
  		var dir=data.dir;
  		if(files!=undefined)
  		{
	  		for(var i=0; i<files.length; i++)
	  		{
	  			if(dirName!=undefined)
	  			{
		  			if(typeof files[i] == "string" && dir==dirName)
		  				result.push(files[i]);
		  			else
		  			{
		  				if(dir==dirName)
		  					list(files[i], files[i].dir);

		  				else
		  					list(files[i], dirName);
		  			}
		  		}
		  		else
		  		{
		  			if(typeof files[i] == "string")
		  				result.push(files[i]);
		  			else
		  				list(files[i], dirName);
		  		}
	  				
	  		}
  		}
  		return result;
  	}
  	return list(data, dirName);
  },

  permute: function(arr) {
  	var results = [];

	function permute(arr, subArray) {
	    var arr2, subArray = subArray || [];

	    for (var i = 0; i < arr.length; i++) {
	      arr2 = arr.splice(i, 1);
	      if (arr.length === 0) {
	        results.push(subArray.concat(arr2));
	      }
	      permute(arr.slice(), subArray.concat(arr2));
	      arr.splice(i, 0, arr2[0]);
	    }

	    return results;
	  }

	  return permute(arr);
  },

  fibonacci: function(n) {
  	function f(n)
  	{
	  	if(n==1)
	  		return 1;
	  	else
	  		if(n==0)
	  			return 0;
	  		else
	  			return f(n-1)+f(n-2);
  	}
  	return f(n);
  },

  validParentheses: function(n) {
  	function parentheses(n)
  	{
	  	if (n == 0)
	        return [""];
	    var result = [];
	    for (var i = 0; i < n; ++i) {
	        var lefts = parentheses(i);
	        var rights = parentheses(n - i - 1);
	        for (var j = 0; j < lefts.length; ++j)
	            for (var k = 0; k < rights.length; ++k)
	                result.push("(" + lefts[j] + ")" + rights[k]);
	    }

	    return result;
	}
	return parentheses(n);
  }
};