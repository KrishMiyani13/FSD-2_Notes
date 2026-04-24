const express = require('express');
const app = express();
const PORT = 3000;


const logCampusEntry = (req, res, next) => {
    console.log(`Student reached the campus gate.`);
    next(); 
};


const verifyID = (req, res, next) => {
    const hasID = req.query.id === 'true'; 

    if (hasID) {
        console.log("ID Verified. Access Granted.");
        next(); 
    } else {
        console.log("No valid ID. Access Denied.");
        res.status(403).send("<h1>Access Denied:</h1> Please present a valid Student ID.");
    }
};


app.get('/class', logCampusEntry, verifyID, (req, res) => {
    
    res.send("<h1>Welcome to the Classroom!</h1><p>Your attendance has been recorded.</p>");
});

app.listen(PORT, () => {
    console.log(`Classroom system running at http://localhost:${PORT}`);
});
