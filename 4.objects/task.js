function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marksToAdd) {
	if ("marks" in thishis) {
		this.marks.push(...marksToAdd);
	} 
}

Student.prototype.getAverage = function(...marks) {
	if ("marks" in this === false) {
         this.marks = 0;
	}
	return marks.reduce((a,b) => (a+b)) / marks.length
}


Student.prototype.exclude = function(reason) {
	delete this.marks;
	delete this.subject;
	this.excluded = reason;
}