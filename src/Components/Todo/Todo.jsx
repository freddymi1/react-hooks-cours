import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';

const Todo = ()=>{
    const [lists, setLists] = useState([
        {id:1, name: "NARISOA HARILALA Freddy Miche"},
        {id:2, name: "Jessica Ramaroson"},
        {id:3, name: "Sitraka Andriamalala"}
    ]);

    const [alert, setAlert] = useState(false)

    // Get all todo list
    const items = lists.map((list)=>{
        return(
            <li key={list.id} className='list-group-item'>{list.id} == {list.name}</li>
        )
    })

    // Add new todo list
    const addNewTodo = (newTodo) =>{
        if(newTodo !== ''){
            alert && setAlert(false)
            setLists([
                ...lists, {
                    id: lists.length + 1,
                    name: newTodo
                }
            ])
        }else{
            setAlert(true)
        }
        
    }

    //Show error message on field vide
    const errorMessage = alert && 
        <div className='alert-arror'>
            Veuiller remplire le champs todo name svp!
        </div>

    return(
        <div>
            {
                errorMessage
            }
            {
                lists && lists.length > 1 ?
                <h3>{lists.length} Todo lists</h3>:
                <h3>{lists.length} Todo list</h3>
            }
            <ul className='listItem'>
                {items && items}
            </ul>
            <AddTodoForm addNewTodo={addNewTodo}/>
        </div>
    )
}

export default  Todo;