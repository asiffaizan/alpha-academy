import React from 'react';
import CourseCard from './CourseCard';
import { subjects } from '@/data/Data';

const Courses = () => {
    return (
        <div className='pt-52 pb-20'>
            <h1 className='text-center text-6xl font-bold pb-20'>Explore Our <span className='text-[#FBA628]'>Courses</span></h1>
            <div className='grid grid-cols-3 gap-6 w-[80%] m-auto'>
                {subjects && subjects.map((subject:any) => (
                    <CourseCard key={subject.id} subject={subject} />
                ))}
            </div>
        </div>
    );
};

export default Courses;
