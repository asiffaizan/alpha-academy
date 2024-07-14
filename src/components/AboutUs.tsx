import React from 'react';

const AboutUs = () => {
    return (
        <div id='about' className='md:flex md:flex-row justify-center items-center w-[80%] m-auto pt-20'>
            <h1 className='hidden lg:block text-7xl font-bold w-1/3'>Why <br /> choose <br /><span className='text-[#FBA628]'>Alpha <br /> Academy</span>?</h1>
            <h1 className='block lg:hidden text-3xl font-bold w-1/3'>Why choose <br /><span className='text-[#FBA628]'>Alpha Academy</span>?</h1>
            <div className='text-left'>
                <h1 className='underline font-extrabold text-2xl'><b>We Provide:</b></h1>
                <ul className='list-disc'>
                    <li>Experienced Mentors</li>
                    <li>Everyday Short Exams</li>
                    <li>Monthly Exam</li>
                    <li>Dought Solving Class</li>
                    <li>Academic & Admission Preparation</li>
                    <li>Passionate educators dedicated to helping students achieve their academic goals.</li>
                    <li>Personalized coaching that caters to your individual learning style and needs.</li>
                    <li>Supportive and encouraging environment that helps students stay motivated and on track.</li>
                    <li>Flexible scheduling options to fit your busy lifestyle.</li>
                    <li>Competitive rates and packages to fit your budget.</li>
                    <li>Our experienced coaches have a proven track record of success in helping students improve their grades and test scores.</li>
                    <li>We go beyond academics and help students develop essential study skills and time management techniques.</li>
                    <li>We believe in building strong relationships with our students and their families.</li>
                </ul>
            </div>
        </div>
    );
};

export default AboutUs;