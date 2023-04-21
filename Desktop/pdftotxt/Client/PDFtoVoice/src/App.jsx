import { useState, useRef } from 'react'
import axios from 'axios';


function App() {

const visortexto = useRef()
const [archivoPDF, setArchivoPDF] = useState('')

const synth = window.speechSynthesis;

function convertiravoz(param) {
  const utterThis = new SpeechSynthesisUtterance(param);
  utterThis.pitch = 0.2;
  synth.speak(utterThis)
}

const handleSubmit = (e) => {
  e.preventDefault()

const formdata = new FormData()
formdata.append('Archivo', archivoPDF)

fetch('http://localhost:3000/upload', {
  method: 'POST',
  body: formdata,
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => visortexto.current.value = response);

}

const handleChange = (e) => {
  setArchivoPDF(e.target.files[0])
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
      <input type="file" name="file" onChange={handleChange} />
      <input type="submit" value="Subir" />
      </form>
      <textarea name='visordata' ref={visortexto}></textarea>
      </div>



  )
}

export default App
