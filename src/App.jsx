import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
  useEffect(()=>{
    getData()
  },[])
  const getData = async ()=>{
    const hostname = `http://localhost:7000`
    const path = `/info`
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
          {
            data.map((row, index) => <tr>
              <td>{index}</td>
              <td>
                {/* {row.name} */}
                <input type="text" value={row.name} style={{ outline : "none", border: "none"}}/>
                </td>
              <td>
                <input type="text" value={row.age} />
                </td>
              <td>
                <button>Save</button>
              </td>
            </tr>)  
          }
        </tbody>
      </table>
    </div>
  )
}

export default App
