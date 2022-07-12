const exp = require('express')
const app = new exp()

app.get('/',(req,res)=>{
    res.send('This is test for 1st file');
})


app.listen(3000,()=>{
    console.log('App is listening')
});