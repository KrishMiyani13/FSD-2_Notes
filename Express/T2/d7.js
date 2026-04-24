const express = require('express');
const app = express();
const port = 3000;


const addStudentName = (req, res, next) => {
  req.studentName = "Krish Miyani"; 
  next(); 
};

 
const addCollege = (req, res, next) => {
  req.college = "LJU";
  next();
};

const addMarks = (req, res, next) => {
  req.marks = { Mathematics: 92, Physics: 88, Chemistry: 85 };
  next();
};


app.use(addStudentName);
app.use(addCollege);
app.use(addMarks);


app.get('/', (req, res) => {
  res.json({
    status: "Success",
    data: {
      name: req.studentName,
      college: req.college,
      marks: req.marks
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
