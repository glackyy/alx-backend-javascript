function calculateNumber(type, a, b) {
  const an = Math.round(a);
  const bn = Math.round(b);
  let c = 0;
  switch (type) {
    case 'SUM':
        c = an + bn;
    case 'SUBSTRACT':
        c = an - bn;
  }
}