import Image from 'next/image';
import Banner from '../utils/banner.png';


const Slider = () => {
  return (
    <div className='flex justify-center items-center m-0 p-0'>
      <Image
        height={1000}
        width={2000}
        src={Banner}
        alt='banner'
      />
    </div>
  );
};

export default Slider;
