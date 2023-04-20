const express = require('express')
const reader = require('any-text');
const cors = require('cors')
const bodyParser= require('body-parser')
const multer = require('multer');

const app = express()
const port = 3000

var Storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
var upload = multer({ storage: Storage })

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Servidor de Prueba')
})

app.post('/upload', upload.single('Archivo'), (req, res, next) => {
  const file = req.file
  console.log(file)
})




app.listen(port, () => {
  console.log(`Servidor ONLINE en el port: ${port}`)
})
