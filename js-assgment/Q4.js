//Q4:Given an array of employees, perform the following: Calculate the total salary of all employees. Get the names of all employees in the "IT" department. Find the employee with the highest salary. const employees = [ { name: "Alice", department: "IT", salary: 60000 }, { name: "Bob", department: "HR", salary: 50000 }, { name: "Charlie", department: "IT", salary: 75000 }, { name: "David", department: "Finance", salary: 80000 } ];
const employees = [
    { name: "Alice", department: "IT", salary: 60000 },
    { name: "Bob", department: "HR", salary: 50000 },
    { name: "Charlie", department: "IT", salary: 75000 },
    { name: "David", department: "Finance", salary: 80000 }
];

// 1. Calculate total salary
const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log("Total Salary:", totalSalary);

// 2. Get names of employees in "IT" department
const itEmployees = employees.filter(emp => emp.department === "IT").map(emp => emp.name);
console.log("IT Employees:", itEmployees);

// 3. Find employee with highest salary
const highestPaidEmployee = employees.reduce((max, emp) => (emp.salary > max.salary ? emp : max), employees[0]);
console.log("Highest Paid Employee:", highestPaidEmployee);
