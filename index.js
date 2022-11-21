const express = require("express");
const mongoose = require("mongoose");


const app = express();

const port = 5000;

app.listen(port, () => {
    console.log(`App listening on Port ${port}`);
})

app.use(require("./server/router/todo"));

mongoose.connect('mongodb+srv://test:sparta@clusert0.c4jurvw.mongodb.net/Cluster0?retryWrites=true&w=majority').then(()=>{
    console.log("연결성공");

}).catch((err) => {

    console.log(err);

})