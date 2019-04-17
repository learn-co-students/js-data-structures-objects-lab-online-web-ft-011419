const driver = {};

function updateDriverWithKeyAndValue(object, key, value) {
	return Object.assign({}, object, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value) {
  return Object.assign(object, { [key]: value });
}

function deleteFromDriverByKey(object, key) {
  // return delete object.key
  const newObject = Object.assign({}, object);
  return delete newObject[key];
}

function destructivelyDeleteFromDriverByKey (object, key) {
  delete object[key];
  return object;
}
