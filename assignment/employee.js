const calculateBonus = (salary) => {
  if (salary >= 40000) {
    return salary * 0.10;
  } else {
    return salary * 0.05;
  }
};

const calculateTax = (salary) => {
  return salary * 0.05;
};

const calculateNetSalary = (salary, bonusCallback, taxCallback) => {
  const bonus = bonusCallback(salary);
  const tax = taxCallback(salary);
  const netSalary = salary + bonus - tax;

  return {
    bonus: bonus,
    tax: tax,
    netSalary: netSalary
  };
};

const generatePayslip = (name, salary, callback) => {
  const payslip = callback(
    salary,
    calculateBonus,
    calculateTax
  );

  console.log(`Employee: ${name}`);
  console.log(`Basic Salary: Rs. ${salary}`);
  console.log(`Bonus: Rs. ${payslip.bonus}`);
  console.log(`Tax: Rs. ${payslip.tax}`);
  console.log(`Net Salary: Rs. ${payslip.netSalary}`);
};

generatePayslip("Ram", 50000, calculateNetSalary);