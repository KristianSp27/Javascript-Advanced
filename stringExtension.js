(function () {
  String.prototype.ensureStart = function (str) {
    if (!this.startsWith(str)) {
      return str + this;
    }
    return this.toString();
  };

  String.prototype.ensureEnd = function (str) {
    if (!this.endsWith(str)) {
      return this + str;
    }
    return this.toString();
  };

  String.prototype.isEmpty = function () {
    return this.length === 0;
  };

  String.prototype.truncate = function (n) {
    if (n <= 3) {
      return ".".repeat(n);
    }
    if (this.length <= n) {
      return this.toString();
    }
    let lastIndex = this.substr(0, n - 2).lastIndexOf(" ");
    if (lastIndex !== -1) {
      return this.substr(0, lastIndex) + "...";
    }
    return this.substr(0, n - 3) + "...";
  };

  String.format = function (string, ...params) {
    for (let i = 0; i < params.length; i++) {
      let placeHolder = "{" + i + "}";
      while (string.indexOf(placeHolder) !== -1) {
        string = string.replace(placeHolder, params[i]);
      }
    }
    return string;
  };
})();
