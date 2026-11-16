const http = require('http') // http-> module
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'}); // 200-> all ok
    res.write('My first page\n');  // multiple statements print 
    res.write('My second page\n');
    res.write('My third page\n');
    res.write('My fourth page\n');
    res.end('This is my page'); // rnd the response
});
server.listen(4000, ()=> console.log('Server running at http://localhost:4000'));

// request-> server
// reponse-> reply
// less then 3000-> private , greater -> public -> no error
// 3000-9000 any no. run
// server end -> c
// server all commands dlt from starting -> l

