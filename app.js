const express = require('express');

const app = express();
const path =require('path')

app.use(express.static('public'));
app.use(express.urlencoded());



app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/home.html'))
})

app.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/register.html'))
})
app.get('/ingresa',(req,res)=>{
    res.sendFile(path.join(__dirname,'./views/ingresa.html'))
})

app.post('/register', (req, res) => {
    req.body
    res.redirect('/');
});
app.post('/ingresa', (req, res) => {
    req.body
    res.redirect('/');
});
app.listen(process.env.PORT || 3000, Function () 
    console.log("Levantando un servidor con Express");
)
