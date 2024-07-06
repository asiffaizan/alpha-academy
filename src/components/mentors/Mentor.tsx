import React from 'react';
import { mentors } from "@/data/Data";
import Image from 'next/image';

const Mentor = () => {
    return (
        <div className='pt-52 pb-20'>
            <h1 className='text-center text-6xl font-bold pb-20'>Explore Our <span className='text-[#FBA628]'>Mentors</span></h1>

            <div className='grid grid-cols-3 gap-3 w-[80%] m-auto'>
                {mentors && 
                 mentors.map((mentor:any)=>(
                    <div key={mentor.id} className='rounded-2xl text-center bg-black text-white p-2'>
                        <h1 className='text-3xl p-2 pb-6'>{mentor.name}</h1>
                        <div className='flex flex-row justify-center text-center mb-1'>
                            <Image width={30} height={30} src={mentor.image} alt={mentor.name} />
                        </div>
                        <h4 className='text-[#FBA628]'><b>{mentor.institute}</b></h4>
                        <h5 className='text-[#FBA628]'><small>{mentor.department}</small></h5>
                        <br />
                        <h6>Experience: <b>{mentor.experience}</b></h6>
                    </div>
                ))}
            </div>
                        
        </div>
    );
};

export default Mentor;


//<div className='card text-center'>
  //              <h1>Dr.Nadim</h1>
    //            <h4><b>Sir Salimullah medical collage(SSMC)</b></h4>
                {/* <p>Dr. Nadim is a highly experienced and qualified mentor in the field of medicine. He has been working in the field for over 10 years and has a strong foundation in the subject.</p> */}
      //          <h6>Experience: <b>6 years</b></h6>
        //    </div>