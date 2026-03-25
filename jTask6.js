// Write node js script to fetch values from url given below and display output as asked.
// "https://www.google.com/exam.txt?c1=Hello&amp;c2=FSD2+T1+Test&amp;c3=
// Welcome+to+LJU#AllTheBest"
// 1) Data must be written as below in file named “exam.txt”. File name must be
// fetched from
// the url given above.
// Output:
// Hello!
// Welcome to LJU FSD2 T1 Test
// #AllTheBest
// 2) Read content from file “exam.txt” and send response to server and display data in
// “/” page
// in same format as above but in H1 tag and in red color.
// 3) If any other page is requested it shows “Page not found” message in plain text.

var https = require("https");
var fs = require("fs");
var url = require("url");
var http = require("http");

// Given URL
var givenUrl = "https://www.google.com/exam.txt?c1=Hello&c2=FSD2+T1+Test&c3=Welcome+to+LJU#AllTheBest";

// Parse URL
var parsedUrl = url.parse(givenUrl, true);

// Extract filename from pathname
var fileName = parsedUrl.pathname.split("/").pop();

// Extract query values
var c1 = parsedUrl.query.c1;
var c2 = parsedUrl.query.c2.replace(/\+/g, " ");
var c3 = parsedUrl.query.c3.replace(/\+/g, " ");

// Extract hash
var hash = parsedUrl.hash;

// Format output
var outputData = `${c1}!\n${c3} ${c2}\n${hash}`;

// Write to file
fs.writeFileSync(fileName, outputData);

console.log("File created with content:");
console.log(outputData);

// Create HTTP server
var server = http.createServer((req, res) => {
    if (req.url === "/") {
        // Read file content
        var data = fs.readFileSync(fileName, "utf-8");

        // Convert lines to HTML
        var formatted = data
            .split("\n")
            .map(line => `<h1 style="color:red;">${line}</h1>`)
            .join("");

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(formatted);
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page not found");
    }
});

// Start server
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});