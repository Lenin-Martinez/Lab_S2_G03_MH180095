import React, {useState} from 'react';
import Todo from '../components/Todo';

const Form = () => {
    const [todo, setTodo]=useState({})
    const [todos, setTodos]=useState([])

    const [cantidad, setCantidad]=useState({})
    const [cantidades, setCantidades]=useState([])

const handleChange = e => setTodo({[e.target.name]: e.target.value})
const handleChangeC = e => setCantidad({[e.target.name]: e.target.value})

const handleClick = e => {
    if((Object.keys(todo).length === 0 || todo.todo.trim() === '')){
        alert('El campo no puede estar vacio')
        return
    }
    
    setTodos([...todos, todo])
    setCantidades([...cantidades, cantidad])
}

const deleteTodo = indice => {
    const newTodos = [...todos]
    newTodos.splice(indice,1)
    setTodos(newTodos)
    
    const newCantidades = [...cantidades]
    newCantidades.splice(indice,1)
    setCantidades(newCantidades)
}

    return (
        <>
        <form onSubmit = { e=> e.preventDefault()}>
            <label>Agregar producto</label><br />
            <input type='Text' name='todo' onChange={handleChange} />
            <input type='Text' name='cantidad' onChange={handleChangeC} />
            <button onClick={handleClick}>agregar</button>
        </form>
        
        {
            todos.map((value, index) => (
                <Todo todo={value.todo} key={index} index={index} deleteTodo={deleteTodo}/>
            ))
        }
        
        {
            cantidades.map((value, index) => (
                <Todo todo={value.cantidad + ' unidades'} key={index} index={index} deleteTodo={deleteTodo}/>
            ))
        }
        </>
    )
}
export default Form
