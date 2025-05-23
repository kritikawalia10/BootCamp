const http = require('http')
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write('Hello wolrd');
        res.end();
    }
    if(req.url === '/data'){
        const names = ["John", "Jack", "Oggy", "Dora"];
        res.write(JSON.stringify(names));
        res.end();
    }
});

server.listen(3000);
console.log("Listening on port 3000...")