let query="";

const createUser=(connection,data,callback)=>{
 query="INSERT INTO users SET ?";
 connection.query(query,[data],callback);
}

module.exports={
    createUser,
}