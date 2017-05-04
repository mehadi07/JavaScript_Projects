//Implement the
//function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
//
//For example:
//
//uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
//uniqueInOrder('ABBCcAD') == ['A', 'B', 'C', 'c', 'A', 'D']
//uniqueInOrder([1, 2, 2, 3, 3]) == [1, 2, 3]

var uniqueInOrder=function(iterable){
    if(iterable.length==0) return [];
    var arr=[iterable[0]];
    if(typeof iterable === 'string') iterable=iterable.split('');
    iterable.reduce(function(prev,cur) {
        if(prev!=cur) arr.push(cur);
        return cur;
    });
    return arr;
}
uniqueInOrder('AAAABBBCCDAABBB');
uniqueInOrder('ABBCcAD');

//var uniqueInOrder=function(iterable){
//  var result = [];
//  for (var i = 0; i < iterable.length; i++) {
//    if (iterable[i-1] === undefined || iterable[i-1] !== iterable[i]) {
//      result.push(iterable[i]);
//    }
//  }
//  return result;
//}