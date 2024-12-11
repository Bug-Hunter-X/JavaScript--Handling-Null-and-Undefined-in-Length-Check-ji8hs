function foo(x) {
  return x === null || x === undefined ? 0 : x.length; 
}

console.log(foo(null)); // 0
console.log(foo([1,2,3])); // 3
console.log(foo(undefined)); // 0