function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}
new Student("Elena", "female", 19);

new Student("Valentin", "male", 18);

new Student("Teja", "female", 17);



Student.prototype.setSubject = function(subjectName) {
	Student.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	if ("marks" in Student) {
		for (let i = 0; i < marks.length, i++) {
			marks.push(...marks[i]);
		}
	} else {
		console.log("студент отчислен");
	}
};

Student.prototype.getAverage = function(...marks) {
	let marksAverage = 0;
	if ("marks" in Student === false) {
		marksAverage = 0;
	} else {
		for (let i = 0; i < marks.length, i++) {
			let marksCount = marks.length - 1;
			marksAverage = sum(...marks) / marksCount;
		}
	}

	return marksAverage;
}

Student.prototype.exclude = function(reason) {
	delete Student.marks;
	delete Student.subject;
	Student.excluded = reason;
}