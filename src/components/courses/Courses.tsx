import React from 'react';
import CourseCard from './CourseCard';
import { subjects } from '@/data/Data';

const Courses = () => {
    return (
        <div id='courses' className='pt-20 pb-20'>
            <h1 className='text-center text-3xl md:text-6xl font-bold pb-10 md:pb-20'>Explore Our <span className='text-[#FBA628]'>Courses</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 w-[80%] m-auto'>
                {subjects && subjects.map((subject:any) => (
                    <CourseCard key={subject.id} subject={subject} />
                ))}
            </div>
        </div>
    );
};

export default Courses;
