const fs = require('fs');
const path = require('path');
const logsDir = path.join(__dirname, 'Logs');

// Create Log files
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
  console.log(`Logs directory created.`);
}

// Change current process to Logs directory
process.chdir(logsDir);


// Create 10 log files and write some text
for (let i = 0; i < 10; i++) {
  const fileName = `log${i}.txt`;
  fs.writeFileSync(fileName, `This is log file ${i}`);
  console.log(fileName);
}
