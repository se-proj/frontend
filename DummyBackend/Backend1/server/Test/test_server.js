import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './../routes/posts.js'

const app = express()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

app.use('/posts', postRoutes)

const dbURI = 'mongodb+srv://iitsemproject:iitsemproject889@cluster0.mpfjb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5100

// ES6 Promises (for enabling Mocha Testing)
mongoose.Promise = global.Promise

const connectDB = async () => {
	try {
		await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
		console.log('MongoDB connected...')
	} catch (err) {
		console.log('Error Detected')
		console.log(`${err} did not connect`)
	}
}
connectDB()

app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`))
mongoose.set('useFindAndModify', false)
