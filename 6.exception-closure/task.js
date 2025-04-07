function parseCount(number) {
	if (Number.isNaN(Number.parseFloat(number))) {
		throw new Error("Невалидное значение");
	}
	return parseFloat(number);
}

function validateCount(number) {
	try {
		let result = parseCount(number);
		return result;
	} catch (error) {
		if (error instanceof Error) {
			return error;
		}
	}
}

class Triangle {
	constructor(hypotenuse, opposite, base) {
		this.hypotenuse = hypotenuse;
		this.opposite = opposite;
		this.base = base;

		if (this.opposite + this.base < this.hypotenuse || this.opposite + this.hypotenuse < this.base || this.base + this.hypotenuse < this.opposite) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
	}
	set perimeter(perimeter) {
		this._perimeter = perimeter;
	}

	get perimeter() {
		this.perimeter = this.opposite + this.base + this.hypotenuse;
		return this._perimeter;
	}

	set area(area) {
		this._area = area;
	}
	get area() {
		this.semiperimeter = 0.5 * this.perimeter;
		this.area = Math.sqrt(this.semiperimeter * (this.semiperimeter - this.hypotenuse) * (this.semiperimeter - this.opposite) * (this.semiperimeter - this.base));
		return Number(this._area.toFixed(3));
	}
}

function getTriangle(hypotenuse, opposite, base) {
	try {
		const triangle = new Triangle(hypotenuse, opposite, base);
		return triangle;
	} catch (error) {
		if (error instanceof Error) {
			return triangle = {
				get perimeter() {
					return "Ошибка! Треугольник не существует";
				},
				get area() {
					return "Ошибка! Треугольник не существует";
				}
			}

		}

	}
}