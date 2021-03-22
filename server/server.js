import config from './../config/config'
import app from './express'
import mongoose from 'mongoose'

const uri = "mongodb+srv://<jamiealejandro>:<Damansara1>@cluster0.rhco3.mongodb.net/CWDB?retryWrites=true&w=majority";
// Connection URL
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, { useNewUrlParser: true, useCreateIndex: true,
useUnifiedTopology: true, dbName: "users" })
mongoose.connection.on('error', () => {
 throw new Error(`unable to connect to database: ${config.mongoUri}`)
})

app.listen(config.port, (err) => {
 if (err) {
 console.log(err)
 }
 console.info('Server started on port %s.', config.port)
})
