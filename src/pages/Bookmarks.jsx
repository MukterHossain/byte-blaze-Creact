import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../utility";
import BlogCard from "../component/BlogCard";
import EmptySate from "../component/EmptySate";


const Bookmarks = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() =>{
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs)
    },[])

    const handleDelete = id =>{
		deleteBlog(id)
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs)
	}
    if(blogs.length<1) return <EmptySate message='No Bookmarks Available' address={'/blogs'} label={'Go to Blog Page'}></EmptySate>
    return (
        <div className="grid px-4 sm:px-8 lg:px-12 py-8 justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{
                blogs.map(blog=> (<BlogCard handleDelete={handleDelete} deletable={true} key={blog.id} blog={blog}></BlogCard>))
            }
	
		</div>
    );
};

export default Bookmarks;