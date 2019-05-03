const driver = {};

 function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {[key]: value});
}

 function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver
}

 function deleteFromDriverByKey(driver, key) {
  const newOb = Object.assign({}, driver);

   delete newOb[key];

   return newOb;
}

 function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];

   return driver;
}
