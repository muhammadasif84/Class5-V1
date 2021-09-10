console.clear();
/*let id: number;
let studentName: string;
let email: string;

function set_student_values(id: number, studentName: string, email:string): void{
   this.id = id;
   this.studentName = studentName;
   this.email = email;
}

function printDetails() : void {
    console.log("The id of student is " + this.id  + "The name of student is " + this.studentName + "The email of student is " + this.email)
}

set_student_values(1, "Asif", "asif@yahoo.com");
printDetails();*/
class Student {
    constructor(id, studentName, email) {
        this.id = id;
        this.studentName = studentName;
        this.email = email;
    }
    printDetails() {
        console.log("The id of studend is " + this.id);
        console.log("The name of studend is " + this.studentName);
        console.log("The email of studend is " + this.email);
    }
}
let student1 = new Student(1, "Asif", "asif@yahoo.com");
student1.printDetails();
