import fs from "fs";

// CREATE
fs.writeFileSync("student.txt", "Name: Isha\nAge: 20\nCourse: CSE");

console.log("File created successfully.");

// READ
const data = fs.readFileSync("student.txt", "utf-8");

console.log("\nFile Content:");
console.log(data);

// UPDATE
fs.appendFileSync("student.txt", "\nCollege: ABC University");

console.log("\nFile updated successfully.");

// Read updated file
const updatedData = fs.readFileSync("student.txt", "utf-8");
console.log("\nUpdated File Content:");

console.log(updatedData);

// DELETE
fs.unlinkSync("student.txt");

console.log("\nFile deleted successfully.");