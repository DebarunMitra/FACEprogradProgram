const express=require('express');
const mongoose=require('mongoose');

//load routes
const auth=require('./routes/auth');


const app=express();

app.get('/',(req,res)=>{
  res.send('Its Working');
});

//user routes
app.use('/auth',auth);

const port=process.env.PORT || 5020;

app.listen(port,()=>{
  console.log(`Server started on port ${port}`);
})