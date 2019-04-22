// Write your solution in this file!

const driver = {};

// update driver with a key and a value 
function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, { [key]: value });
}

// destro update with key and value
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;

  return driver;
}

// delete driver by key
function deleteFromDriverByKey(driver, key) {
  const newObj = Object.assign({}, driver);

  delete newObj[key];

  return newObj;
}

// destro delete driver from key
function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];

  return driver;
}