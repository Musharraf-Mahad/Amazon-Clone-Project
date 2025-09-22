const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
  console.log(xhr.response);
});

xhr.open('GET', 'https://supersimplebackend.dev/');
xhr.send();




//XMLHttpRequest is a built in class in javascript used to send a request

/* .open() takes two parameters 
1. type of HTTP message e.g GET,POST,PUT,DELETE.
2. where to send this HTTP message
*/