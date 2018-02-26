module.exports = function solveEquation(equation) {
  // your implementation
  var elements=equation.split(' ');
  var a=new Number(elements[0]);
  var b=new Number(elements[3]+elements[4]);
  var c = new Number(elements[7]+ elements[8]);
  var dSqrt=Math.sqrt(b*b-4*a*c);
  return [Math.round((-b-dSqrt)/(2*a)), 
    Math.round((-b+dSqrt)/(2*a))].sort((a, b)=>a-b);
}
