const mongoose = require('mongoose')

const url = process.env.MONGO_DB

exports.connectToData = async () => {
    try {
        await mongoose.connect(url, () => {
            console.log(`db connected`)
        })
    } catch (error) {
        console.log(error)
    }
}