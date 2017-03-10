exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
  	const promise = new Promise(
    function (resolve, reject) { 
        resolve(value);
    });
    return promise;
  },

  manipulateRemoteData: function(url) {

  	var data = $.ajax({
	  url: url
	});
	people = [];
	data.done(function(response){	  
	    for (var i=0; i<response.people.length; i++){
	      people.push(response.people[i].name);
	    }
	    people.sort();
	});
	var promise2=new Promise((resolve, reject) => { 
        setTimeout(() => resolve(people), 0); 
    });
    return promise2;
  }
};
