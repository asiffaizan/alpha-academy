import React from 'react';

const CourseCard = ({ subject}: { subject: any },) => {
    
    return (
        <div className='shadow-xl rounded-lg'>
            <div className='relative'>
                <div className='bg-green-200 text-left w-1/2 md:w-2/3 lg:w-1/2 mt-5 p-2'>
                    <h1 className='text-2xl lg:text-3xl font-bold'>
                        {subject.title}
                    </h1>
                    <h6 className='font-bold'><small>{subject.duration}</small></h6>
                </div>
                <div className='flex flex-row justify-center mt-8 pt-7 relative'>
                    <sup className='text-3xl font-bold absolute top-0 right-28'>{subject.special_price}tk</sup>
                    <h1 className='font-bold'>
                        <span className='line-through text-2xl text-red-400'>{subject.price}tk</span>
                        <sub>/{subject.price_duration}</sub>
                    </h1>
                </div>
            </div>
            <div className='p-3 text-center'>
                {subject.learn &&
                    <ul className='pt-3'>
                        {subject.learn.map((l:any) => {
                            return <li key={l}>{l}</li>;
                        })}
                    </ul>
                }
            </div>
            <div className='font-bold p-2 text-[#FBA628]'><b className='text-red-400'>Note:</b> First 10 student only</div>
        </div>
    );
};

export default CourseCard;