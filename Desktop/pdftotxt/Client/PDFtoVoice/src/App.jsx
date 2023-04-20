import { useState } from 'react'
import axios from 'axios';


function App() {

const [archivoPDF, setArchivoPDF] = useState('')



const handleSubmit = (e) => {
  e.preventDefault()

const formdata = new FormData()
formdata.append('Archivo', archivoPDF)

axios.post("http://localhost:3000/upload", formdata, { headers: {'Content-Type': 'multipart/form-data',}
        }).then(res => {
            console.log(res)
        })

}

const handleChange = (e) => {
  setArchivoPDF({file: e.target.files[0]})
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit} t>
      <input type="file" name="file" onChange={handleChange} />
      <input type="submit" value="Subir" />
      </form>
      </div>



  )
}

export default App
