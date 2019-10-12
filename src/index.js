module.exports = function multiply(first, second) {
  // your solution
  //var first = '5';
  //var first1 = first.value;
 // var second = '10';
  //var second1 = second.value;
  //var a = Number(first);
  //var b = Number(second);
  //var a = parseInt(first);
  //var b = parseInt(second);
  var a = BigInt(first);
  var b = BigInt(second);
  var c = a * b;
  var d = c.toString();
  return d;
}


