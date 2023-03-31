import React from 'react';
import BookmarkedDetails from '../BookmarkedDetails/BookmarkedDetails';

const Bookmarked = ({bookmarked, readTime}) => {
    let totalMin = 0;
    let bookmarkedDetails = [];
    for(const blog of bookmarked){
        console.log(blog.readTime);
        totalMin = totalMin + blog.readTime;
        bookmarkedDetails.push(blog);
    }

    return (
        <div className='sticky top-0 p-8 rounded-lg bg-regalBlack bg-opacity-5'>
            <div className='border border-[#6047EC] rounded-lg py-5 px-4 md:px-12'>
                <h1 className='text-2xl font-semibold md:font-bold'>Spent time on read : {readTime} min</h1>
            </div>
            <h1 className='text-xl font-semibold md:text-2xl text-regalBlack mt-11'>Bookmarked Blogs : {bookmarked.length}</h1>
            {
                bookmarked.map((blog, index) => <BookmarkedDetails
                    key={index}
                    title={blog.title}
                ></BookmarkedDetails>)
            }
        </div>
    );
};

export default Bookmarked;