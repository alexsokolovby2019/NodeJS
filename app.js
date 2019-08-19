//для получения параметров в коде приложения применяется массив process.argv
let nodePath = process.argv[0];
let appPath = process.argv[1];
let name = process.argv[2];
let age = process.argv[3];

console.log("/////////////////////////////////////////");
console.log("nodePath: " + nodePath);
console.log("appPath: " + appPath);
console.log();
console.log("name: " + name);
console.log("age: " + age);
console.log();


const os = require("os");
const greeting = require("./greeting");
const User = require("./user.js");

let PrivateName = new User("Alexey", 56);
PrivateName.sayHi();

//current user
let userName = os.userInfo().username;
console.log(userName);

userName = os.userInfo().username;

//greeting
console.log(`Date of request: ${greeting.date}`);
console.log(greeting.getMessage(userName));

console.log();


////////////////////////////////////////////
//пример синхронной работы
function displaySync(data){
    console.log(data);
}

console.log("Начало пример синхронной работы");

displaySync("Обработка данных...");

console.log("Завершение пример синхронной работы");
////////////////////////////////////////////
console.log();

////////////////////////////////////////////
//пример асинхронной работы
function display(data, callback){

    // с помощью случайного числа определяем ошибку
    var randInt = Math.random() * (10 - 1) + 1;
    var err = randInt>5? new Error("Ошибка выполнения. randInt больше 5"): null;

    setTimeout(function(){
        callback(err, data);
    }, 0);
}

console.log("Начало пример асинхронной работы");

display("Обработка данных...", function (err, data){

    if(err) throw err;
    console.log(data);
});

console.log("Завершение пример асинхронной работы");
////////////////////////////////////////////

console.log();

////////////////////////////////////////////
//пример 2 асинхронных метода
function displaySync2(callback){
    callback();
}

console.log("Начало пример 2 асинхронных метода");

setTimeout(function(){

    console.log("timeout 500");
}, 500);

setTimeout(function(){

    console.log("timeout 100");
}, 100);

displaySync2(function(){console.log("without timeout")});
console.log("Завершение пример 2 асинхронных метода");
////////////////////////////////////////////


////////////////////////////////////////////
// server variant - 1
const http = require("http");
http.createServer(function (request, responce) {

    console.log("Url: " + request.url);
    console.log("Тип запроса: " + request.method);
    console.log("User-Agent: " + request.headers["user-agent"]);
    console.log("Все заголовки");
    console.log(request.headers);

    responce.end("Hello NodeJS!");

}).listen(3000, "127.0.0.1", function(){
    console.log("Server has begun listening requests on port 3000");
})
////////////////////////////////////////////


/*
////////////////////////////////////////////
// server variant - 2
const express = require("express");
//create application
const app = express();
// устанавливаем обработчик для маршрута "/"
app.get("/", function(request, response){

    response.end("Hello from Express!");
});
// начинаем прослушивание подключений на 3000 порту
app.listen(3000);
////////////////////////////////////////////
*/
