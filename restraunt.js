const getFoodPrice = (foodName) => {
  if (foodName === "Burger") {
    return 250;
  } else if (foodName === "Pizza") {
    return 500;
  } else if (foodName === "Momo") {
    return 150;
  } else if (foodName === "Chowmein") {
    return 180;
  } else {
    return 0;
  }
};

const calculateServiceCharge = (total) => {
  return total * 0.05;
};

const calculateOrder = (foodName, quantity, callback) => {
  const foodPrice = getFoodPrice(foodName);

  if (foodPrice === 0) {
    return null;
  }

  return callback(foodPrice, quantity);
};

const generateReceipt = (customerName, foodName, quantity, callback) => {
  const foodAmount = calculateOrder(foodName, quantity, callback);

  if (foodAmount === null) {
    console.log("Invalid food item.");
    return;
  }

  const serviceCharge = calculateServiceCharge(foodAmount);
  const finalAmount = foodAmount + serviceCharge;

  console.log(`Customer: ${customerName}`);
  console.log(`Food: ${foodName}`);
  console.log(`Quantity: ${quantity}`);
  console.log(`Food Amount: Rs. ${foodAmount}`);
  console.log(`Service Charge: Rs. ${serviceCharge}`);
  console.log(`Final Amount: Rs. ${finalAmount}`);
};

const calculateFoodAmount = (price, quantity) => {
  return price * quantity;
};

generateReceipt("Suman", "Burger", 2, calculateFoodAmount);