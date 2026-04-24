var http = require('http');
http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type':'application/json'})
    const data = {subject:'FSD-2',
        Topic:'Node.js'
    }
    res.end(JSON.stringify(data));
}).listen(8183)