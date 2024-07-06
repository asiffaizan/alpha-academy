import { mentors } from "@/data/Data";

const Mentors = () => {
    return (
        <div className="grid grid-cols-3 gap-6">
        {mentors&&
        mentors.map((mentor:any)=>(
            <div className='bg-red-600 p-3 text-white' key={mentor.id}>
            <div className=''>
                <div className='flex flex-row justify-between items-center'>
                    <div>
                        <h1 className='text-center text-3xl font-bold'>{mentor.name}</h1>
                    </div>
                    <div>
                     <h6>{mentor.institute}</h6>
                    </div>
                </div>
                <hr />
                <div>
                    {mentor.specialty &&
                        <ul className='pt-3'>
                            {mentor.specialty.map((sp:any) => {
                                return <li key={sp}>{sp}</li>;
                            })}
                        </ul>
                    }
                </div>
            </div>
        </div>
        ))}
        </div>
    );
};

export default Mentors;