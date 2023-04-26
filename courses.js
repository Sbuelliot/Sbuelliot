// Create a class named Courses with the attributes courseName and contactWebsite
class Courses {
    constructor(courseName, contactWebsite) {
      this.courseName = courseName;
      this.contactWebsite = contactWebsite;
    }
    // This class should have a method to display the contact website of the selected course
    displayContactWebsite() {
      console.log(`The contact website for ${this.courseName} is ${this.contactWebsite}`);
    }
  }
  // Create a subclass named Subjects that will inherit from Courses with at least two new attributes added to this new class
  class Subjects extends Courses {
    constructor(courseName, contactWebsite, subjectName, subjectCode) {
      // Use super() to call the constructor of the parent class
      super(courseName, contactWebsite);
      this.subjectName = subjectName;
      this.subjectCode = subjectCode;
    }
    // This subclass should have a method to display what course it belongs to, as well as displaying the other two attributes that you have created
    displaySubjectInfo() {
      console.log(`This subject is ${this.subjectName} (${this.subjectCode}) and it belongs to ${this.courseName}`);
    }
  }
  // Create at least 3 instances of the Subjects class
  let math = new Subjects("Mathematics", "www.math.com", "Calculus", "MATH101");
  let physics = new Subjects("Physics", "www.physics.com", "Mechanics", "PHYS201");
  let biology = new Subjects("Biology", "www.biology.com", "Genetics", "BIOL301");
  // Test the methods
  math.displayContactWebsite(); // The contact website for Mathematics is www.math.com
  physics.displaySubjectInfo(); // This subject is Mechanics (PHYS201) and it belongs to Physics
  biology.displayContactWebsite(); // The contact website for Biology is www.biology.com
  biology.displaySubjectInfo(); // This subject is Genetics (BIOL301) and it belongs to Biology