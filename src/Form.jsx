import { useState } from "react";

const Form = () => {
     
    //  let name= "mario";  
    const [name,setName] =useState("mario");

     const handleClick= () =>{
         setName("Luigi");
     } 
     
    const [newItem,setNewItem]=useState(""); 
    
    const [Todos,setTodos]=useState([])

    function handleSubmit(e){
       e.preventDefault()
       setTodos((currentTodos) =>{
        return [
          ...currentTodos,{id: crypto.randomUUID(), title:newItem,completed:false}]
       }) 
       setNewItem("") 
    }

    function toggleTodo(id,completed){
       setTodos(currentTodos => {
        return currentTodos.map(todo =>{
          if(todo.id ===id){
            return {...todo, completed}
          }
          return todo
        })
       })  
    }

    function DeleteTodo(id){
      setTodos(currentTodos => {
        return currentTodos.filter(todo => todo.id!== id)
      })
    }

    return ( 
      <>
        <p>{name}</p>
         <form className="new-item-form" onSubmit={handleSubmit}>
           <div className="form-row">
            <label htmlFor="item">New Item</label>
            <input type="text" id="item" value={newItem} onChange={e => setNewItem(e.target.value)}/>
           </div>
           <button className="btn" onClick={handleClick}>Add</button>
       </form>
       <h1 className="header">Todo List</h1>
       <ul className="list">
        {Todos.map(todo =>{
          return (
          // eslint-disable-next-line react/jsx-key
          <li key={todo.id}>
            <label htmlFor="">
              <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)}/> {todo.title}
            </label>
            <button className="btn btn-danger" onClick={() => DeleteTodo(todo.id)}>Delete</button>
          </li>
          )
        })}
       </ul>
      </>
     );
}
 
export default Form;