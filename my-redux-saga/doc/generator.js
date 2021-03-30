function* gen() {
  console.log("start");
  let a = yield 1;
  console.log(a);
  let b = yield 2;
  console.log(b);
  let c = yield 3;
  console.log(c);
  console.log("end");
}

let it = gen();
console.log("beforenetx", it);
let l1 = it.next();
console.log("next1", l1);

let l2 = it.next();
console.log("next2", l2);
let l3 = it.next();
console.log("next3", l3);
let l4 = it.next();
console.log("next4", l4);


function a(a,b,args) {
    console.log(a,b, args)
}
a.bind(null,1,2)(3,4)
