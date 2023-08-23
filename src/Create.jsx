import { useState } from "react";
import {useHistory} from "react-router-dom";

const Create = () => {
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');
    const [author,setAuthor]=useState('mario');
    const [isPending,setIsPending]=useState(false);
    const history=useHistory();
 

    const handleSubmit=(e)=>{
       e.preventDefault();
       const blog={title,body,author};
       
       setIsPending(true);

       fetch('http://localhost:8000/blogs/',{
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(blog)
       })
       .then(()=>{
        console.log('New blog added');
        setIsPending(false);
        history.push('/')
       })

       setAuthor('');
       setBody('');
       setTitle('');
    }
    
    const handleChangeTitle = (event) => {
        setTitle(event.target.value);        
    } 
    const handleChangeBody = (event) => {
        setBody(event.target.value);        
    } 
    const handleChangeAuthor = (event) => {
        
        setAuthor(event.target.value);        
    }

    
   return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input type="text" required value={title} name="title"
                onChange={handleChangeTitle}></input>

                <label>Blog Body:</label>
                <textarea required value={body} name="body"
                onChange={handleChangeBody}></textarea>
                <label>Blog Author</label>
                <select value={author} name="author" onChange={handleChangeAuthor}>
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;
