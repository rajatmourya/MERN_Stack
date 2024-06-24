// // import mul from "./utils"    //ES6 syntax

// const a = 5;
// const b = 6;

// // const { multipy } = require("./utils");      // Common js syntax
//                     // or
// const utils = require("./utils");

// //  const ans = multipy(a,b);
// const ans = utils.multipy(a,b);
// console.log(a + b);
// console.log(ans)

// utils.log.warning("this is just an info")


//                                                                  Express


const express = require('express');
const { multipy } = require('./utils');

const app = express();

app.use(express.json());

app.get('/user', (req, res) => {
    console.log('User was called');
    // res.send("Hello user");
    res.send({
        name:'rajat',
        age:23
    });
});

function sumOfNaturalNumber(a) {
    return (a*(a+1)/2);
}

function avgOfNaturalNumber(a) {
    return (a+1)/2;
}

function ran(a,b){
    return (Math.floor(Math.random() * b) + a);
}



app.post('/user', (req, res) => {
    console.log(req.body);
    

    res.json({
        name: "Shilpy",
        age: 23,
        multipy: req.body.a * req.body.b,
        randomNumber:ran(req.body.s[0], req.body.s[1]),
        sumOfNNumber: sumOfNaturalNumber(req.body.n),
        avgOfNNumber: avgprOfNaturalNumber(req.body.n),
    });
})

app.get('/', (req, res) => {
    // res.send("Server is now working");
    // res.sendFile(__dirname + "/index.html")
    res.json({
        success: true,
    });
});



app.listen(5000, () => {
    console.log('Listening on port: 5000')
});