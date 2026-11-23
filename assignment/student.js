const calculateAverage = (m1, m2, m3) => {
  const totalMarks = m1 + m2 + m3;
  const average = totalMarks / 3;

  return average;
};

const getDivision = (average) => {
  if (average >= 70) {
    return "First Division";
  } else if (average >= 60) {
    return "Second Division";
  } else if (average >= 50) {
    return "Third Division";
  } else {
    return "Fail";
  }
};

const processResult = (name, m1, m2, m3, callback) => {
  const average = callback(m1, m2, m3);
  const division = getDivision(average);

  console.log(`Student: ${name}`);
  console.log(`Average: ${average}`);
  console.log(`Division: ${division}`);
};

processResult("Sita", 70, 75, 80, calculateAverage);