//Hello World in node.js
//HWtest1.js



//This line gets the http module and saves it to the variable http
//The http module allows node.js to transfer data over http
var http = require('http');

//this calls the function createServer() from the http module
http.createServer(function (request, response) //create a function to use a the parameter for the createServer function
// request and response-passed to the function by the HTTP server when a new connection is received
{
    //writeHead() function lets us set up some parameters for the web browser
    //200 is a status code telling the browser that everything's OK
    //Content-Type tells the browers what we will be sending it
  response.writeHead(200, {'Content-Type': 'text/plain'});
    
    //Use the response object to write out 'Hello World' using a write function and passing it the text
  response.end('Hello World\n');
}).listen(8080); //this bit tells the server what port to listen on to then output our code