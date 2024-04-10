const fs = require('fs');
const XLSX = require('xlsx');

const excelFilePath = 'interview_questions.xlsx';

const workbook = XLSX.readFile(excelFilePath);
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const range = XLSX.utils.decode_range(sheet['!ref']);

const questions = [];

for (let i = 1; i <= 10; i++) {
    const rowNum = Math.floor(Math.random() * (range.e.r - range.s.r + 1)) + range.s.r;
    const question = {
        question: sheet[XLSX.utils.encode_cell({ r: rowNum, c: 0 })]?.v || '',
        desired_answer: sheet[XLSX.utils.encode_cell({ r: rowNum, c: 1 })]?.v || '',
        videoUrl: sheet[XLSX.utils.encode_cell({ r: rowNum, c: 2 })]?.v || '',
        answer: ''
    };
    questions.push(question);
}

fs.writeFileSync('questions.json', JSON.stringify(questions, null, 4));
