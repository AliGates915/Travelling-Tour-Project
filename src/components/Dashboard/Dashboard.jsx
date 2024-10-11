import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GiProgression } from "react-icons/gi";
import { IoIosPersonAdd } from "react-icons/io";
import { IoPieChart } from "react-icons/io5";

// eslint-disable-next-line no-unused-vars
import React from 'react';
import Cards from './Cards';
import Charts from './Charts/Charts';
import Table_Calen_Auditor from './Table_Calen_Auditor';

function Home() {
  return (
    <div className='pl-4 mt-4 text-black '>
      
      {/* Top 4 Cards */}
      <div className='flex justify-center gap-3'>
        <Cards type="Customer" num="150" color="bg-blue" Img={<HiOutlineShoppingBag size={45} color="#a9b0b0" />} />
        <Cards type="Certification" num="53" color="bg-green" Img={<GiProgression  size={45} color="#a9b0b0" />} />
        <Cards type="Auditor" num="44" color="bg-Yellow" Img={<IoIosPersonAdd size={45} color="#a9b0b0" /> } />
        <Cards type="In Progress" num="65" color="bg-red" Img={<IoPieChart size={45} color="#a9b0b0" />} />
      </div>
      <Charts />
      <Table_Calen_Auditor />
    </div>
  );
}

export default Home;
