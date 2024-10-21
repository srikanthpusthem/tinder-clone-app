import express from 'express'
import mongoose from 'mongoose'
import Cards from "./dbCards.js"
import Cors from "cors";

//app config
const app = express();
const port = process.env.PORT||8001;
const connection_url = `mongodb+srv://srikanthpusthem:Srikanth9*@cluster0.3cn6s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`



//middlewares
app.use(express.json());
app.use(Cors());

//db config
mongoose.connect(connection_url,{
    useNewUrlParser: true,
    useUnifiedTopology : true,
})

//api endpoints
app.get('/',(req,res)=>res.status(200).send('HELLO PROGRAMMER'));
app.post('/tinder/cards',(req,res)=>{
    const dbCard = req.body;

    Cards.create(dbCard, (err, data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    });
});


app.get('/tinder/cards',(req,res)=>{
   

    Cards.find((errr, data)=>{
        if(errr){
            res.status(500).send(errr);
        }
        else{
            res.status(200).send(data);
        }
    });
});

//listener
    app.listen(port, ()=>console.log(`listening on localhost':${port}`));


