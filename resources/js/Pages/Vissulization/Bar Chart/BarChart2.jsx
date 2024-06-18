import { select, scaleLinear, axisRight, axisBottom, scaleBand } from "d3";
import React, { useRef, useEffect, useState } from "react";



const BarChart2 = ({props}) => {

    const data = [
        { entryTime: 1686928475123, useTime: 45 },
        { entryTime: 1686943324198, useTime: 73 },
        { entryTime: 1686948542711, useTime: 58 },
        { entryTime: 1686937695862, useTime: 120 },
        { entryTime: 1686926871345, useTime: 32 },
        { entryTime: 1686941789234, useTime: 67 },
        { entryTime: 1686929914314, useTime: 89 },
        { entryTime: 1686952867890, useTime: 42 },
        { entryTime: 1686930328727, useTime: 101 },
        { entryTime: 1686938040808, useTime: 76 },
        { entryTime: 1686921330030, useTime: 54 },
        { entryTime: 1686946552315, useTime: 112 },
        { entryTime: 1686951829050, useTime: 61 },
        { entryTime: 1686924874400, useTime: 39 },
        { entryTime: 1686950345525, useTime: 91 },
        { entryTime: 1686930735412, useTime: 87 },
        { entryTime: 1686946792599, useTime: 48 },
        { entryTime: 1686926355344, useTime: 102 },
        { entryTime: 1686952129222, useTime: 33 },
        { entryTime: 1686933017210, useTime: 115 },
        { entryTime: 1686936744343, useTime: 70 },
        { entryTime: 1686950840727, useTime: 57 },
        { entryTime: 1686922505005, useTime: 88 },
        { entryTime: 1686951284480, useTime: 60 }
      ]
      
      
    const [width,setWidth] = useState(0)
    const [height,setHeight] = useState(0)

    const svgRef = useRef(null);


    useEffect(()=>{
        setWidth(props?.current?.offsetWidth - 20)
        setHeight((props?.current?.offsetHeight)/2)
    },[])

  const xScale = scaleBand()
    .domain(data.map((value, index) => index))
    .range([10, width])
    .padding(0.5);

  const yScale = scaleLinear()
    .domain([120, 0])
    .range([0, 120]);



    useEffect(()=>{
        const svg = select(svgRef.current);
        

        // const xAxis = axisBottom(xScale);
        
        // svg
        //   .select(".x-axis")
        //   .style("transform", `translateY(${height})`)
        //   .call(xAxis);

        svg
          .selectAll(".bar")
          .data(data)
          .join("rect")
          .attr("class", "bar")
          .attr("fill", '#1657FF')
          .style("transform", "scale(1,-1)")
          .attr("x", (value, index) => xScale(index))
          .attr("y", - height)
          .attr("width", xScale.bandwidth())
          .attr("rx", 4) // Rounded corners
          .attr("ry", 4) // Rounded corners
          .transition()
          .attr("height", (value) => yScale(value.useTime));
    },[width])
    
  return (
    <div className="flex items-center justify-center my-atuo h-fit">
        <svg ref={svgRef} style={{ background: 'transparent'}}> {/* Set SVG background to transparent */}
          <g className="x-axis" />
          <g className="y-axis" />
        </svg>
    </div>
  )
}

export default BarChart2