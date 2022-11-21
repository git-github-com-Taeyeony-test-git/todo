const express = require("express")
const router = express.Router();

const { Todo } = require("../model/todo")

router.post("/api/todo/submit", (req, res) => {
    let todo = req.body.todo;

    const newTodo =  new Todo(todo);

    newTodo.save().then(() => {

        res.status(200).json({ success : true })

    }).catch(err) => {

        console.log(err);
        res.status(400).json({ success: false })

    }
})

module.exports = router;