import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import { Form } from './Components/Form'

function App() {
  const [data, setData] = useState([])
  
  
  const hostname = `http://localhost:7000`
  const path = `/info`
  useEffect(()=>{
    getData()
  },[])
  const getData = async ()=>{
    try {
      const response = await fetch(`${hostname}${path}`)
      const data = await response.json()
      setData(data)
    } catch (error) {
      console.error({message : error.message})
    }
  }
  
  
  
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>S.N.</th>
            <th>Name</th>
            <th>Age</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          { data.map((row, index) => <Form key={row.id} name={row.name} age={row.age} id={row.id} index={index} getData={getData}/>)  }
        </tbody>
      </table>
    </div>
  )
}

export default App
