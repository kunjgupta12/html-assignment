//Q3: Sorting an Array of Students by Score

const students = [
    { name: "John", score: 85 },
    { name: "Bill", score: 92 },
    { name: "Natalie", score: 78 },
    { name: "David", score: 90 }
];

students.sort((a, b) => b.score - a.score);

console.log(students);
