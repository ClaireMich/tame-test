exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    var sum=0;
    for(var i=0; i<arr.length; i++ )
    {
      sum+=arr[i];
    }
    return sum;
  },

  remove: function(arr, item) {
    for(var i=0; i<arr.length; i++)
    {
        if(arr[i]==item)
        {
          arr.splice(i, 1);
          i--;
        }
    }
    return arr;
  },

  removeWithoutCopy: function(arr, item) {
    for(var i=0; i<arr.length; i++)
    {
        if(arr[i]==item)
        {
          arr.splice(i, 1);
          i--;
        }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.splice(arr.length-1,1);
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.splice(0, 1);
    return arr;
  },

  concat: function(arr1, arr2) {
    var arr3=arr1.concat(arr2);
    return arr3;
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var items=0;
    for(var i=0; i<arr.length; i++)
    {
      if(arr[i]==item)
        items++;
    }
    return items;
  },

  duplicates: function(arr) {
    var sorted = arr.slice().sort();
    var duplicates = [];
    for (var i = 0; i < arr.length - 1; i++) 
    {
        if (sorted[i + 1] == sorted[i] && duplicates.indexOf(sorted[i])<0) 
        {
            duplicates.push(sorted[i]);
        }
    }
    return duplicates;
  },

  square: function(arr) {
    for(var i=0; i<arr.length; i++)
    {
      arr[i]=Math.pow(arr[i], 2);
    }
    return arr;
  },

  findAllOccurrences: function(arr, target) {
    var occurences = [];
    for (var i = 0; i < arr.length; i++) 
    {
        if (arr[i] == target) 
        {
          occurences.push(i);
        }
    }
    return occurences;
  }
};
