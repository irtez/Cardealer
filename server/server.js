const express = require('express')
const PORT = process.env.PORT || 5000
const mongoose = require('mongoose')
const app = express()
const router = require('./routers/index')
const cors = require('cors')

app.use(cors())
app.options('*', cors())
// app.use((req, res, next) => {
//     // Set the desired delay time (in milliseconds)
//     const delayTime = 1000; // 2 seconds
  
//     // Simulate server delay
//     setTimeout(next, delayTime);
//   });
app.use(express.json())
app.use("/", router)



const start = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/CarsDealership")
        app.listen(PORT, () => {
            console.log(`server is listening port ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()