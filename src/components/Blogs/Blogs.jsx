// import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3">
            <h2>Blogs {blogs.length}</h2>
            {
                blogs.map(blog => <Blogs key={blog.id} blog={blog}></Blogs>)
            }
        </div>
    );
};

export default Blogs;