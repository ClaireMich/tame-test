exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
  		var time;
      console.log(start);
      start++;
  		time=setInterval(function()
        {
          if(start <= end) {
            console.log(start);
            start=start+1;
          }
        },100); 
  		return {
  			cancel: function()
  			{
  				clearInterval(time);
  			}
  		};
  }
};
