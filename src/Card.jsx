import React from 'react'

export default function Card({ terrorist }) {
      const {
    name,
    organization,
    attacksCount,
    status,
    relationToIsraelSummary,
    imageUrl,
  } = terrorist;
  return (
        <div className={` p-50 w-400 h-600 flex flex-col justify-around items-center gap-20 rounded-4xl shadow-2xl/60`}>
            <img src={imageUrl} alt="profileAvatar" className={`w-140 h-140 border-10  rounded-full shadow-2xl`}/>
            <p className='font-bold text-9xl'>name: {name}</p>
            <p className='text-gray-500 text-7xl text-center'>organization: {organization}</p>
            <p className='text-gray-500 text-7xl text-center'>attacksCount: {attacksCount}</p>
            <p className='text-gray-500 text-7xl text-center'>status: {status}</p>
            <p className='text-gray-500 text-7xl text-center'>relationToIsraelSummary: {relationToIsraelSummary}</p>
        </div>
  );
  
}
