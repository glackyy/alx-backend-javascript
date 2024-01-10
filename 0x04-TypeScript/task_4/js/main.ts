export const cpp: Subjects.Cpp = new Subjects.Cpp();
export const java: Subjects.Java = new Subjects.Java();
export const react: Subjects.React = new Subjects.React();
export const cteacher: Subjects.Teacher = {
  firstName: 'Othmane',
  lastName: 'Boubecheur',
  experienceTeachingC: 10,
};

console.log('C++');
cpp.setTeacher = cteacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
java.setTeacher = cteacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('React');
react.setTeacher = cteacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());
