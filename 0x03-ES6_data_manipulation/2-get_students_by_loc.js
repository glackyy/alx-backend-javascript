const getStudentsByLocation = (students, city) => {
  const arrObj = students.filter((funObj) => funObj.location === city);
  return arrObj;
};

export default getStudentsByLocation;
