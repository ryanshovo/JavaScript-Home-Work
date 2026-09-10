// Question 1

function calculateBill(product) {
  let discount = 0;
  
  if (product >= 5000) {
    discount = product * 10 / 100;
  } else if (product >= 3000) {
    discount = product * 5 / 100;
  } else {
    discount = 0;
  }
  
  let total = product - discount;
  let vat = total * 5 / 100;
  let finalbill = total + vat;
  
  return finalbill;
}

let result1 = calculateBill(6000);
console.log(result1, "Tk");


// Question 2

function calculateFare(travel) {
  let bill = 0;
  
  if (travel <= 2) {
    bill = travel * 50;
  } else if (travel <= 5) {
    bill = (2 * 50) + ((travel - 2) * 40);
  } else {
    bill = (2 * 50) + (3 * 40) + ((travel - 5) * 30);
  }
  
  return bill;
}

let result2 = calculateFare(4);
console.log(result2, "Tk");


// Question 3

function calculateGrade(bangla, english, math) {
  let total = bangla + english + math;
  let avarage = total / 3;
  let grade;
  
  if (bangla < 33 || english < 33 || math < 33) {
    grade = "F";
  } else if (avarage >= 80) {
    grade = "A+";
  } else if (avarage >= 70) {
    grade = "A-";
  } else if (avarage >= 60) {
    grade = "B";
  } else if (avarage >= 50) {
    grade = "C";
  } else if (avarage >= 40) {
    grade = "D";
  } else {
    grade = "F";
  }
  
  return grade;
}

let result3 = calculateGrade(32, 90, 99);
console.log(result3);


// Question 4

function calculateElectricity(unit) {
  let bill = 0;
  
  if (unit <= 100) {
    bill = unit * 5;
  } else if (unit <= 200) {
    bill = (100 * 5) + ((unit - 100) * 7);
  } else {
    bill = (100 * 5) + (100 * 7) + ((unit - 200) * 10);
  }
  
  return bill;
}

let result4 = calculateElectricity(150);
console.log(result4);