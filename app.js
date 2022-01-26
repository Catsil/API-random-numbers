const express = require("express");
const res = require("express/lib/response");
const app= express();

app.get('/', (req, res)=>{
    res.send('index page');
});

app.get('/random/:firstNumber/:finalNumber', (req, res)=>{ // firstNumber y finalNumber son los objetos dados por el cliente
    const min= parseInt(req.params.firstNumber);
    const max= parseInt(req.params.finalNumber);
    if(isNaN(min) || isNaN(max)){
        res.status(404);
        res.json({"error":'bad request'});
        return; 
    }
    const result =Math.floor(Math.random()*(max-min)+ min);
    
    //res.send('recived'); // permite ver los numeros random en la consola
    res.json({"randomNumer ":result}); // de esta manera permite ver los numeros random en la pagina web

});

app.listen(3000, ()=>{
    console.log('server on port 3000');
});