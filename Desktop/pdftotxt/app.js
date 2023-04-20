const express = require('express')
const cors = require('cors')
const bodyParser= require('body-parser')
const multer = require('multer');

const app = express()
const port = 3000

// SET STORAGE
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
var upload = multer({ storage: storage })

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Servidor de Prueba')
})

app.post('/upload', upload.single('Archivo'), (req, res, next) => {
  const file = req.file
  console.log(file)
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
    res.send(file)
})




app.listen(port, () => {
  console.log(`Servidor ONLINE en el port: ${port}`)
})
