const validateWithdrawal = (amount, balance) => {
  if (amount <= 0) {
    return "Withdrawal amount must be greater than zero.";
  } else if (amount > balance) {
    return "Insufficient balance.";
  } else if (amount % 500 !== 0) {
    return "Withdrawal amount must be a multiple of Rs. 500.";
  } else {
    return "valid";
  }
};

const withdrawMoney = (amount, balance, callback) => {
  const validationResult = callback(amount, balance);
  const transactionFee = 25;

  console.log(`Account Balance: Rs. ${balance}`);
  console.log(`Withdrawal Amount: Rs. ${amount}`);

  if (validationResult === "valid") {
    const remainingBalance = balance - amount - transactionFee;

    console.log("Withdrawal Successful!");
    console.log(`Transaction Fee: Rs. ${transactionFee}`);
    console.log(`Remaining Balance: Rs. ${remainingBalance}`);
  } else {
    console.log(`Withdrawal Failed: ${validationResult}`);
    console.log(`Remaining Balance: Rs. ${balance}`);
  }
};

withdrawMoney(3000, 10000, validateWithdrawal);