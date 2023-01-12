function previousDay(year, month, day) {
  let date = new Date(year, month - 1, day);
  let prevDate = new Date(date.getTime() - 24 * 60 * 60 * 1000);
  return prevDate.getFullYear() + "-" + (prevDate.getMonth() + 1) + "-" + prevDate.getDate();
}
