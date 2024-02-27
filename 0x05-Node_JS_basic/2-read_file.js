const fs = require('fs');

function countStudents(fileName) {
  const students = {};
  const fields = {};
  let leng = 0;
  try {
    const fileContents = fs.readFileSync(fileName, 'utf-8');
    const lines = fileContents.toString().split('\n');
  }
}