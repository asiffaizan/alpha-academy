import React from 'react';

const CourseCard = ({ subject}: { subject: any },) => {
    
    return (
        <div className='rounded-3xl text-center bg-black text-white p-5'>
            <div className='text-center'>
                <div className='text-[#FBA628]'>
                    <h1 className='text-2xl lg:text-3xl font-bold'>
                        {subject.title}
                    </h1>
                    <h6 className='font-bold'><small>{subject.duration}</small></h6>
                </div>
                <div className='flex flex-row justify-center mt-5 mb-8 pt-7 relative'>
                    <sup className='text-4xl font-bold absolute top-[-5px] right-28'>{subject.special_price}tk</sup>
                    <h1 className='font-bold'>
                        <span className='line-through text-2xl text-red-400'>{subject.price}tk</span>
                        <sub>/{subject.price_duration}</sub>
                    </h1>
                </div>
            </div>
            <hr className='w-[90%] m-auto bg-slate-400' />
            <div className='p-3 pl-24 text-left'>
                {subject.learn &&
                    <ul className='pt-3 list-disc'>
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