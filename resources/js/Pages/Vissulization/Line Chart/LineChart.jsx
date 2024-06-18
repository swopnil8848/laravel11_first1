import React, { useEffect, useRef, useState } from 'react';
import Viz from './Viz';
import { VegaLite } from 'react-vega';
import { Handler } from 'vega-tooltip';
import { config } from './config';

const LineChart = () => {
  const [vegaLiteSpec, setVegaLiteSpec] = useState(null);
  const [width, setWidth] = useState(null);

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const data = [];

  const divref = useRef(null);

  // Generate random income and expense values for each month
  months.forEach((month, index) => {
    const income = Math.floor(Math.random() * 10000); // Random income value between 0 and 10000
    const expense = Math.floor(Math.random() * 5000); // Random expense value between 0 and 5000
    data.push({ month: new Date(2023, index, 1), value: income, category: 'Income' });
    data.push({ month: new Date(2023, index, 1), value: expense, category: 'Expense' });
  });

  console.log(data);

  const run = async () => {
    const spec = Viz
      .data(data)
      .width(width-40)
      .height(350)
      .autosize({ type: 'fit', contains: 'padding' })
      .config(config)
      .mark({ type: 'line', interpolate: 'monotone' })
      .encode({
        x: {
          field: 'month',
          type: 'temporal',
          title: 'Month',
          axis: {
            labelColor: 'white',       // Change label color to white
            labelFontSize: 12,         // Increase label font size
            labelFontWeight: 'bold',  // Make label font bold
            labelPadding: 20, 

          }
        },
        y: {
          field: 'value',
          type: 'quantitative',
          title: 'Value',
          axis: {
            labelColor: 'white',       // Change label color to white
            labelFontSize: 12,         // Increase label font size
            labelFontWeight: 'bold',   // Make label font bold
            labelPadding: 20, 
          }
        },
        color: { field: 'category', type: 'nominal', title: 'Category' },
      })
      .toSpec();
  
    setVegaLiteSpec(spec);
  };
  

  useEffect(() => {
    setWidth(divref?.current?.clientWidth);
  }, [width]);

  useEffect(() => {
    // if (width) {
      run();
    // }
  }, [width]);

  return (
    <div ref={divref} className="z-1 relative h-[350px] m-1 md:mx-4 rounded-xl mt-4 inset-0 bg-gray-700 bg-opacity-35 backdrop-filter backdrop-blur-xl ">
      {vegaLiteSpec ? (
        <VegaLite spec={vegaLiteSpec} tooltip={new Handler().call} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default LineChart;
