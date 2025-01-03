const mongoose = require("mongoose")
require("dotenv").config();

const monogoUri = process.env.MONGODB

const initializieDatabase = async () => {
await mongoose
.connect(monogoUri)
.then(() => {
    console.log("Connected to Database")
})
.catch((error) => console.log("Error connecting to Database", error))
};
module.exports = {initializieDatabase};
