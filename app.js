const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { coursemodel } = require("./models/course")

const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://anjaleekrishnaps2001:anjalee2001@cluster0.cnbaf.mongodb.net/coursedb?retryWrites=true&w=majority&appName=Cluster0")


app.post("/add", (req, res) => {
    let input = req.body
    let course = new coursemodel(input)
    course.save()
    console.log(course)
    res.json({ "status": "success" })
})

app.post("/search", (req, res) => {

    let input = req.body
    coursemodel.find(input).then(
        (data) => {
            res.json(data)
        }

    ).catch(
        (error) => {
            res.json(error)
        }
    )
})


app.post("/delete", (req, res) => {
    let input = req.body
    coursemodel.findByIdAndDelete(input._id).then(
        (response) => {
            res.json({ "status": "success" })



        }

    ).catch(
        (erro) => {
            res.json({ "status": "error" })
        }

    )
})

app.get("/view", (req, res) => {

    coursemodel.find().then(
        (data) => {
            res.json(data)
        }

    ).catch(
        (error) => {
            res.json(error)
        }
    )
})



app.listen(8083, () => {
    console.log("server started")

})
app.get("/", (req, res) => {
    res.send("hello")
})

app.get("/contact", (req, res) => {
    res.send("welcome to my contact page")
})
