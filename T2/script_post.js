const express = require('express');
const app = express();
const path = require('path');

// Route to display the form page
app.use(express.urlencoded({extended : true}))
app.use(express.static(__dirname,{index : 'index_post_form.html'}))

app.post('/process_get', (req, res) => {
    
    const formData = req.body;
    console.log(formData)
    
    res.send(formData);
});

const PORT = 8081;
app.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}`);
});
