import { markBar, x, y, color, tooltip } from 'vega-lite-api';

const Viz = markBar({ size: 40, cornerRadius: 20 })
  .encode(
    x().fieldO('month'),
    y().fieldQ('income'),
    color()
      .value('#FF6C4B')
      .condition({ param: 'hover', value: '#D9534F' }),
    tooltip(['income', 'expense'])
  )
  .params([
    {
      name: 'hover',
      select: { type: 'point', on: 'mouseover', clear: 'mouseout' },
    },
  ])
  .config({
    axis: {
      labelColor: 'white', // Color of all axis labels
      titleColor: 'white', // Color of axis titles
      domainColor: 'white', // Color of axis lines
      tickColor: 'white', // Color of axis ticks
    },
    axisX: {
      labelColor: 'white', // Color of x-axis labels
    },
    axisY: {
      labelColor: 'white', // Color of y-axis labels
    },
  });

export default Viz;
