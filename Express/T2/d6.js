const express = require('express');
const app = express();
const port = 3000;

// Dynamic route accepts :id as a route parameter
app.get('/user/:id', (req, res) => {
  // Extract id from route parameters
  const userId = req.params.id;
  
  // Extract name and age from query parameters (?name=Alice&age=25)
  const name = req.query.name;
  const age = req.query.age;

  // Return all data as a JSON response
  res.json({
    received_id: userId,
    received_name: name,
    received_age: age
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
