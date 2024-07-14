import React from 'react';
import { mentors } from "@/data/Data";
import Image from 'next/image';

const Mentor = () => {
    return (
        <div id='mentors' className='pt-10 md:pt-20 md:pb-20'>
            <h1 className='text-center text-3xl md:text-6xl font-bold pb-10 md:pb-20'>Explore Our <span className='text-[#FBA628]'>Mentors</span></h1>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 w-[80%] m-auto'>
                {mentors && 
                 mentors.map((mentor:any)=>(
                    <div key={mentor.id} className='rounded-2xl text-center bg-black text-white p-2 pb-5'>
                        <h1 className='text-3xl p-2 pb-6'>{mentor.name}</h1>
                        <div className='flex flex-row justify-center text-center mb-1'>
                            <Image width={40} height={40} src={mentor.image} alt={mentor.name} />
                        </div>
                        <div className='pt-1'>
                            <h4 className='text-[#FBA628]'><b>{mentor.institute}</b></h4>
                            <h5 className='leading-3'><small>Department: <span className='text-[#FBA628]'>{mentor.department}</span></small></h5>
                        </div>
                        <br />
                        <h6>Experience: <b>{mentor.experience}</b></h6>                      
                        {mentor.specialty &&
                            <div>
                                <h4 className='text-red-400'><b>{mentor.specialty}</b></h4>
                            </div>
                        }
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