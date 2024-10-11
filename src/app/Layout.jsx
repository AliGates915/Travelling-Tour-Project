import {Link} from 'react-router-dom';
import Menu from '../components/Menu/Menu';
import Navbar from '../components/Navbar/Navbar';

export default function Layout
// eslint-disable-next-line react/prop-types
({ children })
{
  return (
      <div className="bg-[#21201f] h-[120vh] flex">
        {/* Left */}
        <div className="w-[16%] md:w-[10%] lg:w-[18%] xl:w-[16%] p-4 ">
          <Link to='/' className='flex items-center justify-center lg:justify-start gap-2'>
              <img src={"/logo.png"} alt='logo' width={25} height={25}/>
              <span className='logo font-bold'>AfaqTechnologies</span>
          </Link>
          <div className='pt-2 pb-1 pl-8'>
            Product Name</div>
             <hr className="border-t border-gray-600 my-4" />
            <Menu />
          </div>
        {/* Right */}
        <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col">
          <Navbar />
          {children}
        </div>
      </div>
  );
}