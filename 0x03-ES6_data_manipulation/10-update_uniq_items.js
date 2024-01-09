const updateUniqueItems = (map) => {
  if (map instanceof Map) {
    for (const [k, value] of map.entries()) {
      if (value === 1) {
        map.set(k, 100);
      }
    }
    return map;
  }
  throw new Error('Cannot process');
}

export default updateUniqueItems;