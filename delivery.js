const calculateDelivery = (distance) => {
  if (distance <= 2) {
    return 30;
  } else {
    const extraDistance = distance - 2;
    return 30 + (extraDistance * 15);
  }
};

const checkFreeDelivery = (orderAmount) => {
  return orderAmount >= 1000;
};

const processOrder = (customer, distance, orderAmount, callback) => {
  let deliveryCharge;

  if (checkFreeDelivery(orderAmount)) {
    deliveryCharge = 0;
  } else {
    deliveryCharge = callback(distance);
  }

  console.log(`Customer: ${customer}`);
  console.log(`Order Amount: Rs. ${orderAmount}`);
  console.log(`Distance: ${distance} km`);
  console.log(`Delivery Charge: Rs. ${deliveryCharge}`);
};

processOrder("Shyam", 5, 800, calculateDelivery);