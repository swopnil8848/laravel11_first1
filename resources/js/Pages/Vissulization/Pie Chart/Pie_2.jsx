import React, { useState } from 'react';
import { arc, pie } from 'd3';

const Pie_2 = () => {
  const data = [ 13, 21,16];

  let sum = 0;
  data.forEach((num) => (sum += num));

  const PIE = pie();

  const arcs = PIE(data);

  const arcGenerator = arc().padAngle(0.03).cornerRadius(12);

  let colors=["#FF5631",'#377DFF',"#D9D9D9"]

  return (
    <div>
      <div className="relative h-[297px] mx-4 rounded-xl mt-4 inset-0 bg-gray-700 bg-opacity-35 backdrop-filter backdrop-blur-xl">
        <div className='text-xs text-white flex justify-around mx-6 pt-2'>
            <div className='flex '>
                <div className='bg-[#FF5631] rounded-full h-3 w-3 my-auto mx-1'></div>
                <div className='my-auto'>On-site</div>
            </div>
            <div className='flex'>
                <div className='bg-[#377DFF] rounded-full h-3 w-3 my-auto mx-1'></div>
                <div className='my-auto'>Remote</div>
            </div>
            <div className='flex'>
                <div className='bg-[#D9D9D9] rounded-full h-3 w-3 my-auto mx-1'></div>
                <div className='my-auto'>Hybrd</div>
            </div>
        </div>
        <svg width={280} height={270} className=' my-auto mx-auto'>
          <g transform={`translate(140, 145)`}>
            {/* Add the central text "50%" */}
            <text
              x={0}
              y={0}
              textAnchor="middle"
              dy="-1em"
              fontSize="20px"
              fontWeight="bold"
              fill="white"
            >
                working
            </text>
            <text
              x={0}
              y={0}
              textAnchor="middle"
              dy="0.2em"
              fontSize="20px"
              fontWeight="bold"
              fill="white"
            >
                format
            </text>
            <text
              x={0}
              y={0}
              textAnchor="middle"
              dy="1.4em"
              fontSize="20px"
              fontWeight="bold"
              fill="#FF5631"
            >
                3000
            </text>
            {arcs.map((arcData, i) => {
              const pathData2 = arcGenerator({
                startAngle: arcData.startAngle,
                endAngle: arcData.endAngle,
                innerRadius: 78,
                outerRadius: 110,
              });


              return (
                <g key={i}>
                  {/* Path element with mouse event handlers */}
                  <path
                    d={pathData2}
                    fill={colors[i]}
                  />
                </g>
              );
            })}
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Pie_2;
