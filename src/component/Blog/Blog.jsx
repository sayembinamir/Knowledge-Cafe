import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {
    const {imgCover, personName, personProfile, title, date, readTime} = props.blog;
    const handleAddToBookmarked = props.handleAddToBookmarked;
    const addReadTime = props.addReadTime;
    
    return (
        <div>
            <img className='w-full mb-8 rounded-lg' src={imgCover} alt="" />
            <div className='flex flex-col justify-between md:flex-row'>
                <div className='flex gap-6'>
                    <img className='rounded-full w-14 h-14' src={personProfile} alt="" />
                    <div className=''>
                        <h3 className='text-2xl font-bold text-regalBlack'>{personName}</h3>
                        <p className='mb-4 text-base font-semibold text-gray-500'>{date}</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <p className='text-xl font-medium text-gray-500'>{readTime} min read</p>
                    <div onClick={() => handleAddToBookmarked(props.blog)}><FontAwesomeIcon className='w-6 h-6' icon={faBookmark} /></div>
                </div>
            </div>
            <h1 className='mb-5 text-xl font-semibold md:text-4xl text-regalBlack md:font-bold'>{title}</h1>
            <div className='mb-12'>
                <p
                    onClick={() => addReadTime(readTime)}
                    className='text-xl font-semibold text-[#6047EC] underline'>Mark as read</p>
            </div>
        </div>
    );
};

export default Blog;