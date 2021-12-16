import React, { useState } from 'react'


const AddTodoForm = ({addNewTodo}) => {
    const [todoName, setTodoName] = useState("")

    const handleTodo = (e)=>{
        e.preventDefault()
        addNewTodo(todoName)
        setTodoName('')
    }
    return(
        <div className='formG'>
            <form action="" onSubmit={(e)=>handleTodo(e)}>
                <div className="form-graoup">
                    <input type="text" value={todoName} onChange={(e)=>setTodoName(e.target.value)} placeholder='Todo name' className='input-form' />
                </div>
                <input type='submit' className='btn' value="Add todo"/>
            </form>
        </div>
    )
}
export default AddTodoForm;