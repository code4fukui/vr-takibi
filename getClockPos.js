export const getClockPos = () => {
  const d = new Date();
  let n = d.getHours();
  let m = d.getMinutes();
  let l = d.getSeconds();
  const ms = d.getMilliseconds();
  l += ms / 1000;
  m += l / 60;
  n += m / 60;
  const hour = n / 24 * Math.PI * 2 + Math.PI;
  const min = m / 60 * Math.PI * 2 + Math.PI;
  const sec = l / 60 * Math.PI * 2 + Math.PI;
  return { hour, min, sec };
};
