const {sum, res, div, mul} = require ('./02-math');

test(" adds 1 + 3  se espera 4 ", ()=>{
  const rta = sum(1, 3);
  expect(rta).toBe(4);
  const rta2 = sum(2,10);
  expect(rta2).toBe(12);
});

test(" adds 1 / 2 se espera 1.5", ()=>{
  const rta = mul(1, 2);
  expect(rta).toBe(2);

});
