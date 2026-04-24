const express = require('express');
const app = express();
const path = require('path');

// Route to display the form page
app.use(express.static(__dirname,{index : 'index_get_form.html'}))

app.get('/process_get', (req, res) => {
    res.set({'content-type':'text/html'});
    t1 = (req.query.msg).split(".");
    for (i in t1){
        res.write(i + '<br>')
    }
    const formData = req.query;
    console.log(formData)

    res.json(formData);
    res.send
});

const PORT = 8081;
app.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}`);
});
