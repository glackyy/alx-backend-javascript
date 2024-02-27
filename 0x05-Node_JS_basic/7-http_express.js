const { error } = require('console');
const express = require('express');
const { readFile } = require('fs');

const app = express();
const port = 1245;

function countStudents(fileName) {
  const students = {};
  const fields = {};
  let leng = 0;
  return new Promise((resolve, reject) => {
    readFile(fileName, (error, data) => {
      if (error) {
        reject(error);
      } else {
        let output = '';
        const lines = data.toString().split('\n');
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            leng += 1;
            const field = lines[i].toString().split(',');
          }
        }
      }
    })
  })
}