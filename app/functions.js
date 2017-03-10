exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(fn, arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    var str3=function(str2)
    {
      return str+', '+str2;
    }
    return str3;
  },

  makeClosures: function(arr, fn) {
    return arr.map(function (val) {
      return function () {
        return fn(val);
      };
    });
  },

  partial: function(fn, str1, str2) {
    var partialFn = function(str3) {
      return fn(str1, str2, str3);
    };
    return partialFn;
  },

  useArguments: function() {

    sumTotal=0;
    for(var i=0; i<arguments.length; i++)
      sumTotal+=arguments[i];
    return sumTotal;
  },

  callIt: function(fn) {
    var argsArray=[];
    for(var i=0; i<arguments.length; i++)
      if(parseFloat(arguments[i]))
        argsArray.push(arguments[i]);
    return fn.apply(this, argsArray);
  },

  partialUsingArguments: function(fn) {
    var partials, args;
    partials = Array.prototype.slice.call(arguments);
    partials.shift();
    return function () {
        args = Array.prototype.slice.call(arguments);
        return fn.apply(this, partials.concat(args));
    };
  },

  curryIt: function(fn) {
    return function(a) {
      return function(b) {
        return function(c) {
          var args=[];
          args.push(a);
          args.push(b);
          args.push(c);
          return fn.apply(this, args);
        };
      };
    };
  }
};
