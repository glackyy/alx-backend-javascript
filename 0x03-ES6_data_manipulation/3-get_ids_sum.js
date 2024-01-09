const getStudentIdsSum = (students) => {
  const id = students.reduce(
    (ac, value) => ac + value.id, 0,
  );
  return id;
};

export default getStudentIdsSum;
