import { markLine, x, y } from 'vega-lite-api';

const Viz = markLine({ size: 10 })
  .encode(
    x().fieldT('month'),
    y().fieldQ('income'),
  );

export default Viz;
