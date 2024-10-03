const fs = require('fs');
const path = require('path');
const logsDir = path.join(__dirname, 'Logs');

// Remove Log files
if (fs.existsSync(logsDir)) {
  fs.readdirSync(logsDir).forEach(file => {
    const filePath = path.join(logsDir, file);
    console.log(`Deleting file... ${filePath}`);
    fs.unlinkSync(filePath);
  });
  

  
  // Remove the Logs directory
  fs.rmdirSync(logsDir);
  console.log(`Logs directory removed.`);
}
