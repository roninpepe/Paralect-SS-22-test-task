export const nFormatter = (num: number): string => {
  if (num < 1000) return `${num}`;

  const si = [
    { v: 1e18, s: 'e' },
    { v: 1e15, s: 'p' },
    { v: 1e12, s: 't' },
    { v: 1e9, s: 'b' },
    { v: 1e6, s: 'm' },
    { v: 1e3, s: 'k' },
  ];
  let i = si[0];
  for (i of si) if (num >= i.v) break;
  return (num / i.v).toFixed(1).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + i.s;
};
