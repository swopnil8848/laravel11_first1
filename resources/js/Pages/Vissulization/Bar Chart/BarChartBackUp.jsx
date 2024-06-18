import React, { useEffect, useRef, useState } from 'react';
import Viz from './Viz';
import { config } from '../Line Chart/config';
import { VegaLite } from 'react-vega';
import { Handler } from 'vega-tooltip';

const BarChart = () => {
  const divref = useRef(null);
  const [width, setWidth] = useState(null);

  const data = [
    { month: 'jan', income: 5000, expense: 3000 },
    { month: 'Feb', income: 5200, expense: 3100 },
    { month: 'Mar', income: 5300, expense: 3200 },
    { month: 'Apr', income: 5400, expense: 3300 },
    { month: 'May', income: 5500, expense: 3400 },
    { month: 'Jun', income: 5600, expense: 3500 },
    { month: 'Jul', income: 5700, expense: 3600 },
    { month: 'Aug', income: 5800, expense: 3700 },
    { month: 'Sep', income: 5900, expense: 3800 },
    { month: 'Oct', income: 6000, expense: 3900 },
    { month: 'Nov', income: 6100, expense: 4000 },
    { month: 'Dec', income: 6200, expense: 4100 },
  ];

  const [vegaLitespec, setVegaLiteSpec] = useState(null);

  const run = async () => {
    const spec = Viz.data(data)
      .width(width)
      .height(370)
      .autosize({ type: 'fit', contains: 'padding' })
      .config(config)
      
      .toSpec();

    setVegaLiteSpec(spec);
  };

  useEffect(() => {
    setWidth(divref?.current?.clientWidth);
  }, [divref?.current?.clientWidth]);

  useEffect(() => {
    run();
  }, [width]);

  return (
    <div
      ref={divref}
      className="relative text-white h-[465px] mx-4 rounded-xl mt-4 inset-0 bg-gray-700 bg-opacity-35 backdrop-filter backdrop-blur-xl"
    >
      <div>
        <div className="flex justify-between">
          <div className="font-bold">Overview</div>
          <button className="text-[#FF5631] flex font-bold">
            <h5>See details</h5>
            <h5 className="my-auto">
              <img src="./arrow_orange_right.png" alt="" />
            </h5>
          </button>
        </div>
        <div className="flex justify-between mx-4 mt-4">
          <div>
            <div className="flex">
              <h4 className="font-extrabold mr-2 text-xl my-auto">$ 212,142.12</h4>
              <div className="bg-[#A9E89F] px-1 flex rounded-2xl">
                <img src="./greenInc.png" className="my-auto" alt="" />
                <p className="my-auto mx-1 text-black">23.2 %</p>
              </div>
            </div>
            <h5>Avg Year Profit</h5>
          </div>
          <div>
            <div className="flex">
              <h4 className="font-extrabold mr-2 text-xl my-auto">$ 212,142.12</h4>
              <div className="bg-[#F19B88] px-1 flex rounded-2xl">
                <img src="./orangeDec.png" className="my-auto" alt="" />
                <p className="my-auto mx-1 text-black">23.2 %</p>
              </div>
            </div>
            <h5>Avg Yearly Expenses</h5>
          </div>
          <input type="date" className="bg-transparent" name="" id="" />
        </div>
      </div>
      {vegaLitespec ? (
        <VegaLite spec={vegaLitespec} tooltip={new Handler().call} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BarChart;
