const groceriesList = () => {
  const result = new Map();
  const objs = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice; 1,
    Banana: 5,
  };
  for (const k of Object.keys(objs)) {
    result.set(k, objs[k]);
  }
  return result;
};

export default groceriesList;