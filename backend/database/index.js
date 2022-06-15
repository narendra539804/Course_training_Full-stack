const mysql=require('mysql')
const config={
    host:'localhost',
    port:3306,
    user:'root',
    password:'',
    database:'mern_stack_course'
};

const connection=mysql.createConnection(config);

connection.connect((error)=>{
    if(!error)
    {
        console.log("db connected");
    }
    else{
        console.log("not db ");
    }
})


module.exports=connection;