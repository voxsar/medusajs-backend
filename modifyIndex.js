const fs = require('fs');
const path = require('path');

// Define the path to your index.html
const indexPath = path.join(__dirname, 'build', 'index.html');

fs.readFile(indexPath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading index.html:', err);
        return;
    }

    // Replace "/app" with "" in the content of index.html
    const updatedContent = data.replace(/"\/app/g, '"');

    fs.writeFile(indexPath, updatedContent, 'utf8', (err) => {
        if (err) {
            console.error('Error writing updated index.html:', err);
            return;
        }
        console.log('index.html updated successfully!');
    });
});
