var express = require('express');
var app = express();

const student = {
    u1: [
        { name: 'John', id: 1 },
        { name: 'Jane', id: 2 },
        { name: 'Jim', id: 5 },
        { name: 'Jill', id: 4 },
        { name: 'Jack', id: 3 }
    ]
};

app.get('/student', (req, res) => {
    res.set("Content-Type", "text/html");
    
    // Add CSS Styling in the head
    res.write(`
        <html>
        <head>
            <style>
                body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f7f6; display: flex; justify-content: center; padding-top: 50px; }
                table { border-collapse: collapse; width: 400px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); background: white; border-radius: 8px; overflow: hidden; }
                th { background-color: #009879; color: #ffffff; text-align: left; padding: 12px 15px; font-weight: bold; }
                td { padding: 12px 15px; border-bottom: 1px solid #dddddd; }
                tr:nth-of-type(even) { background-color: #f3f3f3; }
                tr:last-of-type { border-bottom: 2px solid #009879; }
                tr:hover { background-color: #ff0000; cursor: pointer; transition: 0.3s; }
            </style>
        </head>
        <body>
            <table>
                <thead>
                    <tr><th>Name</th><th>ID</th></tr>
                </thead>
                <tbody>
    `);

    for (let i of student.u1) {
        res.write(`<tr><td>${i.name}</td><td>${i.id}</td></tr>`);
    }

    res.write(`
                </tbody>
            </table>
        </body>
        </html>
    `);
    res.end();
});

app.listen(5100, () => {
    console.log("Server started! Check it out at http://localhost:5100/student");
});
