const express=require('express');
const app=express();
const port=8000;

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
    //if inside ${2+2} then it will give 4 instead of port number
});