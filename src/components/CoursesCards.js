import React from 'react';
import Cards from './Cards';

function CoursesCards() {
    return (
        <div className='-mt-20 mb-28' >
            <div>
                <h1 className='dark:text-white font-bold text-3xl tracking-wider py-8 text-center'>Popular courses</h1>
            </div>
            <div className='ml-20 mr-20 grid grid-cols-1 md:grid md:grid-cols-4 lg:grid-cols-4 gap-4'>
                <Cards />
                <Cards />
                <Cards />
                <Cards />
            </div>
        </div>
    );
}

export default CoursesCards;
