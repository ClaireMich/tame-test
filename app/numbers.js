exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
  	binary=num.toString(2);

  	return parseInt(binary[binary.length - bit]);
  },

  base10: function(str) {
  	return parseInt(str, 2);
  },

  convertToBinary: function(num) {
  	return ("000000000" + num.toString(2)).substr(-8);
  },

  multiply: function(a, b) {
    return +(a*b).toPrecision(15)
  }
};
