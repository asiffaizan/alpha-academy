import React from 'react';

const AboutUs = () => {
    return (
        <div id='about' className='flex flex-row justify-center w-[80%] m-auto pt-20'>
            <h1 className='pb-2 text-3xl md:text-6xl font-bold w-1/3'>Why <br /> choose <br /><span className='text-[#FBA628]'>Alpha <br /> Academy</span>?</h1>
            <div className='text-left'>
                <h1><b>we are offering:</b></h1>
                <ul className='list-disc'>
                    <li>Experienced Mentors</li>
                    <li>Everyday Short Exams</li>
                    <li>Monthly Exam</li>
                    <li>Dought Solving Class</li>
                    <li>Academic & Admission Preparation</li>
                    <li>We are passionate educators dedicated to helping students achieve their academic goals.</li>
                    <li>We offer personalized coaching that caters to your individual learning style and needs.</li>
                    <li>Our experienced coaches have a proven track record of success in helping students improve their grades and test scores.</li>
                    <li>We provide a supportive and encouraging environment that helps students stay motivated and on track.</li>
                    <li>We offer flexible scheduling options to fit your busy lifestyle.</li>
                    <li>We go beyond academics and help students develop essential study skills and time management techniques.</li>
                    <li>We believe in building strong relationships with our students and their families.</li>
                    <li>We offer competitive rates and packages to fit your budget.</li>
                </ul>
            </div>
        </div>
    );
};

export default AboutUs;