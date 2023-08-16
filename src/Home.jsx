import { useState } from "react";
import BlogList from "./BlogList"

const Home = () => {
    const [blogs,setBlogs]=useState([
        {title:"My new website", body:"lorem ipsum...",author:"Mario",id:1},
        {title:"Welcome party", body:"lorem ipsum...",author:"Luigi",id:2}
    ]);
    
    const handleDelete =(id) =>{
        const newBlog= blogs.filter(blog => blog.id!==id);
        setBlogs(newBlog);
    }

   

    return (
        <div className="home">
            <BlogList blog={blogs} title="All Blogs" handleDelete={handleDelete}/>
            
        </div>
         
        
    );
}
 
export default Home;