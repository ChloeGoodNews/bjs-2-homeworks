function parseCount(number) {
	let parsedNumber = Number.parseFloat(number);
	if (Number.isNaN(parsedNumber)) {
		throw new Error("Невалидное значение");
	}
	return parsedNumber;
}

function validateCount(number) {
	try {
		return parseCount(number);
	} catch (error) {
			return error;
	}
}

class Triangle {
	constructor(ab, bc, ca) {
		this.ab= ab;
		this.bc = bc;
		this.ca = ca;

		if (ab + bc < ca || bc + ca < ab || ab + ca < bc) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
	}

	get perimeter() {
		return this.ab + this.bc + this.ca;
		
	}

	get area() {
		let semiperimeter = 0.5 * (this.ab + this.bc + this.ca);
		return Number(Math.sqrt(semiperimeter * (semiperimeter - this.ab) * (semiperimeter - this.bc) * (semiperimeter - this.ca)).toFixed(3));
	}
}

function getTriangle(ab, bc, ca) {
	try {
		return new Triangle(ab, bc, ca);
	} catch (error) {
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
