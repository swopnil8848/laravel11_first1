import { select, scaleLinear, axisRight, axisBottom, scaleBand } from "d3";
import React, { useRef, useEffect, useState } from "react";

const useResizeObserver = (ref) => {
  const [dimensions, setDimensions] = useState(null);
  useEffect(() => {
    const observerTarget = ref.current;
    const resizeObserver = new ResizeObserver((entries) => {
      setDimensions(entries[0].contentRect);
    });

    resizeObserver.observe(observerTarget);

    return () => {
      resizeObserver.unobserve(observerTarget);
    };
  }, [ref]);
  return dimensions;
};

const BarChart = ({ prop }) => {
  const [data, setData] = useState([35, 30, 45, 60, 20, 65, 75, 90, 40, 110, 70, 32, 50]);
  const svgRef = useRef();
  const wrapper = useRef();
  const dimensions = useResizeObserver(wrapper);

  useEffect(() => {
    const svg = select(svgRef.current);

    if (!dimensions) return;

    const height = 300; // Set the desired height of the bar chart

    const xScale = scaleBand()
      .domain(data.map((value, index) => index))
      .range([0, dimensions.width - 20])
      .padding(0.5);

    const yScale = scaleLinear()
      .domain([100,20])
      .range([0, dimensions?.height-150]);

    const xAxis = axisBottom(xScale)
      .tickSize(0)
      .tickPadding(10);

    svg
      .select(".x-axis")
      .style("transform", `translateY(${height}px)`)
      .call(xAxis)
      .selectAll("text")
      .attr("fill", "white");

    const yAxis = axisRight(yScale)
      .tickSize(0)
      .tickPadding(10);

    svg
      .select(".y-axis")
      // .style("transform", `translate(${dimensions.width}px)`)
      .style("transform", `translateX(0)`)
      .call(yAxis)
      .selectAll("text")
      .attr("fill", "white");

    svg
      .select(".x-axis .domain").remove();
    svg
      .select(".y-axis .domain").remove();

    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")
      .attr("fill", '#FF6C4B4D')
      .style("transform", "scale(1,-1)")
      .attr("x", (value, index) => xScale(index))
      .attr("y", -height)
      .attr("width", xScale.bandwidth())
      .attr("rx", 20) // Rounded corners
      .attr("ry", 20) // Rounded corners
      .on("mouseenter", (event, value, index) => {
        // Change the color of the hovered bar to red
        select(event.target).attr("fill", "#FF6C4B");

        const ind = svg.selectAll(".bar").nodes().indexOf(event.target);
        svg
          .selectAll(".tooltip")
          .data([value])
          .join("text")
          .attr("class", "tooltip")
          .text(value)
          .attr("x", xScale(ind) + xScale.bandwidth() / 2)
          .attr("y", height - yScale(value) - 5)
          .attr("text-anchor", "middle")
          .attr("fill", "red")
          .transition()
          .attr("opacity", 1);
      })
      .on("mouseleave", (event) => {
        // Reset the color of the bar when the mouse leaves
        select(event.target).attr("fill", '#FF6C4B4D');
        svg.select(".tooltip").remove();
      })
      .transition()
      .attr("height", (value) => yScale(value));
  }, [data, dimensions]);

  return (
    <div className="flex align-middle flex-col justify-center w-full h-auto">
      <div ref={wrapper} className="relative h-[416px] mx-4 rounded-xl mt-4 inset-0 bg-gray-700 bg-opacity-35 backdrop-filter backdrop-blur-xl">
        <svg ref={svgRef} style={{ background: 'transparent', width: dimensions?.width + 20, height: dimensions?.height - 10 }}>
          <g className="x-axis" />
          <g className="y-axis" />
        </svg>
      </div>
    </div>
  );
};

export default BarChart;
