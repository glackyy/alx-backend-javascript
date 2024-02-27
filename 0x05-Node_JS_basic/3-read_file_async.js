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
      }
    })
  }) 
}