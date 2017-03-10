exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    var regex= "\\d";
    if(str.match(regex)!=null)
      return true;
    else
      return false;
  },

  containsRepeatingLetter: function(str) {
    repetings =(/([a-zA-Z]).*?\1/).test(str);
    return repetings;

  },

  endsWithVowel: function(str) {
    return /.*[aeiou]$/.test(str.toLowerCase());
  },

  captureThreeNumbers: function(str) {
    threeNumbers=str.match(/\d{3}/);
    if(threeNumbers==null)
      return false;
    else{
      return parseInt(threeNumbers).toString();
    }

      
  },

  matchesPattern: function(str) {
    return (/^\d{3}-\d{3}-\d{4}$/).test(str);
  },

  isUSD: function(str) {
    return (/^\$(\d{1,3}(\,\d{3})*|(\d+))(\.\d{2})?$/).test(str);
  }
};
