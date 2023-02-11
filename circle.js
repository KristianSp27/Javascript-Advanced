class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  set radius(radius) {
    this._radius = radius;
  }

  get diameter() {
    return this._radius * 2;
  }

  set diameter(diameter) {
    this._radius = diameter / 2;
  }

  get area() {
    return Math.PI * this._radius ** 2;
  }
}
