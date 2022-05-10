import { useState } from "react"



export const Form = ({ id,name, age, index,getData }) => {

    const [editMode, setEditMode] = useState(false)
    const dummyFormData = {
        name: "",
        age: ""
    }
    const [formData, setFormData] = useState(dummyFormData)
    const hostname = `http://localhost:7000`
  const path = `/info`
    const handleChange = (e) => {
        const { name, value } = e.target
        console.log(e)
        setFormData({ ...formData, [name]: value })
    }
    
    const postData = async (id) => {
        try {
            const response = await fetch(`${hostname + path}/${id}`, {
                method: "PATCH",
                body: JSON.stringify(formData),
                headers: {
                    'content-type': "application/json"
                }
            })
            setFormData(dummyFormData)
            getData()
        } catch (error) {
            console.error({ message: error.message })
        }
    }
    return (
        <tr>
            <td>{index}</td>
            <td>
                <input name='name' title='Edit this element' className='input' type="text" value={!editMode ? name : formData.name} onChange={handleChange} onClick={() => {
                    setEditMode(true)
                    setFormData({
                        name: name,
                        age: age
                    })
                }
                } onBlur={() => setEditMode(false)} />
            </td>
            <td>
                <input name='age' title='Edit this element' className='input' type="number" value={!editMode ? age : formData.age} onChange={handleChange} onClick={() => {
                    setEditMode(true)
                    setFormData({
                        name: name,
                        age: age
                    })
                }
                } onBlur={() => setEditMode(false)} />
            </td>
            <td>
                <button onClick={() => postData(id)}>Save</button>
            </td>
        </tr>
    )
}