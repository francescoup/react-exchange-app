export const date = () => {
  const dateCurrent = new Date();
  let year = dateCurrent.getFullYear();
  let months = dateCurrent.getMonth() + 1;
  let month = months < 10 ? `0${months}` : months;
  let days = dateCurrent.getDate();
  let day = days < 10 ? `0${days}` : days;
  const fullDateCurrent = `${year}-${month}-${day}`;
  return fullDateCurrent;
};
