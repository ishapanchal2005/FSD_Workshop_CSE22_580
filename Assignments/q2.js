const fs = require("fs");

const fileName = "attendance.txt";

// Create file if it doesn't exist
if (!fs.existsSync(fileName)) {
    fs.writeFileSync(fileName, "");
}

// Add student
function addStudent(name) {
    fs.appendFileSync(fileName, name + "\n");
    console.log("Student added:", name);
}

// Show all students
function showStudents() {
    const data = fs.readFileSync(fileName, "utf8");

    console.log("\nAttendance List:");

    if (data.trim() === "") {
        console.log("No students found.");
    } else {
        console.log(data);
    }
}

// Update student name
function updateStudent(oldName, newName) {
    let students = fs.readFileSync(fileName, "utf8")
        .split("\n")
        .filter(name => name !== "");

    const index = students.indexOf(oldName);

    if (index !== -1) {
        students[index] = newName;
        fs.writeFileSync(fileName, students.join("\n") + "\n");
        console.log("Name updated successfully.");
    } else {
        console.log("Student not found.");
    }
}

// Delete student
function deleteStudent(name) {
    let students = fs.readFileSync(fileName, "utf8")
        .split("\n")
        .filter(student => student !== "");

    students = students.filter(student => student !== name);

    fs.writeFileSync(
        fileName,
        students.length ? students.join("\n") + "\n" : ""
    );

    console.log("Student deleted successfully.");
}

// Example operations
addStudent("Rahul");
addStudent("Priya");
addStudent("Aman");

showStudents();

updateStudent("Rahul", "Rohan");

showStudents();

deleteStudent("Priya");

showStudents();

// Rohan
// Aman