function add(number) {
  return function (value) {
    return number + value;
  };
}
