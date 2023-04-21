const express = require('express')
const cors = require('cors')
var reader = require('any-text');
const bodyParser= require('body-parser')
const multer = require('multer');
const path = require('path')

const app = express()
const port = 3000

// SET STORAGE
var storage = multer.diskStorage({
  destination: path.join(__dirname, '../uploads'),
  filename: function (req, file, cb) {
    cb(null, file.originalname)
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

  reader.getText(`../uploads/${file.originalname}`)
  .then(function (data) {
    res.send(JSON.stringify(data)); // handle success
  } )
  .catch(function (error) {
    console.log(error); // handle error
  });


})




app.listen(port, () => {
  console.log(`Servidor ONLINE en el port: ${port}`)
})
