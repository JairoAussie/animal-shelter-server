const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")
const animalRouter = require("./routes/animals_routes")

const port = process.env.port || 3000

const app = express()

app.use(cors())
app.use(bodyParser.json())

const dbConn = "mongodb://localhost/animal_shelter_app"

mongoose.connect(
    dbConn,
    {
        useNewUrlParser : true,
        useUnifiedTopology : true,
        useFindAndModify : false
    }, 
    err => {
        if (err){
            console.log("error connecting database", err)
        } else{
            console.log("Connected to database!")
        }
    }
)

app.use("/animals", animalRouter)

app.listen(port, ()=> console.log("Animal shelter server is running on port "+port))