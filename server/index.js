const express = require('express')
const app = express()

const cors = require('cors')
const fileUpload = require('express-fileupload')
const path = require('path')

const router = require('./router')

const port = 5000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(fileUpload())

app.use('/', express.static(path.join(__dirname, '../dist')))
app.use('/uploads', express.static(path.join(__dirname, '../uploads')))

app.use('/api', router)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`)
})
