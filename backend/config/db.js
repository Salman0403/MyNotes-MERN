const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology:false,
            useNewUrlParser:true,
            // useCreateIndex:true,
        })
        console.log('Mongo_Connected', conn.connection.host);
    } catch (error) {
        console.log('error: ', error);
        process.exit()
    }
}

module.exports = connectDB