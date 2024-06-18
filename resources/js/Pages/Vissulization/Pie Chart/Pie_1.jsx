import React, { useState } from 'react';
import { arc, pie } from 'd3';

const Pie_1 = ({prop,color}) => {
  const data = [ 13, 21];

  const [width,setWidth] = useState(0)
  const [height,setHeight] = useState(0)

  // if(window.innerWidth<700){
  //   setWidth(100)
  // }else if(window.innerWidth>700){
  //   setWidth(60)
  // }else{
  //   setWidth(110)
  // }

  console.log("this is the prop...",prop)

  let sum = 0;
  data.forEach((num) => (sum += num));

  const PIE = pie();

  const arcs = PIE(data);

  const arcGenerator = arc().padAngle(0.01).cornerRadius(20);

  let colors=["#F5F5F5",color]

  

  return (
    <div className='z-1'>
      <div style={{ position: 'relative' }}>

        <svg width={80} height={80} className='ml-4 w-fit my-auto'>
          <g transform={`translate(40,40)`}>
            {/* Add the central text "50%" */}
            <text
              x={0}
              y={0}
              textAnchor="middle"
              dy=".35em"
              fontSize="12px"
              fontWeight="bold"
              fill="black"
            >
              +50%
            </text>
            {arcs.map((arcData, i) => {
              const pathData2 = arcGenerator({
                startAngle: arcData.startAngle,
                endAngle: arcData.endAngle,
                innerRadius: 30,
                outerRadius: 40,
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

export default Pie_1;
