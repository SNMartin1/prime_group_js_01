var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];

var employees = [atticus, jem, boo, scout, robert, mayella];

//declared an empty array to store information fo
var newEmployeeArray = [];

//function to add names to the newEmployeeArray.
    function firstIndex(name) {
      //var names = employeeData[0].push(newEmployeeArray);
      // newEmployeeArray.push(employeeData[0]);
      // console.log(newEmployeeArray(firstIndex));
      newEmployeeArray.push(name[0]);
          console.log(firstIndex(employees[i]));
    } //end of name function

function calculateBonus(employeeData) {
  var bonus = 0;


// taking the employee number (index 1 in the array) and checking to see if it is
// equal to 5. If it is, it will add .05 to the bonus variable.
  if (employeeData[1].length < 5) {
    bonus += 0.05;
  }

// taking the employee salary (index 2 in the array) and checking to see if it is
// more than 65000. If it is, it will subtract .01.
  if (employeeData[2] > 65000) {
    bonus -= 0.01;
  }

  if (employeeData[3] <= 2) {
    bonus = 0;
  } else if (employeeData[3] == 3) {
    bonus += 0.04;
  } else if (employeeData[3] == 4) {
    bonus += 0.06;
  } else {
    bonus += 0.10;
  }

  if (bonus > 0.13) {
    bonus = 0.13;
  }
  return bonus;
} //end of calculateBonus function.

for (var i = 0; i < employees.length; i++) {
console.log(calculateBonus(employees[i]));
}
console.log(calculateBonus(scout));
