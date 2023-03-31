import React from 'react';

const BookmarkedDetails = (props) => {
    console.log(props.title);
    return (
        <>
            <div className='p-2 mt-4 bg-white rounded-lg md:p-5'>
                <h1 className='text-lg font-semibold text-regalBlack'>{props.title}</h1>
            </div>
        </>
    );
};

export default BookmarkedDetails;