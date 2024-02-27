const { rejects } = require('assert');
const { error } = require('console');
const { readFile } = require('fs');
const { resolve } = require('path');

function constStudents(fileName) {
  const students = {};
  const fields = {};
  let leng = 0;
  return new Promise((resolve, reject) => {
    readFile(fileName, (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        const lines = data.toString().split('\n');
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            leng += 1;
            const field = lines[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }
            if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
              fields[field[3]] += 1;
            } else {
              fields[field[3]] = 1;
            }
          }
        }
        const l = leng - 1;
        console.log(`Number of students: ${l}`);
        for (const [key, val] of Object.entries(fields)) {
          if (key !== 'field') {
            console.log(`Number of students in ${key}: ${val}. List: ${students[key].join(', ')}`);
          }
        }
        resolve(data);
      }
    });
  });
}

module.exports = countStudents;
