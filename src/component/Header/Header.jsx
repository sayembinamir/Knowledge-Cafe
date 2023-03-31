import React from 'react';

const Header = () =>
{
    return (
        <div className='navbar bg-base-100'>
            <div className='flex-1'>
                <a className='font-bold text-3xl'>Knowledge Cafe</a>

            </div>
            <div className='flex-none'>
                <button className='btn btn-ghost btn-circle avatar'>
                    <div className='w-16 rounded-full'>
                        <img src="./user-1.png" />
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Header;