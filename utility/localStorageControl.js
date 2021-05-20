// enhanced local storage get item
const getItem = (key) => {
  const data = localStorage.getItem(key);

  // parsing the data stored in key to js object (if in string)
  try {
    return JSON.parse(data);
  } catch (err) {
    return data;
  }
};

// enhanced local storage set item
const setItem = (key, value) => {
  // converting object to string for server require data in string
  const stringify = typeof value !== "string" ? JSON.stringify(value) : value;
  return localStorage.setItem(key, stringify);
};

// alternate local storage remove item
const removeItem = (key) => {
  localStorage.removeItem(key);
};

export { getItem, setItem, removeItem };
