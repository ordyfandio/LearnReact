import BlogList from "./BlogList"
import useFetch from "./useFetch";


const Home = () => {
    
  const {data:blog,isPending,error}=useFetch('http://localhost:8000/blogs/')

    return (
        <div className="home">
            {error && <div style={{color:'red',fontSize:18,marginTop:18}}>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blog && <BlogList blog={blog} title="All Blogs" />}
        </div>
    );
}
 
export default Home;