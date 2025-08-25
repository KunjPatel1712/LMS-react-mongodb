const express = require("express");
const database = require("./db/db");
const cors = require("cors")
const app = express()
const LMSroutes = require("./routes/lmsroute");
app.use(express.json())

app.use(cors())


require("dotenv").config()

app.use("/api/lms", LMSroutes);

app.listen( process.env.PORT , async()=>{
    try {
        await database();
        console.log("Server is running >>>>>>>>>>>>>>>>>>>")
    } catch (error) {
        console.log("Server Error ")
    }
})
