const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000; 

const article = require('./data/articleInfo.json');



//middleWare
app.use(cors())
app.use(express.json())



app.listen(port, (req,res)=>{
    console.log(`Server is running on port ${port}`)
})

app.get('/', (req,res)=>{
    res.send('server is running');
})
app.get('/article', (req,res)=>{
    res.send(article);
})

app.get('/article/:id', (req,res) =>{
    const id= req.params.id;
    
    const result = article.find(a=>a.id == id);

    res.send(result);
})
app.get('articles/articleDetails/:id', (req,res) =>{
    const id= req.params.id;

    const result = article.find(a=>a.id == id);

    res.send(result);
})