export function dataStep(time) {
  const date = new Date();
  date.setDate(date.getDate() - time);

  let year = date.getFullYear();
  let months = date.getMonth() + 1;
  let month = months < 10 ? `0${months}` : months;
  let days = date.getDate();
  let day = days < 10 ? `0${days}` : days;
  const fullDateCurrent = `${year}-${month}-${day}`;
  return fullDateCurrent;
}

export function dateFixed() {
  const date = new Date();
  date.setDate(date.getDate() - 9);

  let year = date.getFullYear();
  let months = date.getMonth() + 1;
  let month = months < 10 ? `0${months}` : months;
  let days = date.getDate();
  let day = days < 10 ? `0${days}` : days;
  const fullDataStart = `${year}-${month}-${day}`;
  return fullDataStart;
}
