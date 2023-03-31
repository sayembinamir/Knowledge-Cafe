import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Bookmarked from '../Bookmarked/Bookmarked';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    const [blogs, setBlogs] = useState([]);
    const [bookmarked, setBookmarked] = useState([]);
    const [readTime, setReadTime] = useState(0);

    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    }, []);

    const handleAddToBookmarked = (blog) =>{
        let newBookmarked = [];
        const existsBookmark = bookmarked.find((book) => book.id === blog.id);
        if(existsBookmark){
            toast("already added!");
        }
        else{
            newBookmarked = [...bookmarked, blog];
            setBookmarked(newBookmarked);
        }
    }
    
    const addReadTime = (time) =>{
        setReadTime(readTime + time)
    }

    return (
        <div className='container mx-4 md:mx-20'>
            <hr className='w-full h-1 mb-8'></hr>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6'>
                <div className=''>
                    {
                        blogs.map((blog, index) => <Blog
                            key={index}
                            blog={blog}
                            handleAddToBookmarked={handleAddToBookmarked}
                            addReadTime={addReadTime}
                        ></Blog>)
                    }
                </div>
                <div className=''>
                    <Bookmarked 
                    bookmarked={bookmarked}
                    readTime={readTime}
                    ></Bookmarked>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Main;