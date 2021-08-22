const call = require ('express');
const {Fragment} = require("react");
const connect = call();
const port = 3001;

connect.set('view engine', 'ejs');

connect.get('/',(req, res) => {
    res.render('index');
});

connect.get('/about',(req, res) =>{
    res.render('about');
});
connect.use('/',(req,res)=>{
res.status(404);
res.sendFile('views/404.html', {root: __dirname});
});

connect.listen(port, () => {
console.log('Server Ready');
});
