class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username is: ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`A new Course was added by ${this.username}`);
  }
}

const newTeacher = new Teacher("Deepak", "deepak@teacher.com", "123");

newTeacher.addCourse();

const sampleTeacher = new User("masalachai");
sampleTeacher.logMe();
newTeacher.logMe();

console.log(newTeacher instanceof User);
