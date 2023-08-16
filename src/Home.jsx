import { useState, useEffect } from "react";
// import BlogList from "./BlogList"

const Home = () => {
    const [blogs]=useState([
        {title:"My new website", body:"lorem ipsum...",author:"Mario",id:1},
        {title:"Welcome party", body:"lorem ipsum...",author:"Luigi",id:2}
    ]);
    
    // const handleDelete =(id) =>{
    //     const newBlog= blogs.filter(blog => blog.id!==id);
    //     setBlogs(newBlog);
    // }

    useEffect(()=>{
        console.log("Use random effect")
        console.log(blogs)
    });

    return (
        <div className="home">
            {/* <BlogList blog={blogs} title="All Blogs" handleDelete={handleDelete}/> */}
            <div className="blog-list">
            {/* <h2>{title}</h2> */}
            {blogs.map((blog) =>(
              <div className="blog-preview" key={blog.id}>
                  <h2>{blog.title}</h2>
                  <p>{blog.body}</p>
                  <p>Written by {blog.author}</p>
                  {/* <button onClick={()=> handleDelete(blog.id)}>Delete Blog</button> */}
              </div>
            ))}
        </div>
            
        </div>
    );
}
 
export default Home;